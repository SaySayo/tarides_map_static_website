Caml1999N031����   2         	0duniverse/ocaml-cohttp/cohttp-lwt/src/client.mli����  7  /  o  �����1ocaml.ppx.context��&_none_@@ �A����������)tool_name���*ppx_driver@@@����,include_dirs����"[]@@@����)load_path!����
%@%@@����,open_modules*����.@.@@����+for_package3����$None8@8@@����%debug=����%falseB@B@@����+use_threadsG����
K@K@@����-use_vmthreadsP����T@T@@����/recursive_typesY����]@]@@����)principalb����%f@f@@����3transparent_modulesk����.o@o@@����-unboxed_typest����7x@x@@����-unsafe_string}����@�@�@@����'cookies�����"::�����������,library-name�@�@@����*cohttp_lwt��.<command-line>A@A�A@K@@��A@@�A@L@@@@�@@�������@�@@@�@@�@@@@�@@@�@�������*ocaml.text��������
  � The [Make] functor glues together a {!Cohttp.S.IO} implementation to send
    requests down a connection that is established by the {!Net} module. The
    resulting module satisfies the {!Client} module type.

    The {!Logs} source name for this module's logger is ["cohttp.lwt.client"].
    When logging is enabled (at least {b warning} level), eventual body leaks
    will be logged and easier to track. ��	0duniverse/ocaml-cohttp/cohttp-lwt/src/client.mliA@@�Gs�@@@@@@������$Make��I���I��@�����"IO��I���I��@�����!S"IO��I���I��@�@@�����#Net��(I���)I��@�������!S#Net��4I���5I��@�@@����"IO��=I���>I��@��"IO��CI���DI��@@�@@�������!S&Client��PJ���QJ��@�@@����#ctx��YJ���ZJ��@    �@@@A������#Net#ctx��fJ���gJ��@@�@@@@��jJ��@@�@@��mI��@@��oI��	@@@��qI��@�@@