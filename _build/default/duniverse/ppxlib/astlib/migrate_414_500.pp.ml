# 1 "duniverse/ppxlib/astlib/migrate_414_500.ml"
module From = Ast_414
module To = Ast_500

let copy_structure : Ast_414.Parsetree.structure -> Ast_500.Parsetree.structure
    =
 fun x -> x

let copy_signature : Ast_414.Parsetree.signature -> Ast_500.Parsetree.signature
    =
 fun x -> x

let copy_toplevel_phrase :
    Ast_414.Parsetree.toplevel_phrase -> Ast_500.Parsetree.toplevel_phrase =
 fun x -> x

let copy_core_type : Ast_414.Parsetree.core_type -> Ast_500.Parsetree.core_type
    =
 fun x -> x

let copy_expression :
    Ast_414.Parsetree.expression -> Ast_500.Parsetree.expression =
 fun x -> x

let copy_pattern : Ast_414.Parsetree.pattern -> Ast_500.Parsetree.pattern =
 fun x -> x

let copy_case : Ast_414.Parsetree.case -> Ast_500.Parsetree.case = fun x -> x

let copy_type_declaration :
    Ast_414.Parsetree.type_declaration -> Ast_500.Parsetree.type_declaration =
 fun x -> x

let copy_type_extension :
    Ast_414.Parsetree.type_extension -> Ast_500.Parsetree.type_extension =
 fun x -> x

let copy_extension_constructor :
    Ast_414.Parsetree.extension_constructor ->
    Ast_500.Parsetree.extension_constructor =
 fun x -> x
