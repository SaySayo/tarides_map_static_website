Caml1999N031����   .         	,duniverse/ocaml-cohttp/cohttp/src/header.mli����  P�  ?  3�  /������1ocaml.ppx.context��&_none_@@ �A����������)tool_name���*ppx_driver@@@����,include_dirs����"[]@@@����)load_path!����
%@%@@����,open_modules*����.@.@@����+for_package3����$None8@8@@����%debug=����%falseB@B@@����+use_threadsG����
K@K@@����-use_vmthreadsP����T@T@@����/recursive_typesY����]@]@@����)principalb����%f@f@@����3transparent_modulesk����.o@o@@����-unboxed_typest����7x@x@@����-unsafe_string}����@�@�@@����'cookies�����"::�����������,library-name�@�@@����&cohttp��.<command-line>A@A�A@G@@��A@@�A@H@@@@�@@�������@�@@@�@@�@@@@�@@@�@�����A�    �!t��	,duniverse/ocaml-cohttp/cohttp/src/header.mliT���T��@@@@A@���)ocaml.doc��������	� Associative list representing HTTP headers. Order of transmission is
    preserved, which implies that headers with same name are neither removed or
    concataned by default (see [clean_dup] to do that). ��Q""�S��@@@@@@���(deriving��T� �T�@��������$sexp��#T�	�$T�@�@@@@@��'T���(T�@���&ې������< The type for HTTP headers. ��5U�6U0@@@@@@@��8T��@@�@�����������-ocaml.warning��&_none_A@ �A�������#-32@@@@@�*A������������(Sexplib0(Sexpable!S((@����!t-    �ji@@@A�����on@4@@@4@4@4@4@@���)ocaml.doc+�������'@inline3@3@@@3@3���+merlin.hide7�@-@-���Р$init���W26��W2:@��@����$unit���W2=��W2A@@�@@@����!t���W2E��W2F@@�@@@�@@@@����N�������	; [init ()] constructs a fresh, empty list of HTTP headers. ���XGG��XG�@@@@@@@���W22@�@���Р(is_empty���Z����Z��@��@����!t���Z����Z��@@�@@@����$bool���Z����Z��@@�@@@�@@@@����}�������	? [is_empty h] tests whether HTTP headers [h] are empty or not. ���[����[��@@@@@@@���Z��@�@���Р'of_list���]����]��@��@����$list���]���]�@��������&string���]����]��@@�@@@�����&string��]� �]�@@�@@@@�@@@@��]��@@@����!t��]��]�@@�@@@�@@@@���Ő������	� [of_list l] construct a fresh headers from the content of [l] and in same
    order. [to_list] and [of_list] are defined such as [to_list (of_list l) = l]
    is true with case insensitive comparison. ��^� `��@@@@@@@��"]��@�@���Р'to_list��+b���,b��@��@����!t��5b���6b��@@�@@@����$list��>b��?b�@��������&string��Jb���Kb��@@�@@@�����&string��Tb� �Ub�@@�@@@@�@@@@��Yb��@@@�&@@@@���X�������	� [to_list h] converts HTTP headers [h] to a list. Order and case is
    preserved.

    {e Invariant (with case insensitive comparison):} [to_list (of_list l) = l] ��gc�hfd�@@@@@@@��jb��,@�-@���Р)init_with��sh���th��@��@����&string��}h���~h��@@�@@@��@����&string���h����h��@@�@@@����!t���h����h��@@�@@@�@@@�@@@@����H�������	f [init_with k v] construct a fresh HTTP headers with a single header with
    name [k] and value [v]. ���i����j+I@@@@@@@���h��@�@���Р#add���lKO��lKR@��@����!t���lKU��lKV@@�@@@��@����&string���lKZ��lK`@@�@@@��@����&string���lKd��lKj@@�@@@����!t���lKn��lKo@@�@@@�@@@�@@@�%@@@@������������	e [add h k v] adds the header name [k] and it associated value [v] at the end
    of header list [h]. ���mpp��n��@@@@@@@���lKK@�@���Р(add_list���p����p��@��@����!t���p��� p��@@�@@@��@����$list��
p��p�@��������&string��p���p��@@�@@@�����&string�� p���!p� @@�@@@@�@@@@��%p��@@@����!t��,p�
�-p�@@�@@@�@@@�2@@@@���.㐠�����	� [add_list h l] adds in order all header pairs contained in [l] to the header
    list [h].

    {e Invariant (with case insensitive comparison):}
    [to_list (add_list h l) = to_list h @ l] ��=q�>u��@@@@@@@��@p��@�@���Р)add_multi��Iw���Jw��@��@����!t��Sw���Tw��@@�@@@��@����&string��^w���_w��@@�@@@��@����$list��iw���jw��@�����&string��rw���sw��@@�@@@@�@@@����!t��|w�	�}w�	@@�@@@�@@@�#@@@�/@@@@���4�������	� [add_multi h k vs] add multiple header pairs with same name [h] and values
    contained in [vs] in [h]. The new headers are in the same order that in
    [vs].

    {e Invariant:} [get_multi (add_multi h k vs) k = (get_multi h k) @ vs] ���x		��|	�	�@@@@@@@���w��@�@���Р'add_opt���~	�	���~	�
