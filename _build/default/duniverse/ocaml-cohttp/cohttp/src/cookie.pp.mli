Caml1999N031����   .         	,duniverse/ocaml-cohttp/cohttp/src/cookie.mli����  m  �  R  )�����1ocaml.ppx.context��&_none_@@ �A����������)tool_name���*ppx_driver@@@����,include_dirs����"[]@@@����)load_path!����
%@%@@����,open_modules*����.@.@@����+for_package3����$None8@8@@����%debug=����%falseB@B@@����+use_threadsG����
K@K@@����-use_vmthreadsP����T@T@@����/recursive_typesY����]@]@@����)principalb����%f@f@@����3transparent_modulesk����.o@o@@����-unboxed_typest����7x@x@@����-unsafe_string}����@�@�@@����'cookies�����"::�����������,library-name�@�@@����&cohttp��.<command-line>A@A�A@G@@��A@@�A@H@@@@�@@�������@�@@@�@@�@@@@�@@@�@�������*ocaml.text��������
  � Functions for the HTTP Cookie and Set-Cookie header fields. Using the
    Set-Cookie header field, an HTTP server can pass name/value pairs and
    associated metadata (called cookies) to a user agent. When the user agent
    makes subsequent requests to the server, the user agent uses the metadata
    and other information to determine whether to return the name/value pairs in
    the Cookie header. ��	,duniverse/ocaml-cohttp/cohttp/src/cookie.mliR__�W��@@@@@@���A�    �*expiration��Y� �Y�
@@@@A�������'Session��Z�Z@A@�@���)ocaml.docӐ������	h Instructs the user agent to discard the cookie unconditionally when the
        user agent terminates. ��&[�'\j�@@@@@@@����'Max_age��.]���/]��@@�����%int64��7]���8]��@@�@@@@�@���"��������	� The value of the Max-Age attribute is delta-seconds, the lifetime of the
        cookie in seconds, a decimal non-negative integer. ��G^���H_�0@@@@@@@@@@��JZ�K_�2@@@���(deriving��Q`36�R`3>@��������$sexp��]`3?�^`3C@�@@@@@��a`33�b`3D@���J�������	? Lifetime of the cookie after which the user agent discards it ��oaEE�paE�@@@@@@@��rY��@@�@�����������-ocaml.warning��&_none_A@ �A�������#-32@@@@@�*A���Р2sexp_of_expiration���@������@�@@������(Sexplib0$Sexp!t���A@@@@@@@11���Р2expiration_of_sexp���@������(Sexplib0$Sexp!t���A@@@������@�@@@@@@GG���Р6__expiration_of_sexp__���@������@@@������@�@@@@@@YY@?@?���)ocaml.docN�������'@inlineV@V@@@V@V���+merlin.hideZ�@�@P���A�    �&cookie���c����c��@@@@A��������&string���c����c��@@�@@@�����&string���c����c��@@�@@@@�@@@������������	H A cookie is simply a key/value pair send from the client to the server ��	d���
