Caml1999N031����   5         	3duniverse/ocaml-cohttp/cohttp-mirage/src/static.mli����  �  �  r  �����1ocaml.ppx.context��&_none_@@ �A����������)tool_name���*ppx_driver@@@����,include_dirs����"[]@@@����)load_path!����
%@%@@����,open_modules*����.@.@@����+for_package3����$None8@8@@����%debug=����%falseB@B@@����+use_threadsG����
K@K@@����-use_vmthreadsP����T@T@@����/recursive_typesY����]@]@@����)principalb����%f@f@@����3transparent_modulesk����.o@o@@����-unboxed_typest����7x@x@@����-unsafe_string}����@�@�@@����'cookies�����"::�����������,library-name�@�@@����-cohttp_mirage��.<command-line>A@A�A@N@@��A@@�A@O@@@@�@@�������@�@@@�@@�@@@@�@@@�@�������*ocaml.text��������	8 Serve static HTTP sites from a Mirage key-value store. ��	3duniverse/ocaml-cohttp/cohttp-mirage/src/static.mliT{{�T{�@@@@@@������$HTTP��W��W�@�����"FS��W��W�
@�����)Mirage_kv"RO��W��W�@�@@�����!S��(W��)W�@������*Cohttp_lwt!S&Server��4W� �5W�3@�@@�������H��������
  x [start http_port ?request_fn fs http] will start a static HTTP server
      listening on [http_port]. The files to serve will be looked up from the
      [fs] key-value store.

      If [request_fn] is supplied, the URI and default header set (including the
      MIME content-type header) will be passed to it and the response used as
      the response header set instead. ��GX;=�H^��@@@@@@���Р%start��P`���Q`��@���)http_port����#int��\a���]a��@@�@@@���*request_fn��@�����#Uri!t��mb���nb��@@�@@@��@������&Cohttp&Header!t��|b���}b�@@�@@@������&Cohttp&Header!t���b���b�@@�@@@�@@@�!@@@��@�����"FS!t���c $��c (@@�@@@��@��@������#TCP���d,4��d,8@@�����#int���d,<��d,?@@�@@@@�@@@A@���d,1��d,A@@@��@�����!S!t���d,E��d,H@@�@@@��!a���d,L��d,N@@@�
@@@�@@@��!a���eSW��eSY@@@���d,0@@@�=@@@���b��@@@���a��@@@@@���`��
@�@@���W�7��fZ]@@���W�@@���W�@@���)ocaml.doc��������	; Plain HTTP file serving from a read-only key-value store. ���V����V��@@@@@@@���W��@�@@