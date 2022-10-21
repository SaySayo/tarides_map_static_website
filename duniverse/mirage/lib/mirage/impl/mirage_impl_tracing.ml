open Functoria
open Mirage_impl_misc
module Key = Mirage_key

type tracing = job

let tracing = job

let mprof_trace ~size () =
  let unix_trace_file = "trace.ctf" in
  let key = Key.tracing_size size in
  let keys = [ Key.v key ] in
  let packages_v =
    Key.match_ Key.(value target) @@ function
    | #Mirage_key.mode_xen ->
        [
          package ~max:"1.0.0" "mirage-profile";
          package ~max:"1.0.0" ~min:"0.9.0" "mirage-profile-xen";
        ]
    | #Mirage_key.mode_solo5 -> []
    | #Mirage_key.mode_unix ->
        [
          package ~max:"1.0.0" "mirage-profile";
          package ~max:"1.0.0" "mirage-profile-unix";
        ]
  in
  let connect i _ _ =
    match get_target i with
    | #Mirage_key.mode_solo5 ->
        failwith "tracing is not currently implemented for solo5 targets"
    | #Mirage_key.mode_unix ->
        Fmt.str
          "Lwt.return ())@.let () = (@ @[<v 2> let buffer = \
           MProf_unix.mmap_buffer ~size:%a %S in@ let trace_config = \
           MProf.Trace.Control.make buffer MProf_unix.timestamper in@ \
           MProf.Trace.Control.start trace_config@]"
          Key.serialize_call (Key.v key) unix_trace_file
    | #Mirage_key.mode_xen ->
        Fmt.str
          "Lwt.return ())@.let () = (@ @[<v 2> let trace_pages = \
           MProf_xen.make_shared_buffer ~size:%a in@ let buffer = trace_pages \
           |> Io_page.to_cstruct |> Cstruct.to_bigarray in@ let trace_config = \
           MProf.Trace.Control.make buffer MProf_xen.timestamper in@ \
           MProf.Trace.Control.start trace_config;@ MProf_xen.share_with \
           ~domid:0 trace_pages@ |> Xen_os.Main.run@]"
          Key.serialize_call (Key.v key)
  in
  impl ~keys ~packages_v ~connect "MProf" job
