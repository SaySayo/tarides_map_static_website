(function(globalThis)
   {"use strict";
    var
     runtime=globalThis.jsoo_runtime,
     caml_exn_with_js_backtrace=runtime.caml_exn_with_js_backtrace,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes;
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_Jsoo_runtime_Error_Exn=
      caml_string_of_jsbytes("Jsoo_runtime.Error.Exn"),
     cst_jsError=caml_string_of_jsbytes("jsError"),
     Stdlib_Callback=global_data.Stdlib__Callback,
     Js=[0],
     Sys=[0],
     Exn=[248,cst_Jsoo_runtime_Error_Exn,runtime.caml_fresh_oo_id(0)];
    caml_call2(Stdlib_Callback[2],cst_jsError,[0,Exn,[0]]);
    function raise(exn){throw exn}
    var
     Error=
      [0,
       raise,
       caml_exn_with_js_backtrace,
       runtime.caml_js_error_option_of_exception,
       Exn],
     For_compatibility_only=[0],
     Bigstring=[0],
     Typed_array=[0,Bigstring],
     Int64=[0],
     Jsoo_runtime=[0,Js,Sys,Error,For_compatibility_only,Typed_array,Int64];
    runtime.caml_register_global(4,Jsoo_runtime,"Jsoo_runtime");
    return}
  (globalThis));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJqc29vX3J1bnRpbWUuY21hLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbImV4biJdLCJzb3VyY2VzIjpbIiJdLCJtYXBwaW5ncyI6Ijs7STs7Ozs7Ozs7Ozs7Ozs7OzttQkFBV0EsS0FBTyxNQUFNQSxHQUF2QjtJIiwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