@��@����&option���~	�
��~	�
@�����!t���~	�
��~	�
@@�@@@@�@@@��@����&string���~	�
��~	�
@@�@@@��@����&string���~	�
��~	�
"@@�@@@����!t���~	�
&��~	�
'@@�@@@�@@@�@@@�&@@@@������������	� [add_opt hopt k v] adds the header [(k, v)] to [h] if [hopt] is [Some h], or
    constructs a fresh header list containing this single header if [hopt] is
    [None]. ���
(
(�� A
�
�@@@@@@@���~	�	�@�@���Р1add_unless_exists��� C
�
��� C
�
�@��@����!t��� C
�
��� C
�
�@@�@@@��@����&string��  C
�
�� C
�
�@@�@@@��@����&string�� C
�
�� C
�@@�@@@����!t�� C
�� C
�	@@�@@@�@@@�@@@�%@@@@���̐������	q [add_unless_exists h k v] adds [(k, v)] to [h] unless the header name [k] is
    already present in the header. ��& D

�' E[�@@@@@@@��) C
�
�@�@���Р5add_opt_unless_exists��2 G���3 G��@��@����&option��< G���= G��@�����!t��E G���F G��@@�@@@@�@@@��@����&string��Q G���R G��@@�@@@��@����&string��\ G���] G��@@�@@@����!t��e G���f G��@@�@@@�@@@�@@@�&@@@@���h�������	� [add_opt_unless_exists h k v] adds [(k, v)] to [h] if [hopt] is [Some h]
    unless the header name [k] is already present in the headers. If [h] is
    [None] then a fresh header list is constructed containing the header
    [(k, v)]. ��w H���x K��@@@@@@@��z G��@�@���Р&remove��� M���� M��@��@����!t��� M���� M��@@�@@@��@����&string��� M���� M��@@�@@@����!t��� M���� M��@@�@@@�@@@�@@@@����X�������	S [remove h k] removes every values associated to the header name [k] from
    [h]. ��� N���� O*@@@@@@@��� M��@�@���Р'replace��� Q,0�� Q,7@��@����!t��� Q,:�� Q,;@@�@@@��@����&string��� Q,?�� Q,E@@�@@@��@����&string��� Q,I�� Q,O@@�@@@����!t��� Q,S�� Q,T@@�@@@�@@@�@@@�%@@@@������������	� [replace h k v] replaces the last added value of [k] from [h] and removed
    all other occurences of [k] if it exists. Otherwise it adds [(k, v)] to [h].

    {e Invariant:} [forall h, k, v. get_multi (replace h k v) = \[ v \]] ��� RUU�� U�@@@@@@@@��� Q,,@�@���Р#mem�� WBF� WBI@��@����!t�� WBL� WBM@@�@@@��@����&string�� WBQ� WBW@@�@@@����$bool��# WB[�$ WB_@@�@@@�@@@�@@@@���%ڐ������	[ [mem h k] returns [true] if the header name [k] appears in [h] and [false]
    otherwise. ��4 X``�5 Y��@@@@@@@��7 WBB@�@���Р'compare��@ [���A [��@��@����!t��J [���K [��@@�@@@��@����!t��U [���V [��@@�@@@����#int��^ [���_ [��@@�@@@�@@@�@@@@���`�������	E [compare h h'] is the structural comparison of two [Header] values. ��o \���p \�(@@@@@@@��r [��@�@���Р#get��{ ^*.�| ^*1@��@����!t��� ^*4�� ^*5@@�@@@��@����&string��� ^*9�� ^*?@@�@@@����&option��� ^*J�� ^*P@�����&string��� ^*C�� ^*I@@�@@@@�@@@�@@@�#@@@@����Z�������	 [get h k] returns [Some v] where [v] is the last added value associated with
    [k] in [h] if it exists and [None] otherwise ��� _QQ�� `��@@@@@@@��� ^**@�@���Р)get_multi��� b���� b��@��@����!t��� b���� b��@@�@@@��@����&string��� b���� b��@@�@@@����$list��� b���� b�@�����&string��� b���� b��@@�@@@@�@@@�@@@�#@@@@������������	i [get_multi h k] returns a list of all values associated with [k] in [h] in
    order they appear in it. ��� c�� dQp@@@@@@@��� b��@�@���Р0get_multi_concat�� frv� fr�@���/list_value_only����$bool�� fr�� fr�@@�@@@��@����!t�� fr�� fr�@@�@@@��@����&string��' fr��( fr�@@�@@@����&option��0 fr��1 fr�@�����&string��9 fr��: fr�@@�@@@@�@@@�@@@�#@@@��@ fr�@@@@���>󐠠����
  � [get_multi_concat h k] returns [Some v] if there is at least one value
    associated with [k] in [h] and [None] otherwise. [v] is the concatenation of
    all values paired with [k] in [h], separated by a comma and in order they
    appear in [h].

    The optional argument [?list_value_only] is [false] by default. If it is
    [true] and there is at least one value associated to [k], the returned value
    is the concatenated values only if [k] is a header that can have multiple
    values (like transfer-encoding or accept). Otherwise, the returned value is
    the last value paired with [k] in [h].

    {e Invariant:}
    [forall h, k not a list-value header. get_multi_concat ~list-value-only:true h k = get h k] ��M g���N s8�@@@@@@@��P frr @�!@���Р&update��Y u���Z u��@��@����!t��c u���d u��@@�@@@��@����&string��n u���o u��@@�@@@��@��@����&option��{ u���| u��@�����&string��� u���� u��@@�@@@@�@@@����&option��� u���� u��@�����&string��� u���� u��@@�@@@@�@@@�@@@����!t��� u���� u��@@�@@@��� u��@@@�:@@@�F@@@@����[�������
  ; [update h k f] returns an header list containing the same headers as [h],
    except for the header name [k]. Depending on the value of [v] where [v] is
    [f (get h k)], the header pair [(k, v)] is added, removed or updated.

    - If [v] is [None], the last occurence of [k] in [h] is removed;

    - If [v] is [Some w] then the last value paired with [k] in [h] is replaced
      by [w] if it exists. Otherwise, the pair [(k, w)] is added;

    - If [k] was already associated last in [h] to a value that is physically
      equal to [w], [h] is returned unchanged. ��� v���� ��@@@@@@@��� u��@�@���Р*update_all��� � $�� � .@��@����!t��� � 1�� � 2@@�@@@��@����&string��� � 6�� � <@@�@@@��@��@����$list��� � H�� � L@�����&string��� � A�� � G@@�@@@@�@@@����$list��� � W�� � [@�����&string��� � P�  � V@@�@@@@�@@@�@@@����!t��
 � `� � a@@�@@@�� � @@@@�:@@@�F@@@@���Ð������
  b [update_all h k f] returns an header list containing the same headers as
    [h], except for the header [k]. Depending on the list of values [vs] where
    [vs] is [f (get_multi h k)], the values associated to the header [k] are
    added, removed or updated.

    - If [vs] is an empty list, every occurences of the header [k] in [h] are
      removed;

    - If [vs] is a non-empty list, all values previously associated to [k] are
      removed and all values in [vs] are added with [add_multi];

    - If [k] was already associated in [h] to a list that is equal to [vs], [h]
      is returned unchanged. �� �bb� ���@@@@@@@��  �  @�@���Р$iter��) ����* ���@��@��@����&string��5 ����6 ���@@�@@@��@����&string��@ ����A ���@@�@@@����$unit��I ����J ���@@�@@@�@@@�@@@��@����!t��V ����W ���@@�@@@����$unit��_ ����` ���@@�@@@�@@@��d ���@@@@@��f ���@�@���Р#map��o ���p ��@��@��@����&string��{ ��	�| ��@@�@@@��@����&string��� ���� ��@@�@@@����&string��� ���� ��#@@�@@@�@@@�@@@��@����!t��� ��(�� ��)@@�@@@����!t��� ��-�� ��.@@�@@@�@@@��� ��@@@@@��� ���@�@���Р$fold��� �/3�� �/7@��@��@����&string��� �/;�� �/A@@�@@@��@����&string��� �/E�� �/K@@�@@@��@��!a��� �/O�� �/Q@@@��!a��� �/U�� �/W@@@�	@@@�@@@�@@@��@����!t��� �/\�� �/]@@�@@@��@��!a��� �/a�� �/c@@@��!a��� �/g�� �/i@@@�	@@@�@@@��� �/:@@@@@��� �//@�@���Р(to_lines�� �ko� �kw@��@����!t�� �kz� �k{@@�@@@����$list�� �k�� �k�@�����&string��# �k�$ �k�@@�@@@@�@@@�@@@@���%ڐ������	n [to_lines h] returns header fieds as a list of lines. Beware that each line
    ends with "\r\n" characters. ��4 ����5 ���@@@@@@@��7 �kk@�@���Р)to_frames��@ � �A � @��@����!t��J � �K � @@�@@@����$list��S � �T �  @�����&string��\ � �] � @@�@@@@�@@@�@@@@���^�������	` [to_frames h] returns the same as {!to_lines} but lines do not end with
    "\r\n" characters. ��m �!!�n �m�@@@@@@@��p �  @�@���Р)to_string��y ����z ���@��@����!t��� ����� ���@@�@@@����&string��� ����� ���@@�@@@�@@@@@��� ���@�@���Р)clean_dup��� ����� ���@��@����!t��� ����� ���@@�@@@����!t��� ����� ���@@�@@@�@@@@����c�������
  � [clean_dup h] cleans duplicates in [h] following
    {{:https://tools.ietf.org/html/rfc7230#section-3.2.2} RFC7230§3.2.2}; if a
    duplicated header can not have multiple values, only the last value is kept
    in place. Otherwise, the values are concatenated and place at the first
    position the header is encountered in [h].

    Already concatenated values (like [anhost.com, anotherhost.com] in the
    example below) are not affected by [clean_dup]. For example,

    {v
    transfer-encoding: gzip
    host: afirsthost.com
    connection: keep-alive
    host: anhost.com, anotherhost.com
    transfer-encoding: chunked
    v}

    becomes

    {v
    transfer-encoding: gzip, chunked
    connection: keep-alive
    host: anhost.com, anotherhost.com
    v}

    Finally, following {{:https://tools.ietf.org/html/rfc7230#section-3.2.2}
    RFC7230§3.2.2}, the header [Set-cookie] is treated as an exception and
    ignored by [clean_dup]. ��� ����� �Yw@@@@@@@��� ���@�@���Р1get_content_range��� �y}�� �y�@��@����!t��� �y��� �y�@@�@@@����&option��� �y��� �y�@������%Int64!t��� �y��� �y�@@�@@@@�@@@�@@@@@��� �yy@�@���Р.get_media_type��� ����� ���@��@����!t��  ���� ���@@�@@@����&option��	 ����
 ���@�����&string�� ���� ���@@�@@@@�@@@�@@@@@�� ���@�@���Р4get_connection_close��! ����" ���@��@����!t��+ ����, ���@@�@@@����$bool��4 ����5 ���@@�@@@�@@@@@��9 ���@�@���Р;get_acceptable_media_ranges��B ����C ��@��@����!t��L ��M �@@�@@@�����&Accept%qlist��W �A�X �M@���������&Accept+media_range��e ��f �/@@�@@@�����$list��o �;�p �?@������&Accept!p��z �2�{ �:@@�@@@@�@@@@�@@@@��� �)@@@�6*@@@@@��� ���,@�-@���Р7get_acceptable_charsets��� �OS�� �Oj@��@����!t��� �Om�� �On@@�@@@�����&Accept%qlist��� �O��� �O�@������&Accept'charset��� �Or�� �O�@@�@@@@�@@@�@@@@@��� �OO@�@���Р8get_acceptable_encodings��� ����� ���@��@����!t��� ����� ���@@�@@@�����&Accept%qlist��� ����� ���@������&Accept(encoding��� ����� ���@@�@@@@�@@@�@@@@@��� ���@�@���Р8get_acceptable_languages��� ����� ���@��@����!t��� ����� ���@@�@@@�����&Accept%qlist��� �� �	  �� @������&Accept(language��	
 ����	 �� @@�@@@@�@@@�@@@@@��	 ���@�@���Р5get_transfer_encoding��	 �  �	 �  )@��@����!t��	# �  ,�	$ �  -@@�@@@�����(Transfer(encoding��	. �  1�	/ �  B@@�@@@�@@@@@��	3 �  @�@���Р5add_transfer_encoding��	< � C G�	= � C \@��@����!t��	F � C _�	G � C `@@�@@@��@�����(Transfer(encoding��	S � C d�	T � C u@@�@@@����!t��	\ � C y�	] � C z@@�@@@�@@@�@@@@@��	b � C C@�@���Р1add_authorization��	k � { �	l � { �@��@����!t��	u � { ��	v � { �@@�@@@��@�����$Auth*credential��	� � { ��	� � { �@@�@@@����!t��	� � { ��	� � { �@@�@@@�@@@�@@@@@��	� � { {@�@���Р1get_authorization��	� � � ��	� � � �@��@����!t��	� � � ��	� � � �@@�@@@����&option��	� � � ��	� � � �@������$Auth*credential��	� � � ��	� � � �@@�@@@@�@@@�@@@@@��	� � � �@�@���Р5add_authorization_req��	� � � ��	� � � �@��@����!t��	� � � ��	� � � �@@�@@@��@�����$Auth)challenge��	� � �!�	� � �!@@�@@@����!t��	� � �!�	� � �!@@�@@@�@@@�@@@@@��	� � � �@�@���Р'is_form��	� �!!�	� �!!!@��@����!t��
  �!!$�
 �!!%@@�@@@����$bool��
	 �!!)�

 �!!-@@�@@@�@@@@@��
 �!!@�@���Р,get_location��
 �!.!2�
 �!.!>@��@����!t��
