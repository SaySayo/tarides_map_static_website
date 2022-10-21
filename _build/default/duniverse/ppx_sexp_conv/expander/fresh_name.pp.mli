Caml1999N031����   1         	/duniverse/ppx_sexp_conv/expander/fresh_name.mli����  	e  �  ]  ������1ocaml.ppx.context��&_none_@@ �A����������)tool_name���*ppx_driver@@@����,include_dirs����"[]@@@����)load_path!����
%@%@@����,open_modules*����.@.@@����+for_package3����$None8@8@@����%debug=����%falseB@B@@����+use_threadsG����
K@K@@����-use_vmthreadsP����T@T@@����/recursive_typesY����]@]@@����)principalb����%f@f@@����3transparent_modulesk����.o@o@@����-unboxed_typest����7x@x@@����-unsafe_string}����@�@�@@����'cookies�����"::�����������,library-name�@�@@����6ppx_sexp_conv_expander��.<command-line>A@A�A@W@@��A@@�A@X@@@@�@@�������@�@@@�@@�@@@@�@@@�@�������*ocaml.text��������	; Represents freshly generated names at ppx expansion time. ��	/duniverse/ppx_sexp_conv/expander/fresh_name.mliA@@�A@ @@@@@@@������$Base��C B H�C B L@@��C B B@@�@������&Ppxlib��D M R�D M X@A��D M M@@�@���A�    �!t��%F Z _�&F Z `@@@@A@@��(F Z Z@@�@���Р&create��1I � ��2I � �@��@����&string��;I � ��<I � �@@�@@@���#loc����(location��HI � ��II � �@@�@@@����!t��QI � ��RI � �@@�@@@��UI � �@@@�@@@@���)ocaml.doc�������	> Creates a new fresh name using the given string as a prefix. ��dH b b�eH b �@@@@@@@��gI � �@�@���Р-of_string_loc��pL�qL(@��@����#loc��zL2�{L5@�����&string���L+��L1@@�@@@@�@@@����!t���L9��L:@@�@@@�@@@@���:J�������	A [of_string_loc { loc; txt }] is equivalent to [create txt ~loc] ���K � ���K �@@@@@@@���L@�@���Р-to_string_loc���Ow{��Ow�@��@����!t���Ow���Ow�@@�@@@����#loc���Ow���Ow�@�����&string���Ow���Ow�@@�@@@@�@@@�@@@@���s��������	5 Extracts the freshly created name and its location. ���N<<��N<v@@@@@@@���Oww@�@���Р*expression���R����R��@��@����!t���R����R��@@�@@@����*expression���R����R��@@�@@@�@@@@������������	7 Constructs an expression referring to the fresh name. ��Q���Q��@@@@@@@��R��@�@���Р'pattern��U/3�U/:@��@����!t��U/=�U/>@@�@@@����'pattern��$U/B�%U/I@@�@@@�@@@@����ᐠ�����	. Constructs a pattern binding the fresh name. ��4T���5T�.@@@@@@@��7U//@�@@