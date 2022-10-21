module Jbuild_plugin : sig
(** API for jbuild plugins *)

(* CR-someday amokhov: rename to [dune_plugin]. *)

module V1 : sig
  (** Current build context *)
  val context : string

  (** OCaml version for the current build context. It might not be the same as
      [Sys.ocaml_version] *)
  val ocaml_version : string

  (** Output of [ocamlc -config] for this context *)
  val ocamlc_config : (string * string) list

  (** [send s] send [s] to Dune. [s] should be the contents of a [dune] file
      following the specification described in the manual. *)
  val send : string -> unit

  (** Execute a command and read its output *)
  val run_and_read_lines : string -> string list
end

end = struct

let directive_table = Toploop.directive_table [@@ocaml.warning "-3"]

let () =
  Hashtbl.add directive_table "require" (Toploop.Directive_string ignore);
  Hashtbl.add directive_table "use"
    (Toploop.Directive_string
       (fun _ ->
         failwith "#use is not allowed inside a dune file in OCaml syntax"));
  Hashtbl.add directive_table "use_mod"
    (Toploop.Directive_string
       (fun _ ->
         failwith "#use is not allowed inside a dune file in OCaml syntax"))

module V1 = struct
  let context = "default"
        let ocaml_version = "4.14.0"
        let send_target = "../../../../_build/.dune/default/duniverse/lwt/src/unix/dune"
        let ocamlc_config = [ "version"                   , "4.14.0"
      ; "standard_library_default"  , "/Users/busayobamigbade/.opam/4.14.0/lib/ocaml"
      ; "standard_library"          , "/Users/busayobamigbade/.opam/4.14.0/lib/ocaml"
      ; "standard_runtime"          , "the_standard_runtime_variable_was_deleted"
      ; "ccomp_type"                , "cc"
      ; "c_compiler"                , "cc"
      ; "ocamlc_cflags"             , "-O2 -fno-strict-aliasing -fwrapv -pthread"
      ; "ocamlc_cppflags"           , "-D_FILE_OFFSET_BITS=64"
      ; "ocamlopt_cflags"           , "-O2 -fno-strict-aliasing -fwrapv -pthread"
      ; "ocamlopt_cppflags"         , "-D_FILE_OFFSET_BITS=64"
      ; "bytecomp_c_compiler"       , "cc -O2 -fno-strict-aliasing -fwrapv -pthread -D_FILE_OFFSET_BITS=64"
      ; "bytecomp_c_libraries"      , "-lm -lpthread"
      ; "native_c_compiler"         , "cc -O2 -fno-strict-aliasing -fwrapv -pthread -D_FILE_OFFSET_BITS=64"
      ; "native_c_libraries"        , "-lm"
      ; "native_pack_linker"        , "ld -r -o"
      ; "cc_profile"                , ""
      ; "architecture"              , "amd64"
      ; "model"                     , "default"
      ; "int_size"                  , "63"
      ; "word_size"                 , "64"
      ; "system"                    , "macosx"
      ; "asm"                       , "cc -c -Wno-trigraphs"
      ; "asm_cfi_supported"         , "true"
      ; "with_frame_pointers"       , "false"
      ; "ext_exe"                   , ""
      ; "ext_obj"                   , ".o"
      ; "ext_asm"                   , ".s"
      ; "ext_lib"                   , ".a"
      ; "ext_dll"                   , ".so"
      ; "os_type"                   , "Unix"
      ; "default_executable_name"   , "a.out"
      ; "systhread_supported"       , "true"
      ; "host"                      , "x86_64-apple-darwin21.6.0"
      ; "target"                    , "x86_64-apple-darwin21.6.0"
      ; "profiling"                 , "false"
      ; "flambda"                   , "false"
      ; "spacetime"                 , "false"
      ; "safe_string"               , "true"
      ; "exec_magic_number"         , "Caml1999X031"
      ; "cmi_magic_number"          , "Caml1999I031"
      ; "cmo_magic_number"          , "Caml1999O031"
      ; "cma_magic_number"          , "Caml1999A031"
      ; "cmx_magic_number"          , "Caml1999Y031"
      ; "cmxa_magic_number"         , "Caml1999Z031"
      ; "ast_impl_magic_number"     , "Caml1999M031"
      ; "ast_intf_magic_number"     , "Caml1999N031"
      ; "cmxs_magic_number"         , "Caml1999D031"
      ; "cmt_magic_number"          , "Caml1999T031"
      ; "natdynlink_supported"      , "true"
      ; "supports_shared_libraries" , "true"
      ; "windows_unicode"           , "false" ]
        

  let send s =
    let oc = open_out_bin send_target in
    output_string oc s;
    close_out oc

  let run_and_read_lines cmd =
    let tmp_fname = Filename.temp_file "dune" ".output" in
    at_exit (fun () -> Sys.remove tmp_fname);
    let n =
      Printf.ksprintf Sys.command "%s > %s" cmd (Filename.quote tmp_fname)
    in
    let rec loop ic acc =
      match input_line ic with
      | exception End_of_file ->
        close_in ic;
        List.rev acc
      | line -> loop ic (line :: acc)
    in
    let output = loop (open_in tmp_fname) [] in
    if n = 0 then output
    else
      Printf.ksprintf failwith
        "Command failed: %%s\nExit code: %%d\nOutput:\n%%s" cmd n
        (String.concat "\n" output)
