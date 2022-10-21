Caml1999N031����   1         	/duniverse/ocaml-conduit/src/conduit/conduit.mli����  �    �  b�����1ocaml.ppx.context��&_none_@@ �A����������)tool_name���*ppx_driver@@@����,include_dirs����"[]@@@����)load_path!����
%@%@@����,open_modules*����.@.@@����+for_package3����$None8@8@@����%debug=����%falseB@B@@����+use_threadsG����
K@K@@����-use_vmthreadsP����T@T@@����/recursive_typesY����]@]@@����)principalb����%f@f@@����3transparent_modulesk����.o@o@@����-unboxed_typest����7x@x@@����-unsafe_string}����@�@�@@����'cookies�����"::�����������,library-name�@�@@����'conduit��.<command-line>A@A�A@H@@��A@@�A@I@@@@�@@�������@�@@@�@@�@@@@�@@@�@�������*ocaml.text��������
  � Interface for establishing reliable stream-oriented connections.

    This library abstracts the concerns of establishing connections to peers
    that may be running within the same host (e.g. in another virtual machine)
    or on a remote host via TCP. It consists of one library that is responsible
    for {{!transport} establishing individual connections}, and a {{!resolution}
    name resolver} that maps URIs to endpoints.

    {2:transport Connection Establishment}

    Connections are created by identifying remote nodes using an {{!endp} endp}
    value. To ensure portability, the {!endp} values are translated into
    concrete connections by separate modules that target [Lwt_unix], [Async] and
    [Mirage]. This lets those backends use the appropriate local technique for
    creating the connection (such as using OpenSSL on Unix, or a pure OCaml
    TLS+TCP implementation on Mirage, or some other combination).

    The modules dealing with connection establishment are:

    {!modules:Conduit_lwt_unix Conduit_async Conduit_mirage}

    {2:resolution Name Resolution}

    This deals with resolving URIs into a list of {!endp} addresses that can
    then be connected to by the {{!transport} connection establishment} modules.

    All of the name resolvers conform to the {!RESOLVER} module type. The
    OS-specific implementations of this interface are:

    {!modules:Resolver_lwt Resolver_lwt_unix Resolver_mirage} ��	/duniverse/ocaml-conduit/src/conduit/conduit.mliR�o��@@@@@@���A�    �$endp��q���q��@@@@A�������#TCP��r���r��@@���������&Ipaddr!t��$r���%r��@@�@@@�����#int��.r���/r��@@�@@@@�@@@@�@���)ocaml.doc퐠�����	! IP address and destination port ��@r���Ar�	@@@@@@@����2Unix_domain_socket��Hs		�Is		-@@�����&string��Qs		1�Rs		7@@�@@@@�@���"�������7 Unix domain file path ��as		9�bs		U@@@@@@@����,Vchan_direct��it	V	Z�jt	V	g@@��������#int��ut	V	k�vt	V	n@@�@@@�����&string��t	V	q��t	V	w@@�@@@@�@@@@�@���Q=�������1 domain id, port ���t	V	y��t	V	�@@@@@@@����3Vchan_domain_socket���u	�	���u	�	�@@��������&string���u	�	���u	�	�@@�@@@�����&string���u	�	���u	�	�@@�@@@@�@@@@�@����l�������9 Vchan Xen domain socket ���u	�	���u	�	�@@@@@@@����#TLS���v	�	���v	�	�@@��������&string���v	�	���v	�	�@@�@@@�����$endp���v	�	���v	�	�@@�@@@@�@@@@�@������������	( Wrap in a TLS channel, [hostname,endp] ���v	�	���v	�
$@@@@@@@����'Unknown���w
%
)��w
%
1@@�����&string���w
%
5� w
%
;@@�@@@@�@������������3 Failed resolution ��w
%
=�w
%
U@@@@@@@@@@��r���w
%
W@@@���(deriving��x
X
[�x
X
c@��������$sexp��%x
X
d�&x
X
h@�@@@@@��)x
X
X�*x
X
i@����䐠�����	| End points that can potentially be connected to. These are typically
    returned by a call to a {{!resolution} resolver}. ��7y
j
j�8z
�
�@@@@@@@��:q��@@�@�����������-ocaml.warning��&_none_A@ �A�������#-32@@@@@�*A���Р,sexp_of_endpP��@����WV@V@@������(Sexplib0$Sexp!t�_^A@@@@@@@11���Р,endp_of_sexpf��@������(Sexplib0$Sexp!t�qpA@@@����wv@v@@@@@@GG���Р0__endp_of_sexp__|��@������@@@������@�@@@@@@YY@?@?���)ocaml.docN�������'@inlineV@V@@@V@V���+merlin.hideZ�@Y@P�����"IO���}@L��}@N@������A�    �!t���~U`��~Ua@����!a���~U]��~U_@@@�@A@@@A@@���~UW@@�@���Р#>>=��� @ci�� @cp@��@����!t��� @cv�� @cw@���!a��� @cs�� @cu@@@@�	@@@��@��@��!a��� @c|�� @c~@@@����!t��� @c��� @c�@���!b��� @c��� @c�@@@@�	@@@�
@@@����!t�� @c�� @c�@���!b�� @c��	 @c�@@@@�	@@@�� @c{@@@�1@@@@@�� @ce@�@���Р&return�� A��� A��@��@��!a��  A���! A��@@@����!t��( A���) A��@���!a��/ A���0 A��@@@@�	@@@�
@@@@@��4 A��@�@@��7}@Q�8 B��@@���򐠠����	M Module type for cooperative threading that can be satisfied by Lwt or Async ��E|
�
��F|
�?@@@@@@@��H}@@@�@@