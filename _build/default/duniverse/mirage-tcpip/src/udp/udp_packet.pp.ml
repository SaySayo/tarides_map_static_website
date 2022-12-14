Caml1999M031????   .         	,duniverse/mirage-tcpip/src/udp/udp_packet.ml????  FJ  ?  3g  2m?????1ocaml.ppx.context??&_none_@@ ?A??????????)tool_name???*ppx_driver@@@????,include_dirs????"[]@@@????)load_path!????
%@%@@????,open_modules*????.@.@@????+for_package3????$None8@8@@????%debug=????%falseB@B@@????+use_threadsG????
K@K@@????-use_vmthreadsP????T@T@@????/recursive_typesY????]@]@@????)principalb????%f@f@@????3transparent_modulesk????.o@o@@????-unboxed_typest????7x@x@@????-unsafe_string}????@?@?@@????'cookies?????"::???????????,library-name?@?@@????+tcpip_udpv4??.<command-line>A@A?A@L@@??A@@?A@M@@@@?@@???????@?@@@?@@?@@@@?@@@?@?????A?    ?!t??	,duniverse/mirage-tcpip/src/udp/udp_packet.mlA@E?A@F@@@??Р(src_port??	BKM?
BKU@@?????'Cstruct&uint16??BKX?BKf@@??BKX?BKf@@@??BKM?BKg@@?Р(dst_port?? Chj?!Chr@@?????'Cstruct&uint16??*Chu?+Ch C@@??-Chu?.Ch C@@@??0Chj?1Ch D@@@A@@??3A@@?4D E F@@??6A@@?7D E F@???@?????%equal??BF H L?CF H Q@??EF H L?FF H Q@@@??@@??????(src_port??QF H S?RF H [A?????WF H S?XF H [@??ZF H S?[F H [@@@????(dst_port??bF H ]?cF H eA?????hF H ]?iF H e@??kF H ]?lF H e@@@@@??nF H R?oF H f@@@??@@???!q??wF H g?xF H h@??zF H g?{F H h@@@??????"&&???G k ???G k ?@???G k ???G k ?@@@??@??????!=???G k v??G k w@???G k v??G k w@@@??@????(src_port???G k m??G k u@???G k m??G k u@@@??@??????!q???G k x??G k y@???G k x??G k y@@@??(src_port???G k z??G k ?@???G k x??G k ?@@@@???G k m??G k ?@@@??@??????7???H ? ???H ? ?@???H ? ???H ? ?@@@??@????(dst_port???H ? ???H ? ?@???H ? ???H ? ?@@@??@??????!q???H ? ???H ? ?@???H ? ???H ? ?@@@??(dst_port???H ? ???H ? ?@???H ? ???H ? ?@@@@???H ? ???H ? ?@@@@???G k m??H ? ?@@@???F H g??H ? ?A@@???F H R??H ? ?A@@@?? F H H?H ? ?@@??F H H?H ? ?@???@?????"pp??J ? ??J ? ?@??J ? ??J ? ?@@@??@@???#fmt??J ? ??J ? ?@??J ? ??J ? ?@@@??@@???!t??'J ? ??(J ? ?@??*J ? ??+J ? ?@@@???????&Format'fprintf??6K ? ??7K ? ?@??9K ? ??:K ? ?@@@??@????#fmt??CK ? ??DK ? ?@??FK ? ??GK ? ?@@@??@???1UDP port %d -> %d??OK ? ??PK ? ?@@??RK ? ??SK ? ?@@@??@??????!t??^K ? ??_K ? ?@??aK ? ??bK ? ?@@@??(src_port??gK ? ??hK ? ?@??jK ? ??kK ? ?@@@??@??????!t??vK ? ??wK ? ?@??yK ? ??zK ? ?@@@??(dst_port??K ? ???K ? ?@???K ? ???K ? ?@@@@???K ? ???K ? ?@@@???J ? ???K ? ?A@@???J ? ???K ? ?A@@@???J ? ???K ? ?@@???J ? ???K ? ?@??????)Unmarshal???M ? ???M ? ?@?????A?    ?%error???O	??O	@@@@A?????&string???O	??O	@@???O	??O	@@@@???O	??O	@@???O	??O	@???@?????$let*???Q &??Q .@???Q &??Q .@@@?????&Result$bind???Q 1??Q <@???Q 1??Q <@@@@???Q "??Q <@@???Q "??Q <@???@?????*of_cstruct???S>D??S>N@???S>D??S>N@@@??@@???#buf???S>O??S>R@???S>O??S>R@@@?  !?????(Udp_wire??TUb?TUj@??TUb?TUj@@A??TU]?TUj@@??@?????3check_header_length??Unv?Un?@??Unv?Un?@@@??@@????"()??Un?? Un?@@??"Un??#Un?@@@????????!<??.V???/V??@??1V???2V??@@@??@???????'Cstruct&length???V???@V??@??BV???CV??@@@??@????#buf??LV???MV??@??OV???PV??@@@@??RV???SV??@@@??@????*sizeof_udp??\V???]V??@??_V???`V??@@@@??bV???cV??@@@????%Error??jV???kV??@????4UDP header too short??rV???sV??@@??uV???vV??@@@??xV???yV??@@@?????"Ok???V????V??@?????k???V????V??@@???V????V??@@@???V????V??@@@???V????V??@@@???Un???V??A@@@???Unr??V??@@??@?????4check_payload_length???X????X?@???X????X?@@@??@@???2length_from_header???X?	??X?@???X?	??X?@@@??@@???0length_of_buffer???X???X?,@???X???X?,@@@????????????Y/K??Y/L@???Y/K??Y/L@@@??@????2length_from_header???Y/8??Y/J@???Y/8??Y/J@@@??@????*sizeof_udp???Y/M??Y/W@???Y/M??Y/W@@@@???Y/8??Y/W@@@????%Error???Z]e??Z]j@????	?UDP header claimed a total length < the size of just the header???Z]l??Z]?@@???Z]k??Z]?@@@???Z]e? Z]?@@@???@?????+payload_len??\???\??@??\???\??@@@??????!-??\???\??@??\???\??@@@??@????2length_from_header??%\???&\??@??(\???)\??@@@??@????*sizeof_udp??2\???3\??@??5\???6\??@@@@??8\???9\??@@@@??;\???<\??@@????????!>??G]??H]?@??J]??K]?@@@??@????+payload_len??T]??U]?@??W]??X]?@@@??@??????K??b]?&?c]?'@??e]?&?f]?'@@@??@????0length_of_buffer??o]??p]?%@??r]??s]?%@@@??@????*sizeof_udp??|]?(?}]?2@??]?(??]?2@@@@???]???]?3@????]???]?2@@@@???]???]?3@@@????%Error???^4A??^4F@????????&Printf'sprintf???^4H??^4V@???^4H??^4V@@@??@???	GUDP header claimed a payload longer than the supplied buffer: %d vs %d.???_W_??_W?@@???_W^??_W?@@@??@????+payload_len???`????`??@???`????`??@@@??@????0length_of_buffer???`????`??@???`????`??@@@@???^4G??`??@????^4H??`??@@@???^4A??`??@@@?????"Ok???a????a??@?????+payload_len???a????a??@???a????a??@@@???a????a??@@@???]???a??@@@???[????b??@@@???Y/5??b??@@@???X???b??A@@???X?	??b??A@@@???X????b??@@?  "???$let*??d?d	@???????d
?d@@??d
?d@@@??????3check_header_length??d?d"@??d?d"@@@??@??????$d#?%d%@@??'d#?(d%@@@@??*d?+d%@@@??-d?.jp?@@??@?????8total_length_from_header??8e)1?9e)I@??;e)1?<e)I@@@??????.get_udp_length??Ee)L?Fe)Z@??He)L?Ie)Z@@@??@????#buf??Re)[?Se)^@??Ue)[?Ve)^@@@@??Xe)L?Ye)^@@@@??[e)-?\e)^@@?  "???$let*??dfbf?efbj@???+payload_len??kfbk?lfbv@??nfbk?ofbv@@@??????4check_payload_length??xfby?yfb?@??{fby?|fb?@@@??@????8total_length_from_header???fb???fb?@???fb???fb?@@@??@???????'Cstruct&length???fb???fb?@???fb???fb?@@@??@????#buf???fb???fb?@???fb???fb?@@@@???fb???fb?@????fb???fb?@@@@???fby??fb?@@@???fbf??jp?@@??@?????(src_port???g????g??@???g????g??@@@???????(Udp_wire3get_udp_source_port???g????g??@???g????g??@@@??@????#buf???g????g??@???g????g??@@@@???g????g??@@@@???g????g??@@??@?????(dst_port???h????h?@???h????h?@@@???????(Udp_wire1get_udp_dest_port???h?	??h?#@?? h?	?h?#@@@??@????#buf??
h?$?h?'@??h?$?h?'@@@@??h?	?h?'@@@@??h???h?'@@??@?????'payload??i+3?i+:@??!i+3?"i+:@@@???????'Cstruct#sub??-i+=?.i+H@??0i+=?1i+H@@@??@????#buf??:i+I?;i+L@??=i+I?>i+L@@@??@?????(Udp_wire*sizeof_udp??Ii+M?Ji+`@??Li+M?Mi+`@@@??@????+payload_len??Vi+a?Wi+l@??Yi+a?Zi+l@@@@??\i+=?]i+l@@@@??_i+/?`i+l@@????"Ok??gjpt?hjpv@??????????(src_port??ujpz?vjp?A??????|jpz?}jp?@??jpz??jp?@@@????(dst_port???jp???jp?A???????jp???jp?@???jp???jp?@@@@@???jpx??jp?@@@?????'payload???jp???jp?@???jp???jp?@@@@???jpw??jp?@????jpx??jp?@@@???jpt??jp?@@@???i+/??jp?@@@???h????jp?@@@???g????jp?@@@???fbf??jp?@@@???e)-??jp?@@@???d??jp?@@@???X????jp?@@@???Unr??jp?@@@???TUY??jp?@@@???S>O??jp?A@@@???S>@??jp?@@???S>@??jp?@@???M ???k??@@@???M ? ???k??@???M ? ???k??@??????'Marshal???l????l??@?????A?    ?%error???m????m??@@@@A?????&string???m????m??@@???m????m??@@@@???m????m??@@???m??? m??@???@?????+unsafe_fill??o???o??@??o???o??@@@?Đ,pseudoheader@?????o???o??@??o???o??@@@?Đ'payload@?????%o???&o??@??(o???)o??@@@??@@??????(src_port??4o???5o??A?????:o???;o??@??=o???>o??@@@????(dst_port??Eo??Fo?	A?????Ko??Lo?	@??No??Oo?	@@@@@??Qo???Ro?
@@@??@@???'udp_buf??Zo??[o?@??]o??^o?@@@??@@???#len??fo??go?@??io??jo?@@@?  !?????(Udp_wire??tp&?up.@??wp&?xp.@@A??zp!?{p.@@??@?????'udp_buf???q2:??q2A@???q2:??q2A@@@???????'Cstruct#sub???q2D??q2O@???q2D??q2O@@@??@????'udp_buf???q2P??q2W@???q2P??q2W@@@??@???!0@???q2X??q2Y@@@??@????*sizeof_udp???q2Z??q2d@???q2Z??q2d@@@@???q2D??q2d@@@@???q26??q2d@@?  ??????3set_udp_source_port???rhl??rh@???rhl??rh@@@??@????'udp_buf???rh???rh?@???rh???rh?@@@??@????(src_port???rh???rh?@???rh???rh?@@@@???rhl??rh?@@@?  ??????1set_udp_dest_port???s????s??@???s????s??@@@??@????'udp_buf??s???s??@??s???	s??@@@??@????(dst_port??s???s??@??s???s??@@@@??s???s??@@@?  ??????.set_udp_length??$t???%t??@??'t???(t??@@@??@????'udp_buf??1t???2t??@??4t???5t??@@@??@????#len??>t????t??@??At???Bt??@@@@??Dt???Et??@@@?  ??????0set_udp_checksum??Pu???Qu??@??Su???Tu??@@@??@????'udp_buf??]u???^u??@??`u???au??@@@??@???!0@??iu???ju??@@@@??lu???mu??@@@??@?????$csum??wy???xy??@??zy???{y??@@@???????.Tcpip_checksum4ones_complement_list???y????y??@???y????y??@@@??@????"::???y????y?A????????,pseudoheader???y????y?@???y????y?@@@????????y???y?A????????'udp_buf???y???y?@???y???y?@@@?????/???y???y?A????????'payload???y???y?@???y???y?@@@?????"[]???y???y?A@???y???y?A@@@???y???y?A@@???y???y?A@@@???y???y?A@@???y???y?A@@@???y????y?A@@???y????y?@@@@???y????y?@@@@???y????y?@@??@?????$csum???~		"? ~		&@??~		"?~		&@@@????????{??~		1?~		2@??~		1?~		2@@@??@????$csum??~		,?~		0@??~		,?~		0@@@??@???!0@??&~		3?'~		4@@@@??)~		,?*~		4@@@???&0xffff@??0~		:?1~		@@@@?????$csum??9~		F?:~		J@??<~		F?=~		J@@@???~		)?@~		J@@@@??B~		?C~		J@@??????0set_udp_checksum??L	N	R?M	N	b@??O	N	R?P	N	b@@@??@????'udp_buf??Y	N	c?Z	N	j@??\	N	c?]	N	j@@@??@????$csum??f	N	k?g	N	o@??i	N	k?j	N	o@@@@??l	N	R?m	N	o@@@??o~		?p	N	o@@@??ry???s	N	o@@@??uu???v	N	o@@@??xt???y	N	o@@@??{s???|	N	o@@@??~rhl?	N	o@@@???q26??	N	o@@@???p??	N	o@@@???o???	N	oA@@???o???	N	oA@@???o????	N	oA@@???o????	N	oA@@???o????	N	oA@@@???o????	N	o@@???o????	N	o@???@?????,into_cstruct??? A	q	w?? A	q	?@??? A	q	w?? A	q	?@@@?Đ,pseudoheader@?????? A	q	??? A	q	?@??? A	q	??? A	q	?@@@?Đ'payload@?????? A	q	??? A	q	?@??? A	q	??? A	q	?@@@??@@???!t??? A	q	??? A	q	?@??? A	q	??? A	q	?@@@??@@???'udp_buf??? A	q	??? A	q	?@??? A	q	??? A	q	?@@@?  !?????(Udp_wire??? B	?	??? B	?	?@??? B	?	??? B	?	?@@A??? B	?	??? B	?	?@@??@?????0check_header_len??? C	?	??? C	?	?@??? C	?	??? C	?	?@@@??@@???????	 C	?	??	 C	?	?@@??	 C	?	??	 C	?	?@@@???????????	 D	?	??	 D	?	?@??	 D	?	??	 D	?	?@@@??@???????'Cstruct&length??	! D	?	??	" D	?	?@??	$ D	?	??	% D	?	?@@@??@????'udp_buf??	. D	?	??	/ D	?	?@??	1 D	?	??	2 D	?	?@@@@??	4 D	?	??	5 D	?	?@@@??@????*sizeof_udp??	> D	?
 ?	? D	?

@??	A D	?
 ?	B D	?

@@@@??	D D	?	??	E D	?

@@@????%Error??	L E

?	M E

@????	!Not enough space for a UDP header??	T E

?	U E

@@@??	W E

?	X E

A@@@??	Z E

?	[ E

A@@@?????"Ok??	c G
M
U?	d G
M
W@?????M??	k G
M
X?	l G
M
Z@@??	n G
M
X?	o G
M
Z@@@??	q G
M
U?	r G
M
Z@@@??	t D	?	??	u G
M
Z@@@??	w C	?	??	x G
M
ZA@@@??	z C	?	??	{ G
M
Z@@???????&Result$bind??	? I
b
f?	? I
b
q@??	? I
b
f?	? I
b
q@@@??@??????0check_header_len??	? I
b
s?	? I
b
?@??	? I
b
s?	? I
b
?@@@??@???????	? I
b
??	? I
b
?@@??	? I
b
??	? I
b
?@@@@??	? I
b
r?	? I
b
?@???	? I
b
s?	? I
b
?@@@??@??@@???????	? J
?
??	? J
?
?@@??	? J
?
??	? J
?
?@@@??@?????#len??	? K
?
??	? K
?
?@??	? K
?
??	? K
?
?@@@??????!+??	? K
?
??	? K
?
?@??	? K
?
??	? K
?
?@@@??@???????'Cstruct&length??	? K
?
??	? K
?
?@??	? K
?
??	? K
?
?@@@??@????'payload??	? K
?
??	? K
?
?@??	? K
?
??	? K
?
?@@@@??	? K
?
??	? K
?
?@@@??@????*sizeof_udp??	? K
?
??
  K
?
?@??
 K
?
??
 K
?
?@@@@??
 K
?
??
 K
?
?@@@@??
 K
?
??
	 K
?
?@@??@?????#buf??
 L
?
??
 L
?
?@??
 L
?
??
 L
?
?@@@???????'Cstruct#sub??
" L
?
??
# L
?
?@??
% L
?
??
& L
?
?@@@??@????'udp_buf??
/ L
?
??
0 L
?
?@??
2 L
?
??
3 L
?
?@@@??@???!0@??
; L
?
??
< L
?
?@@@??@?????(Udp_wire*sizeof_udp??
G L
?
??
H L
?@??
J L
?
??
K L
?@@@@??
M L
?
??
N L
?@@@@??
P L
?
??
Q L
?@@?  ??????+unsafe_fill??
\ M?
] M'@??
_ M?
` M'@@@???,pseudoheader??????
j M)?
k M5@??
m M)?
n M5@@@???'payload??????
x M7?
y M>@??
{ M7?
| M>@@@??@????!t??
? M??
? M@@??
? M??
? M@@@@??@????#buf??
? MA?
? MD@??
? MA?
? MD@@@??@????#len??
? ME?
? MH@??
? ME?
? MH@@@@??
? M?
? MH@@@????"Ok??
? NJS?
? NJU@????????
? NJV?
? NJX@@??
? NJV?
? NJX@@@??
? NJS?
? NJX@@@??
? M?
? NJX@@@??
? L
?
??
? NJX@@@??
? K
?
??
? NJX@@@??
? J
?
??
? NJY@???
? J
?
??
? NJX@@@@??
? I
b
f?
? NJY@@@??
? C	?	??
? NJY@@@??
? B	?	??
? NJY@@@??
? A	q	??
? NJYA@@??
? A	q	??
? NJYA@@??
? A	q	??
? NJYA@@??
? A	q	??
? NJYA@@@??
? A	q	s?
? NJY@@??
? A	q	s?
? NJY@???@?????,make_cstruct??
? P[a?
? P[m@??
? P[a?
? P[m@@@?Đ,pseudoheader@?????
? P[o?  P[{@?? P[o? P[{@@@?Đ'payload@????? P[}? P[?@?? P[}? P[?@@@??@@???!t?? P[?? P[?@?? P[?? P[?@@@??@?????#buf??& Q???' Q??@??) Q???* Q??@@@???????'Cstruct&create??5 Q???6 Q??@??8 Q???9 Q??@@@??@?????(Udp_wire*sizeof_udp??D Q???E Q??@??G Q???H Q??@@@@??J Q???K Q??@@@@??M Q???N Q??@@??@?????#len??X R???Y R??@??[ R???\ R??@@@?????????d R???e R??@??g R???h R??@@@??@?????(Udp_wire*sizeof_udp??s R???t R??@??v R???w R??@@@??@???????'Cstruct&length??? R???? R??@??? R???? R??@@@??@????'payload??? R???? R??@??? R???? R??@@@@??? R???? R??@@@@??? R???? R??@@@@??? R???? R??@@?  ??????+unsafe_fill??? S???? S?
@??? S???? S?
@@@???,pseudoheader??????? S??? S?@??? S??? S?@@@???'payload??????? S??? S?!@??? S??? S?!@@@??@????!t??? S?"?? S?#@??? S?"?? S?#@@@??@????#buf??? S?$?? S?'@??? S?$?? S?'@@@??@????#len??? S?(?? S?+@??? S?(?? S?+@@@@??? S???? S?+@@@????#buf??? T-1?? T-4@??? T-1?? T-4@@@??  S??? T-4@@@?? R??? T-4@@@?? Q??? T-4@@@??	 P[??
 T-4A@@?? P[|? T-4A@@?? P[n? T-4A@@@?? P[]? T-4@@?? P[]? T-4@@??l??? U58@@@??l??? U58@??l??? U58@@