end

end
# 1 "duniverse/lwt/src/unix/dune"
(* -*- tuareg -*- *)

let preprocess =
   match Sys.getenv "BISECT_ENABLE" with
   | "yes" -> "(preprocess (pps bisect_ppx))"
   | _ -> ""
   | exception _ -> ""

let () = Jbuild_plugin.V1.send @@ {|

(rule
 (targets lwt_process.ml)
 (deps (:ml lwt_process.cppo.ml))
 (action
  (chdir %{project_root}
   (run %{bin:cppo} -V OCAML:%{ocaml_version} %{ml} -o %{targets}))))

(rule
 (targets lwt_unix.ml)
 (deps (:ml lwt_unix.cppo.ml))
 (action
  (chdir %{project_root}
   (run %{bin:cppo} -V OCAML:%{ocaml_version} %{ml} -o %{targets}))))

(rule
 (targets lwt_unix.mli)
 (deps (:ml lwt_unix.cppo.mli))
 (action
  (chdir %{project_root}
   (run %{bin:cppo} -V OCAML:%{ocaml_version} %{ml} -o %{targets}))))

(rule
 (mode fallback)
 (targets discover_arguments)
 (action (with-stdout-to %{targets} (echo ""))))

(rule
 (targets
  unix_c_flags.sexp unix_c_library_flags.sexp lwt_features.h lwt_features.ml)
 (deps (:exe config/discover.exe) discover_arguments)
 (action (run %{exe})))

(copy_files unix_c/*)
(copy_files windows_c/*.c)

(library
 (name lwt_unix)
 (public_name lwt.unix)
 (synopsis "Unix support for Lwt")
 (optional)
 (wrapped false)
 (libraries bigarray lwt ocplib-endian.bigstring threads unix)
 |} ^ preprocess ^ {|
 (c_names
  lwt_unix_stubs
  lwt_libev_stubs
  lwt_process_stubs
  unix_readable
  unix_writable
  unix_madvise
  unix_get_page_size
  windows_get_page_size
  unix_mincore
  unix_read
  unix_pread
  windows_read
  windows_pread
  unix_bytes_read
  windows_bytes_read
  unix_write
  unix_pwrite
  windows_write
  windows_pwrite
  unix_bytes_write
  windows_bytes_write
  unix_readv_writev_utils
  unix_iov_max
  unix_writev
  unix_writev_job
  unix_readv
  unix_readv_job
  unix_send
  unix_bytes_send
  unix_recv
  unix_bytes_recv
  unix_recvfrom
  unix_bytes_recvfrom
  unix_sendto
  unix_sendto_byte
  unix_bytes_sendto
  unix_bytes_sendto_byte
  unix_recv_send_utils
  unix_recv_msg
  unix_send_msg
  unix_send_msg_byte
  unix_get_credentials
  unix_mcast_utils
  unix_mcast_set_loop
  unix_mcast_set_ttl
  unix_mcast_modify_membership
  unix_wait4
  unix_get_cpu
  unix_get_affinity
  unix_set_affinity
  unix_guess_blocking_job
  unix_wait_mincore_job
  unix_open_job
  unix_read_job
  unix_pread_job
  windows_read_job
  windows_pread_job
  unix_bytes_read_job
  windows_bytes_read_job
  unix_write_job
  windows_write_job
  unix_pwrite_job
  windows_pwrite_job
  unix_bytes_write_job
  windows_bytes_write_job
  unix_stat_job_utils
  unix_stat_job
  unix_stat_64_job
  unix_lstat_job
  unix_lstat_64_job
  unix_fstat_job
  unix_fstat_64_job
  unix_utimes_job
  unix_isatty_job
  unix_opendir_job
  unix_closedir_job
  unix_valid_dir
  unix_invalidate_dir
  unix_rewinddir_job
  unix_readdir_job
  unix_readdir_n_job
  unix_readlink_job
  unix_lockf_job
  unix_getlogin_job
  unix_get_pw_gr_nam_id_job
  unix_get_network_information_utils
  unix_gethostname_job
  unix_gethostbyname_job
  unix_gethostbyaddr_job
  unix_getprotoby_getservby_job
  unix_getaddrinfo_job
  unix_getnameinfo_job
  unix_bind_job
  unix_getcwd_job
  unix_termios_conversion
  unix_tcgetattr_job
  unix_tcsetattr_job
  windows_is_socket
  windows_fsync_job
  windows_system_job
  windows_not_available
  unix_not_available
  unix_access_job
  unix_chdir_job
  unix_chmod_job
  unix_chown_job
  unix_chroot_job
  unix_close_job
  unix_fchmod_job
  unix_fchown_job
  unix_fdatasync_job
  unix_fsync_job
  unix_ftruncate_job
  unix_link_job
  unix_lseek_job
  unix_mkdir_job
  unix_mkfifo_job
  unix_rename_job
  unix_rmdir_job
  unix_symlink_job
  unix_tcdrain_job
  unix_tcflow_job
  unix_tcflush_job
  unix_tcsendbreak_job
  unix_truncate_job
  unix_unlink_job
  unix_somaxconn
  windows_somaxconn
  unix_accept4
 )
 (install_c_headers lwt_features lwt_config lwt_unix)
 (c_flags -I. (:include unix_c_flags.sexp))
 (c_library_flags (:include unix_c_library_flags.sexp)))

|}
