Caml1999N031����   /         	-duniverse/ocaml-xenstore/core/xs_protocol.mli����  ��  �  Y�  Wꠠ���1ocaml.ppx.context��&_none_@@ �A����������)tool_name���*ppx_driver@@@����,include_dirs����"[]@@@����)load_path!����
%@%@@����,open_modules*����.@.@@����+for_package3����$None8@8@@����%debug=����%falseB@B@@����+use_threadsG����
K@K@@����-use_vmthreadsP����T@T@@����/recursive_typesY����]@]@@����)principalb����%f@f@@����3transparent_modulesk����.o@o@@����-unboxed_typest����7x@x@@����-unsafe_string}����@�@�@@����'cookies�����"::�����������,library-name�@�@@����(xenstore��.<command-line>A@A�A@I@@��A@@�A@J@@@@�@@�������@�@@@�@@�@@@@�@@@�@�������*ocaml.text���@@ ���@@ �A�������4 XenStore protocol. ��	-duniverse/ocaml-xenstore/core/xs_protocol.mliO>>�O>W@@��O>>�O>W@@@@��O>>�O>W@@��
O>>�O>W@��O>>�O>W@���A�    �!t��QY^�QY_@@@@A@���)ocaml.doc���@@ ���@@ �A�������1 A valid packet. ��)R``�*R`v@@��,R``�-R`v@@@@��/R``�0R`v@@��2R``�3R`v@@��5QYY�6QY_@@��8QYY�9QY_@������"Op��BTx�CTx�@�����A�    �!t��NU���OU��@@@���%Debug��VV���WV��@@�@@��ZV���[V��@@��)Directory��aW���bW��@@�@@��eW���fW��@@��$Read��lX���mX��@@�@@��pX���qX��@@��(Getperms��wY���xY��@@�@@��{Y���|Y��@@��%Watch���Z����Z��@@�@@���Z����Z��@@��'Unwatch���[����[��@@�@@���[����[��@@��1Transaction_start���\����\��@@�@@���\����\��@@��/Transaction_end���]���]�@@�@@���]����]�@@��)Introduce���^��^ @@�@@���^��^ @@��'Release���_!'��_!.@@�@@���_!%��_!.@@��-Getdomainpath���`/5��`/B@@�@@���`/3��`/B@@��%Write���aCI��aCN@@�@@���aCG��aCN@@��%Mkdir���bOU��bOZ@@�@@���bOS��bOZ@@��"Rm���c[a��c[c@@�@@���c[_��c[c@@��(Setperms���ddj��ddr@@�@@���ddh��ddr@@��*Watchevent���esy��es�@@�@@���esw� es�@@��%Error��f���f��@@�@@��
f���f��@@��,Isintroduced��g���g��@@�@@��g���g��@@��&Resume��h���h��@@�@@�� h���!h��@@��*Set_target��'i���(i��@@�@@��+i���,i��@@��(Restrict��2j���3j��@@�@@��6j���7j��@������@@ ���@@ �A�������	! The type of xenstore operation. ��Gk���Hk��@@��Jk���Kk��@@@@��Mk���Nk��@@��Pk���Qk��@@@A@@��SU���Tj��@@��VU���Wj��@���Р)to_string��_m� �`m�	@��@����!t��im��jm�@@��lm��mm�@@@����&string��tm��um�@@��wm��xm�@@@��zm��{m�@@@@@��}m���~m�@���m����m�@���Р(of_int32���n��n%@��@����%int32���n'��n,@@���n'��n,@@@����&option���n2��n8@�����!t���n0��n1@@���n0��n1@@@@���n0��n8@@@���n'��n8@@@@@���n��n8@���n��n8@���Р(to_int32���o9?��o9G@��@����!t���o9I��o9J@@���o9I��o9J@@@����%int32���o9N��o9S@@���o9N��o9S@@@���o9I��o9S@@@@@���o9;��o9S@���o9;��o9S@@���Tx���pTW@@@���Txx��pTW@���Txx��pTW@������#ACL���rY`��rYc@�����A�    �$perm���tkr� tkv@@@���$NONE��uy�uy�@@�@@��uy}�uy�@@��$READ��v���v��@@�@@��v���v��@@��%WRITE��w���w��@@�@@��!w���"w��@@��$RDWR��(x���)x��@@�@@��,x���-x��@@@A@@��/tkm�0x��@@��2tkm�3x��@���Р,char_of_perm��;z���<z��@��@����$perm��Ez���Fz��@@��Hz���Iz��@@@����$char��Pz���Qz��@@��Sz���Tz��@@@��Vz���Wz��@@@@@��Yz���Zz��@��\z���]z��@���Р,perm_of_char��e{���f{��@��@����$char��o{���p{��@@��r{���s{��@@@����&option��z{���{{��@�����$perm���{����{��@@���{����{��@@@@���{����{��@@@���{����{��@@@@@���{����{��@���{����{��@���A�    �%domid���}����}��@@@@A�����#int���}� ��}�@@���}� ��}�@@@@���}����}�@@���}����}�@���A�    �!t�����@@@��Р%owner��� @�� @@@����%domid��� @�� @"@@��� @�� @"@@@��� @�� @#@�������@@ ���@@ �A�������	& domain which "owns", has full access ��� @0�� @[@@��� @0�� @[@@@@��� @0�� @[@@��� @0�� @[@@�Р%other��� A\`�� A\e@@����$perm��� A\g�� A\k@@��� A\g�� A\k@@@��� A\`�� A\l@������@@ ���@@ �A�������	' default permissions for all others... �� A\z� A\�@@�� A\z� A\�@@@@�� A\z� A\�@@�� A\z� A\�@@�Р#acl�� B��� B��@@����$list��& B���' B��@��������%domid��2 B���3 B��@@��5 B���6 B��@@@�����$perm��> B���? B��@@��A B���B B��@@@@��D B���E B��@@@@��G B���H B��@@@��J B���K B��@���3��@@ ��	@@ �A�������	" ... unless overridden in the ACL ��[ B���\ B��@@��^ B���_ B��@@@@��a B���b B��@@��d B���e B��@@@A@@��g�h C��@@��j�k C��@���Р)of_string��s E���t E�@��@����&string��} E��~ E�	@@��� E��� E�	@@@����&option��� E��� E�@�����!t��� E��� E�@@��� E��� E�@@@@��� E��� E�@@@��� E��� E�@@@@@��� E���� E�@��� E���� E�@���Р)to_string��� F�� F%@��@����!t��� F'�� F(@@��� F'�� F(@@@����&string��� F,�� F2@@��� F,�� F2@@@��� F'�� F2@@@@@��� F�� F2@��� F�� F2@@���rYf�� G36@@�������@@ ���@@ �A�������7 Access control lists. ��� H77�� H7S@@��� H77�� H7S@@@@��� H77�� H7S@@��� H77�� H7S@@���rYY�� G36@���rYY�� G36@������&Parser��� JU\�� JUb@�����Р6allow_oversize_packets�� Ljp� Lj�@����#ref��
 Lj�� Lj�@�����$bool�� Lj�� Lj�@@�� Lj�� Lj�@@@@�� Lj�� Lj�@@@@@�� Ljl� Lj�@�� Ljl�  Lj�@���A�    �%state��) N���* N��@@@���1Unknown_operation��1 O���2 O��@@������%int32��; O���< O��@@��> O���? O��@@@@@��A O���B O��@���*���@@ �� @@ �A�������	% received an unexpected message type ��R O���S O��@@��U O���V O��@@@@��X O���Y O��@@��[ O���\ O��@@��-Parser_failed��b P���c P� @@������&string��l P��m P�
@@��o P��p P�
@@@@@��r P���s P�
@���[��0@@ ��1@@ �A�������= we failed to parse a header ��� P��� P�0@@��� P��� P�0@@@@��� P��� P�0@@��� P��� P�0@@��.Need_more_data��� Q17�� Q1E@@������#int��� Q1I�� Q1L@@��� Q1I�� Q1L@@@@@��� Q15�� Q1L@������a@@ ��b@@ �A�������9 we still need 'n' bytes ��� Q1R�� Q1p@@��� Q1R�� Q1p@@@@��� Q1R�� Q1p@@��� Q1R�� Q1p@@��&Packet��� Rqw�� Rq}@@������!t��� Rq��� Rq�@@��� Rq��� Rq�@@@@@��� Rqu�� Rq�@�������@@ ���@@ �A�������? successfully decoded a packet ��� Rq��� Rq�@@��� Rq��� Rq�@@@@��� Rq��� Rq�@@��� Rq��� Rq�@@@A@@��� N���� Rq�@@��� N���� Rq�@���A�    �%parse��� T���� T��@@@@A@������@@ ���@@ �A�������	# The internal state of the parser. �� U��� U��@@�� U��� U��@@@@�� U��� U��@@�� U��� U��@@�� T��� T��@@�� T��� T��@���Р%start��' W���( W��@��@����$unit��1 W���2 W�@@��4 W���5 W�@@@����%parse��< W��= W�@@��? W��@ W�@@@��B W���C W�@@@@���+�� @@ ��@@ �A�������	+ Create a parser set to the initial state. ��S X�T X>@@��V X�W X>@@@@��Y X�Z X>@@��\ X�] X>@@��_ W���` W�@��b W���c W�@���Р%state��k Z@F�l Z@K@��@����%parse��u Z@M�v Z@R@@��x Z@M�y Z@R@@@����%state��� Z@V�� Z@[@@��� Z@V�� Z@[@@@��� Z@M�� Z@[@@@@���o��D@@ ��E@@ �A�������	  Query the state of the parser. ��� [\^�� [\�@@��� [\^�� [\�@@@@��� [\^�� [\�@@��� [\^�� [\�@@��� Z@B�� Z@[@��� Z@B�� Z@[@���Р%input��� ]���� ]��@��@����%parse��� ]���� ]��@@��� ]���� ]��@@@��@����&string��� ]���� ]��@@��� ]���� ]��@@@����%parse��� ]���� ]��@@��� ]���� ]��@@@��� ]���� ]��@@@��� ]���� ]��@@@@���ð��@@ ���@@ �A�������	a Input some bytes into the parser. Must be no more than needed
      (see Need_more_data above). ��� ^���� _�	@@��� ^���� _�	@@@@��� ^���� _�	@@��� ^���� _�	@@��� ]���� ]��@��� ]���� ]��@@��� JUe�� `		@@������@@ ���@@ �A�������> Incrementally parse packets. �� a		� a		;@@�� a		� a		;@@@@�� a		� a		;@@�� a		� a		;@@�� JUU� `		@�� JUU� `		@�����"IO��& c	=	I�' c	=	K@������A�    �!t��3 d	R	\�4 d	R	]@����!a��; d	R	Y�< d	R	[@@@�BA@@@A@@��? d	R	T�@ d	R	]@@��B d	R	T�C d	R	]@���Р&return��K e	^	d�L e	^	j@��@��!a��S e	^	l�T e	^	n@@@����!t��[ e	^	u�\ e	^	v@���!a��b e	^	r�c e	^	t@@@@��e e	^	r�f e	^	v@@@��h e	^	l�i e	^	v@@@@@��k e	^	`�l e	^	v@��n e	^	`�o e	^	v@���Р#>>=��w f	w	}�x f	w	�@��@����!t��� f	w	��� f	w	�@���!a��� f	w	��� f	w	�@@@@��� f	w	��� f	w	�@@@��@��@��!a��� f	w	��� f	w	�@@@����!t��� f	w	��� f	w	�@���!b��� f	w	��� f	w	�@@@@��� f	w	��� f	w	�@@@��� f	w	��� f	w	�@@@����!t��� f	w	��� f	w	�@���!b��� f	w	��� f	w	�@@@@��� f	w	��� f	w	�@@@��� f	w	��� f	w	�@@@��� f	w	��� f	w	�@@@@@��� f	w	y�� f	w	�@��� f	w	y�� f	w	�@���A�    �'channel��� h	�	��� h	�	�@@@@A@@��� h	�	��� h	�	�@@��� h	�	��� h	�	�@���Р$read��� i	�	��� i	�	�@��@����'channel��� i	�	��� i	�	�@@��� i	�	��� i	�	�@@@��@����%bytes��� i	�	��� i	�	�@@��� i	�	��� i	�	�@@@��@����#int�� i	�	�� i	�	�@@�� i	�	��	 i	�	�@@@��@����#int�� i	�	�� i	�	�@@�� i	�	�� i	�	�@@@����!t�� i	�	�� i	�	�@�����#int��& i	�	��' i	�	�@@��) i	�	��* i	�	�@@@@��, i	�	��- i	�	�@@@��/ i	�	��0 i	�	�@@@��2 i	�	��3 i	�	�@@@��5 i	�	��6 i	�	�@@@��8 i	�	��9 i	�	�@@@@@��; i	�	��< i	�	�@��> i	�	��? i	�	�@���Р%write��G j	�	��H j	�	�@��@����'channel��Q j	�	��R j	�	�@@��T j	�	��U j	�	�@@@��@����%bytes��^ j	�	��_ j	�
@@��a j	�	��b j	�
@@@��@����#int��k j	�
�l j	�
@@��n j	�
�o j	�
@@@��@����#int��x j	�
�y j	�
@@��{ j	�
�| j	�
@@@����!t��� j	�
�� j	�
@�����$unit��� j	�
�� j	�
@@��� j	�
�� j	�
@@@@��� j	�
�� j	�
@@@��� j	�
�� j	�
@@@��� j	�
�� j	�
@@@��� j	�	��� j	�
@@@��� j	�	��� j	�
@@@@@��� j	�	��� j	�
@��� j	�	��� j	�
@@��� c	=	N�� k

 @@@��� c	=	=�� k

 @��� c	=	=�� k

 @������:Unknown_xenstore_operation��� m
"
,�� m
"
F@�@������%int32��� m
"
J�� m
"
O@@��� m
"
J�� m
"
O@@@@@��� m
"
"�� m
"
O@@���@@ ���@@ �A@��� m
"
"�� m
"
O@������6Response_parser_failed��� n
P
Z�� n
P
p@�@������&string��� n
P
t�� n
P
z@@��� n
P
t�� n
P
z@@@@@��� n
P
P�� n
P
z@@���@@ ���@@ �A@��� n
P
P�� n
P
z@���A�    �&result��� p
|
��� p
|
�@����!a�� p
|
�� p
|
�@@@�BA����!b��
 p
|
�� p
|
�@@@�BA@@���"Ok�� q
�
�� q
�
�@@����!a�� q
�
�� q
�
�@@@@@�� q
�
�� q
�
�@@��)Exception��% r
�
��& r
�
�@@����!b��- r
�
��. r
�
�@@@@@��0 r
�
��1 r
�
�@@@A@@��3 p
|
|�4 r
�
�@@��6 p
|
|�7 r
�
�@������,PacketStream��@ t
�
��A t
�
�@�����"IO��I t
�
��J t
�
�@����"IO��Q t
�
��R t
�
�@��T t
�
��U t
�
�@@�����A�    �&stream��` u
�
��a u
�
�@@@@A@@��c u
�
��d u
�
�@@��f u
�
��g u
�
�@���Р$make��o v
�
��p v
�
�@��@�����"IO'channel��{ v
�
��| v
�@@��~ v
�
�� v
�@@@����&stream��� v
��� v
�@@��� v
��� v
�@@@��� v
�
��� v
�@@@@@��� v
�
��� v
�@��� v
�
��� v
�@���Р$recv��� w�� w@��@����&stream��� w�� w!@@��� w�� w!@@@�����"IO!t��� w5�� w9@�����&result��� w.�� w4@�����!t��� w&�� w'@@��� w&�� w'@@@�����#exn��� w)�� w,@@��� w)�� w,@@@@��� w%�� w4@@@@��� w%�� w9@@@��� w�� w9@@@@@��� w�� w9@��� w�� w9@���Р$send��� x:@�� x:D@��@����&stream��� x:F�� x:L@@��� x:F�� x:L@@@��@����!t��	 x:P�	 x:Q@@��	 x:P�	 x:Q@@@�����"IO!t��	 x:Z�	 x:^@�����$unit��	 x:U�	 x:Y@@��	 x:U�	 x:Y@@@@��	 x:U�	 x:^@@@��	! x:P�	" x:^@@@��	$ x:F�	% x:^@@@@@��	' x:<�	( x:^@��	* x:<�	+ x:^@@��	- t
�
��	. y_b@@��	0 t
�
��	1 y_b@@@��	3 t
�
��	4 y_b@��	6 t
�
��	7 y_b@���Р(to_bytes��	? {dh�	@ {dp@��@����!t��	I {ds�	J {dt@@��	L {ds�	M {dt@@@����%bytes��	T {dx�	U {d}@@��	W {dx�	X {d}@@@��	Z {ds�	[ {d}@@@@@��	] {dd�	^ {d}@��	` {dd�	a {d}@���Р'get_tid��	i |~��	j |~�@��@����!t��	s |~��	t |~�@@��	v |~��	w |~�@@@����%int32��	~ |~��	 |~�@@��	� |~��	� |~�@@@��	� |~��	� |~�@@@@@��	� |~~�	� |~�@��	� |~~�	� |~�@���Р&get_ty��	� }���	� }��@��@����!t��	� }���	� }��@@��	� }���	� }��@@@�����"Op!t��	� }���	� }��@@��	� }���	� }��@@@��	� }���	� }��@@@@@��	� }���	� }��@��	� }���	� }��@���Р(get_data��	� ~���	� ~��@��@����!t��	� ~���	� ~��@@��	� ~���	� ~��@@@����&string��	� ~���	� ~��@@��	� ~���	� ~��@@@��	� ~���	� ~��@@@@@��	� ~���	� ~��@��	� ~���	� ~��@���Р'get_rid��	� ���	� ��@��@����!t��	� ���	� ��@@��	� ���	� ��@@@����%int32��	� ���	� ��@@��
 ���
 ��@@@��
 ���
 ��@@@@@��
 ���
 ��@��

 ���
 ��@���Р&create��
 ����
 ���@��@����%int32��
 ����
 ���@@��
  ����
! ���@@@��@����%int32��
* ����
+ ���@@��
- ����
. ���@@@��@�����"Op!t��
9 ���
: ��@@��
< ���
= ��@@@��@����&string��
F ��
�
G ��@@��
I ��
�
J ��@@@����!t��
Q ���
R ��@@��
T ���
U ��@@@��
W ��
�
X ��@@@��
Z ���
[ ��@@@��
] ����
^ ��@@@��
` ����
a ��@@@@@��
c ����
d ��@��
f ����
g ��@������%Token��
p ��
q �#@�����A�    �!t��
| �*1�
} �*2@@@@A@���
e��:@@ ��;@@ �A�������	L A token is associated with every watch and returned in the
      callback. ��
� �35�
� �t�@@��
� �35�
� �t�@@@@��
� �35�
� �t�@@��
� �35�
� �t�@@��
� �*,�
� �*2@@��
� �*,�
� �*2@���Р/to_debug_string��
� ����
� ���@��@����!t��
� ����
� ���@@��
� ����
� ���@@@����&string��
� ����
� ���@@��
� ����
� ���@@@��
� ����
� ���@@@@���
���~@@ ��@@ �A�������	< [to_string token] is a debug-printable version of [token]. ��
� ����
� ���@@��
� ����
� ���@@@@��
� ����
� ���@@��
� ����
� ���@@��
� ����
� ���@��
� ����
� ���@���Р.to_user_string��
� ����
� ��@��@����!t��
� ���
� ��@@��
� ���
� ��@@@����&string��
� ���
� ��@@�� ��� ��@@@�� ��� ��@@@@���
����@@ ���@@ �A�������	> [to_user_string token] is the user-supplied part of [token]. �� �� �W@@�� �� �W@@@@�� �� �W@@�� �� �W@@��! ����" ��@��$ ����% ��@���Р)of_string��- �Y_�. �Yh@��@����&string��7 �Yj�8 �Yp@@��: �Yj�; �Yp@@@����!t��B �Yt�C �Yu@@��E �Yt�F �Yu@@@��H �Yj�I �Yu@@@@���1��@@ ��@@ �A�������	W [of_string str_rep] is the token resulting from the
      unmarshalling of [str_rep]. ��Y �vx�Z ���@@��\ �vx�] ���@@@@��_ �vx�` ���@@��b �vx�c ���@@��e �Y[�f �Yu@��h �Y[�i �Yu@���Р)to_string��q ����r ���@��@����!t��{ ����| ���@@��~ ���� ���@@@����&string��� ����� ���@@��� ����� ���@@@��� ����� ���@@@@���u��J@@ ��K@@ �A�������	@ [to_string token] is the marshalled representation of [token]. ��� ����� ��:@@��� ����� ��:@@@@��� ����� ��:@@��� ����� ��:@@��� ����� ���@��� ����� ���@@��� �&�� �;>@@@��� ��� �;>@��� ��� �;>@������(Response��� �@G�� �@O@�����A�    �'payload��� �V]�� �Vd@@@���$Read��� �gk�� �go@@������&string��� �gs�� �gy@@��� �gs�� �gy@@@@@��� �gi�� �gy@@��)Directory��� �z~�� �z�@@������$list��� �z��� �z�@�����&string��� �z��� �z�@@��  �z�� �z�@@@@�� �z�� �z�@@@@@�� �z|� �z�@@��(Getperms�� ���� ���@@�������#ACL!t�� ���� ���@@�� ���� ���@@@@@�� ����  ���@@��-Getdomainpath��& ����' ���@@������&string��0 ����1 ���@@��3 ����4 ���@@@@@��6 ����7 ���@@��1Transaction_start��= ����> ���@@������%int32��G ����H ���@@��J ����K ���@@@@@��M ����N ���@@��%Write��T ����U ���@@�@@��X ����Y ���@@��%Mkdir��_ ����` ���@@�@@��c ����d ���@@��"Rm��j �� �k ��@@�@@��n ����o ��@@��(Setperms��u ��v �@@�@@��y ��z �@@��%Watch��� ��� �@@�@@��� ��� �@@��'Unwatch��� ��� �%@@�@@��� ��� �%@@��/Transaction_end��� �&*�� �&9@@�@@��� �&(�� �&9@@��%Debug��� �:>�� �:C@@������$list��� �:N�� �:R@�����&string��� �:G�� �:M@@��� �:G�� �:M@@@@��� �:G�� �:R@@@@@��� �:<�� �:R@@��)Introduce��� �SW�� �S`@@�@@��� �SU�� �S`@@��&Resume��� �ae�� �ak@@�@@��� �ac�� �ak@@��'Release��� �lp�� �lw@@�@@��� �ln�� �lw@@��*Set_target��� �x|�� �x�@@�@@��� �xz�� �x�@@��(Restrict��� ����� ���@@�@@��� ����� ���@@��,Isintroduced��� ����� ���@@������$bool�� ���� ���@@�� ����	 ���@@@@@�� ���� ���@@��%Error�� ���� ���@@������&string�� ���� ���@@�� ����  ���@@@@@��" ����# ���@@��*Watchevent��) ����* ���@@������&string��3 ����4 ���@@��6 ����7 ���@@@�����&string��? ����@ ���@@��B ����C ���@@@@@��E ����F ���@@@A@@��H �VX�I ���@@��K �VX�L ���@���Р-ty_of_payload��T ����U ���@��@����'payload��^ ����_ �� @@��a ����b �� @@@�����"Op!t��k ���l ��@@��n ���o ��@@@��q ����r ��@@@@@��t ����u ��@��w ����x ��@���Р3prettyprint_payload��� �
�� �
#@��@����'payload��� �
%�� �
,@@��� �
%�� �
,@@@����&string��� �
0�� �
6@@��� �
0�� �
6@@@��� �
%�� �
6@@@@@��� �
�� �
6@��� �
�� �
6@���Р%print��� �8>�� �8C@��@����'payload��� �8E�� �8L@@��� �8E�� �8L@@@��@����%int32��� �8P�� �8U@@��� �8P�� �8U@@@��@����%int32��� �8Y�� �8^@@��� �8Y�� �8^@@@����!t��� �8b�� �8c@@��� �8b�� �8c@@@��� �8Y�� �8c@@@��� �8P�� �8c@@@��� �8E�� �8c@@@@@��� �8:�� �8c@��� �8:�� �8c@@��� �@R�� �dg@@@��� �@@�� �dg@��� �@@�� �dg@������'Request��� �ip�� �iw@�����A�    �'path_op��
 ��� ��@@@���$Read�� ���� ���@@�@@�� ���� ���@@��)Directory�� ���� ���@@�@@��! ����" ���@@��(Getperms��( ����) ���@@�@@��, ����- ���@@��%Write��3 ����4 ���@@������&string��= ����> ���@@��@ ����A ���@@@@@��C ����D ���@@��%Mkdir��J ����K ���@@�@@��N ����O ���@@��"Rm��U ����V ���@@�@@��Y ����Z ���@@��(Setperms��` ����a ���@@�������#ACL!t��l ����m ���@@��o ����p ���@@@@@��r ����s ���@@@A@@��u ���v ���@@��x ���y ���@���A�    �'payload��� ����� ���@@@���&PathOp��� ��� �@@������&string��� ��� �@@��� ��� �@@@�����'path_op��� ��� �@@��� ��� �@@@@@��� ��� �@@��-Getdomainpath��� � $�� � 1@@������#int��� � 5�� � 8@@��� � 5�� � 8@@@@@��� � "�� � 8@@��1Transaction_start��� �9=�� �9N@@�@@��� �9;�� �9N@@��%Watch��� �OS�� �OX@@������&string��� �O\�� �Ob@@��� �O\�� �Ob@@@�����&string��� �Oe�� �Ok@@��� �Oe�� �Ok@@@@@��� �OQ�� �Ok@@��'Unwatch��� �lp�� �lw@@������&string��� �l{�� �l�@@��� �l{�  �l�@@@�����&string�� �l��	 �l�@@�� �l�� �l�@@@@@�� �ln� �l�@@��/Transaction_end�� ���� ���@@������$bool�� ����  ���@@��" ����# ���@@@@@��% ����& ���@@��%Debug��, ����- ���@@������$list��6 ����7 ���@�����&string��? ����@ ���@@��B ����C ���@@@@��E ����F ���@@@@@��H ����I ���@@��)Introduce��O ����P ���@@������#int��Y ����Z ���@@��\ ����] ���@@@������)Nativeint!t��g ����h ���@@��j ����k ���@@@�����#int��s ����t ���@@��v ����w ���@@@@@��y ����z ���@@��&Resume��� ����� ���@@������#int��� ����� ���@@��� ����� ���@@@@@��� ����� ���@@��'Release��� ����� ��@@������#int��� ��
�� ��@@��� ��
�� ��@@@@@��� ����� ��@@��*Set_target��� ��� �@@������#int��� � �� �#@@��� � �� �#@@@�����#int��� �&�� �)@@��� �&�� �)@@@@@��� ��� �)@@��(Restrict��� �*.�� �*6@@������#int��� �*:�� �*=@@��� �*:�� �*=@@@@@��� �*,�� �*=@@��,Isintroduced��� �>B�� �>N@@������#int��� �>R�� �>U@@��� �>R�� �>U@@@@@��� �>@�� �>U@@��%Error��� �VZ�  �V_@@������&string��	 �Vc�
 �Vi@@�� �Vc� �Vi@@@@@�� �VX� �Vi@@��*Watchevent�� �jn� �jx@@������&string��  �j|�! �j�@@��# �j|�$ �j�@@@@@��& �jl�' �j�@@@A@@��) ����* �j�@@��, ����- �j�@���Р-ty_of_payload��5 ����6 ���@��@����'payload��? ����@ ���@@��B ����C ���@@@�����"Op!t��L ����M ���@@��O ����P ���@@@��R ����S ���@@@@@��U ����V ���@��X ����Y ���@���Р3prettyprint_payload��a ����b ���@��@����'payload��k ����l ���@@��n ����o ���@@@����&string��v ����w ���@@��y ����z ���@@@��| ����} ���@@@@@�� ����� ���@��� ����� ���@���Р+prettyprint��� ����� ���@��@����!t��� ����� ���@@��� ����� ���@@@����&string��� ����� ���@@��� ����� ���@@@��� ����� ���@@@@@��� ����� ���@��� ����� ���@���Р%parse��� ����� ��@��@����!t��� ���� ��@@��� ���� ��@@@����&option��� ���� ��@�����'payload��� ��	�� ��@@��� ��	�� ��@@@@��� ��	�� ��@@@��� ���� ��@@@@@��� ����� ��@��� ����� ��@���Р%print��� ��� �#@��@����'payload��� �%�� �,@@��� �%�� �,@@@��@����%int32�� �0� �5@@�� �0� �5@@@��@����%int32�� �9� �>@@�� �9� �>@@@����!t�� �B� �C@@�� �B� �C@@@��  �9�! �C@@@��# �0�$ �C@@@��& �%�' �C@@@@@��) ��* �C@��, ��- �C@@��/ �iz�0 �DG@@@��2 �ii�3 �DG@��5 �ii�6 �DG@������)Unmarshal��? �IP�@ �IY@�����Р&string��J �`f�K �`l@��@����!t��T �`o�U �`p@@��W �`o�X �`p@@@����&option��_ �`{�` �`�@�����&string��h �`t�i �`z@@��k �`t�l �`z@@@@��n �`t�o �`�@@@��q �`o�r �`�@@@@@��t �`b�u �`�@��w �`b�x �`�@���Р$list��� ����� ���@��@����!t��� ����� ���@@��� ����� ���@@@����&option��� ����� ���@�����$list��� ����� ���@�����&string��� ����� ���@@��� ����� ���@@@@��� ����� ���@@@@��� ����� ���@@@��� ����� ���@@@@@��� ����� ���@��� ����� ���@���Р#acl��� ����� ���@��@����!t��� ����� ���@@��� ����� ���@@@����&option��� ����� ���@������#ACL!t��� ����� ���@@��� ����� ���@@@@��� ����� ���@@@��� ����� ���@@@@@��� ����� ���@��� ����� ���@���Р#int��� ����� ���@��@����!t�� ���� ���@@�� ���� ���@@@����&option�� ���� ���@�����#int�� ���� ���@@�� ���� ���@@@@�� ���� ���@@@��! ����" ���@@@@@��$ ����% ���@��' ����( ���@���Р%int32��0 ����1 ���@��@����!t��: ����; ���@@��= ����> ���@@@����&option��E ����F �� @�����%int32��N ����O ���@@��Q ����R ���@@@@��T ����U �� @@@��W ����X �� @@@@@��Z ����[ �� @��] ����^ �� @���Р$unit��f ��g �@��@����!t��p ��q �@@��s ��t �@@@����&option��{ ��| �@�����$unit��� ��� �@@��� ��� �@@@@��� ��� �@@@��� ��� �@@@@@��� ��� �@��� ��� �@���Р"ok��� �%�� �'@��@����!t��� �*�� �+@@��� �*�� �+@@@����&option��� �4�� �:@�����$unit��� �/�� �3@@��� �/�� �3@@@@��� �/�� �:@@@��� �*�� �:@@@@@��� �!�� �:@��� �!�� �:@@��� �I\�� �;>@@@��� �II�� �;>@��� �II�� �;>@������&Enoent��� �@J�� �@P@�@������&string��� �@T�� �@Z@@��� �@T�� �@Z@@@@@��� �@@�� �@Z@���ְ��@@ ���@@ �A�������	) Raised when a named key does not exist. ��� �@[�� �@�@@�� �@[� �@�@@@@�� �@[� �@�@@�� �@[� �@�@@���@@ ���@@ �A@�� �@@� �@Z@������&Eagain�� ���� ���@�@�@@�� ���� ���@������@@ ���@@ �A�������/��, �@[�- �@�@@��/ �@[�0 �@�@@@@��2 �@[�3 �@�@@��5 �@[�6 �@�@������@@ ���@@ �A�������	- Raised when a transaction must be repeated. ��F ����G ���@@��I ����J ���@@@@��L ����M ���@@��O ����P ���@@��
@@ ��@@ �A@��U ����V ���@������&Eexist��_ ����` ���@�@�@@��d ����e ���@���M��"@@ ��#@@ �A�������/��t ����u ���@@��w ����x ���@@@@��z ����{ ���@@��} ����~ ���@���f��;@@ ��<@@ �A�������	% Raised when a watch already exists. ��� ����� ��@@��� ����� ��@@@@��� ����� ��@@��� ����� ��@@��R@@ ��S@@ �A@��� ����� ���@������'Invalid��� �(�� �/@�@�@@��� ��� �/@������j@@ ��k@@ �A�������/��� ����� ��@@��� ����� ��@@@@��� ����� ��@@��� ����� ��@@���@@ ���@@ �A@��� ��� �/@������%Error��� �0:�� �0?@�@������&string��� �0C�� �0I@@��� �0C�� �0I@@@@@��� �00�� �0I@���ϰ��@@ ���@@ �A�������: Generic catch-all error. ��� �0K�� �0j@@��� �0K�� �0j@@@@��� �0K�� �0j@@��  �0K� �0j@@���@@ ���@@ �A@�� �00� �0I@���Р(response�� �lp� �lx@��@����&string�� �lz� �l�@@�� �lz� �l�@@@��@����!t��& �l��' �l�@@��) �l��* �l�@@@��@����!t��3 �l��4 �l�@@��6 �l��7 �l�@@@��@��@����!t��B �l��C �l�@@��E �l��F �l�@@@����&option��M �l��N �l�@���!a��T �l��U �l�@@@@��W �l��X �l�@@@��Z �l��[ �l�@@@��!a��` �l��a �l�@@@��c �l��d �l�@@@��f �l��g �l�@@@��i �l��j �l�@@@��l �lz�m �l�@@@@���U��*@@ ��+@@ �A�������	� [response debug_hint sent received unmarshal] returns the
    [unmarshal]led response corresponding to the [received] packet
    relative to the [sent] packet. ��} ����~ �&K@@��� ����� �&K@@@@��� ����� �&K@@��� ����� �&K@@��� �ll�� �l�@��� �ll�� �l�@���A�    �'address��� �MR�� �MY@@@���$Unix��� �\^�� �\b@@������&string��� �\f�� �\l@@��� �\f�� �\l@@@@@��� �\\�� �\l@@��&Domain��� �mo�� �mu@@������#int��� �my�� �m|@@��� �my�� �m|@@@@@��� �mm�� �m|@@@A@@��� �MM�� �m|@@��� �MM�� �m|@���Р1string_of_address��� �~��� �~�@��@����'address��� �~��� �~�@@��� �~��� �~�@@@����&string��� �~��� �~�@@��� �~��� �~�@@@��� �~��� �~�@@@@@��� �~~�� �~�@��� �~~�� �~�@���Р1domain_of_address��� ����� ���@��@����'address�� ����	 ���@@�� ���� ���@@@����#int�� ���� ���@@�� ���� ���@@@�� ���� ���@@@@@�� ���� ���@�� ����  ���@@