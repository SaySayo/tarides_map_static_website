Caml1999N031����   /         	-duniverse/ppx_sexp_conv/expander/renaming.mli����  �  w  	�  	�����1ocaml.ppx.context��&_none_@@ �A����������)tool_name���*ppx_driver@@@����,include_dirs����"[]@@@����)load_path!����
%@%@@����,open_modules*����.@.@@����+for_package3����$None8@8@@����%debug=����%falseB@B@@����+use_threadsG����
K@K@@����-use_vmthreadsP����T@T@@����/recursive_typesY����]@]@@����)principalb����%f@f@@����3transparent_modulesk����.o@o@@����-unboxed_typest����7x@x@@����-unsafe_string}����@�@�@@����'cookies�����"::�����������,library-name�@�@@����6ppx_sexp_conv_expander��.<command-line>A@A�A@W@@��A@@�A@X@@@@�@@�������@�@@@�@@�@@@@�@@@�@��������$Base��	-duniverse/ppx_sexp_conv/expander/renaming.mliW &�W *@@��W  @@�@������&Ppxlib��X+1�X+7@@��X++@@�@���A�    �!t��Z9>�Z9?@@@@A@@��Z99@@�@���Р,without_type��']���(]��@��@����$unit��1]���2]��@@�@@@����!t��:]���;]��@@�@@@�@@@@���)ocaml.doc񐠠����	R Renaming for contexts outside a type declaration, such as expression extensions. ��K\AA�L\A�@@@@@@@��N]��@�@���Р3of_type_declaration��W`�X`%@��@����0type_declaration��a`(�b`8@@�@@@���&prefix����&string��n`C�o`I@@�@@@����!t��w`M�x`N@@�@@@��{`<@@@�@@@@���?/�������	Q Renaming for a type declaration. Adds [prefix] to bindings for type parameters. ���_����_�@@@@@@@���`@�@���Р5add_universally_bound���c����c��@��@����!t���c����c��@@�@@@��@����#loc���c����c��@�����&string���c����c��@@�@@@@�@@@���&prefix����&string���c����c��@@�@@@����!t���c����c��@@�@@@���c��@@@�@@@�2@@@@������������	P Adds a new name with the given [prefix] for a universally bound type variable. ���bPP��bP�@@@@@@@���c��@�@������,Binding_kind���e����e��@�����A�    �!t���f
��f@@@���1Universally_bound���g��g%@@�������*Fresh_name!t��
g)�g5@@�@@@@@��g@@��3Existentially_bound��h6<�h6O@@�@@��h6:@@@A@@��f@@�@@��e���iPS@@@�� e��@�@���Р,binding_kind��)l���*l��@��@����!t��3l���4l��@@�@@@��@����&string��>l���?l��@@�@@@���#loc����(location��Kl���Ll��@@�@@@�����,Binding_kind!t��Vl���Wl��@@�@@@��Zl��@@@�@@@�*@@@@����������	+ Looks up the binding for a type variable. ��ikUU�jkU�@@@@@@@��ll��@�@���Р<with_constructor_declaration��up7;�vp7W@��@����!t��qX]��qX^@@�@@@��@����7constructor_declaration���r_d��r_{@@�@@@���/type_parameters����$list���s|���s|�@�����&string���s|���s|�@@�@@@@�@@@����!t���t����t��@@�@@@���s|�@@@�&@@@�2@@@@���sc�������	i Extends the renaming of a type declaration with GADT context for a constructor
    declaration, if any. ���n����o6@@@@@@@���p77@�@@