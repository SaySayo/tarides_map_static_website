open Lwt.Infix
let return = Lwt.return
let run t = Unix_os.Main.run t ; exit
0

module Mirage_logs_make__7 = Mirage_logs.Make(Pclock)

module Mirage_crypto_rng_mirage_make__16 =
  Mirage_crypto_rng_mirage.Make(Unix_os.Time)(Mclock)

module Conduit_mirage_tcp__13 = Conduit_mirage.TCP(Tcpip_stack_socket.V4V6)

module Conduit_mirage_tls__17 = Conduit_mirage.TLS(Conduit_mirage_tcp__13)

module Cohttp_mirage_server_make__18 =
  Cohttp_mirage.Server.Make(Conduit_mirage_tls__17)

module Dispatch_https__19 = Dispatch.HTTPS(Pclock)(Static_htdocs)(Static_tls)
  (Cohttp_mirage_server_make__18)

let bootvar__1 = lazy (
  Bootvar.argv ()
  )

let key_gen__2 = lazy (
  let __bootvar__1 = Lazy.force bootvar__1 in
  __bootvar__1 >>= fun _bootvar__1 ->
  return (Mirage_runtime.with_argv (List.map fst Key_gen.runtime_keys) "https" _bootvar__1)
  )

let printexc__3 = lazy (
  return (Printexc.record_backtrace (Key_gen.backtrace ()))
  )

let hashtbl__4 = lazy (
  return (if (Key_gen.randomize_hashtables ()) then Hashtbl.randomize ())
  )

