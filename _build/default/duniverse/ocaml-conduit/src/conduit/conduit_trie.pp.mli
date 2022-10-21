Caml1999N031����   6         	4duniverse/ocaml-conduit/src/conduit/conduit_trie.mli����  �  �  
  	������1ocaml.ppx.context��&_none_@@ �A����������)tool_name���*ppx_driver@@@����,include_dirs����"[]@@@����)load_path!����
%@%@@����,open_modules*����.@.@@����+for_package3����$None8@8@@����%debug=����%falseB@B@@����+use_threadsG����
K@K@@����-use_vmthreadsP����T@T@@����/recursive_typesY����]@]@@����)principalb����%f@f@@����3transparent_modulesk����.o@o@@����-unboxed_typest����7x@x@@����-unsafe_string}����@�@�@@����'cookies�����"::�����������,library-name�@�@@����'conduit��.<command-line>A@A�A@H@@��A@@�A@I@@@@�@@�������@�@@@�@@�@@@@�@@@�@�������*ocaml.text��������	? Radix tree that can do longest-prefix searches on string keys ��	4duniverse/ocaml-conduit/src/conduit/conduit_trie.mliS\\�S\�@@@@@@���A�    �!t��U���U��@����!a��U���U��@@@�BA@@@A@���(deriving��U���U��@��������$sexp��'U���(U��@�@@@@@��+U���,U��@���)ocaml.doc琠�����	3 Radix tree that maps [string] keys to ['a] values ��:V���;V��@@@@@@@��=U��@@�@�����������-ocaml.warning��&_none_A@ �A�������#-32@@@@@�+A������������(Sexplib0(Sexpable"S1((@����!t-    �dc����`_@@�BA@@@A�����nm���ih@@@<@@@<@<@<@<@$@$���)ocaml.doc3�������'@inline;@;@@@;@;���+merlin.hide?�@A@5���Р%empty���X����X�@����!t���X���X�@���!a���X���X�@@@@�	@@@@���w]�������/ An empty tree ���Y		��Y	@@@@@@@���X��@�@���Р&insert���[#��[)@��@����&string���[,��[2@@�@@@��@��!a���[6��[8@@@��@����!t���[?��[@@���!a���[<��[>@@@@�	@@@����!t���[G��[H@���!a���[D��[F@@@@�	@@@�
@@@�&@@@�0@@@@������������	N [insert key value tree] returns a new tree with the mapping [key] to [value] ��\II�\I�@@@@@@@��[@�@���Р.longest_prefix��^���^��@��@����&string��^���^��@@�@@@��@����!t��#^���$^��@���!a��*^���+^��@@@@�	@@@����&option��3^���4^��@���!a��:^���;^��@@@@�	@@@�
@@@�'@@@@�����������	~ [longest_prefix key tree] finds the key [k] which shares the longest prefix
    with [key] and returns the associated value. ��K_���L`R@@@@@@@��N^��@�@���Р$fold��WbTX�XbT\@��@��@����&string��cbT`�dbTf@@�@@@��@��!a��lbTj�mbTl@@@��@��!b��tbTp�ubTr@@@��!b��zbTv�{bTx@@@�	@@@�@@@�@@@��@��!b���bT}��bT@@@��@����!t���bT���bT�@���!a���bT���bT�@@@@�	@@@��!b���bT���bT�@@@�
@@@�@@@���bT_@@@@���v\�������	7 [fold f initial t] folds [f] over all bindings in [t] ���c����c��@@@@@@@���bTT@�@���Р)is_prefix���e����e��@��@����&string���e����e��@@�@@@��@����&string���e����e��@@�@@@����$bool���e����e��@@�@@@�@@@�@@@@������������	8 [is_prefix a b] returns true if [a] is a prefix of [b] ���f����f�2@@@@@@@���e��@�@@