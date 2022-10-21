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
        let send_target = "../../../_build/.dune/default/duniverse/stdlib-shims/src/dune"
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
# 1 "duniverse/stdlib-shims/src/dune"
(* -*- tuareg -*- *)

open StdLabels
open Jbuild_plugin.V1

let version = Scanf.sscanf ocaml_version "%u.%u" (fun a b -> (a, b))

let modules_in_4_02 =
  [ "Arg"
  ; "Array"
  ; "ArrayLabels"
  ; "Buffer"
  ; "Bytes"
  ; "BytesLabels"
  ; "Callback"
  ; "Char"
  ; "Complex"
  ; "Digest"
  ; "Filename"
  ; "Format"
  ; "Gc"
  ; "Genlex"
  ; "Hashtbl"
  ; "Int32"
  ; "Int64"
  ; "Lazy"
  ; "Lexing"
  ; "List"
  ; "ListLabels"
  ; "Map"
  ; "Marshal"
  ; "MoreLabels"
  ; "Nativeint"
  ; "Obj"
  ; "Oo"
  ; "Parsing"
  ; "Pervasives"
  ; "Printexc"
  ; "Printf"
  ; "Queue"
  ; "Random"
  ; "Scanf"
  ; "Set"
  ; "Stack"
  ; "StdLabels"
  ; "Stream"
  ; "String"
  ; "StringLabels"
  ; "Sys"
  ; "Weak"
  ]

let missing_modules =
  if version < (4, 07) then
    ["Stdlib"]
  else if version < (4, 11) then
    (* For OCaml 4.07-4.10 incl. this solves the problem of being unable to
       generate empty .cmxa files on MSVC by duplicating the Pervasives module
       (and updating its deprecation warning not to refer to this library! *)
    ["Pervasives"]
  else
    []

let available_modules =
  if version > (4, 02) then
    "Uchar" :: modules_in_4_02
  else
    modules_in_4_02

let longest_module_name =
  List.fold_left available_modules ~init:0
    ~f:(fun acc m -> max acc (String.length m))

let () =
  Printf.ksprintf send {|
(library
 (wrapped false)
 (name stdlib_shims)
 (modules %s)
 (public_name stdlib-shims))

(rule
 (with-stdout-to stdlib.ml
  (echo "\
%s

include Pervasives
")))
|}
    (String.concat ~sep:" " missing_modules)
    (List.map available_modules
       ~f:(fun m -> Printf.sprintf "module %-*s = %s" longest_module_name m m)
     |> String.concat ~sep:"\n")