let gc__5 = lazy (
  return (
let open Gc in
  let ctrl = get () in
  set ({ ctrl with allocation_policy = (match (Key_gen.allocation_policy ()) with `Next_fit -> 0 | `First_fit -> 1 | `Best_fit -> 2);
  minor_heap_size = (match (Key_gen.minor_heap_size ()) with None -> ctrl.minor_heap_size | Some x -> x);
  major_heap_increment = (match (Key_gen.major_heap_increment ()) with None -> ctrl.major_heap_increment | Some x -> x);
  space_overhead = (match (Key_gen.space_overhead ()) with None -> ctrl.space_overhead | Some x -> x);
  max_overhead = (match (Key_gen.max_space_overhead ()) with None -> ctrl.max_overhead | Some x -> x);
  verbose = (match (Key_gen.gc_verbosity ()) with None -> ctrl.verbose | Some x -> x);
  window_size = (match (Key_gen.gc_window_size ()) with None -> ctrl.window_size | Some x -> x);
  custom_major_ratio = (match (Key_gen.custom_major_ratio ()) with None -> ctrl.custom_major_ratio | Some x -> x);
  custom_minor_ratio = (match (Key_gen.custom_minor_ratio ()) with None -> ctrl.custom_minor_ratio | Some x -> x);
  custom_minor_max_size = (match (Key_gen.custom_minor_max_size ()) with None -> ctrl.custom_minor_max_size | Some x -> x) })
)
  )

let pclock__6 = lazy (
  return ()
  )

let mirage_logs_make__7 = lazy (
  let __pclock__6 = Lazy.force pclock__6 in
  __pclock__6 >>= fun _pclock__6 ->
  let ring_size = None in
  let reporter = Mirage_logs_make__7.create ?ring_size () in
  Mirage_runtime.set_level ~default:(Some Logs.Info) (Key_gen.logs ());
  Mirage_logs_make__7.set_reporter reporter;
  Lwt.return reporter
  )

let static_htdocs__8 = lazy (
  Static_htdocs.connect ()
  )

let static_tls__9 = lazy (
  Static_tls.connect ()
  )

let unix_os_time__14 = lazy (
  return ()
  )

let mclock__15 = lazy (
  return ()
  )

let mirage_crypto_rng_mirage_make__16 = lazy (
  let __unix_os_time__14 = Lazy.force unix_os_time__14 in
  let __mclock__15 = Lazy.force mclock__15 in
  __unix_os_time__14 >>= fun _unix_os_time__14 ->
  __mclock__15 >>= fun _mclock__15 ->
  Mirage_crypto_rng_mirage_make__16.initialize (module Mirage_crypto_rng.Fortuna)
  )

let udpv4v6_socket__10 = lazy (
  Udpv4v6_socket.connect ~ipv4_only:(Key_gen.ipv4_only ()) ~ipv6_only:(Key_gen.ipv6_only ()) (Key_gen.ipv4 ()) (Key_gen.ipv6 ())
  )

let tcpv4v6_socket__11 = lazy (
  Tcpv4v6_socket.connect ~ipv4_only:(Key_gen.ipv4_only ()) ~ipv6_only:(Key_gen.ipv6_only ()) (Key_gen.ipv4 ()) (Key_gen.ipv6 ())
  )

let tcpip_stack_socket_v4v6__12 = lazy (
  let __udpv4v6_socket__10 = Lazy.force udpv4v6_socket__10 in
  let __tcpv4v6_socket__11 = Lazy.force tcpv4v6_socket__11 in
  __udpv4v6_socket__10 >>= fun _udpv4v6_socket__10 ->
  __tcpv4v6_socket__11 >>= fun _tcpv4v6_socket__11 ->
  Tcpip_stack_socket.V4V6.connect _udpv4v6_socket__10 _tcpv4v6_socket__11
  )

let conduit_mirage_tcp__13 = lazy (
  let __tcpip_stack_socket_v4v6__12 = Lazy.force tcpip_stack_socket_v4v6__12 in
  __tcpip_stack_socket_v4v6__12 >>= fun _tcpip_stack_socket_v4v6__12 ->
  Lwt.return _tcpip_stack_socket_v4v6__12

  )

let conduit_mirage_tls__17 = lazy (
  let __conduit_mirage_tcp__13 = Lazy.force conduit_mirage_tcp__13 in
  let __mirage_crypto_rng_mirage_make__16 =
                                           Lazy.force mirage_crypto_rng_mirage_make__16 in
  __conduit_mirage_tcp__13 >>= fun _conduit_mirage_tcp__13 ->
  __mirage_crypto_rng_mirage_make__16 >>= fun _mirage_crypto_rng_mirage_make__16 ->
  Lwt.return _conduit_mirage_tcp__13

  )

let cohttp_mirage_server_make__18 = lazy (
  let __conduit_mirage_tls__17 = Lazy.force conduit_mirage_tls__17 in
  __conduit_mirage_tls__17 >>= fun _conduit_mirage_tls__17 ->
  Lwt.return (Cohttp_mirage_server_make__18.listen _conduit_mirage_tls__17)
  )

let dispatch_https__19 = lazy (
  let __pclock__6 = Lazy.force pclock__6 in
  let __static_htdocs__8 = Lazy.force static_htdocs__8 in
  let __static_tls__9 = Lazy.force static_tls__9 in
  let __cohttp_mirage_server_make__18 =
                                       Lazy.force cohttp_mirage_server_make__18 in
  __pclock__6 >>= fun _pclock__6 ->
  __static_htdocs__8 >>= fun _static_htdocs__8 ->
  __static_tls__9 >>= fun _static_tls__9 ->
  __cohttp_mirage_server_make__18 >>= fun _cohttp_mirage_server_make__18 ->
  Dispatch_https__19.start _pclock__6 _static_htdocs__8 _static_tls__9
_cohttp_mirage_server_make__18
  )

let mirage_runtime__20 = lazy (
  let __key_gen__2 = Lazy.force key_gen__2 in
  let __printexc__3 = Lazy.force printexc__3 in
  let __hashtbl__4 = Lazy.force hashtbl__4 in
  let __gc__5 = Lazy.force gc__5 in
  let __mirage_logs_make__7 = Lazy.force mirage_logs_make__7 in
  let __dispatch_https__19 = Lazy.force dispatch_https__19 in
  __key_gen__2 >>= fun _key_gen__2 ->
  __printexc__3 >>= fun _printexc__3 ->
  __hashtbl__4 >>= fun _hashtbl__4 ->
  __gc__5 >>= fun _gc__5 ->
  __mirage_logs_make__7 >>= fun _mirage_logs_make__7 ->
  __dispatch_https__19 >>= fun _dispatch_https__19 ->
  return ()
  )

let () =
  let t =
  Lazy.force key_gen__2 >>= fun _ ->
    Lazy.force printexc__3 >>= fun _ ->
    Lazy.force hashtbl__4 >>= fun _ ->
    Lazy.force gc__5 >>= fun _ ->
    Lazy.force mirage_logs_make__7 >>= fun _ ->
    Lazy.force mirage_runtime__20
  in run t
