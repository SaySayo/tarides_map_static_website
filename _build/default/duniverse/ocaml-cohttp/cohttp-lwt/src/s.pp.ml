Caml1999M031????   ,         	*duniverse/ocaml-cohttp/cohttp-lwt/src/s.ml????  N?  *  7?  4??????1ocaml.ppx.context??&_none_@@ ?A??????????)tool_name???*ppx_driver@@@????,include_dirs????"[]@@@????)load_path!????
%@%@@????,open_modules*????.@.@@????+for_package3????$None8@8@@????%debug=????%falseB@B@@????+use_threadsG????
K@K@@????-use_vmthreadsP????T@T@@????/recursive_typesY????]@]@@????)principalb????%f@f@@????3transparent_modulesk????.o@o@@????-unboxed_typest????7x@x@@????-unsafe_string}????@?@?@@????'cookies?????"::???????????,library-name?@?@@????*cohttp_lwt??.<command-line>A@A?A@K@@??A@@?A@L@@@@?@@???????@?@@@?@@?@@@@?@@@?@???????*ocaml.text????????	? Portable Lwt implementation of HTTP client and server, without depending on
    a particular I/O implementation. The various [Make] functors must be
    instantiated by an implementation that provides a concrete IO monad. ??	*duniverse/ocaml-cohttp/cohttp-lwt/src/s.mlA@@?C ? ?@@@@@@?????"IO??