d��@@@@@@@��c��@@�@������.Set_cookie_hdr��f���f�@�����A�    �!t��"g�#g@@@��Р&cookie��*h!%�+h!+@@����&cookie��2h!.�3h!4@@�@@@��6h!5@@�Р*expiration��<i6:�=i6D@@����*expiration��Di6G�Ei6Q@@�@@@��Hi6R@@�Р&domain��NjSW�OjS]@@����&option��VjSg�WjSm@�����&string��_jS`�`jSf@@�@@@@�@@@��djSn@@�Р$path��jkos�kkow@@����&option��rko��sko�@�����&string��{koz�|ko�@@�@@@@�@@@���ko�@@�Р&secure���l����l��@@����$bool���l����l��@@�@@@���l��@@�Р)http_only���m����m��@@����$bool���m����m��@@�@@@���m��@@@A@���(deriving���o����o��@��������$sexp���o����o��@�@@@@@���o����o��@����u�������	� A header which a server sends to a client to request that the client
      returns the cookie in future requests, under certain conditions. ���p����q^@@@@@@@���g@@�@�����������YX�������#-32`@`@@@`@`�&A������������(Sexplib0(Sexpable!S$$@����!t)    ���@@@A�������@0@@@0@0@0@0@@���2�������1�@�@@@�@����0��@�@*���Р$make��s`f�s`j@���*expiration����*expiration��tm}�tm�@@�@@@���$path����&string��*u���+u��@@�@@@���&domain����&string��7v���8v��@@�@@@���&secure����$bool��Dw���Ew��@@�@@@���)http_only����$bool��Qx���Rx��@@�@@@��@����&cookie��\y���]y��@@�@@@����!t��ez���fz��@@�@@@�@@@��jx��@@@��lw��@@@��nv��	@@@��pu��@@@��rtmq@@@@@��ts`b@�@���Р)serialize��}|���~|�	@���'version������(HTTP_1_0���|�	��|�	@A@�@@����(HTTP_1_1���|�	��|�	'@A@�@@@@@���|�	��|�	)@@@��@����!t���|�	-��|�	.@@�@@@�������&string���|�	2��|�	8@@�@@@�����&string���|�	;��|�	A@@�@@@@�@@@�@@@���|�	@@@@����x�������7 Return an HTTP header ���}	B	D��}	B	`@@@@@@@���|��@�@���Р'extract���	b	h��	b	o@��@�����&Header!t���	b	r��	b	z@@�@@@����$list���	b	���	b	�@��������&string���	b	��	b	�@@�@@@�����!t��	b	��	b	�@@�@@@@�@@@@��	b	~@@@�&@@@@����������	/ Return the list of cookies sent by the server �� @	�	�� @	�	�@@@@@@@��	b	d,@�-@���Р&cookie��! B	�	��" B	�	�@��@����!t��+ B	�	��, B	�	�@@�@@@����&cookie��4 B	�	��5 B	�	�@@�@@@�@@@@���񐠠����8 The name-value binding ��D C	�	��E C	�
@@@@@@@��G B	�	�@�@���Р%value��P E


�Q E

@��@����!t��Z E

�[ E

@@�@@@����&string��c E

�d E

@@�@@@�@@@@���N �������+ The value ��s F

 �t F

0@@@@@@@��v E

@�@���Р*expiration�� H
2
8�� H
2
B@��@����!t��� H
2
E�� H
2
F@@�@@@����*expiration��� H
2
J�� H
2
T@@�@@@�@@@@���}O�������0 The expiration ��� I
U
W�� I
U
l@@@@@@@��� H
2
4@�@���Р&domain��� K
n
t�� K
n
z@��@����!t��� K
n
}�� K
n
~@@�@@@����&option��� K
n
��� K
n
�@�����&string��� K
n
��� K
n
�@@�@@@@�@@@�@@@@������������	2 The domain for which the cookie is valid, if any ��� L
�
��� L
�
�@@@@@@@��� K
n
p@�@���Р$path��� N
�
��� N
�
�@��@����!t��� N
�
��� N
�
�@@�@@@����&option��� N
�
��� N
�
�@�����&string�� N
�
�� N
�
�@@�@@@@�@@@�@@@@������������	0 The path for which the cookie is valid, if any �� O
�
�� O
�"@@@@@@@�� N
�
�@�@���Р&secure��  Q$*�! Q$0@��@����!t��* Q$3�+ Q$4@@�@@@����$bool��3 Q$8�4 Q$<@@�@@@�@@@@���𐠠����	- Has the cookie's secure attribute been set? ��C R=?�D R=q@@@@@@@��F Q$&@�@���Р)http_only��O Tsy�P Ts�@��@����!t��Y Ts��Z Ts�@@�@@@����$bool��b Ts��c Ts�@@�@@@�@@@@@��g Tsu@�@@��jf��k U��@@@��mf��@�@������*Cookie_hdr��w W���x W��@�����Р'extract��� X���� X��@��@�����&Header!t��� X���� X��@@�@@@����$list��� X���� X��@�����&cookie��� X���� X��@@�@@@@�@@@�@@@@����^�������	/ Return the list of cookies sent by the client ��� Y���� Y�
@@@@@@@��� X��@�@���Р)serialize��� [�� [@��@����$list��� [%�� [)@�����&cookie��� [�� [$@@�@@@@�@@@�������&string��� [-�� [3@@�@@@�����&string��� [6�� [<@@�@@@@�@@@�@@@@������������	A [serialize cookies] returns an HTTP header containing [cookies] ��� \=?�� \=�@@@@@@@��� [@�@@��� W���� ]��@@@�� W��@�@@