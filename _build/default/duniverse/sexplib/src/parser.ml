type token =
  | STRING of (string)
  | LPAREN
  | RPAREN
  | EOF
  | HASH_SEMI

open Parsing;;
let _ = parse_error;;
# 2 "duniverse/sexplib/src/parser.mly"
  (* Parser: Grammar Specification for Parsing S-expressions *)

  open Lexing

  let parse_failure what =
    let pos = Parsing.symbol_start_pos () in
    let msg =
      Printf.sprintf "Sexplib.Parser: failed to parse line %d char %d: %s"
        pos.pos_lnum (pos.pos_cnum - pos.pos_bol) what in
    failwith msg

# 23 "duniverse/sexplib/src/parser.ml"
let yytransl_const = [|
  258 (* LPAREN *);
  259 (* RPAREN *);
    0 (* EOF *);
  260 (* HASH_SEMI *);
    0|]

let yytransl_block = [|
  257 (* STRING *);
    0|]

let yylhs = "\255\255\
\001\000\001\000\006\000\006\000\006\000\006\000\008\000\008\000\
\005\000\005\000\002\000\002\000\002\000\002\000\007\000\007\000\
\007\000\007\000\004\000\004\000\003\000\003\000\000\000\000\000\
\000\000\000\000"

let yylen = "\002\000\
\002\000\001\000\001\000\002\000\003\000\001\000\002\000\003\000\
\001\000\002\000\001\000\002\000\001\000\002\000\001\000\001\000\
\002\000\002\000\002\000\001\000\002\000\001\000\002\000\002\000\
\002\000\002\000"

let yydefred = "\000\000\
\000\000\000\000\000\000\000\000\000\000\006\000\003\000\000\000\
\000\000\023\000\000\000\002\000\009\000\013\000\024\000\000\000\
\011\000\022\000\025\000\015\000\000\000\016\000\020\000\026\000\
\000\000\004\000\000\000\000\000\007\000\001\000\010\000\014\000\
\012\000\021\000\017\000\018\000\019\000\005\000\008\000"

let yydgoto = "\005\000\
\010\000\015\000\019\000\024\000\011\000\020\000\021\000\013\000"

let yysindex = "\040\000\
\034\255\001\000\006\000\011\000\000\000\000\000\000\000\058\255\
\034\255\000\000\034\255\000\000\000\000\000\000\000\000\016\000\
\000\000\000\000\000\000\000\000\021\000\000\000\000\000\000\000\
\026\000\000\000\063\255\034\255\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000"

let yyrindex = "\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000"

let yygindex = "\000\000\
\000\000\000\000\000\000\000\000\254\255\003\000\005\000\029\000"

let yytablesize = 286
let yytable = "\016\000\
\014\000\000\000\000\000\012\000\017\000\018\000\028\000\000\000\
\025\000\000\000\023\000\029\000\027\000\030\000\000\000\032\000\
\000\000\000\000\033\000\000\000\034\000\000\000\000\000\035\000\
\000\000\037\000\000\000\035\000\000\000\035\000\039\000\022\000\
\022\000\006\000\007\000\008\000\022\000\009\000\000\000\031\000\
\001\000\002\000\003\000\004\000\031\000\000\000\000\000\000\000\
\000\000\036\000\000\000\000\000\000\000\036\000\000\000\036\000\
\031\000\006\000\007\000\008\000\026\000\009\000\006\000\007\000\
\008\000\038\000\009\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\006\000\007\000\008\000\000\000\009\000\006\000\007\000\008\000\
\000\000\009\000\006\000\007\000\008\000\000\000\009\000\006\000\
\007\000\008\000\000\000\009\000\006\000\007\000\008\000\000\000\
\009\000\006\000\007\000\008\000\000\000\009\000"

let yycheck = "\002\000\
\000\000\255\255\255\255\001\000\002\000\000\000\009\000\255\255\
\004\000\255\255\000\000\009\000\008\000\011\000\255\255\000\000\
\255\255\255\255\016\000\255\255\000\000\255\255\255\255\021\000\
\255\255\000\000\255\255\025\000\255\255\027\000\028\000\003\000\
\004\000\000\001\001\001\002\001\008\000\004\001\255\255\011\000\
\001\000\002\000\003\000\004\000\016\000\255\255\255\255\255\255\
\255\255\021\000\255\255\255\255\255\255\025\000\255\255\027\000\
\028\000\000\001\001\001\002\001\003\001\004\001\000\001\001\001\
\002\001\003\001\004\001\255\255\255\255\255\255\255\255\255\255\
\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\
\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\
\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\
\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\
\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\
\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\
\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\
\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\
\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\
\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\
\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\
\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\
\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\
\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\
\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\
\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\
\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\
\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\
\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\
\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\
\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\
\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\
\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\
\000\001\001\001\002\001\255\255\004\001\000\001\001\001\002\001\
\255\255\004\001\000\001\001\001\002\001\255\255\004\001\000\001\
\001\001\002\001\255\255\004\001\000\001\001\001\002\001\255\255\
\004\001\000\001\001\001\002\001\255\255\004\001"