F+?F-@???????????????&Cohttp!S"IO??G4>? G4I@?@@????!t??(G4W?)G4X@    ?????!a??2G4T?3G4V@@@?BA@@@A??????#Lwt!t??>G4^??G4c@???!a??EG4[?FG4]@@@@?	@@@@??IG4O@@?,@@??LG46@@?@???A?    ?%error??VIel?WIeq@@@@A@@??YIeg@@?@???Р%catch??bKsy?cKs~@??@??@????$unit??nKs??oKs?@@?@@@????!t??wKs??xKs?@???!a??~Ks??Ks?@@@@?	@@@?
@@@????!t???Ks???Ks?@?????&result???Ks???Ks?@???!a???Ks???Ks?@@@?????%error???Ks???Ks?@@?@@@@???Ks?@@@@?@@@???Ks? @@@@???)ocaml.docc???????	q [catch f] is [f () >|= Result.ok], unless [f] fails with an IO error, in
      which case it returns the error. ???L????M? @@@@@@@???Ksu1@?2@???Р(pp_error???O"(??O"0@??@?????&Format)formatter???O"3??O"C@@?@@@??@????%error???O"G??O"L@@?@@@????$unit???O"P??O"T@@?@@@?@@@?@@@@@???O"$@?@@???F0??PUX@@???D????????	3 The IO module is specialized for the [Lwt] monad. ???E ? ???E ?@@@@@@@???F@?@?????#Net??T???T??@?????????"IO??U???U??@????"IO??U???U??@?@@@??U??@?@???A?    ?#ctx??(W? ?)W?@@@@A@???(deriving??/W??0W?@????????'sexp_of??;W??<W?@?@@@@@???W??@W?@@??BW??@@?@???????????-ocaml.warning??&_none_A@ ?A???????#-32@@@@@?A???Р+sexp_of_ctx;??@????BA@A@@??????(Sexplib0$Sexp!t?JIA@@@@@@@11@@???)ocaml.doc&???????'@inline.@.@@@.@.???+merlin.hide2?@9@(???Р+default_ctx???Y ??Y+@????#ctx???Y.??Y1@@?@@@@@???Y@?@???Р+connect_uri???Z28??Z2C@???#ctx????#ctx???Z2J??Z2M@@?@@@??@?????#Uri!t???Z2Q??Z2V@@?@@@?????#Lwt!t???Z2t??Z2y@?????????"IO$conn???Z2[??Z2b@@?@@@??????"IO"ic???Z2e??Z2j@@?@@@??????"IO"oc???Z2m??Z2r@@?@@@@?@@@@???Z2Z+@@@?8,@@@???Z2F.@@@@@???Z240@?1@???Р(close_in???[z???[z?@??@?????"IO"ic??[z??	[z?@@?@@@????$unit??[z??[z?@@?@@@?@@@@@??[z|@?@???Р)close_out??\??? \??@??@?????"IO"oc??+\???,\??@@?@@@????$unit??4\???5\??@@?@@@?@@@@@??9\??@?@???Р%close??B]???C]??@??@?????"IO"ic??N]???O]??@@?@@@??@?????"IO"oc??[]???\]??@@?@@@????$unit??d]???e]??@@?@@@?@@@?@@@@@??j]??@?@@??mT???n^??@@????(???????	q The [Net] module type defines how to connect to a remote node and close the
    resulting channels to clean up. ??{RZZ?|S??@@@@@@@??~T??@?@?????&Client???e`l??e`r@??????A?    ?#ctx???fy???fy?@@@@A@@???fy{@@?@???Р$call???h????h??@???#ctx????#ctx???i????i??@@?@@@???'headers??????&Cohttp&Header!t???j????j??@@?@@@???$body?????$Body!t???k????k??@@?@@@???'chunked????$bool???l????l??@@?@@@??@??????&Cohttp$Code$meth???m????m??@@?@@@??@?????#Uri!t???n??n@@?@@@?????#Lwt!t?? o1?o6@??????????&Cohttp(Response!t??o?o&@@?@@@??????$Body!t??o)?o/@@?@@@@?@@@@??!o!@@@?."@@@?<#@@@??%l??%@@@??'k??'@@@??)j??)@@@??+i??+@@@@????吠?????
  ? [call ?ctx ?headers ?body ?chunked meth uri] will resolve the [uri] to a
      concrete network endpoint using context [ctx]. It will then issue an HTTP
      request with method [meth], adding request headers from [headers] if
      present. If a [body] is specified then that will be included with the
      request, using chunked encoding if [chunked] is true. The default is to
      disable chunked encoding for HTTP request bodies for compatibility
      reasons.

      In most cases you should use the more specific helper calls in the
      interface rather than invoke this function directly. See {!head}, {!get}
      and {!post} for some examples.

      To avoid leaks, the body needs to be consumed, using the functions
      provided in the {!Body} module and, if not necessary, should be explicitly
      drained calling {!Body.drain_body}. Leaks are logged as debug messages by
      the client, these can be enabled activating the debug logging. For
      example, this can be done as follows in [cohttp-lwt-unix]

      {[
        Cohttp_lwt_unix.Debug.activate_debug ();
        Logs.set_level (Some Logs.Warning)
      ]}

      Depending on [ctx], the library is able to send a simple HTTP request or
      an encrypted one with a secured protocol (such as TLS). Depending on how
      conduit is configured, [ctx] might initiate a secured connection with TLS
      (using [ocaml-tls]) or SSL (using [ocaml-ssl]), on [*:443] or on the
      specified port by the user. If neitehr [ocaml-tls] or [ocaml-ssl] are
      installed on the system, [cohttp]/[conduit] tries the usual ([*:80]) or
      the specified port by the user in a non-secured way. ??8p79?9 M??@@@@@@@??;h??;@?<@???Р$head??D O???E O??@???#ctx????#ctx??P P???Q P??@@?@@@???'headers??????&Cohttp&Header!t??a P???b P??@@?@@@??@?????#Uri!t??n P? ?o P?@@?@@@?????#Lwt!t??y P??z P? @???????&Cohttp(Response!t??? P?	?? P?@@?@@@@?@@@?@@@??? P??@@@??? P??@@@@@??? O??@?@???Р#get??? R"(?? R"+@???#ctx????#ctx??? S.7?? S.:@@?@@@???'headers??????&Cohttp&Header!t??? T>K?? T>Z@@?@@@??@?????#Uri!t??? U^b?? U^g@@?@@@?????#Lwt!t??? Vk??? Vk?@??????????&Cohttp(Response!t??? Vkp?? Vk?@@?@@@??????$Body!t??? Vk??? Vk?@@?@@@@?@@@@??? Vko!@@@?."@@@??? T>B$@@@??? S.2&@@@@@??? R"$(@?)@???Р&delete??? X???  X??@???#ctx????#ctx?? Y??? Y??@@?@@@???$body?????$Body!t?? Z??? Z??@@?@@@???'chunked????$bool??' [???( [??@@?@@@???'headers??????&Cohttp&Header!t??8 \???9 \??@@?@@@??@?????#Uri!t??E ]???F ]?@@?@@@?????#Lwt!t??P ^)?Q ^.@??????????&Cohttp(Response!t??` ^?a ^@@?@@@??????$Body!t??l ^!?m ^'@@?@@@@?@@@@??q ^!@@@?."@@@??t \??$@@@??v [??&@@@??x Z??(@@@??z Y??*@@@@@??| X??,@?-@???Р$post??? `06?? `0:@???#ctx????#ctx??? a=F?? a=I@@?@@@???$body?????$Body!t??? bMW?? bM]@@?@@@???'chunked????$bool??? can?? car@@?@@@???'headers??????&Cohttp&Header!t??? dv??? dv?@@?@@@??@?????#Uri!t??? e???? e??@@?@@@?????#Lwt!t??? f???? f??@??????????&Cohttp(Response!t??? f???? f??@@?@@@??????$Body!t??? f???? f??@@?@@@@?@@@@??? f??!@@@?."@@@??? dvz$@@@??? cae&@@@??? bMQ(@@@??  a=A*@@@@@?? `02,@?-@???Р#put?? h??? h??@???#ctx????#ctx?? i??? i??@@?@@@???$body?????$Body!t??& j???' j??@@?@@@???'chunked????$bool??3 k??4 k?@@?@@@???'headers??????&Cohttp&Header!t??D l?E l,@@?@@@??@?????#Uri!t??Q m04?R m09@@?@@@?????#Lwt!t??\ n=^?] n=c@??????????&Cohttp(Response!t??l n=B?m n=S@@?@@@??????$Body!t??x n=V?y n=\@@?@@@@?@@@@??} n=A!@@@?."@@@??? l$@@@??? k??&@@@??? j??(@@@??? i??*@@@@@??? h??,@?-@???Р%patch??? pek?? pep@???#ctx????#ctx??? qs|?? qs@@?@@@???$body?????$Body!t??? r???? r??@@?@@@???'chunked????$bool??? s???? s??@@?@@@???'headers??????&Cohttp&Header!t??? t???? t??@@?@@@??@?????#Uri!t??? u???? u??@@?@@@?????#Lwt!t??? v???? v??@??????????&Cohttp(Response!t??? v???? v??@@?@@@??????$Body!t??? v???? v??@@?@@@@?@@@@?? v??!@@@?."@@@?? t??$@@@?? s??&@@@??
 r??(@@@?? qsw*@@@@@?? peg,@?-@???Р)post_form?? x? x@???#ctx????#ctx??# y?$ y@@?@@@???'headers??????&Cohttp&Header!t??4 z#0?5 z#?@@?@@@???&params????$list??A {Ce?B {Ci@????????&string??M {CO?N {CU@@?@@@?????$list??W {C_?X {Cc@?????&string??` {CX?a {C^@@?@@@@?@@@@?@@@@??f {CN%@@@??@?????#Uri!t??q |mq?r |mv@@?@@@?????#Lwt!t??| }z??} }z?@??????????&Cohttp(Response!t??? }z?? }z?@@?@@@??????$Body!t??? }z??? }z?@@?@@@@?@@@@??? }z~!@@@?."@@@??? {CG$@@@??? z#'&@@@??? y(@@@@@??? x*@?+@???Р%callv??? ???? ??@???#ctx????#ctx??? ????? ???@@?@@@??@?????#Uri!t??? ????? ???@@?@@@??@?????*Lwt_stream!t??? ????? ???@??????????&Cohttp'Request!t??? ????? ???@@?@@@??????$Body!t??? ????? ???@@?@@@@?@@@@??? ???!@@@?????#Lwt!t??? ??+?  ??0@??????*Lwt_stream!t??
 ??? ??*@??????????&Cohttp(Response!t?? ??? ??@@?@@@??????$Body!t??& ???' ??@@?@@@@?@@@@??+ ??!@@@@?-@@@?8.@@@?g/@@@??0 ???1@@@@@??2 ??3@?4@@??5e`u?6 ?14@@????𐠠????
  w The [Client] module implements non-pipelined single HTTP client calls. Each
    call will open a separate {!Net} connection. For best results, the {!Body}
    that is returned should be consumed in order to close the file descriptor in
    a timely fashion. It will still be finalized by a GC hook if it is not used
    up, but this can take some additional time to happen. ??C`???Dd#_@@@@@@@??Fe``@?@?????&Server??O ?y??P ?y?@?????????"IO??\ ????] ???@????"IO??d ????e ???@?@@@??h ???@?@???A?    ?$conn??r ????s ???@@@@A?????????"IO$conn??? ????? ???@@?@@@???????&Cohttp*Connection!t??? ????? ???@@?@@@@?@@@@??? ???@@?@???A?    ?/response_action??? ????? ???@@@@A???????&Expert??? ????? ???@@??????????&Cohttp(Response!t??? ????? ??@@?@@@???@?????"IO"ic??? ???? ??@@?@@@??@?????"IO"oc??? ???? ??@@?@@@?????#Lwt!t??? ??'?? ??,@?????$unit??? ??"?? ??&@@?@@@@?@@@?@@@?'@@@@?6?? ??-@@@@?H@@????(Response??? ?.4?? ?.=@@??????????&Cohttp(Response!t?? ?.A? ?.R@@?@@@??????$Body!t?? ?.U? ?.[@@?@@@@?@@@@?!@@@@@?? ???? ?.]@@@???qӐ??????
  Q A request handler can respond in two ways:

      - Using [`Response], with a {!Response.t} and a {!Body.t}.
      - Using [`Expert], with a {!Response.t} and an IO function that is
        expected to write the response body. The IO function has access to the
        underlying {!IO.ic} and {!IO.oc}, which allows writing a response body
        more efficiently, stream a response or to switch protocols entirely
        (e.g. websockets). Processing of pipelined requests continue after the
        {!unit Lwt.t} is resolved. The connection can be closed by closing the
        {!IO.ic}. ??& ?^`?' ???@@@@@@@??) ???@@?@???A?    ?!t??3 ????4 ???@@@@A@@??6 ???@@?@???Р4make_response_action??? ????@ ???@???+conn_closed??@????$conn??M ????N ???@@?@@@????$unit??V ????W ???@@?@@@?@@@???(callback??@????$conn??f ??g ?@@?@@@??@??????&Cohttp'Request!t??u ??v ?(@@?@@@??@?????$Body!t??? ?,?? ?2@@?@@@?????#Lwt!t??? ?F?? ?K@?????/response_action??? ?6?? ?E@@?@@@@?@@@?@@@?'@@@?7@@@??@????$unit??? ?PT?? ?PX@@?@@@????!t??? ?\`?? ?\a@@?@@@?@@@??? ?@@@??? ???@@@@@??? ???	@?
@???Р+make_expert??? ?ci?? ?ct@???+conn_closed??@????$conn??? ?w??? ?w?@@?@@@????$unit??? ?w??? ?w?@@?@@@?@@@???(callback??@????$conn??? ????? ???@@?@@@??@??????&Cohttp'Request!t??? ????? ???@@?@@@??@?????$Body!t??	 ????	 ???@@?@@@?????#Lwt!t??	 ???	 ??!@??????????&Cohttp(Response!t??	 ????	 ???@@?@@@???@?????"IO"ic??	, ????	- ??@@?@@@??@?????"IO"oc??	9 ???	: ??@@?@@@?????#Lwt!t??	D ???	E ??@?????$unit??	M ???	N ??@@?@@@@?@@@?@@@?'@@@@?6?	T ??@@@@??	V ???H@@@?UI@@@?cJ@@@?sK@@@??@????$unit??	b ?&*?	c ?&.@@?@@@????!t??	k ?26?	l ?27@@?@@@?@@@??	p ???@@@??	r ?w{@@@@@??	t ?ce	@?
@???Р$make??	} ?9??	~ ?9C@???+conn_closed??@????$conn??	? ?FX?	? ?F\@@?@@@????$unit??	? ?F`?	? ?Fd@@?@@@?@@@???(callback??@????$conn??	? ?w~?	? ?w?@@?@@@??@??????&Cohttp'Request!t??	? ?w??	? ?w?@@?@@@??@?????$Body!t??	? ?w??	? ?w?@@?@@@?????#Lwt!t??	? ?w??	? ?w?@??????????&Cohttp(Response!t??	? ?w??	? ?w?@@?@@@??????$Body!t??	? ?w??	? ?w?@@?@@@@?@@@@??	? ?w?!@@@?."@@@?<#@@@?L$@@@??@????$unit??	? ????	? ???@@?@@@????!t??
 ????
 ???@@?@@@?@@@??
 ?im@@@??
 ?FJ@@@@@??

 ?9;	@?
@???Р2resolve_local_file??
 ????
 ???@???'docroot????&string??
 ???
  ??@@?@@@???#uri?????#Uri!t??
. ???
/ ??@@?@@@????&string??
7 ???
8 ??@@?@@@??
; ??@@@??
= ???@@@@???	?
????????	{ Resolve a URI and a docroot into a concrete local filename.

      Deprecated. Please use Cohttp.Path.resolve_local_file. ??
J ?!?
K ?b?@@@@@@@??
M ???@?@???Р'respond??
V ????
W ???@???'headers??????&Cohttp&Header!t??
f ????
g ???@@?@@@???%flush????$bool??
s ????
t ???@@?@@@???&status??????&Cohttp$Code+status_code??
? ????
? ??@@?@@@???$body?????$Body!t??
? ??
? ?@@?@@@??@????$unit??
? ?#?
? ?'@@?@@@?????#Lwt!t??
? ?+L?
? ?+Q@??????????&Cohttp(Response!t??
? ?+0?
? ?+A@@?@@@??????$Body!t??
? ?+D?
? ?+J@@?@@@@?@@@@??
? ?+/!@@@?."@@@??
? ?$@@@??
? ???&@@@??
? ???(@@@??
? ???*@@@@???
+????????
  ) [respond ?headers ?flush ~status ~body] will respond to an HTTP request
      with the given [status] code and response [body]. If [flush] is true, then
      every response chunk will be flushed to the network rather than being
      buffered. [flush] is true by default. The transfer encoding will be
      detected from the [body] value and set to chunked encoding if it cannot be
      determined immediately. You can override the encoding by supplying an
      appropriate [Content-length] or [Transfer-encoding] in the [headers]
      parameter. ??
? ?RT?
? ?o?@@@@@@@??
? ???:@?;@???Р.respond_string??
? ????
? ???@???%flush????$bool??
? ????
? ???@@?@@@???'headers??????&Cohttp&Header!t??	 ????
 ???@@?@@@???&status??????&Cohttp$Code+status_code?? ???? ???@@?@@@???$body????&string??' ????( ??@@?@@@??@????$unit??2 ??3 ?@@?@@@?????#Lwt!t??= ?4?> ?9@??????????&Cohttp(Response!t??M ??N ?)@@?@@@??????$Body!t??Y ?,?Z ?2@@?@@@@?@@@@??^ ?!@@@?."@@@??a ???$@@@??c ???&@@@??e ???(@@@??g ???*@@@@@??i ???,@?-@???Р-respond_error??r ?;A?s ?;N@???'headers??????&Cohttp&Header!t??? ?Q^?? ?Qm@@?@@@???&status??????&Cohttp$Code+status_code??? ?q}?? ?q?@@?@@@???$body????&string??? ????? ???@@?@@@??@????$unit??? ????? ???@@?@@@?????#Lwt!t??? ????? ???@??????????&Cohttp(Response!t??? ????? ???@@?@@@??????$Body!t??? ????? ???@@?@@@@?@@@@??? ???!@@@?."@@@??? ???$@@@??? ?qu&@@@??? ?QU(@@@@@??? ?;=*@?+@???Р0respond_redirect??? ????? ???@???'headers??????&Cohttp&Header!t??? ???? ??@@?@@@???#uri?????#Uri!t?? ? ?	 ?%@@?@@@??@????$unit?? ?)-? ?)1@@?@@@?????#Lwt!t?? ?5V? ?5[@??????????&Cohttp(Response!t??. ?5:?/ ?5K@@?@@@??????$Body!t??: ?5N?; ?5T@@?@@@@?@@@@??? ?59!@@@?."@@@??B ?$@@@??D ???&@@@@@??F ???(@?)@???Р1respond_need_auth??O ?]c?P ?]t@???'headers??????&Cohttp&Header!t??_ ?w??` ?w?@@?@@@???$auth??????&Cohttp$Auth)challenge??p ????q ???@@?@@@??@????$unit??{ ????| ???@@?@@@?????#Lwt!t??? ????? ???@??????????&Cohttp(Response!t??? ????? ???@@?@@@??????$Body!t??? ????? ???@@?@@@@?@@@@??? ???!@@@?."@@@??? ???$@@@??? ?w{&@@@@@??? ?]_(@?)@???Р1respond_not_found??? ????? ??@???#uri?????#Uri!t??? ??? ?@@?@@@??@????$unit??? ??? ?@@?@@@?????#Lwt!t??? ?>?? ?C@??????????&Cohttp(Response!t??? ?"?? ?3@@?@@@??????$Body!t??? ?6?? ?<@@?@@@@?@@@@??? ?!!@@@?."@@@??? ?$@@@@@?? ???&@?'@???Р(callback??
 ?EK? ?ES@??@????!t?? ?EV? ?EW@@?@@@??@?????"IO$conn??! ?E[?" ?Eb@@?@@@??@?????"IO"ic??. ?Ef?/ ?Ek@@?@@@??@?????"IO"oc??; ?Eo?< ?Et@@?@@@?????#Lwt!t??F ?E}?G ?E?@?????$unit??O ?Ex?P ?E|@@?@@@@?@@@?@@@?'@@@?5@@@?C@@@@@??X ?EG@?@@??[ ?y??\ ???@@???????????	= The [Server] module implements a pipelined HTTP/1.1 server. ??i ?66?j ?6x@@@@@@@??l ?yy@?@@