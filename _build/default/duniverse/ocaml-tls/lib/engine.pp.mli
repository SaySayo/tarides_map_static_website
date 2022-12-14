Caml1999N031????   $      
   	"duniverse/ocaml-tls/lib/engine.mli????  cj    =  9??????1ocaml.ppx.context??&_none_@@ ?A??????????)tool_name???*ppx_driver@@@????,include_dirs????"[]@@@????)load_path!????
%@%@@????,open_modules*????.@.@@????+for_package3????$None8@8@@????%debug=????%falseB@B@@????+use_threadsG????
K@K@@????-use_vmthreadsP????T@T@@????/recursive_typesY????]@]@@????)principalb????%f@f@@????3transparent_modulesk????.o@o@@????-unboxed_typest????7x@x@@????-unsafe_string}????@?@?@@????'cookies?????"::???????????,library-name?@?@@????#tls??.<command-line>A@A?A@D@@??A@@?A@E@@@@?@@???????@?@@@?@@?@@@@?@@@?@???????*ocaml.text???@@ ???@@ ?A???????
  ' Transport layer security

    [TLS] is an implementation of
    {{:https://en.wikipedia.org/wiki/Transport_Layer_Security}transport
    layer security} in OCaml.  TLS is a widely used security protocol
    which establishes an end-to-end secure channel (with optional
    (mutual) authentication) between two endpoints.  It uses TCP/IP as
    transport.  This library supports all three versions of TLS:
    {{:https://tools.ietf.org/html/rfc5246}1.2, RFC5246},
    {{:https://tools.ietf.org/html/rfc4346}1.1, RFC4346}, and
    {{:https://tools.ietf.org/html/rfc2246}1.0, RFC2246}.  SSL, the
    previous protocol definition, is not supported.

    TLS is algorithmically agile: protocol version, key exchange
    algorithm, symmetric cipher, and message authentication code are
    negotiated upon connection.

    This library implements several extensions of TLS,
    {{:https://tools.ietf.org/html/rfc3268}AES ciphers},
    {{:https://tools.ietf.org/html/rfc4366}TLS extensions} (such as
    server name indication, SNI),
    {{:https://tools.ietf.org/html/rfc5746}Renegotiation extension},
    {{:https://tools.ietf.org/html/rfc7627}Session Hash and Extended
    Master Secret Extension}.

    This library does not contain insecure cipher suites (such as
    single DES, export ciphers, ...).  It does not expose the server
    time in the server random, requires secure renegotiation.

    This library consists of a core, implemented in a purely
    functional matter ({!Engine}, this module), and effectful parts:
    {!Tls_lwt} and {!Tls_mirage}.

    {e v0.15.4} ??	"duniverse/ocaml-tls/lib/engine.mliA@@?b,@@??A@@?b,@@@@??A@@?b,@@??
A@@?b,@??A@@?b,@?????!???@@ ???@@ ?A???????9 {1 Abstract state type} ?? e//?!e/M@@??#e//?$e/M@@@@??&e//?'e/M@@??)e//?*e/M@??,e//?-e/M@???A?    ?%state??6hx}?7hx?@@@@A@???)ocaml.doc???@@ ???@@ ?A???????	# The abstract type of a TLS state. ??HgOO?IgOw@@??KgOO?LgOw@@@@??NgOO?OgOw@@??QgOO?RgOw@@??Thxx?Uhx?@@??Whxx?Xhx?@?????k??@@ ??@@ ?A???????2 {1 Constructors} ??jj???kj??@@??mj???nj??@@@@??pj???qj??@@??sj???tj??@??vj???wj??@???Р&client??n??n@??@?????&Config&client???n??n&@@???n??n&@@@???????%state???n+??n0@@???n+??n0@@@??????'Cstruct!t???n3??n<@@???n3??n<@@@@???n+??n<@@@???n??n=@@@@???z??n@@ ??o@@ ?A???????	i [client client] is [tls * out] where [tls] is the initial state,
    and [out] the initial client hello ???l????m?@@???l????m?@@@@???l????m?@@???l????m?@@???n??n=@???n??n=@???Р&server???r????r??@??@?????&Config&server???r????r??@@???r????r??@@@????%state???r????r??@@???r????r??@@@???r????r??@@@@???????@@ ???@@ ?A???????	F [server server] is [tls] where [tls] is the initial server
    state ??p???q~?@@??
p???q~?@@@@??p???q~?@@??p???q~?@@??r???r??@??r???r??@?????*???@@ ???@@ ?A???????7 {1 Protocol failures} ??)t???*t??@@??,t???-t??@@@@??/t???0t??@@??2t???3t??@??5t???6t??@???A?    ?%error???w?@w@@@@A???????5AuthenticationFailure??Jx?Kx1@@???????$X509*Validation0validation_error??Wx5?XxU@@??Zx5?[xU@@@@??]x?^xU@@????7NoConfiguredCiphersuite??eyVZ?fyVr@@?????$list??nyV??oyV?@??????+Ciphersuite+ciphersuite??yyVv?zyV?@@??|yVv?}yV?@@@@??yVv??yV?@@@@???yVZ??yV?@@????4NoConfiguredVersions???z????z??@@?????$list???z????z??@??????$Core+tls_version???z????z??@@???z????z??@@@@???z????z??@@@@???z????z??@@????>NoConfiguredSignatureAlgorithm???{????{??@@?????$list???{?	??{?	
@??????$Core3signature_algorithm???{????{?	@@???{????{?	@@@@???{????{?	
@@@@???{????{?	
@@????:NoMatchingCertificateFound???|		??|		*@@?????&string???|		.??|		4@@???|		.??|		4@@@@???|		??|		4@@????7NoCertificateConfigured???}	5	9??}	5	Q@A@???}	5	9??}	5	Q@@????8CouldntSelectCertificate???~	R	V??~	R	o@A@???~	R	V??~	R	o@@@@@???w??	p	q@@@???ư??@@ ???@@ ?A???????	4 failures which can be mitigated by reconfiguration ??v???v?@@??v???v?@@@@??v???v?@@??v???v?@@??w?	p	q@@??w?	p	q@???A?    ?3client_hello_errors??& A	s	x?' A	s	?@@@@A???????1EmptyCiphersuites??1 B	?	??2 B	?	?@A@??4 B	?	??5 B	?	?@@????2NotSetCiphersuites??< C	?	??= C	?	?@@?????$list??E C	?	??F C	?	?@??????&Packet/any_ciphersuite??P C	?	??Q C	?	?@@??S C	?	??T C	?	?@@@@??V C	?	??W C	?	?@@@@??Y C	?	??Z C	?	?@@????6NoSupportedCiphersuite??a D	?	??b D	?	?@@?????$list??j D	?
?k D	?
@??????&Packet/any_ciphersuite??u D	?	??v D	?
@@??x D	?	??y D	?
@@@@??{ D	?	??| D	?
@@@@??~ D	?	?? D	?
@@????/NotSetExtension??? E

?? E

-@@?????$list??? E

G?? E

K@??????$Core0client_extension??? E

1?? E

F@@??? E

1?? E

F@@@@??? E

1?? E

K@@@@??? E

?? E

K@@?????HasSignatureAlgorithmsExtension??? F
L
P?? F
L
p@A@??? F
L
P?? F
L
p@@????>NoSignatureAlgorithmsExtension??? G
q
u?? G
q
?@A@??? G
q
u?? G
q
?@@????9NoGoodSignatureAlgorithms??? H
?
??? H
?
?@@?????$list??? H
?
??? H
?
?@??????$Core3signature_algorithm??? H
?
??? H
?
?@@??? H
?
??? H
?
?@@@@??? H
?
??? H
?
?@@@@??? H
?
??? H
?
?@@????3NoKeyShareExtension??? I
?
??? I
?
?@A@??? I
?
??? I
?
?@@????9NoSupportedGroupExtension??? J
?
??? J
?@A@??? J
?
??? J
?@@????4NotSetSupportedGroup??? K?? K&@@?????$list?? K=? KA@??????&Packet+named_group?? K*? K<@@?? K*? K<@@@@?? K*? KA@@@@?? K? KA@@????.NotSetKeyShare??! LBF?" LBU@@?????$list??* LBz?+ LB~@?????????&Packet+named_group??8 LBZ?9 LBl@@??; LBZ?< LBl@@@??????'Cstruct!t??F LBo?G LBx@@??I LBo?J LBx@@@@??L LBZ?M LBx@@@@??O LBY?P LB~@@@@??R LBF?S LB~@@?????NotSubsetKeyShareSupportedGroup??Z M??[ M?@@????????$list??f M??g M?@??????&Packet+named_group??q M??r M?@@??t M??u M?@@@@??w M??x M?@@@?????$list??? M??? M?@?????????&Packet+named_group??? M??? M?@@??? M??? M?@@@??????'Cstruct!t??? M??? M?@@??? M??? M?@@@@??? M??? M?@@@@??? M??? M?@@@@??? M??? M?@@@@??? M??? M?@@????/Has0rttAfterHRR??? N???? N??@A@??? N???? N??@@????(NoCookie??? O??? O?@A@??? O??? O?@@@@@??? A	s	??? P@@@@??? A	s	s?? P@@??? A	s	s?? P@???A?    ?%fatal??? SIN?? SIS@@@@A???????5NoSecureRenegotiation??? TX\?? TXr@A@??? TX\?? TXr@@????0NoSupportedGroup??? Usw?? Us?@A@??? Usw?? Us?@@????*NoVersions??? V???? V??@@?????$list??? V???? V??@??????$Core/tls_any_version??	 V???
 V??@@?? V??? V??@@@@?? V??? V??@@@@?? V??? V??@@????+ReaderError?? W??? W??@@??????&Reader%error??% W???& W??@@??( W???) W??@@@@??+ W???, W??@@????5NoCertificateReceived??3 X???4 X??@A@??6 X???7 X??@@????;NoCertificateVerifyReceived??> Y???? Y?@A@??A Y???B Y?@@????1NotRSACertificate??I Z?J Z)@A@??L Z?M Z)@@????+KeyTooSmall??T [*.?U [*:@A@??W [*.?X [*:@@????;SignatureVerificationFailed??_ \;??` \;[@@?????&string??h \;_?i \;e@@??k \;_?l \;e@@@@??n \;??o \;e@@????-SigningFailed??v ]fj?w ]fx@@?????&string?? ]f|?? ]f?@@??? ]f|?? ]f?@@@@??? ]fj?? ]f?@@????3BadCertificateChain??? ^???? ^??@A@??? ^???? ^??@@????+MACMismatch??? _???? _??@A@??? _???? _??@@????,MACUnderflow??? `???? `??@A@??? `???? `??@@????.RecordOverflow??? a???? a??@@?????#int??? a???? a??@@??? a???? a??@@@@??? a???? a??@@????4UnknownRecordVersion??? b???? b??@@????????#int??? b???? b??@@??? b???? b??@@@?????#int??? b???? b? @@??? b???? b? @@@@??? b???? b? @@@@??? b???? b? @@????2UnknownContentType??? c?? c@@?????#int??? c?? c@@??? c?? c@@@@??? c?? c@@????>CannotHandleApplicationDataYet?? d $? d C@A@?? d $?	 d C@@????+NoHeartbeat?? eDH? eDT@A@?? eDH? eDT@@????0BadRecordVersion?? fUY? fUj@@??????$Core/tls_any_version??& fUn?' fU?@@??) fUn?* fU?@@@@??, fUY?- fU?@@????+BadFinished??4 g???5 g??@A@??7 g???8 g??@@????:HandshakeFragmentsNotEmpty??? h???@ h??@A@??B h???C h??@@????.InsufficientDH??J i???K i??@A@??M i???N i??@@????)InvalidDH??U j???V j??@A@??X j???Y j??@@????'BadECDH??` k???a k??@@??????0Mirage_crypto_ec%error??k k???l k??@@??n k???o k??@@@@??q k???r k??@@????4InvalidRenegotiation??y l??z l?@A@??| l??} l?@@????2InvalidClientHello??? m?? m/@@?????3client_hello_errors??? m3?? mF@@??? m3?? mF@@@@??? m?? mF@@????2InvalidServerHello??? nGK?? nG^@A@??? nGK?? nG^@@????;InvalidRenegotiationVersion??? o_c?? o_@@??????$Core+tls_version??? o_??? o_?@@??? o_??? o_?@@@@??? o_c?? o_?@@????5InappropriateFallback??? p???? p??@A@??? p???? p??@@????-UnexpectedCCS??? q???? q??@A@??? q???? q??@@????3UnexpectedHandshake??? r???? r??@@??????$Core-tls_handshake??? r???? r??@@??? r???? r??@@@@??? r???? r??@@????7InvalidCertificateUsage??? s???? s?@A@??? s???? s?@@?????InvalidCertificateExtendedUsage??? t?? t2@A@??? t?? t2@@????.InvalidSession?? u37? u3F@A@?? u37? u3F@@????5NoApplicationProtocol?? vGK? vGa@A@?? vGK? vGa@@????1HelloRetryRequest?? wbf? wbx@A@?? wbf? wbx@@????.InvalidMessage??% xy}?& xy?@A@??( xy}?) xy?@@????0Toomany0rttbytes??0 y???1 y??@A@??3 y???4 y??@@????2MissingContentType??; z???< z??@A@??> z???? z??@@????+Downgrade12??F {???G {??@A@??I {???J {??@@????+Downgrade11??Q |???R |??@A@??T |???U |??@@@@@??W SIV?X }??@@@???!??@@ ??@@ ?A???????	4 failures from received garbage or lack of features ??h R?i RH@@??k R?l RH@@@@??n R?o RH@@??q R?r RH@@??t SII?u }??@@??w SII?x }??@???A?    ?'failure??? ????? ??@@@@A???????%Error??? ?	?? ?	@@?????%error??? ?	?? ?	@@??? ?	?? ?	@@@@??? ?	?? ?	@@????%Fatal??? ?!?? ?'@@?????%fatal??? ?+?? ?0@@??? ?+?? ?0@@@@??? ?!?? ?0@@@@@??? ???? ?12@@@?????s@@ ??t@@ ?A???????2 type of failures ??? ???? ??@@??? ???? ??@@@@??? ???? ??@@??? ???? ??@???(deriving??? ?16?? ?1>@????????'sexp_of??? ?1??? ?1F@??? ?1??? ?1F@@@@??? ?1??? ?1F@@??? ?13?? ?1G@@??? ????? ?1G@@??? ????? ?1G@???????????-ocaml.warning??&_none_A@ ??A@ ?A???????#-32??A@ ??A@ ?A@??A@ ??A@ ?A@@@??A@ ??A@ ?A@??A@ ??A@ ?A?? ???? ?1GA???Р/sexp_of_failure??! ????" ??@??@???????* ????+ ??@@??- ????. ??@@@??????(Sexplib0$Sexp!t??9 ????: ??A@??< ????= ??A@@??? ????@ ??A@@@@??B ????C ?1G@??E ????F ?1G@@??H ????I ?1GA@??K ????L ?1GA???)ocaml.doc??RA@ ??SA@ ?A???????'@inline??]A@ ??^A@ ?A@??`A@ ??aA@ ?A@@@??cA@ ??dA@ ?A@??fA@ ??gA@ ?A???+merlin.hide??mA@ ??nA@ ?A?@??)@@ ??*@@ ?A@??t ????u ?1GA???Р0alert_of_failure??} ????~ ???@??@????'failure??? ????? ???@@??? ????? ???@@@?????&Packet*alert_type??? ????? ???@@??? ????? ???@@@??? ????? ???@@@@???d??X@@ ??Y@@ ?A???????	M [alert_of_failure failure] is [alert], the TLS alert type for this failure. ??? ?II?? ?I?@@??? ?II?? ?I?@@@@??? ?II?? ?I?@@??? ?II?? ?I?@@??? ????? ???@??? ????? ???@???Р1string_of_failure??? ?-1?? ?-B@??@????'failure??? ?-E?? ?-L@@??? ?-E?? ?-L@@@????&string??? ?-P?? ?-V@@??? ?-P?? ?-V@@@??? ?-E?? ?-V@@@@???????@@ ???@@ ?A???????	V [string_of_failure failure] is [string], the string representation of the [failure]. ??? ????? ??,@@??? ????? ??,@@@@??? ????? ??,@@??? ????? ??,@@??? ?--?? ?-V@??? ?--?? ?-V@????????@@ ???@@ ?A???????7 {1 Protocol handling} ?? ?XX? ?Xt@@?? ?XX? ?Xt@@@@?? ?XX? ?Xt@@?? ?XX? ?Xt@?? ?XX? ?Xt@???A?    ?#ret??' ??( ?@@@@A?????&result??0 ????1 ???@??????????"Ok??> ? ?? ?#@@?????%state??G ?'?H ?,@@??J ?'?K ?,@@@@??M ? ?N ?,@@????#Eof??U ?/?V ?3@A@??X ?/?Y ?3@@????%Alert??` ?6?a ?<@@??????&Packet*alert_type??k ?@?l ?Q@@??n ?@?o ?Q@@@@??q ?6?r ?Q@@@@@??t ??u ?S@@@???????(Response?? ?T[?? ?Td@@?????&option??? ?Tr?? ?Tx@??????'Cstruct!t??? ?Th?? ?Tq@@??? ?Th?? ?Tq@@@@??? ?Th?? ?Tx@@@@??? ?T[?? ?Tx@@@@@??? ?TY?? ?Tz@@@???????$Data??? ?{??? ?{?@@?????&option??? ?{??? ?{?@??????'Cstruct!t??? ?{??? ?{?@@??? ?{??? ?{?@@@@??? ?{??? ?{?@@@@??? ?{??? ?{?@@@@@??? ?{??? ?{?@@@@??? ??? ?{?@@@????????'failure??? ????? ???@@??? ????? ???@@@???????(Response??? ????? ???@@??????'Cstruct!t??? ????? ???@@??? ????? ???@@@@??? ????? ???@@@@@??? ????? ???@@@@??? ????? ???@@@@??	 ??	 ???@@@???˰?	?@@ ??	?@@ ?A???????
  ? result type of {!handle_tls}: either failed to handle the incoming
    buffer ([`Fail]) with {!failure} and potentially a message to send
    to the other endpoint, or sucessful operation ([`Ok]) with a new
    {!state}, an end of file ([`Eof]), or an incoming ([`Alert]).
    Possibly some [`Response] to the other endpoint is needed, and
    potentially some [`Data] for the application was received. ??	 ?vv?	 ??@@??	 ?vv?	 ??@@@@??	 ?vv?	 ??@@??	 ?vv?	 ??@@??	 ??	 ???@@??	! ??	" ???@???Р*handle_tls??	* ?PT?	+ ?P^@??@????%state??	4 ?Pk?	5 ?Pp@@??	7 ?Pk?	8 ?Pp@@@??@?????'Cstruct!t??	C ?Pt?	D ?P}@@??	F ?Pt?	G ?P}@@@????#ret??	N ?P??	O ?P?@@??	Q ?P??	R ?P?@@@??	T ?Pt?	U ?P?@@@??	W ?Pk?	X ?P?@@@@???	!??
@@ ??
@@ ?A???????	z [handle_tls state buffer] is [ret], depending on incoming [state]
    and [buffer], the result is the appropriate {!ret} ??	h ????	i ?O@@??	k ????	l ?O@@@@??	n ????	o ?O@@??	q ????	r ?O@@??	t ?PP?	u ?P?@??	w ?PP?	x ?P?@???Р2can_handle_appdata??	? ??	? ?@??@????%state??	? ??	? ?#@@??	? ??	? ?#@@@????$bool??	? ?'?	? ?+@@??	? ?'?	? ?+@@@??	? ??	? ?+@@@@???	e??
Y@@ ??
Z@@ ?A???????	v [can_handle_appdata state] is a predicate which indicates when the
    connection has already completed a handshake. ??	? ????	? ??@@??	? ????	? ??@@@@??	? ????	? ??@@??	? ????	? ??@@??	? ??	? ?+@??	? ??	? ?+@???Р5handshake_in_progress??	? ????	? ???@??@????%state??	? ????	? ???@@??	? ????	? ???@@@????$bool??	? ????	? ???@@??	? ????	? ???@@@??	? ????	? ???@@@@???	???
?@@ ??
?@@ ?A???????	x [handshake_in_progrss state] is a predicate which indicates whether there
    is a handshake in progress or scheduled. ??	? ?--?	? ?{?@@??	? ?--?	? ?{?@@@@??	? ?--?	? ?{?@@??	? ?--?	? ?{?@@??	? ????	? ???@??	? ????
  ???@???Р5send_application_data??
 ????
	 ???@??@????%state??
 ????
 ???@@??
 ????
 ???@@@??@????$list??
 ????
  ???@??????'Cstruct!t??
* ????
+ ???@@??
- ????
. ???@@@@??
0 ????
1 ???@@@????&option??
8 ????
9 ???@????????%state??
D ????
E ???@@??
G ????
H ???@@@??????'Cstruct!t??
R ????
S ???@@??
U ????
V ???@@@@??
X ????
Y ???@@@@??
[ ????
\ ???@@@??
^ ????
_ ???@@@??
a ????
b ???@@@@???
+??@@ ?? @@ ?A???????	? [send_application_data tls outs] is [(tls' * out) option] where
    [tls'] is the new tls state, and [out] the cstruct to send over the
    wire (encrypted [outs]). ??
r ????
s ?b?@@??
u ????
v ?b?@@@@??
x ????
y ?b?@@??
{ ????
| ?b?@@??
~ ????
 ???@??
? ????
? ???@???Р1send_close_notify??
? ?`d?
? ?`u@??@????%state??
? ?`|?
? ?`?@@??
? ?`|?
? ?`?@@@???????%state??
? ?`??
? ?`?@@??
? ?`??
? ?`?@@@??????'Cstruct!t??
? ?`??
? ?`?@@??
? ?`??
? ?`?@@@@??
? ?`??
? ?`?@@@??
? ?`|?
? ?`?@@@@???
???w@@ ??x@@ ?A???????	? [send_close_notify tls] is [tls' * out] where [tls'] is the new
    tls state, and out the (possible encrypted) close notify alert. ??
? ????
? ?_@@??
? ????
? ?_@@@@??
? ????
? ?_@@??
? ????
? ?_@@??
? ?``?
? ?`?@??
? ?``?
? ?`?@???Р%reneg??
? ????
? ???@???-authenticator??????$X509-Authenticator!t??
? ????
? ???@@??
? ????
? ???@@@???.acceptable_cas????$list?? ??? ??#@???????$X5092Distinguished_name!t?? ??? ??@@?? ??? ??@@@@?? ??? ??#@@@???$cert?????&Config(own_cert??" ??-?# ??<@@??% ??-?& ??<@@@??@????%state??/ ?@B?0 ?@G@@??2 ?@B?3 ?@G@@@????&option??: ?@_?; ?@e@????????%state??F ?@L?G ?@Q@@??I ?@L?J ?@Q@@@??????'Cstruct!t??T ?@T?U ?@]@@??W ?@T?X ?@]@@@@??Z ?@L?[ ?@]@@@@??] ?@K?^ ?@e@@@??` ?@B?a ?@e@@@??c ??'?d ?@e@@@??f ????g ?@e@@@??i ????j ?@e@@@@???3??'@@ ??(@@ ?A???????
  " [reneg ~authenticator ~acceptable_cas ~cert tls] initiates a renegotation on
    [tls], using the provided [authenticator]. It is [tls' * out] where [tls']
    is the new tls state, and [out] either a client hello or hello request
    (depending on which communication endpoint [tls] is). ??z ????{ ???@@??} ????~ ???@@@@??? ????? ???@@??? ????? ???@@??? ????? ?@e@??? ????? ?@e@???Р*key_update??? ?KO?? ?KY@???'request????$bool??? ?Ke?? ?Ki@@??? ?Ke?? ?Ki@@@??@????%state??? ?Km?? ?Kr@@??? ?Km?? ?Kr@@@????&result??? ?K??? ?K?@????????%state??? ?Kw?? ?K|@@??? ?Kw?? ?K|@@@??????'Cstruct!t??? ?K?? ?K?@@??? ?K?? ?K?@@@@??? ?Kw?? ?K?@@@?????'failure??? ?K??? ?K?@@??? ?K??? ?K?@@@@??? ?Kv?? ?K?@@@??? ?Km?? ?K?@@@??? ?K\?? ?K?@@@@???????@@ ???@@ ?A???????	? [key_update ~request state] initiates a KeyUpdate (TLS 1.3 only). If
    [request] is provided and [true] (the default), the KeyUpdate message
    contains a request that the peer should update their traffic key as well. ??? ?gg?? ??J@@??? ?gg?  ??J@@@@?? ?gg? ??J@@?? ?gg? ??J@@?? ?KK?	 ?K?@?? ?KK? ?K?@????????@@ ???@@ ?A???????9 {1 Session information} ?? ???? ???@@??! ????" ???@@@@??$ ????% ???@@??' ????( ???@??* ????+ ???@???A?    ?%epoch??4 ????5 ???@@@@A???????,InitialEpoch??? ????@ ???@A@??B ????C ???@@????%Epoch??J ????K ???@@??????$Core*epoch_data??U ????V ???@@??X ????Y ???@@@@??[ ????\ ???@@@@@??^ ????_ ???@@@???(??@@ ??@@ ?A???????	? polymorphic variant of session information.  The first variant
    [`InitialEpoch] will only be used for TLS states without completed
    handshake.  The second variant, [`Epoch], contains actual session
    data. ??o ????p ???@@??r ????s ???@@@@??u ????v ???@@??x ????y ???@???(deriving?? ????? ???@????????'sexp_of??? ????? ???@??? ????? ???@@@@??? ????? ???@@??? ????? ???@@??? ????? ???@@??? ????? ???@???????????????A@ ???A@ ?A???????#-32???A@ ???A@ ?A@???A@ ???A@ ?A@@@???A@ ???A@ ?A@???A@ ???A@ ?A??? ????? ???A???Р-sexp_of_epoch??? ????? ???@??@???????? ????? ???@@??? ????? ???@@@???????????? ????? ???A@??? ????? ???A@@??? ????? ???A@@@@??? ????? ???@??? ????? ???@@??? ????? ???A@??? ????? ???A???????A@ ???A@ ?A???????????A@ ?? A@ ?A@??A@ ??A@ ?A@@@??A@ ??A@ ?A@??A@ ??	A@ ?A??????A@ ??A@ ?A?@???@@ ???@@ ?A@?? ???? ???A???Р%epoch?? ?<@? ?<E@??@????%state??( ?<H?) ?<M@@??+ ?<H?, ?<M@@@????%epoch??3 ?<Q?4 ?<V@@??6 ?<Q?7 ?<V@@@??9 ?<H?: ?<V@@@@??????@@ ???@@ ?A???????	G [epoch state] is [epoch], which contains the session
    information. ??J ????K ?(;@@??M ????N ?(;@@@@??P ????Q ?(;@@??S ????T ?(;@@??V ?<<?W ?<V@??Y ?<<?Z ?<V@@