let yynames_const = "\
  LPAREN\000\
  RPAREN\000\
  EOF\000\
  HASH_SEMI\000\
  "

let yynames_block = "\
  STRING\000\
  "

let yyact = [|
  (fun _ -> failwith "parser")
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 1 : 'sexp_comments) in
    let _2 = (Parsing.peek_val __caml_parser_env 0 : 'sexp_but_no_comment) in
    Obj.repr(
# 32 "duniverse/sexplib/src/parser.mly"
                                    ( _2 )
# 170 "duniverse/sexplib/src/parser.ml"
               : Type.t))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 0 : 'sexp_but_no_comment) in
    Obj.repr(
# 33 "duniverse/sexplib/src/parser.mly"
                      ( _1 )
# 177 "duniverse/sexplib/src/parser.ml"
               : Type.t))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 0 : string) in
    Obj.repr(
# 36 "duniverse/sexplib/src/parser.mly"
           ( Type.Atom _1 )
# 184 "duniverse/sexplib/src/parser.ml"
               : 'sexp_but_no_comment))
; (fun __caml_parser_env ->
    Obj.repr(
# 37 "duniverse/sexplib/src/parser.mly"
                  ( Type.List [] )
# 190 "duniverse/sexplib/src/parser.ml"
               : 'sexp_but_no_comment))
; (fun __caml_parser_env ->
    let _2 = (Parsing.peek_val __caml_parser_env 1 : 'rev_sexps_aux) in
    Obj.repr(
# 38 "duniverse/sexplib/src/parser.mly"
                                ( Type.List (List.rev _2) )
# 197 "duniverse/sexplib/src/parser.ml"
               : 'sexp_but_no_comment))
; (fun __caml_parser_env ->
    Obj.repr(
# 39 "duniverse/sexplib/src/parser.mly"
          ( parse_failure "sexp" )
# 203 "duniverse/sexplib/src/parser.ml"
               : 'sexp_but_no_comment))
; (fun __caml_parser_env ->
    let _2 = (Parsing.peek_val __caml_parser_env 0 : 'sexp_but_no_comment) in
    Obj.repr(
# 42 "duniverse/sexplib/src/parser.mly"
                                  ( () )
# 210 "duniverse/sexplib/src/parser.ml"
               : 'sexp_comment))
; (fun __caml_parser_env ->
    let _2 = (Parsing.peek_val __caml_parser_env 1 : 'sexp_comments) in
    let _3 = (Parsing.peek_val __caml_parser_env 0 : 'sexp_but_no_comment) in
    Obj.repr(
# 43 "duniverse/sexplib/src/parser.mly"
                                                ( () )
# 218 "duniverse/sexplib/src/parser.ml"
               : 'sexp_comment))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 0 : 'sexp_comment) in
    Obj.repr(
# 46 "duniverse/sexplib/src/parser.mly"
                 ( () )
# 225 "duniverse/sexplib/src/parser.ml"
               : 'sexp_comments))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 1 : 'sexp_comments) in
    let _2 = (Parsing.peek_val __caml_parser_env 0 : 'sexp_comment) in
    Obj.repr(
# 47 "duniverse/sexplib/src/parser.mly"
                               ( () )
# 233 "duniverse/sexplib/src/parser.ml"
               : 'sexp_comments))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 0 : 'sexp_but_no_comment) in
    Obj.repr(
# 50 "duniverse/sexplib/src/parser.mly"
                        ( Some _1 )
# 240 "duniverse/sexplib/src/parser.ml"
               : Type.t option))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 1 : 'sexp_comments) in
    let _2 = (Parsing.peek_val __caml_parser_env 0 : 'sexp_but_no_comment) in
    Obj.repr(
# 51 "duniverse/sexplib/src/parser.mly"
                                      ( Some _2 )
# 248 "duniverse/sexplib/src/parser.ml"
               : Type.t option))
; (fun __caml_parser_env ->
    Obj.repr(
# 52 "duniverse/sexplib/src/parser.mly"
        ( None )
# 254 "duniverse/sexplib/src/parser.ml"
               : Type.t option))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 1 : 'sexp_comments) in
    Obj.repr(
# 53 "duniverse/sexplib/src/parser.mly"
                      ( None )
# 261 "duniverse/sexplib/src/parser.ml"
               : Type.t option))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 0 : 'sexp_but_no_comment) in
    Obj.repr(
# 56 "duniverse/sexplib/src/parser.mly"
                        ( [_1] )
# 268 "duniverse/sexplib/src/parser.ml"
               : 'rev_sexps_aux))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 0 : 'sexp_comment) in
    Obj.repr(
# 57 "duniverse/sexplib/src/parser.mly"
                 ( [] )
# 275 "duniverse/sexplib/src/parser.ml"
               : 'rev_sexps_aux))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 1 : 'rev_sexps_aux) in
    let _2 = (Parsing.peek_val __caml_parser_env 0 : 'sexp_but_no_comment) in
    Obj.repr(
# 58 "duniverse/sexplib/src/parser.mly"
                                      ( _2 :: _1 )
# 283 "duniverse/sexplib/src/parser.ml"
               : 'rev_sexps_aux))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 1 : 'rev_sexps_aux) in
    let _2 = (Parsing.peek_val __caml_parser_env 0 : 'sexp_comment) in
    Obj.repr(
# 59 "duniverse/sexplib/src/parser.mly"
                               ( _1 )
# 291 "duniverse/sexplib/src/parser.ml"
               : 'rev_sexps_aux))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 1 : 'rev_sexps_aux) in
    Obj.repr(
# 62 "duniverse/sexplib/src/parser.mly"
                      ( _1 )
# 298 "duniverse/sexplib/src/parser.ml"
               : Type.t list))
; (fun __caml_parser_env ->
    Obj.repr(
# 63 "duniverse/sexplib/src/parser.mly"
        ( [] )
# 304 "duniverse/sexplib/src/parser.ml"
               : Type.t list))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 1 : 'rev_sexps_aux) in
    Obj.repr(
# 66 "duniverse/sexplib/src/parser.mly"
                      ( List.rev _1 )
# 311 "duniverse/sexplib/src/parser.ml"
               : Type.t list))
; (fun __caml_parser_env ->
    Obj.repr(
# 67 "duniverse/sexplib/src/parser.mly"
        ( [] )
# 317 "duniverse/sexplib/src/parser.ml"
               : Type.t list))
(* Entry sexp *)
; (fun __caml_parser_env -> raise (Parsing.YYexit (Parsing.peek_val __caml_parser_env 0)))
(* Entry sexp_opt *)
; (fun __caml_parser_env -> raise (Parsing.YYexit (Parsing.peek_val __caml_parser_env 0)))
(* Entry sexps *)
; (fun __caml_parser_env -> raise (Parsing.YYexit (Parsing.peek_val __caml_parser_env 0)))
(* Entry rev_sexps *)
; (fun __caml_parser_env -> raise (Parsing.YYexit (Parsing.peek_val __caml_parser_env 0)))
|]
let yytables =
  { Parsing.actions=yyact;
    Parsing.transl_const=yytransl_const;
    Parsing.transl_block=yytransl_block;
    Parsing.lhs=yylhs;
    Parsing.len=yylen;
    Parsing.defred=yydefred;
    Parsing.dgoto=yydgoto;
    Parsing.sindex=yysindex;
    Parsing.rindex=yyrindex;
    Parsing.gindex=yygindex;
    Parsing.tablesize=yytablesize;
    Parsing.table=yytable;
    Parsing.check=yycheck;
    Parsing.error_function=parse_error;
    Parsing.names_const=yynames_const;
    Parsing.names_block=yynames_block }
let sexp (lexfun : Lexing.lexbuf -> token) (lexbuf : Lexing.lexbuf) =
   (Parsing.yyparse yytables 1 lexfun lexbuf : Type.t)
let sexp_opt (lexfun : Lexing.lexbuf -> token) (lexbuf : Lexing.lexbuf) =
   (Parsing.yyparse yytables 2 lexfun lexbuf : Type.t option)
let sexps (lexfun : Lexing.lexbuf -> token) (lexbuf : Lexing.lexbuf) =
   (Parsing.yyparse yytables 3 lexfun lexbuf : Type.t list)
let rev_sexps (lexfun : Lexing.lexbuf -> token) (lexbuf : Lexing.lexbuf) =
   (Parsing.yyparse yytables 4 lexfun lexbuf : Type.t list)