! �!.!A�
" �!.!B@@�@@@����&option��
* �!.!L�
+ �!.!R@������#Uri!t��
5 �!.!F�
6 �!.!K@@�@@@@�@@@�@@@@@��
; �!.!.@�@���Р)add_links��
D �!S!W�
E �!S!`@��@����!t��
N �!S!c�
O �!S!d@@�@@@��@����$list��
Y �!S!o�
Z �!S!s@������$Link!t��
d �!S!h�
e �!S!n@@�@@@@�@@@����!t��
n �!S!w�
o �!S!x@@�@@@�@@@�%@@@@@��
t �!S!S@�@���Р)get_links��
} �!y!}�
~ �!y!�@��@����!t��
� �!y!��
� �!y!�@@�@@@����$list��
� �!y!��
� �!y!�@������$Link!t��
� �!y!��
� �!y!�@@�@@@@�@@@�@@@@@��
� �!y!y@�@���Р*user_agent��
� �!�!��
� �!�!�@����&string��
� �!�!��
� �!�!�@@�@@@@���
�g�������	N The User-Agent header used by this library, including the version of cohttp. ��
� �!�!��
� �!�"@@@@@@@��
� �!�!�@�@���Р2prepend_user_agent��
� �""�
� �""@��@����!t��
� �""!�
� �"""@@�@@@��@����&string��
� �""&�
� �"",@@�@@@����!t��
� �""0�
� �""1@@�@@@�@@@�@@@@���
���������	d Prepend [user_agent] to the product token already declared in the
    "User-Agent" field (if any). ��
� �"2"2�
� �"x"�@@@@@@@��
� �""@�@���Р*connection�� �"�"��	 �"�"�@��@����!t�� �"�"�� �"�"�@@�@@@����&option�� �"�"�� �"�"�@�������*Keep_alive��& �"�"��' �"�"�@A@�@@����%Close��/ �"�"��0 �"�"�@A@�@@����'Unknown��8 �"�"��9 �"�"�@@�����&string��A �"�"��B �"�"�@@�@@@@�@@@@@��F �"�"��G �"�"�@@@@�-@@@�8.@@@@@��K �"�"�0@�1@���Р&pp_hum��T �"�"��U �"�"�@��@�����&Format)formatter��` �"�"��a �"�#@@�@@@��@����!t��k �"�#
�l �"�#@@�@@@����$unit��t �"�#�u �"�#@@�@@@�@@@�@@@@���v+�������	5 Human-readable output, used by the toplevel printer ��� �##�� �##N@@@@@@@��� �"�"�@�@@