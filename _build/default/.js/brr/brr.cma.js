(function(globalThis)
   {"use strict";
    var
     runtime=globalThis.jsoo_runtime,
     caml_equal=runtime.caml_equal,
     caml_js_from_bool=runtime.caml_js_from_bool,
     caml_js_get=runtime.caml_js_get,
     caml_js_instanceof=runtime.caml_js_instanceof,
     caml_js_meth_call=runtime.caml_js_meth_call,
     caml_js_new=runtime.caml_js_new,
     caml_js_to_bool=runtime.caml_js_to_bool,
     caml_jsstring_of_string=runtime.caml_jsstring_of_string,
     caml_list_of_js_array=runtime.caml_list_of_js_array,
     caml_list_to_js_array=runtime.caml_list_to_js_array,
     caml_register_global=runtime.caml_register_global,
     caml_string_compare=runtime.caml_string_compare,
     caml_string_notequal=runtime.caml_string_notequal,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes,
     caml_string_of_jsstring=runtime.caml_string_of_jsstring,
     caml_wrap_exception=runtime.caml_wrap_exception;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    function caml_call5(f,a0,a1,a2,a3,a4)
     {return f.length == 5
              ?f(a0,a1,a2,a3,a4)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_parseInt=caml_string_of_jsbytes("parseInt"),
     cst_done=caml_string_of_jsbytes("done"),
     cst_value=caml_string_of_jsbytes("value"),
     cst_substr=caml_string_of_jsbytes("substr"),
     cst_slice=caml_string_of_jsbytes("slice"),
     cst_String=caml_string_of_jsbytes("String"),
     cst_length=caml_string_of_jsbytes("length"),
     cst_Number=caml_string_of_jsbytes("Number"),
     cst_value$1=caml_string_of_jsbytes("value"),
     cst_value$0=caml_string_of_jsbytes("value"),
     cst_done$0=caml_string_of_jsbytes("done"),
     cst_stack=caml_string_of_jsbytes("stack"),
     cst_message=caml_string_of_jsbytes("message"),
     cst_name$1=caml_string_of_jsbytes("name"),
     cst_NotAllowedError=caml_string_of_jsbytes("NotAllowedError"),
     cst_InvalidAccessError=caml_string_of_jsbytes("InvalidAccessError"),
     cst_AbortError=caml_string_of_jsbytes("AbortError"),
     cst_ConstraintError=caml_string_of_jsbytes("ConstraintError"),
     cst_DataCloneError=caml_string_of_jsbytes("DataCloneError"),
     cst_DataError=caml_string_of_jsbytes("DataError"),
     cst_EncodingError=caml_string_of_jsbytes("EncodingError"),
     cst_HierarchyRequestError=caml_string_of_jsbytes("HierarchyRequestError"),
     cst_IndexSizeError=caml_string_of_jsbytes("IndexSizeError"),
     cst_InvalidCharacterError=caml_string_of_jsbytes("InvalidCharacterError"),
     cst_InvalidModificationError=
      caml_string_of_jsbytes("InvalidModificationError"),
     cst_InvalidNodeTypeError=caml_string_of_jsbytes("InvalidNodeTypeError"),
     cst_InvalidStateError=caml_string_of_jsbytes("InvalidStateError"),
     cst_NamespaceError=caml_string_of_jsbytes("NamespaceError"),
     cst_NetworkError=caml_string_of_jsbytes("NetworkError"),
     cst_NoModificationAllowedError=
      caml_string_of_jsbytes("NoModificationAllowedError"),
     cst_SyntaxError=caml_string_of_jsbytes("SyntaxError"),
     cst_NotFoundError=caml_string_of_jsbytes("NotFoundError"),
     cst_NotReadableError=caml_string_of_jsbytes("NotReadableError"),
     cst_NotSupportedError=caml_string_of_jsbytes("NotSupportedError"),
     cst_OperationError=caml_string_of_jsbytes("OperationError"),
     cst_QuotaExceededError=caml_string_of_jsbytes("QuotaExceededError"),
     cst_ReadOnlyError=caml_string_of_jsbytes("ReadOnlyError"),
     cst_SecurityError=caml_string_of_jsbytes("SecurityError"),
     cst_TimeoutError=caml_string_of_jsbytes("TimeoutError"),
     cst_TransactionInactiveError=
      caml_string_of_jsbytes("TransactionInactiveError"),
     cst_TypeMismatchError=caml_string_of_jsbytes("TypeMismatchError"),
     cst_URLMismatchError=caml_string_of_jsbytes("URLMismatchError"),
     cst_UnknownError=caml_string_of_jsbytes("UnknownError"),
     cst_VersionError=caml_string_of_jsbytes("VersionError"),
     cst_WrongDocumentError=caml_string_of_jsbytes("WrongDocumentError"),
     cst_name$0=caml_string_of_jsbytes("name"),
     cst_Error=caml_string_of_jsbytes("Error"),
     cst_name=caml_string_of_jsbytes("name"),
     cst_length$0=caml_string_of_jsbytes("length"),
     cst_Array=caml_string_of_jsbytes("Array"),
     cst_Promise=caml_string_of_jsbytes("Promise"),
     cst_setTimeout=caml_string_of_jsbytes("setTimeout"),
     cst_fut$0=caml_string_of_jsbytes("fut"),
     cst_fut=caml_string_of_jsbytes("fut"),
     cst_clearMeasures=caml_string_of_jsbytes("clearMeasures"),
     cst_clearMarks=caml_string_of_jsbytes("clearMarks"),
     cst_timeOrigin=caml_string_of_jsbytes("timeOrigin"),
     cst_redirectCount=caml_string_of_jsbytes("redirectCount"),
     cst_type$3=caml_string_of_jsbytes("type'"),
     cst_loadEventEnd=caml_string_of_jsbytes("loadEventEnd"),
     cst_loadEventStart=caml_string_of_jsbytes("loadEventStart"),
     cst_domComplete=caml_string_of_jsbytes("domComplete"),
     cst_domContentLoadedEventEnd=
      caml_string_of_jsbytes("domContentLoadedEventEnd"),
     cst_domContentLoadedEventStart=
      caml_string_of_jsbytes("domContentLoadedEventStart"),
     cst_domInteractive=caml_string_of_jsbytes("domInteractive"),
     cst_unloadEventEnd=caml_string_of_jsbytes("unloadEventEnd"),
     cst_unloadEventStart=caml_string_of_jsbytes("unloadEventStart"),
     cst_decodedBodySize=caml_string_of_jsbytes("decodedBodySize"),
     cst_encodedBodySize=caml_string_of_jsbytes("encodedBodySize"),
     cst_transferSize=caml_string_of_jsbytes("transferSize"),
     cst_responseEnd=caml_string_of_jsbytes("responseEnd"),
     cst_responseStart=caml_string_of_jsbytes("responseStart"),
     cst_requestStart=caml_string_of_jsbytes("requestStart"),
     cst_secureConnectionStart=caml_string_of_jsbytes("secureConnectionStart"),
     cst_connectEnd=caml_string_of_jsbytes("connectEnd"),
     cst_connectStart=caml_string_of_jsbytes("connectStart"),
     cst_domainLookupEnd=caml_string_of_jsbytes("domainLookupEnd"),
     cst_domainLookupStart=caml_string_of_jsbytes("domainLookupStart"),
     cst_fetchStart=caml_string_of_jsbytes("fetchStart"),
     cst_redirectEnd=caml_string_of_jsbytes("redirectEnd"),
     cst_redirectStart=caml_string_of_jsbytes("redirectStart"),
     cst_workerStart=caml_string_of_jsbytes("workerStart"),
     cst_nextHopProtocol=caml_string_of_jsbytes("nextHopProtocol"),
     cst_initiatorType=caml_string_of_jsbytes("initiatorType"),
     cst_duration=caml_string_of_jsbytes("duration"),
     cst_endTime=caml_string_of_jsbytes("endTime"),
     cst_startTime=caml_string_of_jsbytes("startTime"),
     cst_entryType=caml_string_of_jsbytes("entryType"),
     cst_name$4=caml_string_of_jsbytes("name"),
     cst_onLine=caml_string_of_jsbytes("onLine"),
     cst_maxTouchPoints=caml_string_of_jsbytes("maxTouchPoints"),
     cst_languages=caml_string_of_jsbytes("languages"),
     cst_language=caml_string_of_jsbytes("language"),
     cst_history=caml_string_of_jsbytes("history"),
     cst_state$0=caml_string_of_jsbytes("state"),
     cst_state=caml_string_of_jsbytes("state"),
     cst_scrollRestoration$0=caml_string_of_jsbytes("scrollRestoration"),
     cst_scrollRestoration=caml_string_of_jsbytes("scrollRestoration"),
     cst_length$5=caml_string_of_jsbytes("length"),
     cst_location$2=caml_string_of_jsbytes("location"),
     cst_location$1=caml_string_of_jsbytes("location"),
     cst_location$0=caml_string_of_jsbytes("location"),
     cst_matches=caml_string_of_jsbytes("matches"),
     cst_devicePixelRatio=caml_string_of_jsbytes("devicePixelRatio"),
     cst_scrollY=caml_string_of_jsbytes("scrollY"),
     cst_scrollX=caml_string_of_jsbytes("scrollX"),
     cst_closed=caml_string_of_jsbytes("closed"),
     cst_timeStamp$0=caml_string_of_jsbytes("timeStamp"),
     cst_profileEnd=caml_string_of_jsbytes("profileEnd"),
     cst_profile=caml_string_of_jsbytes("profile"),
     cst_timeEnd=caml_string_of_jsbytes("timeEnd"),
     cst_timeLog=caml_string_of_jsbytes("timeLog"),
     cst_time=caml_string_of_jsbytes("time"),
     cst_countReset=caml_string_of_jsbytes("countReset"),
     cst_count=caml_string_of_jsbytes("count"),
     cst_groupCollapsed=caml_string_of_jsbytes("groupCollapsed"),
     cst_group=caml_string_of_jsbytes("group"),
     cst_groupEnd=caml_string_of_jsbytes("groupEnd"),
     cst_table=caml_string_of_jsbytes("table"),
     cst_dir=caml_string_of_jsbytes("dir"),
     cst_assert=caml_string_of_jsbytes("assert"),
     cst_debug=caml_string_of_jsbytes("debug"),
     cst_info=caml_string_of_jsbytes("info"),
     cst_warn=caml_string_of_jsbytes("warn"),
     cst_error$1=caml_string_of_jsbytes("error"),
     cst_trace=caml_string_of_jsbytes("trace"),
     cst_log=caml_string_of_jsbytes("log"),
     cst_clear=caml_string_of_jsbytes("clear"),
     cst_signal=caml_string_of_jsbytes("signal"),
     cst_AbortController=caml_string_of_jsbytes("AbortController"),
     cst_aborted=caml_string_of_jsbytes("aborted"),
     cst_fullscreenElement=caml_string_of_jsbytes("fullscreenElement"),
     cst_fullscreenEnabled=caml_string_of_jsbytes("fullscreenEnabled"),
     cst_pointerLockElement$0=caml_string_of_jsbytes("pointerLockElement"),
     cst_visibilityState=caml_string_of_jsbytes("visibilityState"),
     cst_title$0=caml_string_of_jsbytes("title"),
     cst_title=caml_string_of_jsbytes("title"),
     cst_referrer=caml_string_of_jsbytes("referrer"),
     cst_activeElement$0=caml_string_of_jsbytes("activeElement"),
     cst_head=caml_string_of_jsbytes("head"),
     cst_body=caml_string_of_jsbytes("body"),
     cst_documentElement$0=caml_string_of_jsbytes("documentElement"),
     cst_files=caml_string_of_jsbytes("files"),
     cst_navigationUI=caml_string_of_jsbytes("navigationUI"),
     cst_pointerLockElement=caml_string_of_jsbytes("pointerLockElement"),
     cst_activeElement=caml_string_of_jsbytes("activeElement"),
     cst_scrollHeight=caml_string_of_jsbytes("scrollHeight"),
     cst_scrollWidth=caml_string_of_jsbytes("scrollWidth"),
     cst_scrollTop=caml_string_of_jsbytes("scrollTop"),
     cst_scrollLeft=caml_string_of_jsbytes("scrollLeft"),
     cst_height$0=caml_string_of_jsbytes("height"),
     cst_width$0=caml_string_of_jsbytes("width"),
     cst_y=caml_string_of_jsbytes("y"),
     cst_x=caml_string_of_jsbytes("x"),
     cst_clientHeight=caml_string_of_jsbytes("clientHeight"),
     cst_clientWidth=caml_string_of_jsbytes("clientWidth"),
     cst_clientTop=caml_string_of_jsbytes("clientTop"),
     cst_clientLeft=caml_string_of_jsbytes("clientLeft"),
     cst_style$1=caml_string_of_jsbytes("style"),
     cst_style$0=caml_string_of_jsbytes("style"),
     cst_style=caml_string_of_jsbytes("style"),
     cst_window=caml_string_of_jsbytes("window"),
     cst_classList$1=caml_string_of_jsbytes("classList"),
     cst_classList$2=caml_string_of_jsbytes("classList"),
     cst_classList$0=caml_string_of_jsbytes("classList"),
     cst_after=caml_string_of_jsbytes("after"),
     cst_before=caml_string_of_jsbytes("before"),
     cst_replaceWith=caml_string_of_jsbytes("replaceWith"),
     cst_nextElementSibling=caml_string_of_jsbytes("nextElementSibling"),
     cst_previousElementSibling=
      caml_string_of_jsbytes("previousElementSibling"),
     cst_append=caml_string_of_jsbytes("append"),
     cst_prepend=caml_string_of_jsbytes("prepend"),
     cst_children=caml_string_of_jsbytes("children"),
     cst_childNodes=caml_string_of_jsbytes("childNodes"),
     cst_firstChild$0=caml_string_of_jsbytes("firstChild"),
     cst_firstChild=caml_string_of_jsbytes("firstChild"),
     cst_parentNode=caml_string_of_jsbytes("parentNode"),
     cst_length$4=caml_string_of_jsbytes("length"),
     cst_nodeValue=caml_string_of_jsbytes("nodeValue"),
     cst_nodeName=caml_string_of_jsbytes("nodeName"),
     cst_nodeType$0=caml_string_of_jsbytes("nodeType"),
     cst_nodeType=caml_string_of_jsbytes("nodeType"),
     cst=caml_string_of_jsbytes("\xc2\xa0"),
     cst_classList=caml_string_of_jsbytes("classList"),
     cst_length$3=caml_string_of_jsbytes("length"),
     cst_ownerDocument=caml_string_of_jsbytes("ownerDocument"),
     cst_hash$0=caml_string_of_jsbytes("hash"),
     cst_pathname$0=caml_string_of_jsbytes("pathname"),
     cst_search$0=caml_string_of_jsbytes("search"),
     cst_port$0=caml_string_of_jsbytes("port"),
     cst_hostname$0=caml_string_of_jsbytes("hostname"),
     cst_protocol$0=caml_string_of_jsbytes("protocol"),
     cst_protocol=caml_string_of_jsbytes("protocol"),
     cst_hostname=caml_string_of_jsbytes("hostname"),
     cst_port=caml_string_of_jsbytes("port"),
     cst_pathname=caml_string_of_jsbytes("pathname"),
     cst_search=caml_string_of_jsbytes("search"),
     cst_hash=caml_string_of_jsbytes("hash"),
     cst_atob=caml_string_of_jsbytes("atob"),
     cst_btoa=caml_string_of_jsbytes("btoa"),
     cst_lastModified$0=caml_string_of_jsbytes("lastModified"),
     cst_name$3=caml_string_of_jsbytes("name"),
     cst_lastModified=caml_string_of_jsbytes("lastModified"),
     cst_error$0=caml_string_of_jsbytes("error"),
     cst_result=caml_string_of_jsbytes("result"),
     cst_FileReader=caml_string_of_jsbytes("FileReader"),
     cst_stream=caml_string_of_jsbytes("stream"),
     cst_type$2=caml_string_of_jsbytes("type"),
     cst_size=caml_string_of_jsbytes("size"),
     cst_type$1=caml_string_of_jsbytes("type"),
     cst_endings=caml_string_of_jsbytes("endings"),
     cst_String$0=caml_string_of_jsbytes("String"),
     cst_TextDecoder=caml_string_of_jsbytes("TextDecoder"),
     cst_TextEncoder=caml_string_of_jsbytes("TextEncoder"),
     cst_name$2=caml_string_of_jsbytes("name"),
     cst_constructor=caml_string_of_jsbytes("constructor"),
     cst_Float32Array$0=caml_string_of_jsbytes("Float32Array"),
     cst_Float64Array$0=caml_string_of_jsbytes("Float64Array"),
     cst_Int16Array$0=caml_string_of_jsbytes("Int16Array"),
     cst_Int32Array$0=caml_string_of_jsbytes("Int32Array"),
     cst_Int8Array$0=caml_string_of_jsbytes("Int8Array"),
     cst_Uint16Array$0=caml_string_of_jsbytes("Uint16Array"),
     cst_Uint32Array$0=caml_string_of_jsbytes("Uint32Array"),
     cst_Uint8Array$0=caml_string_of_jsbytes("Uint8Array"),
     cst_Uint8ClampedArray$0=caml_string_of_jsbytes("Uint8ClampedArray"),
     cst_length$2=caml_string_of_jsbytes("length"),
     cst_Int8Array=caml_string_of_jsbytes("Int8Array"),
     cst_Int16Array=caml_string_of_jsbytes("Int16Array"),
     cst_Int32Array=caml_string_of_jsbytes("Int32Array"),
     cst_Uint8Array=caml_string_of_jsbytes("Uint8Array"),
     cst_Uint8ClampedArray=caml_string_of_jsbytes("Uint8ClampedArray"),
     cst_Uint16Array=caml_string_of_jsbytes("Uint16Array"),
     cst_Uint32Array=caml_string_of_jsbytes("Uint32Array"),
     cst_Float32Array=caml_string_of_jsbytes("Float32Array"),
     cst_Float64Array=caml_string_of_jsbytes("Float64Array"),
     cst_byteLength$0=caml_string_of_jsbytes("byteLength"),
     cst_byteOffset=caml_string_of_jsbytes("byteOffset"),
     cst_buffer=caml_string_of_jsbytes("buffer"),
     cst_byteLength=caml_string_of_jsbytes("byteLength"),
     cst_deltaMode=caml_string_of_jsbytes("deltaMode"),
     cst_deltaZ=caml_string_of_jsbytes("deltaZ"),
     cst_deltaY=caml_string_of_jsbytes("deltaY"),
     cst_deltaX=caml_string_of_jsbytes("deltaX"),
     cst_isPrimary=caml_string_of_jsbytes("isPrimary"),
     cst_pointerType=caml_string_of_jsbytes("pointerType"),
     cst_azimuthAngle=caml_string_of_jsbytes("azimuthAngle"),
     cst_altitudeAngle=caml_string_of_jsbytes("altitudeAngle"),
     cst_twist=caml_string_of_jsbytes("twist"),
     cst_tiltY=caml_string_of_jsbytes("tiltY"),
     cst_tiltX=caml_string_of_jsbytes("tiltX"),
     cst_tangentialPressure=caml_string_of_jsbytes("tangentialPressure"),
     cst_pressure=caml_string_of_jsbytes("pressure"),
     cst_height=caml_string_of_jsbytes("height"),
     cst_width=caml_string_of_jsbytes("width"),
     cst_pointerId=caml_string_of_jsbytes("pointerId"),
     cst_dataTransfer$0=caml_string_of_jsbytes("dataTransfer"),
     cst_metaKey$0=caml_string_of_jsbytes("metaKey"),
     cst_shiftKey$0=caml_string_of_jsbytes("shiftKey"),
     cst_ctrlKey$0=caml_string_of_jsbytes("ctrlKey"),
     cst_altKey$0=caml_string_of_jsbytes("altKey"),
     cst_buttons=caml_string_of_jsbytes("buttons"),
     cst_button=caml_string_of_jsbytes("button"),
     cst_movementY=caml_string_of_jsbytes("movementY"),
     cst_movementX=caml_string_of_jsbytes("movementX"),
     cst_screenY=caml_string_of_jsbytes("screenY"),
     cst_screenX=caml_string_of_jsbytes("screenX"),
     cst_pageY=caml_string_of_jsbytes("pageY"),
     cst_pageX=caml_string_of_jsbytes("pageX"),
     cst_clientY=caml_string_of_jsbytes("clientY"),
     cst_clientX=caml_string_of_jsbytes("clientX"),
     cst_offsetY=caml_string_of_jsbytes("offsetY"),
     cst_offsetX=caml_string_of_jsbytes("offsetX"),
     cst_relatedTarget$0=caml_string_of_jsbytes("relatedTarget"),
     cst_metaKey=caml_string_of_jsbytes("metaKey"),
     cst_shiftKey=caml_string_of_jsbytes("shiftKey"),
     cst_ctrlKey=caml_string_of_jsbytes("ctrlKey"),
     cst_altKey=caml_string_of_jsbytes("altKey"),
     cst_isComposing$0=caml_string_of_jsbytes("isComposing"),
     cst_repeat=caml_string_of_jsbytes("repeat"),
     cst_location=caml_string_of_jsbytes("location"),
     cst_code=caml_string_of_jsbytes("code"),
     cst_key=caml_string_of_jsbytes("key"),
     cst_isComposing=caml_string_of_jsbytes("isComposing"),
     cst_inputType=caml_string_of_jsbytes("inputType"),
     cst_dataTransfer=caml_string_of_jsbytes("dataTransfer"),
     cst_data$0=caml_string_of_jsbytes("data"),
     cst_newURL=caml_string_of_jsbytes("newURL"),
     cst_oldURL=caml_string_of_jsbytes("oldURL"),
     cst_relatedTarget=caml_string_of_jsbytes("relatedTarget"),
     cst_error=caml_string_of_jsbytes("error"),
     cst_colno=caml_string_of_jsbytes("colno"),
     cst_lineno=caml_string_of_jsbytes("lineno"),
     cst_filename=caml_string_of_jsbytes("filename"),
     cst_message$0=caml_string_of_jsbytes("message"),
     cst_data=caml_string_of_jsbytes("data"),
     cst_clipboardData=caml_string_of_jsbytes("clipboardData"),
     cst_items=caml_string_of_jsbytes("items"),
     cst_effectAllowed$0=caml_string_of_jsbytes("effectAllowed"),
     cst_effectAllowed=caml_string_of_jsbytes("effectAllowed"),
     cst_dropEffect$0=caml_string_of_jsbytes("dropEffect"),
     cst_dropEffect=caml_string_of_jsbytes("dropEffect"),
     cst_length$1=caml_string_of_jsbytes("length"),
     cst_type$0=caml_string_of_jsbytes("type"),
     cst_kind=caml_string_of_jsbytes("kind"),
     cst_capture=caml_string_of_jsbytes("capture"),
     cst_once=caml_string_of_jsbytes("once"),
     cst_passive=caml_string_of_jsbytes("passive"),
     cst_timeStamp=caml_string_of_jsbytes("timeStamp"),
     cst_isTrusted=caml_string_of_jsbytes("isTrusted"),
     cst_composed$0=caml_string_of_jsbytes("composed"),
     cst_defaultPrevented=caml_string_of_jsbytes("defaultPrevented"),
     cst_cancelable$0=caml_string_of_jsbytes("cancelable"),
     cst_bubbles$0=caml_string_of_jsbytes("bubbles"),
     cst_eventPhase=caml_string_of_jsbytes("eventPhase"),
     cst_currentTarget=caml_string_of_jsbytes("currentTarget"),
     cst_target=caml_string_of_jsbytes("target"),
     cst_type=caml_string_of_jsbytes("type"),
     cst_bubbles=caml_string_of_jsbytes("bubbles"),
     cst_cancelable=caml_string_of_jsbytes("cancelable"),
     cst_composed=caml_string_of_jsbytes("composed"),
     cst_Event=caml_string_of_jsbytes("Event"),
     cst_ArrayBuffer=caml_string_of_jsbytes("ArrayBuffer"),
     cst_DataView=caml_string_of_jsbytes("DataView"),
     cst_Blob=caml_string_of_jsbytes("Blob"),
     cst_File=caml_string_of_jsbytes("File"),
     cst_JSON=caml_string_of_jsbytes("JSON"),
     cst_encodeURI=caml_string_of_jsbytes("encodeURI"),
     cst_decodeURI=caml_string_of_jsbytes("decodeURI"),
     cst_URL=caml_string_of_jsbytes("URL"),
     cst_URLSearchParams=caml_string_of_jsbytes("URLSearchParams"),
     cst_encodeURIComponent=caml_string_of_jsbytes("encodeURIComponent"),
     cst_decodeURIComponent=caml_string_of_jsbytes("decodeURIComponent"),
     cst_document=caml_string_of_jsbytes("document"),
     cst_documentElement=caml_string_of_jsbytes("documentElement"),
     cst_console=caml_string_of_jsbytes("console"),
     cst_console$0=caml_string_of_jsbytes("console"),
     cst_navigator=caml_string_of_jsbytes("navigator"),
     cst_performance=caml_string_of_jsbytes("performance"),
     cst_window$0=caml_string_of_jsbytes("window"),
     cst_isSecureContext=caml_string_of_jsbytes("isSecureContext"),
     cst_reason=caml_string_of_jsbytes("reason"),
     cst_code$2=caml_string_of_jsbytes("code"),
     cst_wasClean=caml_string_of_jsbytes("wasClean"),
     cst_protocol$1=caml_string_of_jsbytes("protocol"),
     cst_extensions=caml_string_of_jsbytes("extensions"),
     cst_bufferedAmount=caml_string_of_jsbytes("bufferedAmount"),
     cst_readyState$1=caml_string_of_jsbytes("readyState"),
     cst_url$2=caml_string_of_jsbytes("url"),
     cst_binaryType$0=caml_string_of_jsbytes("binaryType"),
     cst_binaryType=caml_string_of_jsbytes("binaryType"),
     cst_storageArea=caml_string_of_jsbytes("storageArea"),
     cst_url$1=caml_string_of_jsbytes("url"),
     cst_newValue=caml_string_of_jsbytes("newValue"),
     cst_oldValue=caml_string_of_jsbytes("oldValue"),
     cst_key$0=caml_string_of_jsbytes("key"),
     cst_length$7=caml_string_of_jsbytes("length"),
     cst_sessionStorage=caml_string_of_jsbytes("sessionStorage"),
     cst_localStorage=caml_string_of_jsbytes("localStorage"),
     cst_action$2=caml_string_of_jsbytes("action"),
     cst_notification=caml_string_of_jsbytes("notification"),
     cst_title$3=caml_string_of_jsbytes("title"),
     cst_timestamp$1=caml_string_of_jsbytes("timestamp"),
     cst_silent$0=caml_string_of_jsbytes("silent"),
     cst_requireInteraction$0=caml_string_of_jsbytes("requireInteraction"),
     cst_renotify$0=caml_string_of_jsbytes("renotify"),
     cst_image$0=caml_string_of_jsbytes("image"),
     cst_icon$2=caml_string_of_jsbytes("icon"),
     cst_tag=caml_string_of_jsbytes("tag"),
     cst_lang$0=caml_string_of_jsbytes("lang"),
     cst_dir$1=caml_string_of_jsbytes("dir"),
     cst_data$4=caml_string_of_jsbytes("data"),
     cst_body$3=caml_string_of_jsbytes("body"),
     cst_badge$0=caml_string_of_jsbytes("badge"),
     cst_actions$0=caml_string_of_jsbytes("actions"),
     cst_dir$0=caml_string_of_jsbytes("dir"),
     cst_lang=caml_string_of_jsbytes("lang"),
     cst_body$2=caml_string_of_jsbytes("body"),
     cst_image=caml_string_of_jsbytes("image"),
     cst_icon$1=caml_string_of_jsbytes("icon"),
     cst_badge=caml_string_of_jsbytes("badge"),
     cst_timestamp$0=caml_string_of_jsbytes("timestamp"),
     cst_renotify=caml_string_of_jsbytes("renotify"),
     cst_silent=caml_string_of_jsbytes("silent"),
     cst_requireInteraction=caml_string_of_jsbytes("requireInteraction"),
     cst_data$3=caml_string_of_jsbytes("data"),
     cst_actions=caml_string_of_jsbytes("actions"),
     cst_icon$0=caml_string_of_jsbytes("icon"),
     cst_title$2=caml_string_of_jsbytes("title"),
     cst_action$1=caml_string_of_jsbytes("action"),
     cst_action$0=caml_string_of_jsbytes("action"),
     cst_title$1=caml_string_of_jsbytes("title"),
     cst_icon=caml_string_of_jsbytes("icon"),
     cst_maxActions=caml_string_of_jsbytes("maxActions"),
     cst_permission=caml_string_of_jsbytes("permission"),
     cst_ports=caml_string_of_jsbytes("ports"),
     cst_source=caml_string_of_jsbytes("source"),
     cst_lastEventId=caml_string_of_jsbytes("lastEventId"),
     cst_origin=caml_string_of_jsbytes("origin"),
     cst_data$2=caml_string_of_jsbytes("data"),
     cst_name$6=caml_string_of_jsbytes("name"),
     cst_port2=caml_string_of_jsbytes("port2"),
     cst_port1=caml_string_of_jsbytes("port1"),
     cst_targetOrigin=caml_string_of_jsbytes("targetOrigin"),
     cst_transfer=caml_string_of_jsbytes("transfer"),
     cst_textTracks=caml_string_of_jsbytes("textTracks"),
     cst_videoTracks=caml_string_of_jsbytes("videoTracks"),
     cst_audioTracks=caml_string_of_jsbytes("audioTracks"),
     cst_defaultMuted$0=caml_string_of_jsbytes("defaultMuted"),
     cst_defaultMuted=caml_string_of_jsbytes("defaultMuted"),
     cst_muted$1=caml_string_of_jsbytes("muted"),
     cst_muted$0=caml_string_of_jsbytes("muted"),
     cst_volume$0=caml_string_of_jsbytes("volume"),
     cst_volume=caml_string_of_jsbytes("volume"),
     cst_controls$0=caml_string_of_jsbytes("controls"),
     cst_controls=caml_string_of_jsbytes("controls"),
     cst_loop$0=caml_string_of_jsbytes("loop"),
     cst_loop=caml_string_of_jsbytes("loop"),
     cst_autoplay$0=caml_string_of_jsbytes("autoplay"),
     cst_autoplay=caml_string_of_jsbytes("autoplay"),
     cst_ended=caml_string_of_jsbytes("ended"),
     cst_seekable=caml_string_of_jsbytes("seekable"),
     cst_played=caml_string_of_jsbytes("played"),
     cst_playbackRate$0=caml_string_of_jsbytes("playbackRate"),
     cst_playbackRate=caml_string_of_jsbytes("playbackRate"),
     cst_defaultPlaybackRate$0=caml_string_of_jsbytes("defaultPlaybackRate"),
     cst_defaultPlaybackRate=caml_string_of_jsbytes("defaultPlaybackRate"),
     cst_paused=caml_string_of_jsbytes("paused"),
     cst_duration$0=caml_string_of_jsbytes("duration"),
     cst_currentTime$0=caml_string_of_jsbytes("currentTime"),
     cst_currentTime=caml_string_of_jsbytes("currentTime"),
     cst_seeking=caml_string_of_jsbytes("seeking"),
     cst_readyState$0=caml_string_of_jsbytes("readyState"),
     cst_buffered=caml_string_of_jsbytes("buffered"),
     cst_preload$0=caml_string_of_jsbytes("preload"),
     cst_preload=caml_string_of_jsbytes("preload"),
     cst_networkState=caml_string_of_jsbytes("networkState"),
     cst_crossOrigin$0=caml_string_of_jsbytes("crossOrigin"),
     cst_crossOrigin=caml_string_of_jsbytes("crossOrigin"),
     cst_currentSrc=caml_string_of_jsbytes("currentSrc"),
     cst_srcObject$0=caml_string_of_jsbytes("srcObject"),
     cst_srcObject=caml_string_of_jsbytes("srcObject"),
     cst_src$0=caml_string_of_jsbytes("src"),
     cst_src=caml_string_of_jsbytes("src"),
     cst_error$3=caml_string_of_jsbytes("error"),
     cst_length$6=caml_string_of_jsbytes("length"),
     cst_message$2=caml_string_of_jsbytes("message"),
     cst_code$1=caml_string_of_jsbytes("code"),
     cst_mediaDevices=caml_string_of_jsbytes("mediaDevices"),
     cst_groupId=caml_string_of_jsbytes("groupId"),
     cst_label$0=caml_string_of_jsbytes("label"),
     cst_kind$1=caml_string_of_jsbytes("kind"),
     cst_deviceId=caml_string_of_jsbytes("deviceId"),
     cst_error$2=caml_string_of_jsbytes("error"),
     cst_timecode=caml_string_of_jsbytes("timecode"),
     cst_data$1=caml_string_of_jsbytes("data"),
     cst_start=caml_string_of_jsbytes("start"),
     cst_audioBitrateMode$0=caml_string_of_jsbytes("audioBitrateMode"),
     cst_audioBitsPerSecond$0=caml_string_of_jsbytes("audioBitsPerSecond"),
     cst_videoBitsPerSecond$0=caml_string_of_jsbytes("videoBitsPerSecond"),
     cst_state$1=caml_string_of_jsbytes("state"),
     cst_mimeType$0=caml_string_of_jsbytes("mimeType"),
     cst_stream$0=caml_string_of_jsbytes("stream"),
     cst_mimeType=caml_string_of_jsbytes("mimeType"),
     cst_audioBitsPerSecond=caml_string_of_jsbytes("audioBitsPerSecond"),
     cst_videoBitsPerSecond=caml_string_of_jsbytes("videoBitsPerSecond"),
     cst_bitsPerSecond=caml_string_of_jsbytes("bitsPerSecond"),
     cst_audioBitrateMode=caml_string_of_jsbytes("audioBitrateMode"),
     cst_active=caml_string_of_jsbytes("active"),
     cst_id$0=caml_string_of_jsbytes("id"),
     cst_audio=caml_string_of_jsbytes("audio"),
     cst_video=caml_string_of_jsbytes("video"),
     cst_track=caml_string_of_jsbytes("track"),
     cst_applyConstraints=caml_string_of_jsbytes("applyConstraints"),
     cst_enabled$0=caml_string_of_jsbytes("enabled"),
     cst_enabled=caml_string_of_jsbytes("enabled"),
     cst_readyState=caml_string_of_jsbytes("readyState"),
     cst_muted=caml_string_of_jsbytes("muted"),
     cst_label=caml_string_of_jsbytes("label"),
     cst_kind$0=caml_string_of_jsbytes("kind"),
     cst_isolated=caml_string_of_jsbytes("isolated"),
     cst_id=caml_string_of_jsbytes("id"),
     cst_Object=caml_string_of_jsbytes("Object"),
     cst_exact$2=caml_string_of_jsbytes("exact"),
     cst_ideal$2=caml_string_of_jsbytes("ideal"),
     cst_min$4=caml_string_of_jsbytes("min"),
     cst_max$4=caml_string_of_jsbytes("max"),
     cst_exact$1=caml_string_of_jsbytes("exact"),
     cst_ideal$1=caml_string_of_jsbytes("ideal"),
     cst_max$3=caml_string_of_jsbytes("max"),
     cst_min$3=caml_string_of_jsbytes("min"),
     cst_min$2=caml_string_of_jsbytes("min"),
     cst_max$2=caml_string_of_jsbytes("max"),
     cst_min$1=caml_string_of_jsbytes("min"),
     cst_max$1=caml_string_of_jsbytes("max"),
     cst_exact$0=caml_string_of_jsbytes("exact"),
     cst_ideal$0=caml_string_of_jsbytes("ideal"),
     cst_max$0=caml_string_of_jsbytes("max"),
     cst_min$0=caml_string_of_jsbytes("min"),
     cst_min=caml_string_of_jsbytes("min"),
     cst_max=caml_string_of_jsbytes("max"),
     cst_exact=caml_string_of_jsbytes("exact"),
     cst_ideal=caml_string_of_jsbytes("ideal"),
     cst_enableHighAccuracy=caml_string_of_jsbytes("enableHighAccuracy"),
     cst_timeout=caml_string_of_jsbytes("timeout"),
     cst_maximumAge=caml_string_of_jsbytes("maximumAge"),
     cst_geolocation=caml_string_of_jsbytes("geolocation"),
     cst_timestamp=caml_string_of_jsbytes("timestamp"),
     cst_speed=caml_string_of_jsbytes("speed"),
     cst_heading=caml_string_of_jsbytes("heading"),
     cst_altitudeAccuracy=caml_string_of_jsbytes("altitudeAccuracy"),
     cst_accuracy=caml_string_of_jsbytes("accuracy"),
     cst_altitude=caml_string_of_jsbytes("altitude"),
     cst_longitude=caml_string_of_jsbytes("longitude"),
     cst_latitude=caml_string_of_jsbytes("latitude"),
     cst_coords=caml_string_of_jsbytes("coords"),
     cst_message$1=caml_string_of_jsbytes("message"),
     cst_code$0=caml_string_of_jsbytes("code"),
     cst_handled=caml_string_of_jsbytes("handled"),
     cst_replacesClientId=caml_string_of_jsbytes("replacesClientId"),
     cst_resultingClientId=caml_string_of_jsbytes("resultingClientId"),
     cst_clientId=caml_string_of_jsbytes("clientId"),
     cst_preloadReponse=caml_string_of_jsbytes("preloadReponse"),
     cst_request=caml_string_of_jsbytes("request"),
     cst_ignoreSearch=caml_string_of_jsbytes("ignoreSearch"),
     cst_ignoreMethod=caml_string_of_jsbytes("ignoreMethod"),
     cst_ignoreVary=caml_string_of_jsbytes("ignoreVary"),
     cst_cacheName=caml_string_of_jsbytes("cacheName"),
     cst_url$0=caml_string_of_jsbytes("url"),
     cst_statusText$0=caml_string_of_jsbytes("statusText"),
     cst_status$0=caml_string_of_jsbytes("status"),
     cst_redirected=caml_string_of_jsbytes("redirected"),
     cst_ok=caml_string_of_jsbytes("ok"),
     cst_headers$2=caml_string_of_jsbytes("headers"),
     cst_redirect$1=caml_string_of_jsbytes("redirect"),
     cst_headers$1=caml_string_of_jsbytes("headers"),
     cst_status=caml_string_of_jsbytes("status"),
     cst_statusText=caml_string_of_jsbytes("statusText"),
     cst_url=caml_string_of_jsbytes("url"),
     cst_signal$1=caml_string_of_jsbytes("signal"),
     cst_referrerPolicy$0=caml_string_of_jsbytes("referrerPolicy"),
     cst_referrer$1=caml_string_of_jsbytes("referrer"),
     cst_redirect$0=caml_string_of_jsbytes("redirect"),
     cst_mode$0=caml_string_of_jsbytes("mode"),
     cst_method$1=caml_string_of_jsbytes("method'"),
     cst_keepalive$0=caml_string_of_jsbytes("keepalive"),
     cst_isReloadNavigation=caml_string_of_jsbytes("isReloadNavigation"),
     cst_isHistoryNavigation=caml_string_of_jsbytes("isHistoryNavigation"),
     cst_integrity$0=caml_string_of_jsbytes("integrity"),
     cst_headers$0=caml_string_of_jsbytes("headers"),
     cst_destination=caml_string_of_jsbytes("destination"),
     cst_credentials$0=caml_string_of_jsbytes("credentials"),
     cst_cache$0=caml_string_of_jsbytes("cache"),
     cst_body$1=caml_string_of_jsbytes("body"),
     cst_cache=caml_string_of_jsbytes("cache"),
     cst_credentials=caml_string_of_jsbytes("credentials"),
     cst_headers=caml_string_of_jsbytes("headers"),
     cst_integrity=caml_string_of_jsbytes("integrity"),
     cst_keepalive=caml_string_of_jsbytes("keepalive"),
     cst_method$0=caml_string_of_jsbytes("method"),
     cst_mode=caml_string_of_jsbytes("mode"),
     cst_redirect=caml_string_of_jsbytes("redirect"),
     cst_referrer$0=caml_string_of_jsbytes("referrer"),
     cst_referrerPolicy=caml_string_of_jsbytes("referrerPolicy"),
     cst_signal$0=caml_string_of_jsbytes("signal"),
     cst_body$0=caml_string_of_jsbytes("body"),
     cst_bodyUsed=caml_string_of_jsbytes("bodyUsed"),
     cst_submitter=caml_string_of_jsbytes("submitter"),
     cst_formData=caml_string_of_jsbytes("formData"),
     cst_URLSearchParams$0=caml_string_of_jsbytes("URLSearchParams"),
     cst_File$1=caml_string_of_jsbytes("File"),
     cst_File$0=caml_string_of_jsbytes("File"),
     cst_requestSubmit=caml_string_of_jsbytes("requestSubmit"),
     cst_noValidate=caml_string_of_jsbytes("noValidate"),
     cst_autocomplete=caml_string_of_jsbytes("autocomplete"),
     cst_acceptCharset=caml_string_of_jsbytes("acceptCharset"),
     cst_enctype=caml_string_of_jsbytes("enctype"),
     cst_action=caml_string_of_jsbytes("action"),
     cst_target$0=caml_string_of_jsbytes("target"),
     cst_method=caml_string_of_jsbytes("method"),
     cst_name$5=caml_string_of_jsbytes("name"),
     cst_clipboard=caml_string_of_jsbytes("clipboard"),
     cst_types=caml_string_of_jsbytes("types"),
     cst_delayed=caml_string_of_jsbytes("delayed"),
     cst_lastModified$1=caml_string_of_jsbytes("lastModified"),
     cst_presentationStyle$0=caml_string_of_jsbytes("presentationStyle"),
     cst_presentationStyle=caml_string_of_jsbytes("presentationStyle"),
     cst_ClipboardItem=caml_string_of_jsbytes("ClipboardItem"),
     cst_FormData=caml_string_of_jsbytes("FormData"),
     cst_Headers=caml_string_of_jsbytes("Headers"),
     cst_Request=caml_string_of_jsbytes("Request"),
     cst_Response=caml_string_of_jsbytes("Response"),
     cst_fetch=caml_string_of_jsbytes("fetch"),
     cst_caches=caml_string_of_jsbytes("caches"),
     cst_MediaStream=caml_string_of_jsbytes("MediaStream"),
     cst_MediaRecorder=caml_string_of_jsbytes("MediaRecorder"),
     cst_MessageChannel=caml_string_of_jsbytes("MessageChannel"),
     cst_BroadcastChannel=caml_string_of_jsbytes("BroadcastChannel"),
     cst_Notification=caml_string_of_jsbytes("Notification"),
     cst_WebSocket=caml_string_of_jsbytes("WebSocket"),
     cst_precision=caml_string_of_jsbytes("precision"),
     cst_rangeMax=caml_string_of_jsbytes("rangeMax"),
     cst_rangeMin=caml_string_of_jsbytes("rangeMin"),
     cst_name$7=caml_string_of_jsbytes("name"),
     cst_type$6=caml_string_of_jsbytes("type"),
     cst_size$0=caml_string_of_jsbytes("size"),
     cst_isContextLost=caml_string_of_jsbytes("isContextLost"),
     cst_drawingBufferHeight=caml_string_of_jsbytes("drawingBufferHeight"),
     cst_drawingBufferWidth=caml_string_of_jsbytes("drawingBufferWidth"),
     cst_canvas$0=caml_string_of_jsbytes("canvas"),
     cst_webgl=caml_string_of_jsbytes("webgl"),
     cst_webgl2=caml_string_of_jsbytes("webgl2"),
     cst_desynchronized$1=caml_string_of_jsbytes("desynchronized"),
     cst_powerPreference$0=caml_string_of_jsbytes("powerPreference"),
     cst_preserveDrawingBuffer$0=
      caml_string_of_jsbytes("preserveDrawingBuffer"),
     cst_premultipliedApha$0=caml_string_of_jsbytes("premultipliedApha"),
     cst_antialias$0=caml_string_of_jsbytes("antialias"),
     cst_stencil$0=caml_string_of_jsbytes("stencil"),
     cst_depth$0=caml_string_of_jsbytes("depth"),
     cst_alpha$1=caml_string_of_jsbytes("alpha"),
     cst_alpha$0=caml_string_of_jsbytes("alpha"),
     cst_depth=caml_string_of_jsbytes("depth"),
     cst_stencil=caml_string_of_jsbytes("stencil"),
     cst_antialias=caml_string_of_jsbytes("antialias"),
     cst_premultipliedApha=caml_string_of_jsbytes("premultipliedApha"),
     cst_preserveDrawingBuffer=caml_string_of_jsbytes("preserveDrawingBuffer"),
     cst_powerPreference=caml_string_of_jsbytes("powerPreference"),
     cst_failIfMajorPerformanceCave=
      caml_string_of_jsbytes("failIfMajorPerformanceCaveat"),
     cst_desynchronized$0=caml_string_of_jsbytes("desynchronized"),
     cst_data$5=caml_string_of_jsbytes("data"),
     cst_height$4=caml_string_of_jsbytes("height"),
     cst_width$5=caml_string_of_jsbytes("width"),
     cst_ideographicBaseline=caml_string_of_jsbytes("ideographicBaseline"),
     cst_alphabeticBaseline=caml_string_of_jsbytes("alphabeticBaseline"),
     cst_hangingBaseline=caml_string_of_jsbytes("hangingBaseline"),
     cst_emHeightDescent=caml_string_of_jsbytes("emHeightDescent"),
     cst_emHeightAscent=caml_string_of_jsbytes("emHeightAscent"),
     cst_actualBoundingBoxDescent=
      caml_string_of_jsbytes("actualBoundingBoxDescent"),
     cst_actualBoundingBoxAscent=
      caml_string_of_jsbytes("actualBoundingBoxAscent"),
     cst_fontBoundingBoxDescent=
      caml_string_of_jsbytes("fontBoundingBoxDescent"),
     cst_fontBoundingBoxAscent=caml_string_of_jsbytes("fontBoundingBoxAscent"),
     cst_actualBoundingBoxRight=
      caml_string_of_jsbytes("actualBoundingBoxRight"),
     cst_actualBoundingBoxLeft=caml_string_of_jsbytes("actualBoundingBoxLeft"),
     cst_width$4=caml_string_of_jsbytes("width"),
     cst_strokeText=caml_string_of_jsbytes("strokeText"),
     cst_fillText=caml_string_of_jsbytes("fillText"),
     cst_direction$0=caml_string_of_jsbytes("direction"),
     cst_direction=caml_string_of_jsbytes("direction"),
     cst_textBaseline$0=caml_string_of_jsbytes("textBaseline"),
     cst_textBaseline=caml_string_of_jsbytes("textBaseline"),
     cst_textAlign$0=caml_string_of_jsbytes("textAlign"),
     cst_textAlign=caml_string_of_jsbytes("textAlign"),
     cst_font$0=caml_string_of_jsbytes("font"),
     cst_font=caml_string_of_jsbytes("font"),
     cst_shadowColor$0=caml_string_of_jsbytes("shadowColor"),
     cst_shadowColor=caml_string_of_jsbytes("shadowColor"),
     cst_shadowOffsetY$0=caml_string_of_jsbytes("shadowOffsetY"),
     cst_shadowOffsetY=caml_string_of_jsbytes("shadowOffsetY"),
     cst_shadowOffsetX$0=caml_string_of_jsbytes("shadowOffsetX"),
     cst_shadowOffsetX=caml_string_of_jsbytes("shadowOffsetX"),
     cst_shadowBlur$0=caml_string_of_jsbytes("shadowBlur"),
     cst_shadowBlur=caml_string_of_jsbytes("shadowBlur"),
     cst_lineDashOffset$0=caml_string_of_jsbytes("lineDashOffset"),
     cst_lineDashOffset=caml_string_of_jsbytes("lineDashOffset"),
     cst_miterLimit$0=caml_string_of_jsbytes("miterLimit"),
     cst_miterLimit=caml_string_of_jsbytes("miterLimit"),
     cst_lineJoin$0=caml_string_of_jsbytes("lineJoin"),
     cst_lineJoin=caml_string_of_jsbytes("lineJoin"),
     cst_lineCap$0=caml_string_of_jsbytes("lineCap"),
     cst_lineCap=caml_string_of_jsbytes("lineCap"),
     cst_lineWidth$0=caml_string_of_jsbytes("lineWidth"),
     cst_lineWidth=caml_string_of_jsbytes("lineWidth"),
     cst_fillStyle=caml_string_of_jsbytes("fillStyle"),
     cst_strokeStyle=caml_string_of_jsbytes("strokeStyle"),
     cst_filter$0=caml_string_of_jsbytes("filter"),
     cst_filter=caml_string_of_jsbytes("filter"),
     cst_globalCompositeOperation$0=
      caml_string_of_jsbytes("globalCompositeOperation"),
     cst_globalCompositeOperation=
      caml_string_of_jsbytes("globalCompositeOperation"),
     cst_globalAlpha$0=caml_string_of_jsbytes("globalAlpha"),
     cst_globalAlpha=caml_string_of_jsbytes("globalAlpha"),
     cst_imageSmoothingQuality$0=
      caml_string_of_jsbytes("imageSmoothingQuality"),
     cst_imageSmoothingQuality=caml_string_of_jsbytes("imageSmoothingQuality"),
     cst_imageSmoothingEnabled$0=
      caml_string_of_jsbytes("imageSmoothingEnabled"),
     cst_imageSmoothingEnabled=caml_string_of_jsbytes("imageSmoothingEnabled"),
     cst_canvas=caml_string_of_jsbytes("canvas"),
     cst_desynchronized=caml_string_of_jsbytes("desynchronized"),
     cst_alpha=caml_string_of_jsbytes("alpha"),
     cst_addPath=caml_string_of_jsbytes("addPath"),
     cst_captureStrseam=caml_string_of_jsbytes("captureStrseam"),
     cst_toBlob=caml_string_of_jsbytes("toBlob"),
     cst_toDataURL=caml_string_of_jsbytes("toDataURL"),
     cst_type$5=caml_string_of_jsbytes("type"),
     cst_quality$0=caml_string_of_jsbytes("quality"),
     cst_type$4=caml_string_of_jsbytes("type"),
     cst_quality=caml_string_of_jsbytes("quality"),
     cst_height$3=caml_string_of_jsbytes("height"),
     cst_width$3=caml_string_of_jsbytes("width"),
     cst_height$2=caml_string_of_jsbytes("height"),
     cst_width$2=caml_string_of_jsbytes("width"),
     cst_width$1=caml_string_of_jsbytes("width"),
     cst_height$1=caml_string_of_jsbytes("height"),
     cst_w=caml_string_of_jsbytes("w"),
     cst_z=caml_string_of_jsbytes("z"),
     cst_y$0=caml_string_of_jsbytes("y"),
     cst_x$0=caml_string_of_jsbytes("x"),
     cst_f=caml_string_of_jsbytes("f"),
     cst_e=caml_string_of_jsbytes("e"),
     cst_d=caml_string_of_jsbytes("d"),
     cst_c=caml_string_of_jsbytes("c"),
     cst_b=caml_string_of_jsbytes("b"),
     cst_a=caml_string_of_jsbytes("a"),
     cst_m44=caml_string_of_jsbytes("m44"),
     cst_m43=caml_string_of_jsbytes("m43"),
     cst_m42=caml_string_of_jsbytes("m42"),
     cst_m41=caml_string_of_jsbytes("m41"),
     cst_m34=caml_string_of_jsbytes("m34"),
     cst_m33=caml_string_of_jsbytes("m33"),
     cst_m32=caml_string_of_jsbytes("m32"),
     cst_m31=caml_string_of_jsbytes("m31"),
     cst_m24=caml_string_of_jsbytes("m24"),
     cst_m23=caml_string_of_jsbytes("m23"),
     cst_m22=caml_string_of_jsbytes("m22"),
     cst_m21=caml_string_of_jsbytes("m21"),
     cst_m14=caml_string_of_jsbytes("m14"),
     cst_m13=caml_string_of_jsbytes("m13"),
     cst_m12=caml_string_of_jsbytes("m12"),
     cst_m11=caml_string_of_jsbytes("m11"),
     cst_isIdentity=caml_string_of_jsbytes("isIdentity"),
     cst_is2D=caml_string_of_jsbytes("is2D"),
     cst_DOMMatrixReadOnly=caml_string_of_jsbytes("DOMMatrixReadOnly"),
     cst_DOMPointReadOnly=caml_string_of_jsbytes("DOMPointReadOnly"),
     cst_Path2D=caml_string_of_jsbytes("Path2D"),
     cst_ImageData=caml_string_of_jsbytes("ImageData"),
     cst_WebGLRenderingContext=caml_string_of_jsbytes("WebGLRenderingContext"),
     cst_DEPTH_BUFFER_BIT=caml_string_of_jsbytes("DEPTH_BUFFER_BIT"),
     cst_STENCIL_BUFFER_BIT=caml_string_of_jsbytes("STENCIL_BUFFER_BIT"),
     cst_COLOR_BUFFER_BIT=caml_string_of_jsbytes("COLOR_BUFFER_BIT"),
     cst_POINTS=caml_string_of_jsbytes("POINTS"),
     cst_LINES=caml_string_of_jsbytes("LINES"),
     cst_LINE_LOOP=caml_string_of_jsbytes("LINE_LOOP"),
     cst_LINE_STRIP=caml_string_of_jsbytes("LINE_STRIP"),
     cst_TRIANGLES=caml_string_of_jsbytes("TRIANGLES"),
     cst_TRIANGLE_STRIP=caml_string_of_jsbytes("TRIANGLE_STRIP"),
     cst_TRIANGLE_FAN=caml_string_of_jsbytes("TRIANGLE_FAN"),
     cst_ZERO=caml_string_of_jsbytes("ZERO"),
     cst_ONE=caml_string_of_jsbytes("ONE"),
     cst_SRC_COLOR=caml_string_of_jsbytes("SRC_COLOR"),
     cst_ONE_MINUS_SRC_COLOR=caml_string_of_jsbytes("ONE_MINUS_SRC_COLOR"),
     cst_SRC_ALPHA=caml_string_of_jsbytes("SRC_ALPHA"),
     cst_ONE_MINUS_SRC_ALPHA=caml_string_of_jsbytes("ONE_MINUS_SRC_ALPHA"),
     cst_DST_ALPHA=caml_string_of_jsbytes("DST_ALPHA"),
     cst_ONE_MINUS_DST_ALPHA=caml_string_of_jsbytes("ONE_MINUS_DST_ALPHA"),
     cst_DST_COLOR=caml_string_of_jsbytes("DST_COLOR"),
     cst_ONE_MINUS_DST_COLOR=caml_string_of_jsbytes("ONE_MINUS_DST_COLOR"),
     cst_SRC_ALPHA_SATURATE=caml_string_of_jsbytes("SRC_ALPHA_SATURATE"),
     cst_FUNC_ADD=caml_string_of_jsbytes("FUNC_ADD"),
     cst_BLEND_EQUATION=caml_string_of_jsbytes("BLEND_EQUATION"),
     cst_BLEND_EQUATION_RGB=caml_string_of_jsbytes("BLEND_EQUATION_RGB"),
     cst_BLEND_EQUATION_ALPHA=caml_string_of_jsbytes("BLEND_EQUATION_ALPHA"),
     cst_FUNC_SUBTRACT=caml_string_of_jsbytes("FUNC_SUBTRACT"),
     cst_FUNC_REVERSE_SUBTRACT=caml_string_of_jsbytes("FUNC_REVERSE_SUBTRACT"),
     cst_BLEND_DST_RGB=caml_string_of_jsbytes("BLEND_DST_RGB"),
     cst_BLEND_SRC_RGB=caml_string_of_jsbytes("BLEND_SRC_RGB"),
     cst_BLEND_DST_ALPHA=caml_string_of_jsbytes("BLEND_DST_ALPHA"),
     cst_BLEND_SRC_ALPHA=caml_string_of_jsbytes("BLEND_SRC_ALPHA"),
     cst_CONSTANT_COLOR=caml_string_of_jsbytes("CONSTANT_COLOR"),
     cst_ONE_MINUS_CONSTANT_COLOR=
      caml_string_of_jsbytes("ONE_MINUS_CONSTANT_COLOR"),
     cst_CONSTANT_ALPHA=caml_string_of_jsbytes("CONSTANT_ALPHA"),
     cst_ONE_MINUS_CONSTANT_ALPHA=
      caml_string_of_jsbytes("ONE_MINUS_CONSTANT_ALPHA"),
     cst_BLEND_COLOR=caml_string_of_jsbytes("BLEND_COLOR"),
     cst_ARRAY_BUFFER=caml_string_of_jsbytes("ARRAY_BUFFER"),
     cst_ELEMENT_ARRAY_BUFFER=caml_string_of_jsbytes("ELEMENT_ARRAY_BUFFER"),
     cst_ARRAY_BUFFER_BINDING=caml_string_of_jsbytes("ARRAY_BUFFER_BINDING"),
     cst_ELEMENT_ARRAY_BUFFER_BINDI=
      caml_string_of_jsbytes("ELEMENT_ARRAY_BUFFER_BINDING"),
     cst_STREAM_DRAW=caml_string_of_jsbytes("STREAM_DRAW"),
     cst_STATIC_DRAW=caml_string_of_jsbytes("STATIC_DRAW"),
     cst_DYNAMIC_DRAW=caml_string_of_jsbytes("DYNAMIC_DRAW"),
     cst_BUFFER_SIZE=caml_string_of_jsbytes("BUFFER_SIZE"),
     cst_BUFFER_USAGE=caml_string_of_jsbytes("BUFFER_USAGE"),
     cst_CURRENT_VERTEX_ATTRIB=caml_string_of_jsbytes("CURRENT_VERTEX_ATTRIB"),
     cst_FRONT=caml_string_of_jsbytes("FRONT"),
     cst_BACK=caml_string_of_jsbytes("BACK"),
     cst_FRONT_AND_BACK=caml_string_of_jsbytes("FRONT_AND_BACK"),
     cst_CULL_FACE=caml_string_of_jsbytes("CULL_FACE"),
     cst_BLEND=caml_string_of_jsbytes("BLEND"),
     cst_DITHER=caml_string_of_jsbytes("DITHER"),
     cst_STENCIL_TEST=caml_string_of_jsbytes("STENCIL_TEST"),
     cst_DEPTH_TEST=caml_string_of_jsbytes("DEPTH_TEST"),
     cst_SCISSOR_TEST=caml_string_of_jsbytes("SCISSOR_TEST"),
     cst_POLYGON_OFFSET_FILL=caml_string_of_jsbytes("POLYGON_OFFSET_FILL"),
     cst_SAMPLE_ALPHA_TO_COVERAGE=
      caml_string_of_jsbytes("SAMPLE_ALPHA_TO_COVERAGE"),
     cst_SAMPLE_COVERAGE=caml_string_of_jsbytes("SAMPLE_COVERAGE"),
     cst_NO_ERROR=caml_string_of_jsbytes("NO_ERROR"),
     cst_INVALID_ENUM=caml_string_of_jsbytes("INVALID_ENUM"),
     cst_INVALID_VALUE=caml_string_of_jsbytes("INVALID_VALUE"),
     cst_INVALID_OPERATION=caml_string_of_jsbytes("INVALID_OPERATION"),
     cst_OUT_OF_MEMORY=caml_string_of_jsbytes("OUT_OF_MEMORY"),
     cst_CW=caml_string_of_jsbytes("CW"),
     cst_CCW=caml_string_of_jsbytes("CCW"),
     cst_LINE_WIDTH=caml_string_of_jsbytes("LINE_WIDTH"),
     cst_ALIASED_POINT_SIZE_RANGE=
      caml_string_of_jsbytes("ALIASED_POINT_SIZE_RANGE"),
     cst_ALIASED_LINE_WIDTH_RANGE=
      caml_string_of_jsbytes("ALIASED_LINE_WIDTH_RANGE"),
     cst_CULL_FACE_MODE=caml_string_of_jsbytes("CULL_FACE_MODE"),
     cst_FRONT_FACE=caml_string_of_jsbytes("FRONT_FACE"),
     cst_DEPTH_RANGE=caml_string_of_jsbytes("DEPTH_RANGE"),
     cst_DEPTH_WRITEMASK=caml_string_of_jsbytes("DEPTH_WRITEMASK"),
     cst_DEPTH_CLEAR_VALUE=caml_string_of_jsbytes("DEPTH_CLEAR_VALUE"),
     cst_DEPTH_FUNC=caml_string_of_jsbytes("DEPTH_FUNC"),
     cst_STENCIL_CLEAR_VALUE=caml_string_of_jsbytes("STENCIL_CLEAR_VALUE"),
     cst_STENCIL_FUNC=caml_string_of_jsbytes("STENCIL_FUNC"),
     cst_STENCIL_FAIL=caml_string_of_jsbytes("STENCIL_FAIL"),
     cst_STENCIL_PASS_DEPTH_FAIL=
      caml_string_of_jsbytes("STENCIL_PASS_DEPTH_FAIL"),
     cst_STENCIL_PASS_DEPTH_PASS=
      caml_string_of_jsbytes("STENCIL_PASS_DEPTH_PASS"),
     cst_STENCIL_REF=caml_string_of_jsbytes("STENCIL_REF"),
     cst_STENCIL_VALUE_MASK=caml_string_of_jsbytes("STENCIL_VALUE_MASK"),
     cst_STENCIL_WRITEMASK=caml_string_of_jsbytes("STENCIL_WRITEMASK"),
     cst_STENCIL_BACK_FUNC=caml_string_of_jsbytes("STENCIL_BACK_FUNC"),
     cst_STENCIL_BACK_FAIL=caml_string_of_jsbytes("STENCIL_BACK_FAIL"),
     cst_STENCIL_BACK_PASS_DEPTH_FA=
      caml_string_of_jsbytes("STENCIL_BACK_PASS_DEPTH_FAIL"),
     cst_STENCIL_BACK_PASS_DEPTH_PA=
      caml_string_of_jsbytes("STENCIL_BACK_PASS_DEPTH_PASS"),
     cst_STENCIL_BACK_REF=caml_string_of_jsbytes("STENCIL_BACK_REF"),
     cst_STENCIL_BACK_VALUE_MASK=
      caml_string_of_jsbytes("STENCIL_BACK_VALUE_MASK"),
     cst_STENCIL_BACK_WRITEMASK=
      caml_string_of_jsbytes("STENCIL_BACK_WRITEMASK"),
     cst_VIEWPORT=caml_string_of_jsbytes("VIEWPORT"),
     cst_SCISSOR_BOX=caml_string_of_jsbytes("SCISSOR_BOX"),
     cst_COLOR_CLEAR_VALUE=caml_string_of_jsbytes("COLOR_CLEAR_VALUE"),
     cst_COLOR_WRITEMASK=caml_string_of_jsbytes("COLOR_WRITEMASK"),
     cst_UNPACK_ALIGNMENT=caml_string_of_jsbytes("UNPACK_ALIGNMENT"),
     cst_PACK_ALIGNMENT=caml_string_of_jsbytes("PACK_ALIGNMENT"),
     cst_MAX_TEXTURE_SIZE=caml_string_of_jsbytes("MAX_TEXTURE_SIZE"),
     cst_MAX_VIEWPORT_DIMS=caml_string_of_jsbytes("MAX_VIEWPORT_DIMS"),
     cst_SUBPIXEL_BITS=caml_string_of_jsbytes("SUBPIXEL_BITS"),
     cst_RED_BITS=caml_string_of_jsbytes("RED_BITS"),
     cst_GREEN_BITS=caml_string_of_jsbytes("GREEN_BITS"),
     cst_BLUE_BITS=caml_string_of_jsbytes("BLUE_BITS"),
     cst_ALPHA_BITS=caml_string_of_jsbytes("ALPHA_BITS"),
     cst_DEPTH_BITS=caml_string_of_jsbytes("DEPTH_BITS"),
     cst_STENCIL_BITS=caml_string_of_jsbytes("STENCIL_BITS"),
     cst_POLYGON_OFFSET_UNITS=caml_string_of_jsbytes("POLYGON_OFFSET_UNITS"),
     cst_POLYGON_OFFSET_FACTOR=caml_string_of_jsbytes("POLYGON_OFFSET_FACTOR"),
     cst_TEXTURE_BINDING_2D=caml_string_of_jsbytes("TEXTURE_BINDING_2D"),
     cst_SAMPLE_BUFFERS=caml_string_of_jsbytes("SAMPLE_BUFFERS"),
     cst_SAMPLES=caml_string_of_jsbytes("SAMPLES"),
     cst_SAMPLE_COVERAGE_VALUE=caml_string_of_jsbytes("SAMPLE_COVERAGE_VALUE"),
     cst_SAMPLE_COVERAGE_INVERT=
      caml_string_of_jsbytes("SAMPLE_COVERAGE_INVERT"),
     cst_COMPRESSED_TEXTURE_FORMATS=
      caml_string_of_jsbytes("COMPRESSED_TEXTURE_FORMATS"),
     cst_DONT_CARE=caml_string_of_jsbytes("DONT_CARE"),
     cst_FASTEST=caml_string_of_jsbytes("FASTEST"),
     cst_NICEST=caml_string_of_jsbytes("NICEST"),
     cst_GENERATE_MIPMAP_HINT=caml_string_of_jsbytes("GENERATE_MIPMAP_HINT"),
     cst_BYTE=caml_string_of_jsbytes("BYTE"),
     cst_UNSIGNED_BYTE=caml_string_of_jsbytes("UNSIGNED_BYTE"),
     cst_SHORT=caml_string_of_jsbytes("SHORT"),
     cst_UNSIGNED_SHORT=caml_string_of_jsbytes("UNSIGNED_SHORT"),
     cst_INT=caml_string_of_jsbytes("INT"),
     cst_UNSIGNED_INT=caml_string_of_jsbytes("UNSIGNED_INT"),
     cst_FLOAT=caml_string_of_jsbytes("FLOAT"),
     cst_DEPTH_COMPONENT=caml_string_of_jsbytes("DEPTH_COMPONENT"),
     cst_ALPHA=caml_string_of_jsbytes("ALPHA"),
     cst_RGB=caml_string_of_jsbytes("RGB"),
     cst_RGBA=caml_string_of_jsbytes("RGBA"),
     cst_LUMINANCE=caml_string_of_jsbytes("LUMINANCE"),
     cst_LUMINANCE_ALPHA=caml_string_of_jsbytes("LUMINANCE_ALPHA"),
     cst_UNSIGNED_SHORT_4_4_4_4=
      caml_string_of_jsbytes("UNSIGNED_SHORT_4_4_4_4"),
     cst_UNSIGNED_SHORT_5_5_5_1=
      caml_string_of_jsbytes("UNSIGNED_SHORT_5_5_5_1"),
     cst_UNSIGNED_SHORT_5_6_5=caml_string_of_jsbytes("UNSIGNED_SHORT_5_6_5"),
     cst_FRAGMENT_SHADER=caml_string_of_jsbytes("FRAGMENT_SHADER"),
     cst_VERTEX_SHADER=caml_string_of_jsbytes("VERTEX_SHADER"),
     cst_MAX_VERTEX_ATTRIBS=caml_string_of_jsbytes("MAX_VERTEX_ATTRIBS"),
     cst_MAX_VERTEX_UNIFORM_VECTORS=
      caml_string_of_jsbytes("MAX_VERTEX_UNIFORM_VECTORS"),
     cst_MAX_VARYING_VECTORS=caml_string_of_jsbytes("MAX_VARYING_VECTORS"),
     cst_MAX_COMBINED_TEXTURE_IMAGE=
      caml_string_of_jsbytes("MAX_COMBINED_TEXTURE_IMAGE_UNITS"),
     cst_MAX_VERTEX_TEXTURE_IMAGE_U=
      caml_string_of_jsbytes("MAX_VERTEX_TEXTURE_IMAGE_UNITS"),
     cst_MAX_TEXTURE_IMAGE_UNITS=
      caml_string_of_jsbytes("MAX_TEXTURE_IMAGE_UNITS"),
     cst_MAX_FRAGMENT_UNIFORM_VECTO=
      caml_string_of_jsbytes("MAX_FRAGMENT_UNIFORM_VECTORS"),
     cst_SHADER_TYPE=caml_string_of_jsbytes("SHADER_TYPE"),
     cst_DELETE_STATUS=caml_string_of_jsbytes("DELETE_STATUS"),
     cst_LINK_STATUS=caml_string_of_jsbytes("LINK_STATUS"),
     cst_VALIDATE_STATUS=caml_string_of_jsbytes("VALIDATE_STATUS"),
     cst_ATTACHED_SHADERS=caml_string_of_jsbytes("ATTACHED_SHADERS"),
     cst_ACTIVE_UNIFORMS=caml_string_of_jsbytes("ACTIVE_UNIFORMS"),
     cst_ACTIVE_ATTRIBUTES=caml_string_of_jsbytes("ACTIVE_ATTRIBUTES"),
     cst_SHADING_LANGUAGE_VERSION=
      caml_string_of_jsbytes("SHADING_LANGUAGE_VERSION"),
     cst_CURRENT_PROGRAM=caml_string_of_jsbytes("CURRENT_PROGRAM"),
     cst_NEVER=caml_string_of_jsbytes("NEVER"),
     cst_LESS=caml_string_of_jsbytes("LESS"),
     cst_EQUAL=caml_string_of_jsbytes("EQUAL"),
     cst_LEQUAL=caml_string_of_jsbytes("LEQUAL"),
     cst_GREATER=caml_string_of_jsbytes("GREATER"),
     cst_NOTEQUAL=caml_string_of_jsbytes("NOTEQUAL"),
     cst_GEQUAL=caml_string_of_jsbytes("GEQUAL"),
     cst_ALWAYS=caml_string_of_jsbytes("ALWAYS"),
     cst_KEEP=caml_string_of_jsbytes("KEEP"),
     cst_REPLACE=caml_string_of_jsbytes("REPLACE"),
     cst_INCR=caml_string_of_jsbytes("INCR"),
     cst_DECR=caml_string_of_jsbytes("DECR"),
     cst_INVERT=caml_string_of_jsbytes("INVERT"),
     cst_INCR_WRAP=caml_string_of_jsbytes("INCR_WRAP"),
     cst_DECR_WRAP=caml_string_of_jsbytes("DECR_WRAP"),
     cst_VENDOR=caml_string_of_jsbytes("VENDOR"),
     cst_RENDERER=caml_string_of_jsbytes("RENDERER"),
     cst_VERSION=caml_string_of_jsbytes("VERSION"),
     cst_NEAREST=caml_string_of_jsbytes("NEAREST"),
     cst_LINEAR=caml_string_of_jsbytes("LINEAR"),
     cst_NEAREST_MIPMAP_NEAREST=
      caml_string_of_jsbytes("NEAREST_MIPMAP_NEAREST"),
     cst_LINEAR_MIPMAP_NEAREST=caml_string_of_jsbytes("LINEAR_MIPMAP_NEAREST"),
     cst_NEAREST_MIPMAP_LINEAR=caml_string_of_jsbytes("NEAREST_MIPMAP_LINEAR"),
     cst_LINEAR_MIPMAP_LINEAR=caml_string_of_jsbytes("LINEAR_MIPMAP_LINEAR"),
     cst_TEXTURE_MAG_FILTER=caml_string_of_jsbytes("TEXTURE_MAG_FILTER"),
     cst_TEXTURE_MIN_FILTER=caml_string_of_jsbytes("TEXTURE_MIN_FILTER"),
     cst_TEXTURE_WRAP_S=caml_string_of_jsbytes("TEXTURE_WRAP_S"),
     cst_TEXTURE_WRAP_T=caml_string_of_jsbytes("TEXTURE_WRAP_T"),
     cst_TEXTURE_2D=caml_string_of_jsbytes("TEXTURE_2D"),
     cst_TEXTURE=caml_string_of_jsbytes("TEXTURE"),
     cst_TEXTURE_CUBE_MAP=caml_string_of_jsbytes("TEXTURE_CUBE_MAP"),
     cst_TEXTURE_BINDING_CUBE_MAP=
      caml_string_of_jsbytes("TEXTURE_BINDING_CUBE_MAP"),
     cst_TEXTURE_CUBE_MAP_POSITIVE_=
      caml_string_of_jsbytes("TEXTURE_CUBE_MAP_POSITIVE_X"),
     cst_TEXTURE_CUBE_MAP_NEGATIVE_=
      caml_string_of_jsbytes("TEXTURE_CUBE_MAP_NEGATIVE_X"),
     cst_TEXTURE_CUBE_MAP_POSITIVE_$0=
      caml_string_of_jsbytes("TEXTURE_CUBE_MAP_POSITIVE_Y"),
     cst_TEXTURE_CUBE_MAP_NEGATIVE_$0=
      caml_string_of_jsbytes("TEXTURE_CUBE_MAP_NEGATIVE_Y"),
     cst_TEXTURE_CUBE_MAP_POSITIVE_$1=
      caml_string_of_jsbytes("TEXTURE_CUBE_MAP_POSITIVE_Z"),
     cst_TEXTURE_CUBE_MAP_NEGATIVE_$1=
      caml_string_of_jsbytes("TEXTURE_CUBE_MAP_NEGATIVE_Z"),
     cst_MAX_CUBE_MAP_TEXTURE_SIZE=
      caml_string_of_jsbytes("MAX_CUBE_MAP_TEXTURE_SIZE"),
     cst_TEXTURE0=caml_string_of_jsbytes("TEXTURE0"),
     cst_TEXTURE1=caml_string_of_jsbytes("TEXTURE1"),
     cst_TEXTURE2=caml_string_of_jsbytes("TEXTURE2"),
     cst_TEXTURE3=caml_string_of_jsbytes("TEXTURE3"),
     cst_TEXTURE4=caml_string_of_jsbytes("TEXTURE4"),
     cst_TEXTURE5=caml_string_of_jsbytes("TEXTURE5"),
     cst_TEXTURE6=caml_string_of_jsbytes("TEXTURE6"),
     cst_TEXTURE7=caml_string_of_jsbytes("TEXTURE7"),
     cst_TEXTURE8=caml_string_of_jsbytes("TEXTURE8"),
     cst_TEXTURE9=caml_string_of_jsbytes("TEXTURE9"),
     cst_TEXTURE10=caml_string_of_jsbytes("TEXTURE10"),
     cst_TEXTURE11=caml_string_of_jsbytes("TEXTURE11"),
     cst_TEXTURE12=caml_string_of_jsbytes("TEXTURE12"),
     cst_TEXTURE13=caml_string_of_jsbytes("TEXTURE13"),
     cst_TEXTURE14=caml_string_of_jsbytes("TEXTURE14"),
     cst_TEXTURE15=caml_string_of_jsbytes("TEXTURE15"),
     cst_TEXTURE16=caml_string_of_jsbytes("TEXTURE16"),
     cst_TEXTURE17=caml_string_of_jsbytes("TEXTURE17"),
     cst_TEXTURE18=caml_string_of_jsbytes("TEXTURE18"),
     cst_TEXTURE19=caml_string_of_jsbytes("TEXTURE19"),
     cst_TEXTURE20=caml_string_of_jsbytes("TEXTURE20"),
     cst_TEXTURE21=caml_string_of_jsbytes("TEXTURE21"),
     cst_TEXTURE22=caml_string_of_jsbytes("TEXTURE22"),
     cst_TEXTURE23=caml_string_of_jsbytes("TEXTURE23"),
     cst_TEXTURE24=caml_string_of_jsbytes("TEXTURE24"),
     cst_TEXTURE25=caml_string_of_jsbytes("TEXTURE25"),
     cst_TEXTURE26=caml_string_of_jsbytes("TEXTURE26"),
     cst_TEXTURE27=caml_string_of_jsbytes("TEXTURE27"),
     cst_TEXTURE28=caml_string_of_jsbytes("TEXTURE28"),
     cst_TEXTURE29=caml_string_of_jsbytes("TEXTURE29"),
     cst_TEXTURE30=caml_string_of_jsbytes("TEXTURE30"),
     cst_TEXTURE31=caml_string_of_jsbytes("TEXTURE31"),
     cst_ACTIVE_TEXTURE=caml_string_of_jsbytes("ACTIVE_TEXTURE"),
     cst_REPEAT=caml_string_of_jsbytes("REPEAT"),
     cst_CLAMP_TO_EDGE=caml_string_of_jsbytes("CLAMP_TO_EDGE"),
     cst_MIRRORED_REPEAT=caml_string_of_jsbytes("MIRRORED_REPEAT"),
     cst_FLOAT_VEC2=caml_string_of_jsbytes("FLOAT_VEC2"),
     cst_FLOAT_VEC3=caml_string_of_jsbytes("FLOAT_VEC3"),
     cst_FLOAT_VEC4=caml_string_of_jsbytes("FLOAT_VEC4"),
     cst_INT_VEC2=caml_string_of_jsbytes("INT_VEC2"),
     cst_INT_VEC3=caml_string_of_jsbytes("INT_VEC3"),
     cst_INT_VEC4=caml_string_of_jsbytes("INT_VEC4"),
     cst_BOOL=caml_string_of_jsbytes("BOOL"),
     cst_BOOL_VEC2=caml_string_of_jsbytes("BOOL_VEC2"),
     cst_BOOL_VEC3=caml_string_of_jsbytes("BOOL_VEC3"),
     cst_BOOL_VEC4=caml_string_of_jsbytes("BOOL_VEC4"),
     cst_FLOAT_MAT2=caml_string_of_jsbytes("FLOAT_MAT2"),
     cst_FLOAT_MAT3=caml_string_of_jsbytes("FLOAT_MAT3"),
     cst_FLOAT_MAT4=caml_string_of_jsbytes("FLOAT_MAT4"),
     cst_SAMPLER_2D=caml_string_of_jsbytes("SAMPLER_2D"),
     cst_SAMPLER_CUBE=caml_string_of_jsbytes("SAMPLER_CUBE"),
     cst_VERTEX_ATTRIB_ARRAY_ENABLE=
      caml_string_of_jsbytes("VERTEX_ATTRIB_ARRAY_ENABLED"),
     cst_VERTEX_ATTRIB_ARRAY_SIZE=
      caml_string_of_jsbytes("VERTEX_ATTRIB_ARRAY_SIZE"),
     cst_VERTEX_ATTRIB_ARRAY_STRIDE=
      caml_string_of_jsbytes("VERTEX_ATTRIB_ARRAY_STRIDE"),
     cst_VERTEX_ATTRIB_ARRAY_TYPE=
      caml_string_of_jsbytes("VERTEX_ATTRIB_ARRAY_TYPE"),
     cst_VERTEX_ATTRIB_ARRAY_NORMAL=
      caml_string_of_jsbytes("VERTEX_ATTRIB_ARRAY_NORMALIZED"),
     cst_VERTEX_ATTRIB_ARRAY_POINTE=
      caml_string_of_jsbytes("VERTEX_ATTRIB_ARRAY_POINTER"),
     cst_VERTEX_ATTRIB_ARRAY_BUFFER=
      caml_string_of_jsbytes("VERTEX_ATTRIB_ARRAY_BUFFER_BINDING"),
     cst_IMPLEMENTATION_COLOR_READ_=
      caml_string_of_jsbytes("IMPLEMENTATION_COLOR_READ_TYPE"),
     cst_IMPLEMENTATION_COLOR_READ_$0=
      caml_string_of_jsbytes("IMPLEMENTATION_COLOR_READ_FORMAT"),
     cst_COMPILE_STATUS=caml_string_of_jsbytes("COMPILE_STATUS"),
     cst_LOW_FLOAT=caml_string_of_jsbytes("LOW_FLOAT"),
     cst_MEDIUM_FLOAT=caml_string_of_jsbytes("MEDIUM_FLOAT"),
     cst_HIGH_FLOAT=caml_string_of_jsbytes("HIGH_FLOAT"),
     cst_LOW_INT=caml_string_of_jsbytes("LOW_INT"),
     cst_MEDIUM_INT=caml_string_of_jsbytes("MEDIUM_INT"),
     cst_HIGH_INT=caml_string_of_jsbytes("HIGH_INT"),
     cst_FRAMEBUFFER=caml_string_of_jsbytes("FRAMEBUFFER"),
     cst_RENDERBUFFER=caml_string_of_jsbytes("RENDERBUFFER"),
     cst_RGBA4=caml_string_of_jsbytes("RGBA4"),
     cst_RGB5_A1=caml_string_of_jsbytes("RGB5_A1"),
     cst_RGB565=caml_string_of_jsbytes("RGB565"),
     cst_DEPTH_COMPONENT16=caml_string_of_jsbytes("DEPTH_COMPONENT16"),
     cst_STENCIL_INDEX8=caml_string_of_jsbytes("STENCIL_INDEX8"),
     cst_DEPTH_STENCIL=caml_string_of_jsbytes("DEPTH_STENCIL"),
     cst_RENDERBUFFER_WIDTH=caml_string_of_jsbytes("RENDERBUFFER_WIDTH"),
     cst_RENDERBUFFER_HEIGHT=caml_string_of_jsbytes("RENDERBUFFER_HEIGHT"),
     cst_RENDERBUFFER_INTERNAL_FORM=
      caml_string_of_jsbytes("RENDERBUFFER_INTERNAL_FORMAT"),
     cst_RENDERBUFFER_RED_SIZE=caml_string_of_jsbytes("RENDERBUFFER_RED_SIZE"),
     cst_RENDERBUFFER_GREEN_SIZE=
      caml_string_of_jsbytes("RENDERBUFFER_GREEN_SIZE"),
     cst_RENDERBUFFER_BLUE_SIZE=
      caml_string_of_jsbytes("RENDERBUFFER_BLUE_SIZE"),
     cst_RENDERBUFFER_ALPHA_SIZE=
      caml_string_of_jsbytes("RENDERBUFFER_ALPHA_SIZE"),
     cst_RENDERBUFFER_DEPTH_SIZE=
      caml_string_of_jsbytes("RENDERBUFFER_DEPTH_SIZE"),
     cst_RENDERBUFFER_STENCIL_SIZE=
      caml_string_of_jsbytes("RENDERBUFFER_STENCIL_SIZE"),
     cst_FRAMEBUFFER_ATTACHMENT_OBJ=
      caml_string_of_jsbytes("FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE"),
     cst_FRAMEBUFFER_ATTACHMENT_OBJ$0=
      caml_string_of_jsbytes("FRAMEBUFFER_ATTACHMENT_OBJECT_NAME"),
     cst_FRAMEBUFFER_ATTACHMENT_TEX=
      caml_string_of_jsbytes("FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL"),
     cst_FRAMEBUFFER_ATTACHMENT_TEX$0=
      caml_string_of_jsbytes("FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE"),
     cst_COLOR_ATTACHMENT0=caml_string_of_jsbytes("COLOR_ATTACHMENT0"),
     cst_DEPTH_ATTACHMENT=caml_string_of_jsbytes("DEPTH_ATTACHMENT"),
     cst_STENCIL_ATTACHMENT=caml_string_of_jsbytes("STENCIL_ATTACHMENT"),
     cst_DEPTH_STENCIL_ATTACHMENT=
      caml_string_of_jsbytes("DEPTH_STENCIL_ATTACHMENT"),
     cst_NONE=caml_string_of_jsbytes("NONE"),
     cst_FRAMEBUFFER_COMPLETE=caml_string_of_jsbytes("FRAMEBUFFER_COMPLETE"),
     cst_FRAMEBUFFER_INCOMPLETE_ATT=
      caml_string_of_jsbytes("FRAMEBUFFER_INCOMPLETE_ATTACHMENT"),
     cst_FRAMEBUFFER_INCOMPLETE_MIS=
      caml_string_of_jsbytes("FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT"),
     cst_FRAMEBUFFER_INCOMPLETE_DIM=
      caml_string_of_jsbytes("FRAMEBUFFER_INCOMPLETE_DIMENSIONS"),
     cst_FRAMEBUFFER_UNSUPPORTED=
      caml_string_of_jsbytes("FRAMEBUFFER_UNSUPPORTED"),
     cst_FRAMEBUFFER_BINDING=caml_string_of_jsbytes("FRAMEBUFFER_BINDING"),
     cst_RENDERBUFFER_BINDING=caml_string_of_jsbytes("RENDERBUFFER_BINDING"),
     cst_MAX_RENDERBUFFER_SIZE=caml_string_of_jsbytes("MAX_RENDERBUFFER_SIZE"),
     cst_INVALID_FRAMEBUFFER_OPERAT=
      caml_string_of_jsbytes("INVALID_FRAMEBUFFER_OPERATION"),
     cst_UNPACK_FLIP_Y_WEBGL=caml_string_of_jsbytes("UNPACK_FLIP_Y_WEBGL"),
     cst_UNPACK_PREMULTIPLY_ALPHA_W=
      caml_string_of_jsbytes("UNPACK_PREMULTIPLY_ALPHA_WEBGL"),
     cst_CONTEXT_LOST_WEBGL=caml_string_of_jsbytes("CONTEXT_LOST_WEBGL"),
     cst_UNPACK_COLORSPACE_CONVERSI=
      caml_string_of_jsbytes("UNPACK_COLORSPACE_CONVERSION_WEBGL"),
     cst_BROWSER_DEFAULT_WEBGL=caml_string_of_jsbytes("BROWSER_DEFAULT_WEBGL"),
     cst_WebGL2RenderingContext=
      caml_string_of_jsbytes("WebGL2RenderingContext"),
     cst_READ_BUFFER=caml_string_of_jsbytes("READ_BUFFER"),
     cst_UNPACK_ROW_LENGTH=caml_string_of_jsbytes("UNPACK_ROW_LENGTH"),
     cst_UNPACK_SKIP_ROWS=caml_string_of_jsbytes("UNPACK_SKIP_ROWS"),
     cst_UNPACK_SKIP_PIXELS=caml_string_of_jsbytes("UNPACK_SKIP_PIXELS"),
     cst_PACK_ROW_LENGTH=caml_string_of_jsbytes("PACK_ROW_LENGTH"),
     cst_PACK_SKIP_ROWS=caml_string_of_jsbytes("PACK_SKIP_ROWS"),
     cst_PACK_SKIP_PIXELS=caml_string_of_jsbytes("PACK_SKIP_PIXELS"),
     cst_COLOR=caml_string_of_jsbytes("COLOR"),
     cst_DEPTH=caml_string_of_jsbytes("DEPTH"),
     cst_STENCIL=caml_string_of_jsbytes("STENCIL"),
     cst_RED=caml_string_of_jsbytes("RED"),
     cst_RGB8=caml_string_of_jsbytes("RGB8"),
     cst_RGBA8=caml_string_of_jsbytes("RGBA8"),
     cst_RGB10_A2=caml_string_of_jsbytes("RGB10_A2"),
     cst_TEXTURE_BINDING_3D=caml_string_of_jsbytes("TEXTURE_BINDING_3D"),
     cst_UNPACK_SKIP_IMAGES=caml_string_of_jsbytes("UNPACK_SKIP_IMAGES"),
     cst_UNPACK_IMAGE_HEIGHT=caml_string_of_jsbytes("UNPACK_IMAGE_HEIGHT"),
     cst_TEXTURE_3D=caml_string_of_jsbytes("TEXTURE_3D"),
     cst_TEXTURE_WRAP_R=caml_string_of_jsbytes("TEXTURE_WRAP_R"),
     cst_MAX_3D_TEXTURE_SIZE=caml_string_of_jsbytes("MAX_3D_TEXTURE_SIZE"),
     cst_UNSIGNED_INT_2_10_10_10_RE=
      caml_string_of_jsbytes("UNSIGNED_INT_2_10_10_10_REV"),
     cst_MAX_ELEMENTS_VERTICES=caml_string_of_jsbytes("MAX_ELEMENTS_VERTICES"),
     cst_MAX_ELEMENTS_INDICES=caml_string_of_jsbytes("MAX_ELEMENTS_INDICES"),
     cst_TEXTURE_MIN_LOD=caml_string_of_jsbytes("TEXTURE_MIN_LOD"),
     cst_TEXTURE_MAX_LOD=caml_string_of_jsbytes("TEXTURE_MAX_LOD"),
     cst_TEXTURE_BASE_LEVEL=caml_string_of_jsbytes("TEXTURE_BASE_LEVEL"),
     cst_TEXTURE_MAX_LEVEL=caml_string_of_jsbytes("TEXTURE_MAX_LEVEL"),
     cst_MIN=caml_string_of_jsbytes("MIN"),
     cst_MAX=caml_string_of_jsbytes("MAX"),
     cst_DEPTH_COMPONENT24=caml_string_of_jsbytes("DEPTH_COMPONENT24"),
     cst_MAX_TEXTURE_LOD_BIAS=caml_string_of_jsbytes("MAX_TEXTURE_LOD_BIAS"),
     cst_TEXTURE_COMPARE_MODE=caml_string_of_jsbytes("TEXTURE_COMPARE_MODE"),
     cst_TEXTURE_COMPARE_FUNC=caml_string_of_jsbytes("TEXTURE_COMPARE_FUNC"),
     cst_CURRENT_QUERY=caml_string_of_jsbytes("CURRENT_QUERY"),
     cst_QUERY_RESULT=caml_string_of_jsbytes("QUERY_RESULT"),
     cst_QUERY_RESULT_AVAILABLE=
      caml_string_of_jsbytes("QUERY_RESULT_AVAILABLE"),
     cst_STREAM_READ=caml_string_of_jsbytes("STREAM_READ"),
     cst_STREAM_COPY=caml_string_of_jsbytes("STREAM_COPY"),
     cst_STATIC_READ=caml_string_of_jsbytes("STATIC_READ"),
     cst_STATIC_COPY=caml_string_of_jsbytes("STATIC_COPY"),
     cst_DYNAMIC_READ=caml_string_of_jsbytes("DYNAMIC_READ"),
     cst_DYNAMIC_COPY=caml_string_of_jsbytes("DYNAMIC_COPY"),
     cst_MAX_DRAW_BUFFERS=caml_string_of_jsbytes("MAX_DRAW_BUFFERS"),
     cst_DRAW_BUFFER0=caml_string_of_jsbytes("DRAW_BUFFER0"),
     cst_DRAW_BUFFER1=caml_string_of_jsbytes("DRAW_BUFFER1"),
     cst_DRAW_BUFFER2=caml_string_of_jsbytes("DRAW_BUFFER2"),
     cst_DRAW_BUFFER3=caml_string_of_jsbytes("DRAW_BUFFER3"),
     cst_DRAW_BUFFER4=caml_string_of_jsbytes("DRAW_BUFFER4"),
     cst_DRAW_BUFFER5=caml_string_of_jsbytes("DRAW_BUFFER5"),
     cst_DRAW_BUFFER6=caml_string_of_jsbytes("DRAW_BUFFER6"),
     cst_DRAW_BUFFER7=caml_string_of_jsbytes("DRAW_BUFFER7"),
     cst_DRAW_BUFFER8=caml_string_of_jsbytes("DRAW_BUFFER8"),
     cst_DRAW_BUFFER9=caml_string_of_jsbytes("DRAW_BUFFER9"),
     cst_DRAW_BUFFER10=caml_string_of_jsbytes("DRAW_BUFFER10"),
     cst_DRAW_BUFFER11=caml_string_of_jsbytes("DRAW_BUFFER11"),
     cst_DRAW_BUFFER12=caml_string_of_jsbytes("DRAW_BUFFER12"),
     cst_DRAW_BUFFER13=caml_string_of_jsbytes("DRAW_BUFFER13"),
     cst_DRAW_BUFFER14=caml_string_of_jsbytes("DRAW_BUFFER14"),
     cst_DRAW_BUFFER15=caml_string_of_jsbytes("DRAW_BUFFER15"),
     cst_MAX_FRAGMENT_UNIFORM_COMPO=
      caml_string_of_jsbytes("MAX_FRAGMENT_UNIFORM_COMPONENTS"),
     cst_MAX_VERTEX_UNIFORM_COMPONE=
      caml_string_of_jsbytes("MAX_VERTEX_UNIFORM_COMPONENTS"),
     cst_SAMPLER_3D=caml_string_of_jsbytes("SAMPLER_3D"),
     cst_SAMPLER_2D_SHADOW=caml_string_of_jsbytes("SAMPLER_2D_SHADOW"),
     cst_FRAGMENT_SHADER_DERIVATIVE=
      caml_string_of_jsbytes("FRAGMENT_SHADER_DERIVATIVE_HINT"),
     cst_PIXEL_PACK_BUFFER=caml_string_of_jsbytes("PIXEL_PACK_BUFFER"),
     cst_PIXEL_UNPACK_BUFFER=caml_string_of_jsbytes("PIXEL_UNPACK_BUFFER"),
     cst_PIXEL_PACK_BUFFER_BINDING=
      caml_string_of_jsbytes("PIXEL_PACK_BUFFER_BINDING"),
     cst_PIXEL_UNPACK_BUFFER_BINDIN=
      caml_string_of_jsbytes("PIXEL_UNPACK_BUFFER_BINDING"),
     cst_FLOAT_MAT2x3=caml_string_of_jsbytes("FLOAT_MAT2x3"),
     cst_FLOAT_MAT2x4=caml_string_of_jsbytes("FLOAT_MAT2x4"),
     cst_FLOAT_MAT3x2=caml_string_of_jsbytes("FLOAT_MAT3x2"),
     cst_FLOAT_MAT3x4=caml_string_of_jsbytes("FLOAT_MAT3x4"),
     cst_FLOAT_MAT4x2=caml_string_of_jsbytes("FLOAT_MAT4x2"),
     cst_FLOAT_MAT4x3=caml_string_of_jsbytes("FLOAT_MAT4x3"),
     cst_SRGB=caml_string_of_jsbytes("SRGB"),
     cst_SRGB8=caml_string_of_jsbytes("SRGB8"),
     cst_SRGB8_ALPHA8=caml_string_of_jsbytes("SRGB8_ALPHA8"),
     cst_COMPARE_REF_TO_TEXTURE=
      caml_string_of_jsbytes("COMPARE_REF_TO_TEXTURE"),
     cst_RGBA32F=caml_string_of_jsbytes("RGBA32F"),
     cst_RGB32F=caml_string_of_jsbytes("RGB32F"),
     cst_RGBA16F=caml_string_of_jsbytes("RGBA16F"),
     cst_RGB16F=caml_string_of_jsbytes("RGB16F"),
     cst_VERTEX_ATTRIB_ARRAY_INTEGE=
      caml_string_of_jsbytes("VERTEX_ATTRIB_ARRAY_INTEGER"),
     cst_MAX_ARRAY_TEXTURE_LAYERS=
      caml_string_of_jsbytes("MAX_ARRAY_TEXTURE_LAYERS"),
     cst_MIN_PROGRAM_TEXEL_OFFSET=
      caml_string_of_jsbytes("MIN_PROGRAM_TEXEL_OFFSET"),
     cst_MAX_PROGRAM_TEXEL_OFFSET=
      caml_string_of_jsbytes("MAX_PROGRAM_TEXEL_OFFSET"),
     cst_MAX_VARYING_COMPONENTS=
      caml_string_of_jsbytes("MAX_VARYING_COMPONENTS"),
     cst_TEXTURE_2D_ARRAY=caml_string_of_jsbytes("TEXTURE_2D_ARRAY"),
     cst_TEXTURE_BINDING_2D_ARRAY=
      caml_string_of_jsbytes("TEXTURE_BINDING_2D_ARRAY"),
     cst_R11F_G11F_B10F=caml_string_of_jsbytes("R11F_G11F_B10F"),
     cst_UNSIGNED_INT_10F_11F_11F_R=
      caml_string_of_jsbytes("UNSIGNED_INT_10F_11F_11F_REV"),
     cst_RGB9_E5=caml_string_of_jsbytes("RGB9_E5"),
     cst_UNSIGNED_INT_5_9_9_9_REV=
      caml_string_of_jsbytes("UNSIGNED_INT_5_9_9_9_REV"),
     cst_TRANSFORM_FEEDBACK_BUFFER_=
      caml_string_of_jsbytes("TRANSFORM_FEEDBACK_BUFFER_MODE"),
     cst_MAX_TRANSFORM_FEEDBACK_SEP=
      caml_string_of_jsbytes("MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS"),
     cst_TRANSFORM_FEEDBACK_VARYING=
      caml_string_of_jsbytes("TRANSFORM_FEEDBACK_VARYINGS"),
     cst_TRANSFORM_FEEDBACK_BUFFER_$0=
      caml_string_of_jsbytes("TRANSFORM_FEEDBACK_BUFFER_START"),
     cst_TRANSFORM_FEEDBACK_BUFFER_$1=
      caml_string_of_jsbytes("TRANSFORM_FEEDBACK_BUFFER_SIZE"),
     cst_TRANSFORM_FEEDBACK_PRIMITI=
      caml_string_of_jsbytes("TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN"),
     cst_RASTERIZER_DISCARD=caml_string_of_jsbytes("RASTERIZER_DISCARD"),
     cst_MAX_TRANSFORM_FEEDBACK_INT=
      caml_string_of_jsbytes("MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS"),
     cst_MAX_TRANSFORM_FEEDBACK_SEP$0=
      caml_string_of_jsbytes("MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS"),
     cst_INTERLEAVED_ATTRIBS=caml_string_of_jsbytes("INTERLEAVED_ATTRIBS"),
     cst_SEPARATE_ATTRIBS=caml_string_of_jsbytes("SEPARATE_ATTRIBS"),
     cst_TRANSFORM_FEEDBACK_BUFFER=
      caml_string_of_jsbytes("TRANSFORM_FEEDBACK_BUFFER"),
     cst_TRANSFORM_FEEDBACK_BUFFER_$2=
      caml_string_of_jsbytes("TRANSFORM_FEEDBACK_BUFFER_BINDING"),
     cst_RGBA32UI=caml_string_of_jsbytes("RGBA32UI"),
     cst_RGB32UI=caml_string_of_jsbytes("RGB32UI"),
     cst_RGBA16UI=caml_string_of_jsbytes("RGBA16UI"),
     cst_RGB16UI=caml_string_of_jsbytes("RGB16UI"),
     cst_RGBA8UI=caml_string_of_jsbytes("RGBA8UI"),
     cst_RGB8UI=caml_string_of_jsbytes("RGB8UI"),
     cst_RGBA32I=caml_string_of_jsbytes("RGBA32I"),
     cst_RGB32I=caml_string_of_jsbytes("RGB32I"),
     cst_RGBA16I=caml_string_of_jsbytes("RGBA16I"),
     cst_RGB16I=caml_string_of_jsbytes("RGB16I"),
     cst_RGBA8I=caml_string_of_jsbytes("RGBA8I"),
     cst_RGB8I=caml_string_of_jsbytes("RGB8I"),
     cst_RED_INTEGER=caml_string_of_jsbytes("RED_INTEGER"),
     cst_RGB_INTEGER=caml_string_of_jsbytes("RGB_INTEGER"),
     cst_RGBA_INTEGER=caml_string_of_jsbytes("RGBA_INTEGER"),
     cst_SAMPLER_2D_ARRAY=caml_string_of_jsbytes("SAMPLER_2D_ARRAY"),
     cst_SAMPLER_2D_ARRAY_SHADOW=
      caml_string_of_jsbytes("SAMPLER_2D_ARRAY_SHADOW"),
     cst_SAMPLER_CUBE_SHADOW=caml_string_of_jsbytes("SAMPLER_CUBE_SHADOW"),
     cst_UNSIGNED_INT_VEC2=caml_string_of_jsbytes("UNSIGNED_INT_VEC2"),
     cst_UNSIGNED_INT_VEC3=caml_string_of_jsbytes("UNSIGNED_INT_VEC3"),
     cst_UNSIGNED_INT_VEC4=caml_string_of_jsbytes("UNSIGNED_INT_VEC4"),
     cst_INT_SAMPLER_2D=caml_string_of_jsbytes("INT_SAMPLER_2D"),
     cst_INT_SAMPLER_3D=caml_string_of_jsbytes("INT_SAMPLER_3D"),
     cst_INT_SAMPLER_CUBE=caml_string_of_jsbytes("INT_SAMPLER_CUBE"),
     cst_INT_SAMPLER_2D_ARRAY=caml_string_of_jsbytes("INT_SAMPLER_2D_ARRAY"),
     cst_UNSIGNED_INT_SAMPLER_2D=
      caml_string_of_jsbytes("UNSIGNED_INT_SAMPLER_2D"),
     cst_UNSIGNED_INT_SAMPLER_3D=
      caml_string_of_jsbytes("UNSIGNED_INT_SAMPLER_3D"),
     cst_UNSIGNED_INT_SAMPLER_CUBE=
      caml_string_of_jsbytes("UNSIGNED_INT_SAMPLER_CUBE"),
     cst_UNSIGNED_INT_SAMPLER_2D_AR=
      caml_string_of_jsbytes("UNSIGNED_INT_SAMPLER_2D_ARRAY"),
     cst_DEPTH_COMPONENT32F=caml_string_of_jsbytes("DEPTH_COMPONENT32F"),
     cst_DEPTH32F_STENCIL8=caml_string_of_jsbytes("DEPTH32F_STENCIL8"),
     cst_FLOAT_32_UNSIGNED_INT_24_8=
      caml_string_of_jsbytes("FLOAT_32_UNSIGNED_INT_24_8_REV"),
     cst_FRAMEBUFFER_ATTACHMENT_COL=
      caml_string_of_jsbytes("FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING"),
     cst_FRAMEBUFFER_ATTACHMENT_COM=
      caml_string_of_jsbytes("FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE"),
     cst_FRAMEBUFFER_ATTACHMENT_RED=
      caml_string_of_jsbytes("FRAMEBUFFER_ATTACHMENT_RED_SIZE"),
     cst_FRAMEBUFFER_ATTACHMENT_GRE=
      caml_string_of_jsbytes("FRAMEBUFFER_ATTACHMENT_GREEN_SIZE"),
     cst_FRAMEBUFFER_ATTACHMENT_BLU=
      caml_string_of_jsbytes("FRAMEBUFFER_ATTACHMENT_BLUE_SIZE"),
     cst_FRAMEBUFFER_ATTACHMENT_ALP=
      caml_string_of_jsbytes("FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE"),
     cst_FRAMEBUFFER_ATTACHMENT_DEP=
      caml_string_of_jsbytes("FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE"),
     cst_FRAMEBUFFER_ATTACHMENT_STE=
      caml_string_of_jsbytes("FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE"),
     cst_FRAMEBUFFER_DEFAULT=caml_string_of_jsbytes("FRAMEBUFFER_DEFAULT"),
     cst_UNSIGNED_INT_24_8=caml_string_of_jsbytes("UNSIGNED_INT_24_8"),
     cst_DEPTH24_STENCIL8=caml_string_of_jsbytes("DEPTH24_STENCIL8"),
     cst_UNSIGNED_NORMALIZED=caml_string_of_jsbytes("UNSIGNED_NORMALIZED"),
     cst_DRAW_FRAMEBUFFER_BINDING=
      caml_string_of_jsbytes("DRAW_FRAMEBUFFER_BINDING"),
     cst_READ_FRAMEBUFFER=caml_string_of_jsbytes("READ_FRAMEBUFFER"),
     cst_DRAW_FRAMEBUFFER=caml_string_of_jsbytes("DRAW_FRAMEBUFFER"),
     cst_READ_FRAMEBUFFER_BINDING=
      caml_string_of_jsbytes("READ_FRAMEBUFFER_BINDING"),
     cst_RENDERBUFFER_SAMPLES=caml_string_of_jsbytes("RENDERBUFFER_SAMPLES"),
     cst_FRAMEBUFFER_ATTACHMENT_TEX$1=
      caml_string_of_jsbytes("FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER"),
     cst_MAX_COLOR_ATTACHMENTS=caml_string_of_jsbytes("MAX_COLOR_ATTACHMENTS"),
     cst_COLOR_ATTACHMENT1=caml_string_of_jsbytes("COLOR_ATTACHMENT1"),
     cst_COLOR_ATTACHMENT2=caml_string_of_jsbytes("COLOR_ATTACHMENT2"),
     cst_COLOR_ATTACHMENT3=caml_string_of_jsbytes("COLOR_ATTACHMENT3"),
     cst_COLOR_ATTACHMENT4=caml_string_of_jsbytes("COLOR_ATTACHMENT4"),
     cst_COLOR_ATTACHMENT5=caml_string_of_jsbytes("COLOR_ATTACHMENT5"),
     cst_COLOR_ATTACHMENT6=caml_string_of_jsbytes("COLOR_ATTACHMENT6"),
     cst_COLOR_ATTACHMENT7=caml_string_of_jsbytes("COLOR_ATTACHMENT7"),
     cst_COLOR_ATTACHMENT8=caml_string_of_jsbytes("COLOR_ATTACHMENT8"),
     cst_COLOR_ATTACHMENT9=caml_string_of_jsbytes("COLOR_ATTACHMENT9"),
     cst_COLOR_ATTACHMENT10=caml_string_of_jsbytes("COLOR_ATTACHMENT10"),
     cst_COLOR_ATTACHMENT11=caml_string_of_jsbytes("COLOR_ATTACHMENT11"),
     cst_COLOR_ATTACHMENT12=caml_string_of_jsbytes("COLOR_ATTACHMENT12"),
     cst_COLOR_ATTACHMENT13=caml_string_of_jsbytes("COLOR_ATTACHMENT13"),
     cst_COLOR_ATTACHMENT14=caml_string_of_jsbytes("COLOR_ATTACHMENT14"),
     cst_COLOR_ATTACHMENT15=caml_string_of_jsbytes("COLOR_ATTACHMENT15"),
     cst_FRAMEBUFFER_INCOMPLETE_MUL=
      caml_string_of_jsbytes("FRAMEBUFFER_INCOMPLETE_MULTISAMPLE"),
     cst_MAX_SAMPLES=caml_string_of_jsbytes("MAX_SAMPLES"),
     cst_HALF_FLOAT=caml_string_of_jsbytes("HALF_FLOAT"),
     cst_RG=caml_string_of_jsbytes("RG"),
     cst_RG_INTEGER=caml_string_of_jsbytes("RG_INTEGER"),
     cst_R8=caml_string_of_jsbytes("R8"),
     cst_RG8=caml_string_of_jsbytes("RG8"),
     cst_R16F=caml_string_of_jsbytes("R16F"),
     cst_R32F=caml_string_of_jsbytes("R32F"),
     cst_RG16F=caml_string_of_jsbytes("RG16F"),
     cst_RG32F=caml_string_of_jsbytes("RG32F"),
     cst_R8I=caml_string_of_jsbytes("R8I"),
     cst_R8UI=caml_string_of_jsbytes("R8UI"),
     cst_R16I=caml_string_of_jsbytes("R16I"),
     cst_R16UI=caml_string_of_jsbytes("R16UI"),
     cst_R32I=caml_string_of_jsbytes("R32I"),
     cst_R32UI=caml_string_of_jsbytes("R32UI"),
     cst_RG8I=caml_string_of_jsbytes("RG8I"),
     cst_RG8UI=caml_string_of_jsbytes("RG8UI"),
     cst_RG16I=caml_string_of_jsbytes("RG16I"),
     cst_RG16UI=caml_string_of_jsbytes("RG16UI"),
     cst_RG32I=caml_string_of_jsbytes("RG32I"),
     cst_RG32UI=caml_string_of_jsbytes("RG32UI"),
     cst_VERTEX_ARRAY_BINDING=caml_string_of_jsbytes("VERTEX_ARRAY_BINDING"),
     cst_R8_SNORM=caml_string_of_jsbytes("R8_SNORM"),
     cst_RG8_SNORM=caml_string_of_jsbytes("RG8_SNORM"),
     cst_RGB8_SNORM=caml_string_of_jsbytes("RGB8_SNORM"),
     cst_RGBA8_SNORM=caml_string_of_jsbytes("RGBA8_SNORM"),
     cst_SIGNED_NORMALIZED=caml_string_of_jsbytes("SIGNED_NORMALIZED"),
     cst_COPY_READ_BUFFER=caml_string_of_jsbytes("COPY_READ_BUFFER"),
     cst_COPY_WRITE_BUFFER=caml_string_of_jsbytes("COPY_WRITE_BUFFER"),
     cst_COPY_READ_BUFFER_BINDING=
      caml_string_of_jsbytes("COPY_READ_BUFFER_BINDING"),
     cst_COPY_WRITE_BUFFER_BINDING=
      caml_string_of_jsbytes("COPY_WRITE_BUFFER_BINDING"),
     cst_UNIFORM_BUFFER=caml_string_of_jsbytes("UNIFORM_BUFFER"),
     cst_UNIFORM_BUFFER_BINDING=
      caml_string_of_jsbytes("UNIFORM_BUFFER_BINDING"),
     cst_UNIFORM_BUFFER_START=caml_string_of_jsbytes("UNIFORM_BUFFER_START"),
     cst_UNIFORM_BUFFER_SIZE=caml_string_of_jsbytes("UNIFORM_BUFFER_SIZE"),
     cst_MAX_VERTEX_UNIFORM_BLOCKS=
      caml_string_of_jsbytes("MAX_VERTEX_UNIFORM_BLOCKS"),
     cst_MAX_FRAGMENT_UNIFORM_BLOCK=
      caml_string_of_jsbytes("MAX_FRAGMENT_UNIFORM_BLOCKS"),
     cst_MAX_COMBINED_UNIFORM_BLOCK=
      caml_string_of_jsbytes("MAX_COMBINED_UNIFORM_BLOCKS"),
     cst_MAX_UNIFORM_BUFFER_BINDING=
      caml_string_of_jsbytes("MAX_UNIFORM_BUFFER_BINDINGS"),
     cst_MAX_UNIFORM_BLOCK_SIZE=
      caml_string_of_jsbytes("MAX_UNIFORM_BLOCK_SIZE"),
     cst_MAX_COMBINED_VERTEX_UNIFOR=
      caml_string_of_jsbytes("MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS"),
     cst_MAX_COMBINED_FRAGMENT_UNIF=
      caml_string_of_jsbytes("MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS"),
     cst_UNIFORM_BUFFER_OFFSET_ALIG=
      caml_string_of_jsbytes("UNIFORM_BUFFER_OFFSET_ALIGNMENT"),
     cst_ACTIVE_UNIFORM_BLOCKS=caml_string_of_jsbytes("ACTIVE_UNIFORM_BLOCKS"),
     cst_UNIFORM_TYPE=caml_string_of_jsbytes("UNIFORM_TYPE"),
     cst_UNIFORM_SIZE=caml_string_of_jsbytes("UNIFORM_SIZE"),
     cst_UNIFORM_BLOCK_INDEX=caml_string_of_jsbytes("UNIFORM_BLOCK_INDEX"),
     cst_UNIFORM_OFFSET=caml_string_of_jsbytes("UNIFORM_OFFSET"),
     cst_UNIFORM_ARRAY_STRIDE=caml_string_of_jsbytes("UNIFORM_ARRAY_STRIDE"),
     cst_UNIFORM_MATRIX_STRIDE=caml_string_of_jsbytes("UNIFORM_MATRIX_STRIDE"),
     cst_UNIFORM_IS_ROW_MAJOR=caml_string_of_jsbytes("UNIFORM_IS_ROW_MAJOR"),
     cst_UNIFORM_BLOCK_BINDING=caml_string_of_jsbytes("UNIFORM_BLOCK_BINDING"),
     cst_UNIFORM_BLOCK_DATA_SIZE=
      caml_string_of_jsbytes("UNIFORM_BLOCK_DATA_SIZE"),
     cst_UNIFORM_BLOCK_ACTIVE_UNIFO=
      caml_string_of_jsbytes("UNIFORM_BLOCK_ACTIVE_UNIFORMS"),
     cst_UNIFORM_BLOCK_ACTIVE_UNIFO$0=
      caml_string_of_jsbytes("UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES"),
     cst_UNIFORM_BLOCK_REFERENCED_B=
      caml_string_of_jsbytes("UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER"),
     cst_UNIFORM_BLOCK_REFERENCED_B$0=
      caml_string_of_jsbytes("UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER"),
     cst_INVALID_INDEX=caml_string_of_jsbytes("INVALID_INDEX"),
     cst_MAX_VERTEX_OUTPUT_COMPONEN=
      caml_string_of_jsbytes("MAX_VERTEX_OUTPUT_COMPONENTS"),
     cst_MAX_FRAGMENT_INPUT_COMPONE=
      caml_string_of_jsbytes("MAX_FRAGMENT_INPUT_COMPONENTS"),
     cst_MAX_SERVER_WAIT_TIMEOUT=
      caml_string_of_jsbytes("MAX_SERVER_WAIT_TIMEOUT"),
     cst_OBJECT_TYPE=caml_string_of_jsbytes("OBJECT_TYPE"),
     cst_SYNC_CONDITION=caml_string_of_jsbytes("SYNC_CONDITION"),
     cst_SYNC_STATUS=caml_string_of_jsbytes("SYNC_STATUS"),
     cst_SYNC_FLAGS=caml_string_of_jsbytes("SYNC_FLAGS"),
     cst_SYNC_FENCE=caml_string_of_jsbytes("SYNC_FENCE"),
     cst_SYNC_GPU_COMMANDS_COMPLETE=
      caml_string_of_jsbytes("SYNC_GPU_COMMANDS_COMPLETE"),
     cst_UNSIGNALED=caml_string_of_jsbytes("UNSIGNALED"),
     cst_SIGNALED=caml_string_of_jsbytes("SIGNALED"),
     cst_ALREADY_SIGNALED=caml_string_of_jsbytes("ALREADY_SIGNALED"),
     cst_TIMEOUT_EXPIRED=caml_string_of_jsbytes("TIMEOUT_EXPIRED"),
     cst_CONDITION_SATISFIED=caml_string_of_jsbytes("CONDITION_SATISFIED"),
     cst_WAIT_FAILED=caml_string_of_jsbytes("WAIT_FAILED"),
     cst_SYNC_FLUSH_COMMANDS_BIT=
      caml_string_of_jsbytes("SYNC_FLUSH_COMMANDS_BIT"),
     cst_VERTEX_ATTRIB_ARRAY_DIVISO=
      caml_string_of_jsbytes("VERTEX_ATTRIB_ARRAY_DIVISOR"),
     cst_ANY_SAMPLES_PASSED=caml_string_of_jsbytes("ANY_SAMPLES_PASSED"),
     cst_ANY_SAMPLES_PASSED_CONSERV=
      caml_string_of_jsbytes("ANY_SAMPLES_PASSED_CONSERVATIVE"),
     cst_SAMPLER_BINDING=caml_string_of_jsbytes("SAMPLER_BINDING"),
     cst_RGB10_A2UI=caml_string_of_jsbytes("RGB10_A2UI"),
     cst_INT_2_10_10_10_REV=caml_string_of_jsbytes("INT_2_10_10_10_REV"),
     cst_TRANSFORM_FEEDBACK=caml_string_of_jsbytes("TRANSFORM_FEEDBACK"),
     cst_TRANSFORM_FEEDBACK_PAUSED=
      caml_string_of_jsbytes("TRANSFORM_FEEDBACK_PAUSED"),
     cst_TRANSFORM_FEEDBACK_ACTIVE=
      caml_string_of_jsbytes("TRANSFORM_FEEDBACK_ACTIVE"),
     cst_TRANSFORM_FEEDBACK_BINDING=
      caml_string_of_jsbytes("TRANSFORM_FEEDBACK_BINDING"),
     cst_TEXTURE_IMMUTABLE_FORMAT=
      caml_string_of_jsbytes("TEXTURE_IMMUTABLE_FORMAT"),
     cst_MAX_ELEMENT_INDEX=caml_string_of_jsbytes("MAX_ELEMENT_INDEX"),
     cst_TEXTURE_IMMUTABLE_LEVELS=
      caml_string_of_jsbytes("TEXTURE_IMMUTABLE_LEVELS"),
     cst_TIMEOUT_IGNORED=caml_string_of_jsbytes("TIMEOUT_IGNORED"),
     cst_MAX_CLIENT_WAIT_TIMEOUT_WE=
      caml_string_of_jsbytes("MAX_CLIENT_WAIT_TIMEOUT_WEBGL"),
     cst_OfflineAudioContext=caml_string_of_jsbytes("OfflineAudioContext"),
     cst_length$10=caml_string_of_jsbytes("length"),
     cst_outputLatency=caml_string_of_jsbytes("outputLatency"),
     cst_baseLatency=caml_string_of_jsbytes("baseLatency"),
     cst_AudioContext=caml_string_of_jsbytes("AudioContext"),
     cst_latencyHint=caml_string_of_jsbytes("latencyHint"),
     cst_sampleRate$2=caml_string_of_jsbytes("sampleRate"),
     cst_audioWorklet=caml_string_of_jsbytes("audioWorklet"),
     cst_state$2=caml_string_of_jsbytes("state"),
     cst_listener=caml_string_of_jsbytes("listener"),
     cst_currentTime$2=caml_string_of_jsbytes("currentTime"),
     cst_sampleRate$1=caml_string_of_jsbytes("sampleRate"),
     cst_destination$0=caml_string_of_jsbytes("destination"),
     cst_performanceTime=caml_string_of_jsbytes("performanceTime"),
     cst_contextTime=caml_string_of_jsbytes("contextTime"),
     cst_port$2=caml_string_of_jsbytes("port"),
     cst_parameters=caml_string_of_jsbytes("parameters"),
     cst_AudioWorkletNode=caml_string_of_jsbytes("AudioWorkletNode"),
     cst_channelCount$15=caml_string_of_jsbytes("channelCount"),
     cst_channelCountMode$15=caml_string_of_jsbytes("channelCountMode"),
     cst_channelInterpretation$15=
      caml_string_of_jsbytes("channelInterpretation"),
     cst_numberOfInputs$1=caml_string_of_jsbytes("numberOfInputs"),
     cst_numberOfOutputs$0=caml_string_of_jsbytes("numberOfOutputs"),
     cst_outputChannelCount=caml_string_of_jsbytes("outputChannelCount"),
     cst_parameterData=caml_string_of_jsbytes("parameterData"),
     cst_processorOptions=caml_string_of_jsbytes("processorOptions"),
     cst_oversample$1=caml_string_of_jsbytes("oversample"),
     cst_oversample$0=caml_string_of_jsbytes("oversample"),
     cst_curve$1=caml_string_of_jsbytes("curve"),
     cst_curve$0=caml_string_of_jsbytes("curve"),
     cst_WaveShaperNode=caml_string_of_jsbytes("WaveShaperNode"),
     cst_channelCount$14=caml_string_of_jsbytes("channelCount"),
     cst_channelCountMode$14=caml_string_of_jsbytes("channelCountMode"),
     cst_channelInterpretation$14=
      caml_string_of_jsbytes("channelInterpretation"),
     cst_curve=caml_string_of_jsbytes("curve"),
     cst_oversample=caml_string_of_jsbytes("oversample"),
     cst_pan$0=caml_string_of_jsbytes("pan"),
     cst_StereoPannerNode=caml_string_of_jsbytes("StereoPannerNode"),
     cst_channelCount$13=caml_string_of_jsbytes("channelCount"),
     cst_channelCountMode$13=caml_string_of_jsbytes("channelCountMode"),
     cst_channelInterpretation$13=
      caml_string_of_jsbytes("channelInterpretation"),
     cst_pan=caml_string_of_jsbytes("pan"),
     cst_coneOuterGain$0=caml_string_of_jsbytes("coneOuterGain"),
     cst_coneOuterGain=caml_string_of_jsbytes("coneOuterGain"),
     cst_coneOuterAngle$0=caml_string_of_jsbytes("coneOuterAngle"),
     cst_coneOuterAngle=caml_string_of_jsbytes("coneOuterAngle"),
     cst_coneInnerAngle$0=caml_string_of_jsbytes("coneInnerAngle"),
     cst_coneInnerAngle=caml_string_of_jsbytes("coneInnerAngle"),
     cst_maxDistance$1=caml_string_of_jsbytes("maxDistance"),
     cst_maxDistance$0=caml_string_of_jsbytes("maxDistance"),
     cst_refDistance$1=caml_string_of_jsbytes("refDistance"),
     cst_refDistance$0=caml_string_of_jsbytes("refDistance"),
     cst_orientationZ$0=caml_string_of_jsbytes("orientationZ"),
     cst_orientationY$0=caml_string_of_jsbytes("orientationY"),
     cst_orientationX$0=caml_string_of_jsbytes("orientationX"),
     cst_positionZ$0=caml_string_of_jsbytes("positionZ"),
     cst_positionY$0=caml_string_of_jsbytes("positionY"),
     cst_positionX$0=caml_string_of_jsbytes("positionX"),
     cst_distanceModel$1=caml_string_of_jsbytes("distanceModel"),
     cst_distanceModel$0=caml_string_of_jsbytes("distanceModel"),
     cst_panningModel$1=caml_string_of_jsbytes("panningModel"),
     cst_panningModel$0=caml_string_of_jsbytes("panningModel"),
     cst_PannerNode=caml_string_of_jsbytes("PannerNode"),
     cst_channelCount$12=caml_string_of_jsbytes("channelCount"),
     cst_channelCountMode$12=caml_string_of_jsbytes("channelCountMode"),
     cst_channelInterpretation$12=
      caml_string_of_jsbytes("channelInterpretation"),
     cst_panningModel=caml_string_of_jsbytes("panningModel"),
     cst_distanceModel=caml_string_of_jsbytes("distanceModel"),
     cst_positionX=caml_string_of_jsbytes("positionX"),
     cst_positionY=caml_string_of_jsbytes("positionY"),
     cst_positionZ=caml_string_of_jsbytes("positionZ"),
     cst_orientationX=caml_string_of_jsbytes("orientationX"),
     cst_orientationY=caml_string_of_jsbytes("orientationY"),
     cst_orientationZ=caml_string_of_jsbytes("orientationZ"),
     cst_refDistance=caml_string_of_jsbytes("refDistance"),
     cst_maxDistance=caml_string_of_jsbytes("maxDistance"),
     cst_rolloff_factor=caml_string_of_jsbytes("rolloff_factor"),
     cst_cone_inner_angle=caml_string_of_jsbytes("cone_inner_angle"),
     cst_cone_outer_angle=caml_string_of_jsbytes("cone_outer_angle"),
     cst_cone_outer_gain=caml_string_of_jsbytes("cone_outer_gain"),
     cst_type$12=caml_string_of_jsbytes("type"),
     cst_type$11=caml_string_of_jsbytes("type"),
     cst_OscillatorNode=caml_string_of_jsbytes("OscillatorNode"),
     cst_channelCount$11=caml_string_of_jsbytes("channelCount"),
     cst_channelCountMode$11=caml_string_of_jsbytes("channelCountMode"),
     cst_channelInterpretation$11=
      caml_string_of_jsbytes("channelInterpretation"),
     cst_type$10=caml_string_of_jsbytes("type"),
     cst_frequency$0=caml_string_of_jsbytes("frequency"),
     cst_detune$2=caml_string_of_jsbytes("detune"),
     cst_periodicWave=caml_string_of_jsbytes("periodicWave"),
     cst_PeriodicWave=caml_string_of_jsbytes("PeriodicWave"),
     cst_disableNormalization$0=caml_string_of_jsbytes("disableNormalization"),
     cst_real=caml_string_of_jsbytes("real"),
     cst_imag=caml_string_of_jsbytes("imag"),
     cst_MediaStreamTrackAudioSourc=
      caml_string_of_jsbytes("MediaStreamTrackAudioSourceNode "),
     cst_mediaStreamTrack=caml_string_of_jsbytes("mediaStreamTrack"),
     cst_mediaStream$0=caml_string_of_jsbytes("mediaStream"),
     cst_MediaStreamAudioSourceNode=
      caml_string_of_jsbytes("MediaStreamAudioSourceNode"),
     cst_mediaStream=caml_string_of_jsbytes("mediaStream"),
     cst_stream$1=caml_string_of_jsbytes("stream"),
     cst_MediaStreamAudioDestinatio=
      caml_string_of_jsbytes("MediaStreamAudioDestinationNode"),
     cst_channelCount$10=caml_string_of_jsbytes("channelCount"),
     cst_channelCountMode$10=caml_string_of_jsbytes("channelCountMode"),
     cst_channelInterpretation$10=
      caml_string_of_jsbytes("channelInterpretation"),
     cst_mediaElement$0=caml_string_of_jsbytes("mediaElement"),
     cst_MediaElementAudioSourceNod=
      caml_string_of_jsbytes("MediaElementAudioSourceNode "),
     cst_mediaElement=caml_string_of_jsbytes("mediaElement"),
     cst_IIRFilterNode=caml_string_of_jsbytes("IIRFilterNode"),
     cst_channelCount$9=caml_string_of_jsbytes("channelCount"),
     cst_channelCountMode$9=caml_string_of_jsbytes("channelCountMode"),
     cst_channelInterpretation$9=
      caml_string_of_jsbytes("channelInterpretation"),
     cst_feedforward=caml_string_of_jsbytes("feedforward"),
     cst_feedback=caml_string_of_jsbytes("feedback"),
     cst_gain$1=caml_string_of_jsbytes("gain"),
     cst_GainNode=caml_string_of_jsbytes("GainNode"),
     cst_channelCount$8=caml_string_of_jsbytes("channelCount"),
     cst_channelCountMode$8=caml_string_of_jsbytes("channelCountMode"),
     cst_channelInterpretation$8=
      caml_string_of_jsbytes("channelInterpretation"),
     cst_gain$0=caml_string_of_jsbytes("gain"),
     cst_threshold$0=caml_string_of_jsbytes("threshold"),
     cst_release$0=caml_string_of_jsbytes("release"),
     cst_reduction=caml_string_of_jsbytes("reduction"),
     cst_ratio$0=caml_string_of_jsbytes("ratio"),
     cst_knee$0=caml_string_of_jsbytes("knee"),
     cst_attack$0=caml_string_of_jsbytes("attack"),
     cst_DynamicsCompressorNode=
      caml_string_of_jsbytes("DynamicsCompressorNode"),
     cst_channelCount$7=caml_string_of_jsbytes("channelCount"),
     cst_channelCountMode$7=caml_string_of_jsbytes("channelCountMode"),
     cst_channelInterpretation$7=
      caml_string_of_jsbytes("channelInterpretation"),
     cst_attack=caml_string_of_jsbytes("attack"),
     cst_knee=caml_string_of_jsbytes("knee"),
     cst_ratio=caml_string_of_jsbytes("ratio"),
     cst_release=caml_string_of_jsbytes("release"),
     cst_threshold=caml_string_of_jsbytes("threshold"),
     cst_maxChannelCount=caml_string_of_jsbytes("maxChannelCount"),
     cst_delayTime$0=caml_string_of_jsbytes("delayTime"),
     cst_DelayNode=caml_string_of_jsbytes("DelayNode"),
     cst_channelCount$6=caml_string_of_jsbytes("channelCount"),
     cst_channelCountMode$6=caml_string_of_jsbytes("channelCountMode"),
     cst_channelInterpretation$6=
      caml_string_of_jsbytes("channelInterpretation"),
     cst_delayTime=caml_string_of_jsbytes("delayTime"),
     cst_maxDelayTime=caml_string_of_jsbytes("maxDelayTime"),
     cst_normalize$0=caml_string_of_jsbytes("normalize"),
     cst_normalize=caml_string_of_jsbytes("normalize"),
     cst_buffer$5=caml_string_of_jsbytes("buffer"),
     cst_buffer$4=caml_string_of_jsbytes("buffer"),
     cst_ConvolverNode=caml_string_of_jsbytes("ConvolverNode"),
     cst_channelCount$5=caml_string_of_jsbytes("channelCount"),
     cst_channelCountMode$5=caml_string_of_jsbytes("channelCountMode"),
     cst_channelInterpretation$5=
      caml_string_of_jsbytes("channelInterpretation"),
     cst_buffer$3=caml_string_of_jsbytes("buffer"),
     cst_disableNormalization=caml_string_of_jsbytes("disableNormalization"),
     cst_offset$0=caml_string_of_jsbytes("offset"),
     cst_ConstantSourceNode=caml_string_of_jsbytes("ConstantSourceNode"),
     cst_offset=caml_string_of_jsbytes("offset"),
     cst_ChannelSplitterNode=caml_string_of_jsbytes("ChannelSplitterNode"),
     cst_channelCount$4=caml_string_of_jsbytes("channelCount"),
     cst_channelCountMode$4=caml_string_of_jsbytes("channelCountMode"),
     cst_channelInterpretation$4=
      caml_string_of_jsbytes("channelInterpretation"),
     cst_numberOfOutput=caml_string_of_jsbytes("numberOfOutput"),
     cst_ChannelMergerNode=caml_string_of_jsbytes("ChannelMergerNode"),
     cst_channelCount$3=caml_string_of_jsbytes("channelCount"),
     cst_channelCountMode$3=caml_string_of_jsbytes("channelCountMode"),
     cst_channelInterpretation$3=
      caml_string_of_jsbytes("channelInterpretation"),
     cst_numberOfInputs$0=caml_string_of_jsbytes("numberOfInputs"),
     cst_loopEnd$0=caml_string_of_jsbytes("loopEnd"),
     cst_loopEnd=caml_string_of_jsbytes("loopEnd"),
     cst_loopStart$0=caml_string_of_jsbytes("loopStart"),
     cst_loopStart=caml_string_of_jsbytes("loopStart"),
     cst_loop$3=caml_string_of_jsbytes("loop"),
     cst_loop$2=caml_string_of_jsbytes("loop"),
     cst_detune$1=caml_string_of_jsbytes("detune"),
     cst_playbackRate$2=caml_string_of_jsbytes("playbackRate"),
     cst_buffer$2=caml_string_of_jsbytes("buffer"),
     cst_buffer$1=caml_string_of_jsbytes("buffer"),
     cst_AudioBufferSourceNode=caml_string_of_jsbytes("AudioBufferSourceNode"),
     cst_buffer$0=caml_string_of_jsbytes("buffer"),
     cst_detune$0=caml_string_of_jsbytes("detune"),
     cst_loop$1=caml_string_of_jsbytes("loop"),
     cst_loop_start=caml_string_of_jsbytes("loop_start"),
     cst_loop_end=caml_string_of_jsbytes("loop_end"),
     cst_playbackRate$1=caml_string_of_jsbytes("playbackRate"),
     cst_type$9=caml_string_of_jsbytes("type"),
     cst_type$8=caml_string_of_jsbytes("type"),
     cst_BiquadFilterNode=caml_string_of_jsbytes("BiquadFilterNode"),
     cst_channelCount$2=caml_string_of_jsbytes("channelCount"),
     cst_channelCountMode$2=caml_string_of_jsbytes("channelCountMode"),
     cst_channelInterpretation$2=
      caml_string_of_jsbytes("channelInterpretation"),
     cst_type$7=caml_string_of_jsbytes("type"),
     cst_Q=caml_string_of_jsbytes("Q"),
     cst_detune=caml_string_of_jsbytes("detune"),
     cst_frequency=caml_string_of_jsbytes("frequency"),
     cst_gain=caml_string_of_jsbytes("gain"),
     cst_smoothingTimeConstant$1=
      caml_string_of_jsbytes("smoothingTimeConstant"),
     cst_smoothingTimeConstant$0=
      caml_string_of_jsbytes("smoothingTimeConstant"),
     cst_maxDecibels$1=caml_string_of_jsbytes("maxDecibels"),
     cst_maxDecibels$0=caml_string_of_jsbytes("maxDecibels"),
     cst_minDecibels$1=caml_string_of_jsbytes("minDecibels"),
     cst_minDecibels$0=caml_string_of_jsbytes("minDecibels"),
     cst_frequencyBinCount=caml_string_of_jsbytes("frequencyBinCount"),
     cst_fftSize$1=caml_string_of_jsbytes("fftSize"),
     cst_fftSize$0=caml_string_of_jsbytes("fftSize"),
     cst_AnalyserNode=caml_string_of_jsbytes("AnalyserNode"),
     cst_channelCount$1=caml_string_of_jsbytes("channelCount"),
     cst_channelCountMode$1=caml_string_of_jsbytes("channelCountMode"),
     cst_channelInterpretation$1=
      caml_string_of_jsbytes("channelInterpretation"),
     cst_fftSize=caml_string_of_jsbytes("fftSize"),
     cst_minDecibels=caml_string_of_jsbytes("minDecibels"),
     cst_maxDecibels=caml_string_of_jsbytes("maxDecibels"),
     cst_smoothingTimeConstant=caml_string_of_jsbytes("smoothingTimeConstant"),
     cst_channelInterpretation$0=
      caml_string_of_jsbytes("channelInterpretation"),
     cst_channelInterpretation=caml_string_of_jsbytes("channelInterpretation"),
     cst_channelCountMode$0=caml_string_of_jsbytes("channelCountMode"),
     cst_channelCountMode=caml_string_of_jsbytes("channelCountMode"),
     cst_channelCount$0=caml_string_of_jsbytes("channelCount"),
     cst_channelCount=caml_string_of_jsbytes("channelCount"),
     cst_numberOfOutputs=caml_string_of_jsbytes("numberOfOutputs"),
     cst_numberOfInputs=caml_string_of_jsbytes("numberOfInputs"),
     cst_context=caml_string_of_jsbytes("context"),
     cst_numberOfChannels=caml_string_of_jsbytes("numberOfChannels"),
     cst_length$9=caml_string_of_jsbytes("length"),
     cst_length$8=caml_string_of_jsbytes("length"),
     cst_sampleRate$0=caml_string_of_jsbytes("sampleRate"),
     cst_AudioBuffer=caml_string_of_jsbytes("AudioBuffer"),
     cst_port$1=caml_string_of_jsbytes("port"),
     cst_sampleRate=caml_string_of_jsbytes("sampleRate"),
     cst_currentTime$1=caml_string_of_jsbytes("currentTime"),
     cst_currentFrame=caml_string_of_jsbytes("currentFrame"),
     cst_registerProcessor=caml_string_of_jsbytes("registerProcessor"),
     cst_maxValue$0=caml_string_of_jsbytes("maxValue"),
     cst_minValue$0=caml_string_of_jsbytes("minValue"),
     cst_defaultValue$0=caml_string_of_jsbytes("defaultValue"),
     cst_automationRate$1=caml_string_of_jsbytes("automationRate"),
     cst_automationRate$0=caml_string_of_jsbytes("automationRate"),
     cst_value$3=caml_string_of_jsbytes("value"),
     cst_value$2=caml_string_of_jsbytes("value"),
     cst_name$8=caml_string_of_jsbytes("name"),
     cst_automationRate=caml_string_of_jsbytes("automationRate"),
     cst_minValue=caml_string_of_jsbytes("minValue"),
     cst_maxValue=caml_string_of_jsbytes("maxValue"),
     cst_defaultValue=caml_string_of_jsbytes("defaultValue"),
     cst_subtle=caml_string_of_jsbytes("subtle"),
     cst_iterations=caml_string_of_jsbytes("iterations"),
     cst_salt$0=caml_string_of_jsbytes("salt"),
     cst_hash$6=caml_string_of_jsbytes("hash"),
     cst_name$24=caml_string_of_jsbytes("name"),
     cst_info$0=caml_string_of_jsbytes("info"),
     cst_salt=caml_string_of_jsbytes("salt"),
     cst_hash$5=caml_string_of_jsbytes("hash"),
     cst_name$23=caml_string_of_jsbytes("name"),
     cst_length$13=caml_string_of_jsbytes("length"),
     cst_hash$4=caml_string_of_jsbytes("hash"),
     cst_name$22=caml_string_of_jsbytes("name"),
     cst_tagLength=caml_string_of_jsbytes("tagLength"),
     cst_additionalData=caml_string_of_jsbytes("additionalData"),
     cst_iv$0=caml_string_of_jsbytes("iv"),
     cst_name$21=caml_string_of_jsbytes("name"),
     cst_iv=caml_string_of_jsbytes("iv"),
     cst_name$20=caml_string_of_jsbytes("name"),
     cst_length$12=caml_string_of_jsbytes("length"),
     cst_counter=caml_string_of_jsbytes("counter"),
     cst_name$19=caml_string_of_jsbytes("name"),
     cst_length$11=caml_string_of_jsbytes("length"),
     cst_name$18=caml_string_of_jsbytes("name"),
     cst_public=caml_string_of_jsbytes("public"),
     cst_name$17=caml_string_of_jsbytes("name"),
     cst_hash$3=caml_string_of_jsbytes("hash"),
     cst_name$16=caml_string_of_jsbytes("name"),
     cst_namedCurve$0=caml_string_of_jsbytes("namedCurve"),
     cst_name$15=caml_string_of_jsbytes("name"),
     cst_namedCurve=caml_string_of_jsbytes("namedCurve"),
     cst_name$14=caml_string_of_jsbytes("name"),
     cst_label$1=caml_string_of_jsbytes("label"),
     cst_name$13=caml_string_of_jsbytes("name"),
     cst_saltLength=caml_string_of_jsbytes("saltLength"),
     cst_name$12=caml_string_of_jsbytes("name"),
     cst_hash$2=caml_string_of_jsbytes("hash"),
     cst_name$11=caml_string_of_jsbytes("name"),
     cst_hash$1=caml_string_of_jsbytes("hash"),
     cst_publicExponent=caml_string_of_jsbytes("publicExponent"),
     cst_modulusLength=caml_string_of_jsbytes("modulusLength"),
     cst_name$10=caml_string_of_jsbytes("name"),
     cst_name$9=caml_string_of_jsbytes("name"),
     cst_privateKey=caml_string_of_jsbytes("privateKey"),
     cst_publicKey=caml_string_of_jsbytes("publicKey"),
     cst_usages=caml_string_of_jsbytes("usages"),
     cst_algorithm=caml_string_of_jsbytes("algorithm"),
     cst_extractable=caml_string_of_jsbytes("extractable"),
     cst_type$13=caml_string_of_jsbytes("type"),
     cst_crypto=caml_string_of_jsbytes("crypto"),
     cst_includeUncontrolled=caml_string_of_jsbytes("includeUncontrolled"),
     cst_type$17=caml_string_of_jsbytes("type"),
     cst_ancestorOrigins=caml_string_of_jsbytes("ancestorOrigins"),
     cst_focused=caml_string_of_jsbytes("focused"),
     cst_visibilityState$0=caml_string_of_jsbytes("visibilityState"),
     cst_type$16=caml_string_of_jsbytes("type"),
     cst_id$1=caml_string_of_jsbytes("id"),
     cst_frameType=caml_string_of_jsbytes("frameType"),
     cst_url$3=caml_string_of_jsbytes("url"),
     cst_scope$0=caml_string_of_jsbytes("scope"),
     cst_type$15=caml_string_of_jsbytes("type"),
     cst_updateViaCache$0=caml_string_of_jsbytes("updateViaCache"),
     cst_ready=caml_string_of_jsbytes("ready"),
     cst_controller=caml_string_of_jsbytes("controller"),
     cst_serviceWorker=caml_string_of_jsbytes("serviceWorker"),
     cst_updateViaCache=caml_string_of_jsbytes("updateViaCache"),
     cst_scope=caml_string_of_jsbytes("scope"),
     cst_navigationPreload=caml_string_of_jsbytes("navigationPreload"),
     cst_active$0=caml_string_of_jsbytes("active"),
     cst_waiting=caml_string_of_jsbytes("waiting"),
     cst_installing=caml_string_of_jsbytes("installing"),
     cst_headerValue=caml_string_of_jsbytes("headerValue"),
     cst_enabled$1=caml_string_of_jsbytes("enabled"),
     cst_WorkerGlobalScope=caml_string_of_jsbytes("WorkerGlobalScope"),
     cst_port$3=caml_string_of_jsbytes("port"),
     cst_type$14=caml_string_of_jsbytes("type"),
     cst_credentials$1=caml_string_of_jsbytes("credentials"),
     cst_name$25=caml_string_of_jsbytes("name"),
     cst_Worker=caml_string_of_jsbytes("Worker"),
     cst_SharedWorker=caml_string_of_jsbytes("SharedWorker"),
     cst_clients=caml_string_of_jsbytes("clients"),
     cst_registration=caml_string_of_jsbytes("registration"),
     cst_serviceWorker$0=caml_string_of_jsbytes("serviceWorker"),
     Stdlib_Uchar=global_data.Stdlib__Uchar,
     Stdlib=global_data.Stdlib,
     Stdlib_Array=global_data.Stdlib__Array,
     Stdlib_List=global_data.Stdlib__List,
     Jsoo_runtime=global_data.Jsoo_runtime,
     Stdlib_Result=global_data.Stdlib__Result,
     Assert_failure=global_data.Assert_failure,
     Stdlib_Option=global_data.Stdlib__Option,
     Stdlib_Bigarray=global_data.Stdlib__Bigarray,
     Stdlib_Fun=global_data.Stdlib__Fun,
     jv_global=globalThis,
     _f_=[0,caml_string_of_jsbytes("src/fut.ml"),34,25],
     _w_=[0,0],
     _v_=[0,1],
     _s_=[0,1],
     _r_=[0,1],
     _q_=[0,-1],
     _o_=[0,1],
     _p_=[0,1],
     _h_=[0,7],
     _i_=[0,8],
     _j_=[0,0],
     _k_=[0,3],
     _l_=[0,1],
     _m_=[0,5],
     _n_=[0,2],
     _g_=[0,1],
     _bu_=[0,0],
     _bt_=[0,0],
     _br_=[0,[0,4448519,0]],
     _bs_=[0,[0,4448519,0]];
    function length(s){return s[cst_length]}
    function arg(opt,i)
     {if(opt)var sth=opt[1],base=sth;else var base=10;return i.toString(base)}
    function get(s,i)
     {if(length(s) <= i)
       {var
         len=length(s),
         _o8_=arg(0,len - 1 | 0),
         _o9_=
          caml_string_of_jsstring
           ("index ".concat(arg(0,i)).concat(" not in bounds [0;").concat
              (_o8_).concat
             ("]"));
        return caml_call1(Stdlib[1],_o9_)}
      var u=s.codePointAt(i),switch$0=0;
      if(55296 <= u && ! (57343 < u)){var u$0=65533;switch$0 = 1}
      if(! switch$0)var u$0=u;
      return caml_call1(Stdlib_Uchar[9],u$0)}
    function jstr_of_uchar_int(i)
     {return jv_global[cst_String].fromCodePoint(i)}
    function get_jstr(s,i)
     {var _o7_=get(s,i);
      return jstr_of_uchar_int(caml_call1(Stdlib_Uchar[10],_o7_))}
    var empty="",sp=" ",nl="\n";
    function symbol(s0,s1){return s0.concat(s1)}
    function concat(opt,ss)
     {if(opt)var sth=opt[1],sep=sth;else var sep=empty;
      return caml_list_to_js_array(ss).join(sep)}
    function pad_start(opt,len,s){return s.padStart(len," ")}
    function pad_end(opt,len,s){return s.padEnd(len," ")}
    function repeat(n,s){return s.repeat(n)}
    function find_sub(opt,sub,s)
     {if(opt)var sth=opt[1],start=sth;else var start=0;
      var i=s.indexOf(sub,start);
      return -1 === i?0:[0,i]}
    function find_last_sub(before,sub,s)
     {if(before)var b=before[1],before$0=b;else var before$0=length(s);
      var pos=before$0 - length(sub) | 0;
      if(0 <= pos){var i=s.lastIndexOf(sub,pos);return -1 === i?0:[0,i]}
      return 0}
    function slice(opt,stop,s)
     {if(opt)var sth=opt[1],start=sth;else var start=0;
      if(stop)
       var stop$0=stop[1],args=[0,start,stop$0];
      else
       var args=[0,start];
      return caml_js_meth_call(s,cst_slice,args)}
    function sub(opt,len,s)
     {if(opt)var sth=opt[1],start=sth;else var start=0;
      if(len)var len$0=len[1],args=[0,start,len$0];else var args=[0,start];
      return caml_js_meth_call(s,cst_substr,args)}
    function cuts(sep,s){return caml_list_of_js_array(s.split(sep))}
    var iterator=Symbol.iterator;
    function fold_uchars(f,s,acc)
     {var it=s[iterator](),acc$0=acc;
      for(;;)
       {var r=it.next();
        if(r[cst_done] | 0)return acc$0;
        var u=r[cst_value].codePointAt(0),switch$0=0;
        if(55296 <= u && ! (57343 < u)){var u$0=65533;switch$0 = 1}
        if(! switch$0)var u$0=u;
        var
         acc$1=caml_call2(f,caml_call1(Stdlib_Uchar[9],u$0),acc$0),
         acc$0=acc$1;
        continue}}
    function fold_jstr_uchars(f,s,acc)
     {function f$0(u,acc)
       {return caml_call2
                (f,jstr_of_uchar_int(caml_call1(Stdlib_Uchar[10],u)),acc)}
      return fold_uchars(f$0,s,acc)}
    function trim(s){return s.trim()}
    function normalized(nf,s)
     {var
       nf$0=
        868484048 <= nf
         ?868484049 <= nf?"NFKD":"NFKC"
         :3894540 <= nf?"NFD":"NFC";
      return s.normalize(nf$0)}
    function lowercased(s){return s.toLowerCase()}
    function uppercased(s){return s.toUpperCase()}
    function is_empty(s){return 0 === length(s)?1:0}
    function starts_with(prefix,s){return s.startsWith(prefix) | 0}
    function includes(affix,s){return s.includes(affix) | 0}
    function ends_with(suffix,s){return s.endsWith(suffix) | 0}
    var equal=caml_equal,compare=runtime.caml_compare;
    function of_uchar(u)
     {return jstr_of_uchar_int(caml_call1(Stdlib_Uchar[10],u))}
    function of_char(c){return jstr_of_uchar_int(c)}
    var number=jv_global[cst_Number];
    function to_int(base,s)
     {if(base)var b=base[1],args=[0,s,b];else var args=[0,s];
      var n=caml_js_meth_call(number,cst_parseInt,args);
      return caml_equal(n,n)?[0,n]:0}
    function to_float(s){return number.parseFloat(s)}
    function of_float(frac,n)
     {if(frac){var frac$0=frac[1];return n.toFixed(frac$0)}
      return n.toString()}
    var
     Jstr=
      [0,
       length,
       get,
       get_jstr,
       empty,
       sp,
       nl,
       symbol,
       symbol,
       concat,
       pad_start,
       pad_end,
       repeat,
       find_sub,
       find_last_sub,
       slice,
       sub,
       cuts,
       fold_uchars,
       fold_jstr_uchars,
       trim,
       normalized,
       lowercased,
       uppercased,
       is_empty,
       starts_with,
       includes,
       ends_with,
       equal,
       compare,
       of_uchar,
       of_char,
       to_int,
       arg,
       to_float,
       of_float];
    caml_register_global(2932,Jstr,"Jstr");
    function strict_equal(_o6_,_o5_){return _o6_ === _o5_?1:0}
    var null$0=null,fn=undefined;
    function is_null(v){return v === null$0?1:0}
    function is_undefined(v){return v === fn?1:0}
    function is_none(v){var _o4_=is_null(v);return _o4_?_o4_:is_undefined(v)}
    function is_some(v){return 1 - is_none(v)}
    function to_option(conv,v){return is_none(v)?0:[0,caml_call1(conv,v)]}
    function of_option(none,conv,param)
     {if(param){var v=param[1];return caml_call1(conv,v)}return none}
    var target=globalThis;
    function set_if_some(o,p,param)
     {if(param){var v=param[1];return o[p] = v}return 0}
    function find(o,p){var v=o[p];return is_none(v)?0:[0,v]}
    function find_map(f,o,p)
     {var v=o[p];return is_none(v)?0:[0,caml_call1(f,v)]}
    function find_path(o,param)
     {var o$0=o,param$0=param;
      for(;;)
       {if(param$0)
         {var ps=param$0[2],p=param$0[1],match=find(o$0,p);
          if(match){var o$1=match[1],o$0=o$1,param$0=ps;continue}
          return 0}
        return [0,o$0]}}
    var true$0=true,false$0=false;
    function find$0(o,p){var b=o[p];return is_none(b)?0:[0,b | 0]}
    function get$0(o,p){return o[p] | 0}
    function set(o,p,b){return o[p] = ! ! b}
    function set_if_some$0(o,p,param)
     {if(param){var b=param[1];return set(o,p,b)}return 0}
    var Bool=[0,find$0,get$0,set,set_if_some$0];
    function find$1(o,p){var i=o[p];return is_none(i)?0:[0,i]}
    function get$1(o,p){return o[p]}
    function set$0(o,p,i){return o[p] = i}
    function set_if_some$1(o,p,param)
     {if(param){var i=param[1];return o[p] = i}return 0}
    var Int=[0,find$1,get$1,set$0,set_if_some$1];
    function find$2(o,p){var f=o[p];return is_none(f)?0:[0,f]}
    function get$2(o,p){return o[p]}
    function set$1(o,p,b){return o[p] = b}
    function set_if_some$2(o,p,param)
     {if(param){var f=param[1];return o[p] = f}return 0}
    var Float=[0,find$2,get$2,set$1,set_if_some$2];
    function find$3(o,p){var s=o[p];return is_none(s)?0:[0,s]}
    function get$3(o,p){return o[p]}
    function set$2(o,p,b){return o[p] = b}
    function set_if_some$3(o,p,param)
     {if(param){var f=param[1];return o[p] = f}return 0}
    function create(n){return new (target[cst_Array])(n)}
    function length$0(a){return a[cst_length$0]}
    var Jarray=[0,create,length$0];
    function to_array(conv,v)
     {var len=caml_call1(Jarray[2],v);
      function _o3_(i){return caml_call1(conv,v[i])}
      return caml_call2(Stdlib_Array[2],len,_o3_)}
    function of_array(conv,a)
     {var
       len=a.length - 1,
       ja=caml_call1(Jarray[1],len),
       _o1_=len - 1 | 0,
       _o0_=0;
      if(! (_o1_ < 0))
       {var i=_o0_;
        for(;;)
         {ja[i] = caml_call1(conv,runtime.caml_check_bound(a,i)[1 + i]);
          var _o2_=i + 1 | 0;
          if(_o1_ !== i){var i=_o2_;continue}
          break}}
      return ja}
    function to_list(conv,v)
     {var len=caml_call1(Jarray[2],v);
      function _oZ_(i){return caml_call1(conv,v[i])}
      return caml_call2(Stdlib_List[10],len,_oZ_)}
    function of_list(conv,l)
     {var ja=caml_call1(Jarray[1],0),i=0,param=l;
      for(;;)
       {if(param)
         {var vs=param[2],v=param[1];
          ja[i] = caml_call1(conv,v);
          var i$0=i + 1 | 0,i=i$0,param=vs;
          continue}
        return ja}}
    function v(name,msg)
     {var e=new (target[cst_Error])(msg);
      if(name){var n=name[1];e[cst_name] = n;return e}
      return e}
    function name(e){return e[cst_name$0]}
    function enum$0(e)
     {var
       match=caml_string_of_jsstring(e[cst_name$1]),
       switch$0=caml_string_compare(match,cst_NotAllowedError);
      if(0 <= switch$0)
       {if(! (0 < switch$0))return 971339429;
        var switch$1=caml_string_compare(match,cst_SyntaxError);
        if(0 <= switch$1)
         {if(! (0 < switch$1))return 148000204;
          if(! caml_string_notequal(match,cst_TimeoutError))return -129520566;
          if(! caml_string_notequal(match,cst_TransactionInactiveError))
           return -28376747;
          if(! caml_string_notequal(match,cst_TypeMismatchError))
           return -823442212;
          if(! caml_string_notequal(match,cst_URLMismatchError))
           return 147573767;
          if(! caml_string_notequal(match,cst_UnknownError))
           return -1064646157;
          if(! caml_string_notequal(match,cst_VersionError))
           return -1025659903;
          if(! caml_string_notequal(match,cst_WrongDocumentError))
           return -937074026}
        else
         {if(! caml_string_notequal(match,cst_NotFoundError))return 829592127;
          if(! caml_string_notequal(match,cst_NotReadableError))
           return -119831547;
          if(! caml_string_notequal(match,cst_NotSupportedError))
           return -935732949;
          if(! caml_string_notequal(match,cst_OperationError))
           return 115193424;
          if(! caml_string_notequal(match,cst_QuotaExceededError))
           return 246360739;
          if(! caml_string_notequal(match,cst_ReadOnlyError))return 842968798;
          if(! caml_string_notequal(match,cst_SecurityError))return 496062953}}
      else
       {var switch$2=caml_string_compare(match,cst_InvalidAccessError);
        if(0 <= switch$2)
         {if(! (0 < switch$2))return 753062229;
          if(! caml_string_notequal(match,cst_InvalidCharacterError))
           return 197539530;
          if(! caml_string_notequal(match,cst_InvalidModificationError))
           return 943132429;
          if(! caml_string_notequal(match,cst_InvalidNodeTypeError))
           return -94613768;
          if(! caml_string_notequal(match,cst_InvalidStateError))
           return 986514226;
          if(! caml_string_notequal(match,cst_NamespaceError))
           return 861236164;
          if(! caml_string_notequal(match,cst_NetworkError))return 943709719;
          if(! caml_string_notequal(match,cst_NoModificationAllowedError))
           return 320841004}
        else
         {if(! caml_string_notequal(match,cst_AbortError))return 183065241;
          if(! caml_string_notequal(match,cst_ConstraintError))
           return 539235142;
          if(! caml_string_notequal(match,cst_DataCloneError))
           return 1031143793;
          if(! caml_string_notequal(match,cst_DataError))return 483354835;
          if(! caml_string_notequal(match,cst_EncodingError))return 518067260;
          if(! caml_string_notequal(match,cst_HierarchyRequestError))
           return 227342318;
          if(! caml_string_notequal(match,cst_IndexSizeError))return 89185783}}
      return -912009552}
    function message(e){return e[cst_message]}
    function stack(e){return e[cst_stack]}
    function throw$0(name,msg)
     {var e=v(name,msg);return caml_call1(function(exn){throw exn},e)}
    var _a_=Jsoo_runtime[3][4],symbol$0=Symbol.iterator;
    function iterable(o)
     {var _oX_=o[symbol$0],match=to_option(function(_oY_){return _oY_},_oX_);
      if(match){var func=match[1];return func()}
      return 0}
    function iterator$0(o){return o[symbol$0]()}
    function next(it){return it.next()}
    function result_done(o)
     {var match=to_option(caml_js_to_bool,o[cst_done$0]);
      if(match){var d=match[1];return d}
      return 0}
    function result_value(o)
     {var _oV_=o[cst_value$0];
      return to_option(function(_oW_){return _oW_},_oV_)}
    function get_result_value(o){return o[cst_value$1]}
    function fold(of_jv,f,it,acc)
     {var acc$0=acc;
      for(;;)
       {var r=it.next();
        if(result_done(r))return acc$0;
        var
         acc$1=caml_call2(f,caml_call1(of_jv,get_result_value(r)),acc$0),
         acc$0=acc$1;
        continue}}
    function fold_bindings(key,value,f,it,acc)
     {var acc$0=acc;
      for(;;)
       {var r=it.next();
        if(result_done(r))return acc$0;
        var
         arr=get_result_value(r),
         _oU_=caml_call1(value,arr[1]),
         acc$1=caml_call3(f,caml_call1(key,arr[0]),_oU_,acc$0),
         acc$0=acc$1;
        continue}}
    var promise=target[cst_Promise];
    function create$0(f){return new promise(f)}
    function resolve(v){return promise.resolve(v)}
    function reject(v){return promise.reject(v)}
    function await$0(p,k){p.then(k);return 0}
    function bind(p,res){return p.then(res)}
    function then(p,res,rej){return p.then(res,rej)}
    function all(arr){return promise.all(arr)}
    function find$4(o,p){var v=o[p];return is_none(v)?0:[0,v]}
    function find_map$0(f,o,p)
     {var v=o[p];return is_none(v)?0:[0,caml_call1(f,v)]}
    function obj(props)
     {function _oT_(param)
       {var v=param[2],p=param[1];return [0,caml_string_of_jsstring(p),v]}
      return runtime.caml_js_object(caml_call2(Stdlib_Array[15],_oT_,props))}
    function call(o,m,args)
     {return caml_js_meth_call(o,caml_string_of_jsstring(m),args)}
    function has(p,v){return is_some(v[p])}
    function defined(v){return is_some(v)}
    var
     Id=[0],
     _b_=[0,create$0,resolve,reject,await$0,bind,then,all],
     _c_=
      [0,
       result_done,
       result_value,
       get_result_value,
       iterable,
       iterator$0,
       next,
       fold,
       fold_bindings],
     _d_=[0,v,name,enum$0,message,stack],
     _e_=[0,find$3,get$3,set$2,set_if_some$3],
     Jv=
      [0,
       strict_equal,
       runtime.caml_js_typeof,
       caml_js_instanceof,
       null$0,
       fn,
       is_null,
       is_undefined,
       is_none,
       is_some,
       to_option,
       of_option,
       target,
       find,
       find_map,
       find_path,
       set_if_some,
       true$0,
       false$0,
       Bool,
       Int,
       Float,
       _e_,
       caml_jsstring_of_string,
       caml_string_of_jsstring,
       to_array,
       of_array,
       to_list,
       of_list,
       Jarray,
       _d_,
       _a_,
       throw$0,
       _c_,
       _b_,
       find$4,
       find_map$0,
       obj,
       call,
       has,
       defined,
       Id];
    caml_register_global(2936,Jv,"Jv");
    function promise$0(f){return f[cst_fut]}
    function promise$1(f){return f[cst_fut$0]}
    function create$1(param)
     {function not_set(param){throw [0,Assert_failure,_f_]}
      function is_set(param){return throw$0(0,"The future is already set")}
      var setter=[0,not_set];
      function set_setter(resolve,reject){setter[1] = resolve;return 0}
      var p=caml_call1(_b_[1],set_setter);
      function set(v){caml_call1(setter[1],v);setter[1] = is_set;return 0}
      return [0,{"fut":p},set]}
    function await$1(f,k)
     {var _oS_=promise$0(f);return caml_call2(_b_[4],_oS_,k)}
    function return$0(v){return {"fut":caml_call1(_b_[2],v)}}
    function bind$0(f,fn)
     {function _oQ_(v){return promise$0(caml_call1(fn,v))}
      var _oR_=promise$0(f);
      return {"fut":caml_call2(_b_[5],_oR_,_oQ_)}}
    function map(fn,f)
     {return bind$0(f,function(v){return return$0(caml_call1(fn,v))})}
    function pair(f0,f1)
     {function _oM_(v0)
       {function _oO_(v1){return caml_call1(_b_[2],[0,v0,v1])}
        var _oP_=promise$0(f1);
        return caml_call1(caml_call1(_b_[5],_oP_),_oO_)}
      var _oN_=promise$0(f0);
      return {"fut":caml_call1(caml_call1(_b_[5],_oN_),_oM_)}}
    function of_list$0(fs)
     {var arr=of_list(promise$1,fs),all=caml_call1(_b_[7],arr);
      function to_list$0(l)
       {var _oK_=to_list(function(_oL_){return _oL_},l);
        return caml_call1(_b_[2],_oK_)}
      return {"fut":caml_call2(_b_[5],all,to_list$0)}}
    function tick(ms)
     {function _oJ_(res,rej){target[cst_setTimeout](res,ms);return 0}
      return {"fut":caml_call1(_b_[1],_oJ_)}}
    function ok(v){return return$0([0,v])}
    function error(e){return return$0([1,e])}
    function of_promise(ok,error,p)
     {function ok$0(v)
       {var _oI_=[0,caml_call1(ok,v)];return caml_call1(_b_[2],_oI_)}
      function error$0(e)
       {var _oH_=[1,caml_call1(error,e)];return caml_call1(_b_[2],_oH_)}
      return {"fut":caml_call3(_b_[6],p,ok$0,error$0)}}
    function to_promise(ok,error,f)
     {function _oG_(res,rej)
       {return await$1
                (f,
                 function(param)
                  {if(0 === param[0])
                    {var v=param[1];return caml_call1(res,caml_call1(ok,v))}
                   var e=param[1];
                   return caml_call1(rej,caml_call1(error,e))})}
      return caml_call1(_b_[1],_oG_)}
    function of_promise$0(ok,v)
     {return of_promise(ok,function(_oF_){return _oF_},v)}
    function to_promise$0(ok,v)
     {return to_promise(ok,function(_oE_){return _oE_},v)}
    function let$0(f,fn){return map(fn,f)}
    var Syntax=[0,bind$0,pair,let$0,pair];
    function result_pair(r0,r1)
     {if(0 === r0[0])
       {var _oD_=r0[1];
        if(0 === r1[0]){var v1=r1[1];return [0,[0,_oD_,v1]]}
        var r=r1}
      else
       var r=r0;
      return r}
    function let$1(f,fn)
     {return bind$0
              (f,
               function(e)
                {if(0 === e[0]){var v=e[1];return caml_call1(fn,v)}
                 return return$0(e)})}
    function and(f0,f1){return map(result_pair,pair(f0,f1))}
    function let$2(f,fn){return map(caml_call1(Stdlib_Result[8],fn),f)}
    var
     Fut=
      [0,
       create$1,
       await$1,
       return$0,
       map,
       bind$0,
       pair,
       of_list$0,
       tick,
       ok,
       error,
       of_promise$0,
       to_promise$0,
       of_promise,
       to_promise,
       Syntax,
       [0,let$1,and,let$2,and]];
    caml_register_global(2939,Fut,"Fut");
    var Type=[0];
    function init(bubbles,cancelable,composed,param)
     {var o={};
      caml_call3(Bool[4],o,cst_bubbles,bubbles);
      caml_call3(Bool[4],o,cst_cancelable,cancelable);
      caml_call3(Bool[4],o,cst_composed,composed);
      return o}
    var event=target[cst_Event];
    function create$2(opt,t)
     {if(opt)var sth=opt[1],init=sth;else var init={};
      return new event(t,init)}
    function type(e){return caml_call2(_e_[2],e,cst_type)}
    function target$0(e){return e[cst_target]}
    function current_target(e){return e[cst_currentTarget]}
    function composed_path(e)
     {var _oB_=e.composedPath();
      return to_list(function(_oC_){return _oC_},_oB_)}
    function event_phase(e)
     {var match=caml_call2(Int[2],e,cst_eventPhase),switcher=match - 1 | 0;
      if(2 < switcher >>> 0)return 870530776;
      switch(switcher)
       {case 0:return 497141539;
        case 1:return -276077507;
        default:return 608305129}}
    function bubbles(e){return caml_call2(Bool[2],e,cst_bubbles$0)}
    function stop_propagation(e){e.stopPropagation();return 0}
    function stop_immediate_propagation(e)
     {e.stopImmediatePropagation();return 0}
    function cancelable(e){return caml_call2(Bool[2],e,cst_cancelable$0)}
    function prevent_default(e){e.preventDefault();return 0}
    function default_prevented(e)
     {return caml_call2(Bool[2],e,cst_defaultPrevented)}
    function composed(e){return caml_call2(Bool[2],e,cst_composed$0)}
    function is_trusted(e){return caml_call2(Bool[2],e,cst_isTrusted)}
    function timestamp_ms(e){return caml_call2(Float[2],e,cst_timeStamp)}
    function dispatch(e,t){return t.dispatchEvent(e) | 0}
    function listen_opts(capture,once,passive,param)
     {var o={};
      caml_call3(Bool[4],o,cst_capture,capture);
      caml_call3(Bool[4],o,cst_once,once);
      caml_call3(Bool[4],o,cst_passive,passive);
      return o}
    function listen(opt,type,f,t)
     {if(opt)var sth=opt[1],opts=sth;else var opts={};
      t.addEventListener(type,f,opts);
      return 0}
    function unlisten(opt,type,f,t)
     {if(opt)var sth=opt[1],opts=sth;else var opts={};
      t.removeEventListener(type,f,opts);
      return 0}
    function next$0(capture,type,t)
     {var
       match=create$1(0),
       set=match[2],
       fut=match[1],
       opts=listen_opts(capture,_g_,0,0);
      listen([0,opts],type,set,t);
      return fut}
    var
     none="none",
     copy="copy",
     copy_link="copyLink",
     copy_move="copyMove",
     link="link",
     link_move="linkMove",
     move="move",
     all$0="all",
     uninitialized="uninitialized",
     Effect=
      [0,
       none,
       copy,
       copy_link,
       copy_move,
       link,
       link_move,
       move,
       all$0,
       uninitialized],
     file="file",
     string="string",
     Kind=[0,file,string];
    function kind(i){return caml_call2(_e_[2],i,cst_kind)}
    function type$0(i){return caml_call2(_e_[2],i,cst_type$0)}
    function get_file(i)
     {var _oz_=i.getAsFile();
      return to_option(function(_oA_){return _oA_},_oz_)}
    function get_jstr$0(i)
     {var match=create$1(0),set_str=match[2],str=match[1];
      i.getAsString(set_str);
      return str}
    var Item=[0,Kind,kind,type$0,get_file,get_jstr$0];
    function length$1(l){return caml_call2(Int[2],l,cst_length$1)}
    function add_jstr(l,type,str)
     {var _ox_=l.add(str,type);
      return to_option(function(_oy_){return _oy_},_ox_)}
    function add_file(t,file)
     {var _ov_=t.add(file);return to_option(function(_ow_){return _ow_},_ov_)}
    function remove(l,i){l.remove(i);return 0}
    function clear(l){l.clear();return 0}
    function items(l)
     {var acc=[0,0],_ot_=length$1(l) - 1 | 0;
      if(! (_ot_ < 0))
       {var i=_ot_;
        for(;;)
         {acc[1] = [0,l[i],acc[1]];
          var _ou_=i - 1 | 0;
          if(0 !== i){var i=_ou_;continue}
          break}}
      return acc[1]}
    function drop_effect(d){return caml_call2(_e_[2],d,cst_dropEffect)}
    function set_drop_effect(d,e)
     {return caml_call3(_e_[3],d,cst_dropEffect$0,e)}
    function effect_allowed(d){return caml_call2(_e_[2],d,cst_effectAllowed)}
    function set_effect_allowed(d,e)
     {return caml_call3(_e_[3],d,cst_effectAllowed$0,e)}
    function items$0(d){return d[cst_items]}
    function data(c)
     {return find_map(function(_os_){return _os_},c,cst_clipboardData)}
    var Clipboard=[0,data];
    function data$0(i){return caml_call2(_e_[2],i,cst_data)}
    var Composition=[0,data$0];
    function message$0(e){return caml_call2(_e_[2],e,cst_message$0)}
    function filename(e){return caml_call2(_e_[2],e,cst_filename)}
    function lineno(e){return caml_call2(Int[2],e,cst_lineno)}
    function colno(e){return caml_call2(Int[2],e,cst_colno)}
    function error$0(e){return e[cst_error]}
    var Error=[0,message$0,filename,lineno,colno,error$0];
    function wait_until(e,fut)
     {e.waitUntil(to_promise$0(function(_or_){return _or_},fut));return 0}
    var Extendable=[0,wait_until];
    function related_target(m)
     {return find_map(function(_oq_){return _oq_},m,cst_relatedTarget)}
    var Focus=[0,related_target];
    function old_url(e){return caml_call2(_e_[2],e,cst_oldURL)}
    function new_url(e){return caml_call2(_e_[2],e,cst_newURL)}
    var Hash_change=[0,old_url,new_url];
    function data$1(i){return caml_call2(_e_[2],i,cst_data$0)}
    function data_transfer(i){return find(i,cst_dataTransfer)}
    function input_type(i){return caml_call2(_e_[2],i,cst_inputType)}
    function is_composing(i){return caml_call2(Bool[2],i,cst_isComposing)}
    var
     Input=[0,data$1,data_transfer,input_type,is_composing],
     Location=[0,0,1,2,3];
    function key(k){return caml_call2(_e_[2],k,cst_key)}
    function code(k){return caml_call2(_e_[2],k,cst_code)}
    function location(k){return caml_call2(Int[2],k,cst_location)}
    function repeat$0(k){return caml_call2(Bool[2],k,cst_repeat)}
    function is_composing$0(k){return caml_call2(Bool[2],k,cst_isComposing$0)}
    function alt_key(k){return caml_call2(Bool[2],k,cst_altKey)}
    function ctrl_key(k){return caml_call2(Bool[2],k,cst_ctrlKey)}
    function shift_key(k){return caml_call2(Bool[2],k,cst_shiftKey)}
    function meta_key(k){return caml_call2(Bool[2],k,cst_metaKey)}
    function get_modifier_state(k,key){return k.getModifierState(key) | 0}
    var
     Keyboard=
      [0,
       Location,
       key,
       code,
       location,
       repeat$0,
       is_composing$0,
       alt_key,
       ctrl_key,
       shift_key,
       meta_key,
       get_modifier_state];
    function related_target$0(m)
     {return find_map(function(_op_){return _op_},m,cst_relatedTarget$0)}
    function offset_x(m){return caml_call2(Float[2],m,cst_offsetX)}
    function offset_y(m){return caml_call2(Float[2],m,cst_offsetY)}
    function client_x(m){return caml_call2(Float[2],m,cst_clientX)}
    function client_y(m){return caml_call2(Float[2],m,cst_clientY)}
    function page_x(m){return caml_call2(Float[2],m,cst_pageX)}
    function page_y(m){return caml_call2(Float[2],m,cst_pageY)}
    function screen_x(m){return caml_call2(Float[2],m,cst_screenX)}
    function screen_y(m){return caml_call2(Float[2],m,cst_screenY)}
    function movement_x(m){return caml_call2(Float[2],m,cst_movementX)}
    function movement_y(m){return caml_call2(Float[2],m,cst_movementY)}
    function button(m){return caml_call2(Int[2],m,cst_button)}
    function buttons(m){return caml_call2(Int[2],m,cst_buttons)}
    function alt_key$0(m){return caml_call2(Bool[2],m,cst_altKey$0)}
    function ctrl_key$0(m){return caml_call2(Bool[2],m,cst_ctrlKey$0)}
    function shift_key$0(m){return caml_call2(Bool[2],m,cst_shiftKey$0)}
    function meta_key$0(m){return caml_call2(Bool[2],m,cst_metaKey$0)}
    function get_modifier_state$0(m,key){return m.getModifierState(key) | 0}
    var
     Mouse=
      [0,
       related_target$0,
       offset_x,
       offset_y,
       client_x,
       client_y,
       page_x,
       page_y,
       screen_x,
       screen_y,
       movement_x,
       movement_y,
       button,
       buttons,
       alt_key$0,
       ctrl_key$0,
       shift_key$0,
       meta_key$0,
       get_modifier_state$0];
    function data_transfer$0(d)
     {return find_map(function(_oo_){return _oo_},d,cst_dataTransfer$0)}
    var Drag=[0,data_transfer$0];
    function id(p){return caml_call2(Int[2],p,cst_pointerId)}
    function width(p){return caml_call2(Float[2],p,cst_width)}
    function height(p){return caml_call2(Float[2],p,cst_height)}
    function pressure(p){return caml_call2(Float[2],p,cst_pressure)}
    function tangential_pressure(p)
     {return caml_call2(Float[2],p,cst_tangentialPressure)}
    function tilt_x(p){return caml_call2(Int[2],p,cst_tiltX)}
    function tilt_y(p){return caml_call2(Int[2],p,cst_tiltY)}
    function twist(p){return caml_call2(Int[2],p,cst_twist)}
    function altitude_angle(p)
     {return caml_call2(Float[2],p,cst_altitudeAngle)}
    function azimuth_angle(p){return caml_call2(Float[2],p,cst_azimuthAngle)}
    function type$1(p){return caml_call2(_e_[2],p,cst_pointerType)}
    function is_primary(p){return caml_call2(Bool[2],p,cst_isPrimary)}
    function get_coalesced_events(p)
     {var _om_=p.getCoalescedEvents();
      return to_list(function(_on_){return _on_},_om_)}
    function get_predicted_events(p)
     {var _ok_=p.getPredictedEvents();
      return to_list(function(_ol_){return _ol_},_ok_)}
    var
     Pointer=
      [0,
       id,
       width,
       height,
       pressure,
       tangential_pressure,
       tilt_x,
       tilt_y,
       twist,
       altitude_angle,
       azimuth_angle,
       type$1,
       is_primary,
       get_coalesced_events,
       get_predicted_events],
     Delta_mode=[0,0,1,2];
    function delta_x(w){return caml_call2(Float[2],w,cst_deltaX)}
    function delta_y(w){return caml_call2(Float[2],w,cst_deltaY)}
    function delta_z(w){return caml_call2(Float[2],w,cst_deltaZ)}
    function delta_mode(w){return caml_call2(Int[2],w,cst_deltaMode)}
    var
     Wheel=[0,Delta_mode,delta_x,delta_y,delta_z,delta_mode],
     abort="abort",
     activate="activate",
     auxclick="dblclick",
     beforeinput="beforeinput",
     beforeunload="beforeunload",
     blur="blur",
     canplay="canplay",
     canplaythrough="canplaythrough",
     change="change",
     click="click",
     clipboardchange="clipboardchange",
     close="close",
     compositionend="compositionend",
     compositionstart="compositionstart",
     compositionudpate="compositionupdate",
     controllerchange="controllerchange",
     copy$0="copy",
     cut="cut",
     dblclick="dblclick",
     dom_content_loaded="DOMContentLoaded",
     drag="drag",
     dragend="dragend",
     dragenter="dragenter",
     dragexit="dragexit",
     dragleave="dragleave",
     dragover="dragover",
     dragstart="dragstart",
     drop="drop",
     durationchange="durationchange",
     emptied="emptied",
     ended="ended",
     error$1="error",
     focus="focus",
     focusin="focusin",
     focusout="focusout",
     fullscreenchange="fullscreenchange",
     fullscreenerror="fullscreenerror",
     gotpointercapture="gotpointercapture",
     hashchange="hashchange",
     input="input",
     install="install",
     keydown="keydown",
     keyup="keyup",
     languagechange="languagechange",
     load="load",
     loadeddata="loadeddata",
     loadedmetadata="loadedmetadata",
     loadstart="loadstart",
     lostpointercapture="lostpointercapture",
     mousedown="mousedown",
     mouseenter="mouseenter",
     mouseleave="mouseleave",
     mousemove="mousemove",
     mouseout="mouseout",
     mouseover="mouseover",
     mouseup="mouseup",
     open="open",
     paste="paste",
     pause="pause",
     play="play",
     playing="playing",
     pointercancel="pointercancel",
     pointerdown="pointerdown",
     pointerenter="pointerenter",
     pointerleave="pointerleave",
     pointerlockchange="pointerlockchange",
     pointerlockerror="pointerlockerror",
     pointermove="pointermove",
     pointerout="pointerout",
     pointerover="pointerover",
     pointerrawupdate="pointerrawupdate",
     pointerup="pointerup",
     progress="progress",
     ratechange="ratechange",
     reset="reset",
     resize="resize",
     scroll="scroll",
     seeked="seeked",
     seeking="seeking",
     select="select",
     stalled="stalled",
     statechange="statechange",
     suspend="suspend",
     timeupdate="timeupdate",
     unload="unload",
     updatefound="updatefound",
     visibilitychange="visibilitychange",
     volumechange="volumechange",
     waiting="waiting",
     wheel="wheel",
     array_buffer=target[cst_ArrayBuffer];
    function create$3(n){return new array_buffer(n)}
    function byte_length(a){return caml_call2(Int[2],a,cst_byteLength)}
    function slice$0(opt,stop,a)
     {if(opt)var sth=opt[1],start=sth;else var start=0;
      if(stop)var stop$0=stop[1],stop$1=stop$0;else var stop$1=byte_length(a);
      return a.slice(start,stop$1)}
    function buffer(o){return o[cst_buffer]}
    function byte_offset(o){return caml_call2(Int[2],o,cst_byteOffset)}
    function byte_length$0(o){return caml_call2(Int[2],o,cst_byteLength$0)}
    var dataview=target[cst_DataView];
    function of_buffer(opt,byte_length$0,b)
     {if(opt)var sth=opt[1],byte_offset=sth;else var byte_offset=0;
      if(byte_length$0)
       var l=byte_length$0[1],byte_length$1=l;
      else
       var byte_length$1=byte_length(b);
      return new dataview(b,byte_offset,byte_length$1)}
    function get_int8(b,i){return b.getInt8(i)}
    function get_int16_be(b,i){return b.getInt16(i)}
    function get_int16_le(b,i){return b.getInt16(i,true$0)}
    function get_int32_be(b,i){return b.getInt32(i)}
    function get_int32_le(b,i){return b.getInt32(i,true$0)}
    function get_uint8(b,i){return b.getUint8(i)}
    function get_uint16_be(b,i){return b.getUint16(i)}
    function get_uint16_le(b,i){return b.getUint16(i,true$0)}
    function get_uint32_be(b,i){return b.getUint32(i)}
    function get_uint32_le(b,i){return b.getUint32(i,true$0)}
    function get_float32_be(b,i){return b.getFloat32(i)}
    function get_float32_le(b,i){return b.getFloat32(i,true$0)}
    function get_float64_be(b,i){return b.getFloat64(i)}
    function get_float64_le(b,i){return b.getFloat64(i,true$0)}
    function set_int8(b,i,v){b.setInt8(i,v);return 0}
    function set_int16_be(b,i,v){b.setInt16(i,v);return 0}
    function set_int16_le(b,i,v){b.setInt16(i,v,true$0);return 0}
    function set_int32_be(b,i,v){b.setInt32(i,v);return 0}
    function set_int32_le(b,i,v){b.setInt32(i,v,true$0);return 0}
    function set_uint8(b,i,v){b.setUint8(i,v);return 0}
    function set_uint16_be(b,i,v){b.setUint16(i,v);return 0}
    function set_uint16_le(b,i,v){b.setUint16(i,v,true$0);return 0}
    function set_uint32_be(b,i,v){b.setUint32(i,v);return 0}
    function set_uint32_le(b,i,v){b.setUint32(i,v,true$0);return 0}
    function set_float32_be(b,i,v){b.setFloat32(i,v);return 0}
    function set_float32_le(b,i,v){b.setFloat32(i,v,true$0);return 0}
    function set_float64_be(b,i,v){b.setFloat64(i,v);return 0}
    function set_float64_le(b,i,v){b.setFloat64(i,v,true$0);return 0}
    function type_size_in_bytes(param)
     {switch(param)
       {case 8:return 8;
        case 1:
        case 5:return 2;
        case 0:
        case 3:
        case 4:return 1;
        default:return 4}}
    function cons_of_type(param)
     {switch(param)
       {case 0:return target[cst_Int8Array];
        case 1:return target[cst_Int16Array];
        case 2:return target[cst_Int32Array];
        case 3:return target[cst_Uint8Array];
        case 4:return target[cst_Uint8ClampedArray];
        case 5:return target[cst_Uint16Array];
        case 6:return target[cst_Uint32Array];
        case 7:return target[cst_Float32Array];
        default:return target[cst_Float64Array]}}
    function create$4(t,n){return new (cons_of_type(t))(n)}
    function of_buffer$0(t,opt,length,b)
     {if(opt)var sth=opt[1],byte_offset=sth;else var byte_offset=0;
      if(length)
       var l=length[1],args=[0,b,byte_offset,l];
      else
       var args=[0,b,byte_offset];
      return caml_js_new(cons_of_type(t),args)}
    function length$2(a){return caml_call2(Int[2],a,cst_length$2)}
    function type$2(a)
     {var
       s=
        caml_string_of_jsstring
         (caml_call2(_e_[2],a[cst_constructor],cst_name$2));
      if(caml_string_notequal(s,cst_Float32Array$0))
       {if(caml_string_notequal(s,cst_Float64Array$0))
         {if(caml_string_notequal(s,cst_Int16Array$0))
           {if(caml_string_notequal(s,cst_Int32Array$0))
             {if(caml_string_notequal(s,cst_Int8Array$0))
               {if(caml_string_notequal(s,cst_Uint16Array$0))
                 {if(caml_string_notequal(s,cst_Uint32Array$0))
                   {if(caml_string_notequal(s,cst_Uint8Array$0))
                     {if(caml_string_notequal(s,cst_Uint8ClampedArray$0))
                       {var t=caml_jsstring_of_string(s);
                        return throw$0(0,"Unknown typed array: ".concat(t))}
                      return 4}
                    return 3}
                  return 6}
                return 5}
              return 0}
            return 2}
          return 1}
        return 8}
      return 7}
    function set_tarray(a,dst,b){a.set(b,dst);return 0}
    function fill(opt,stop,v,a)
     {if(opt)var sth=opt[1],start=sth;else var start=0;
      if(stop)var stop$0=stop[1],stop$1=stop$0;else var stop$1=length$2(a);
      a.fill(v,start,stop$1);
      return 0}
    function copy_within(opt,stop,dst,a)
     {if(opt)var sth=opt[1],start=sth;else var start=0;
      if(stop)var stop$0=stop[1],stop$1=stop$0;else var stop$1=length$2(a);
      a.copyWithin(dst,start,stop$1);
      return 0}
    function slice$1(opt,stop,a)
     {if(opt)var sth=opt[1],start=sth;else var start=0;
      if(stop)
       var stop$0=stop[1],stop$1=stop$0;
      else
       var stop$1=byte_length$0(a);
      return a.slice(start,stop$1)}
    function sub$0(opt,stop,a)
     {if(opt)var sth=opt[1],start=sth;else var start=0;
      if(stop)
       var stop$0=stop[1],stop$1=stop$0;
      else
       var stop$1=byte_length$0(a);
      return a.subArray(start,stop$1)}
    function find$5(sat,a)
     {function sat$0(v,i){return ! ! caml_call2(sat,i,v)}
      var _oi_=a.find(sat$0);
      return to_option(function(_oj_){return _oj_},_oi_)}
    function find_index(sat,a)
     {function sat$0(v,i){return ! ! caml_call2(sat,i,v)}
      var i=a.findIndex(sat$0);
      return -1 === i?0:[0,i]}
    function for_all(sat,a)
     {function sat$0(v,i){return ! ! caml_call2(sat,i,v)}
      return a.every(sat$0) | 0}
    function exists(sat,a)
     {function sat$0(v,i){return ! ! caml_call2(sat,i,v)}
      return a.every(sat$0) | 0}
    function filter(sat,a)
     {function sat$0(v,i){return ! ! caml_call2(sat,i,v)}
      return a.filter(sat$0)}
    function iter(f,a)
     {function f$0(v,i){return caml_call2(f,i,v)}a.forEach(f$0);return 0}
    function map$0(f,a){return a.map(f)}
    function fold_left(f,acc,a){return a.reduce(f,acc)}
    function fold_right(f,a,acc)
     {function f$0(acc,v){return caml_call2(f,v,acc)}
      return a.reduceRight(f$0,acc)}
    function reverse(a){return a.reverse()}
    function of_tarray(t,a){return new (cons_of_type(t))(a)}
    function of_int_array(t,a)
     {var _og_=of_array(function(_oh_){return _oh_},a);
      return new (cons_of_type(t))(_og_)}
    function of_float_array(t,a)
     {var _oe_=of_array(function(_of_){return _of_},a);
      return new (cons_of_type(t))(_oe_)}
    function to_int_jstr(opt,b)
     {if(opt)var sth=opt[1],sep=sth;else var sep=sp;return b.join(sep)}
    function to_hex_jstr(opt,a)
     {if(opt)var sth=opt[1],sep=sth;else var sep=empty;
      var
       hex="0123456789abcdef",
       d=of_buffer(0,0,buffer(a)),
       s=[0,empty],
       _oa_=byte_length$0(d) - 1 | 0,
       _n$_=0;
      if(! (_oa_ < 0))
       {var i=_n$_;
        for(;;)
         {var
           b=d.getUint8(i),
           sep$0=0 === i?empty:sep,
           _ob_=get_jstr(hex,b & 15),
           _oc_=get_jstr(hex,b >>> 4 | 0);
          s[1] = s[1].concat(sep$0).concat(_oc_).concat(_ob_);
          var _od_=i + 1 | 0;
          if(_oa_ !== i){var i=_od_;continue}
          break}}
      return s[1]}
    function uint8_of_buffer(b){return of_buffer$0(3,0,0,b)}
    function of_jstr(s)
     {var enc=new (target[cst_TextEncoder])();return enc.encode(s)}
    function to_jstr(a)
     {var dec=new (target[cst_TextDecoder])("utf-8",{"fatal":true$0});
      try
       {var s=dec.decode(a)}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        if(exn[1] === _a_){var e=exn[2];return [1,e]}
        throw exn}
      return [0,s]}
    function of_binary_jstr(s)
     {function code(s,i)
       {var c=s.charCodeAt(i);
        if(255 < c)
         {var _n__=arg(0,c);
          return throw$0
                  (0,
                   arg(0,i).concat(": char code ").concat(_n__).concat
                    ("exceeds 255"))}
        return c}
      try
       {var
         b=create$3(length(s)),
         d=of_buffer(0,0,b),
         _n7_=length(s) - 1 | 0,
         _n6_=0;
        if(! (_n7_ < 0))
         {var i=_n6_;
          for(;;)
           {set_int8(d,i,code(s,i));
            var _n9_=i + 1 | 0;
            if(_n7_ !== i){var i=_n9_;continue}
            break}}
        var _n8_=[0,of_buffer$0(0,0,0,b)];
        return _n8_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        if(exn[1] === _a_){var e=exn[2];return [1,e]}
        throw exn}}
    function to_binary_jstr(a)
     {var
       d=of_buffer(0,0,buffer(a)),
       s=[0,empty],
       _n4_=byte_length$0(d) - 1 | 0,
       _n3_=0;
      if(! (_n4_ < 0))
       {var i=_n3_;
        for(;;)
         {var b=d.getUint8(i),_n2_=target[cst_String$0].fromCharCode(b);
          s[1] = s[1].concat(_n2_);
          var _n5_=i + 1 | 0;
          if(_n4_ !== i){var i=_n5_;continue}
          break}}
      return s[1]}
    function type_to_bigarray_kind(param)
     {switch(param)
       {case 0:return Stdlib_Bigarray[5];
        case 1:return Stdlib_Bigarray[7];
        case 2:return Stdlib_Bigarray[10];
        case 3:return Stdlib_Bigarray[6];
        case 4:return Stdlib_Bigarray[6];
        case 5:return Stdlib_Bigarray[8];
        case 6:return Stdlib_Bigarray[10];
        case 7:return Stdlib_Bigarray[1];
        default:return Stdlib_Bigarray[2]}}
    function type_of_bigarray_kind(param)
     {switch(param)
       {case 0:return _h_;
        case 1:return _i_;
        case 2:return _j_;
        case 3:return _k_;
        case 4:return _l_;
        case 5:return _m_;
        case 6:return _n_;
        default:return 0}}
    var
     transparent="transparent",
     native$0="native",
     Ending_type=[0,transparent,native$0];
    function init$0(type,endings,param)
     {var o={};
      caml_call3(_e_[4],o,cst_type$1,type);
      caml_call3(_e_[4],o,cst_endings,endings);
      return o}
    var blob=target[cst_Blob];
    function of_jstr$0(opt,s)
     {if(opt)var sth=opt[1],init=sth;else var init=fn;
      var a=caml_call1(Jarray[1],1);
      a[0] = s;
      return new blob(a,init)}
    function of_array_buffer(opt,b)
     {if(opt)var sth=opt[1],init=sth;else var init=fn;
      return new blob(runtime.caml_js_from_array([0,b]),init)}
    function byte_length$1(b){return caml_call2(Int[2],b,cst_size)}
    function type$3(b){return caml_call2(_e_[2],b,cst_type$2)}
    function slice$2(opt,stop,_n1_,b)
     {if(opt)var sth=opt[1],start=sth;else var start=0;
      if(_n1_)var sth$0=_n1_[1],type=sth$0;else var type=empty;
      if(stop)
       var stop$0=stop[1],stop$1=stop$0;
      else
       var stop$1=byte_length$1(b);
      return b.slice(start,stop$1,type)}
    function array_buffer$0(b)
     {var _nZ_=b.arrayBuffer();
      return of_promise$0(function(_n0_){return _n0_},_nZ_)}
    function stream(b){return b[cst_stream]}
    function text(b)
     {var _nX_=b.text();return of_promise$0(function(_nY_){return _nY_},_nX_)}
    function data_uri(b)
     {var
       reader=new (target[cst_FileReader])(),
       match=create$1(0),
       set_fut=match[2],
       fut=match[1];
      function ok(e)
       {return caml_call1(set_fut,[0,caml_call2(_e_[2],reader,cst_result)])}
      function error(e){return caml_call1(set_fut,[1,reader[cst_error$0]])}
      listen([0,listen_opts(0,_o_,0,0)],load,ok,reader);
      listen([0,listen_opts(0,_p_,0,0)],error$1,error,reader);
      reader.readAsDataURL(b);
      return fut}
    function init$1(blob_init,last_modified_ms,param)
     {if(blob_init)var b=blob_init[1],o=b;else var o={};
      caml_call3(Int[4],o,cst_lastModified,last_modified_ms);
      return o}
    var file$0=target[cst_File];
    function of_blob(opt,name,b)
     {if(opt)var sth=opt[1],init=sth;else var init={};
      return new file$0(b,name,init)}
    function name$0(f){return caml_call2(_e_[2],f,cst_name$3)}
    function last_modified_ms(f)
     {return caml_call2(Int[2],f,cst_lastModified$0)}
    function data_utf_8_of_jstr(s){return to_binary_jstr(of_jstr(s))}
    function data_utf_8_to_jstr(d)
     {var e=of_binary_jstr(d);
      if(0 === e[0]){var t=e[1];return to_jstr(t)}
      return e}
    function data_of_binary_jstr(_nW_){return _nW_}
    function data_to_binary_jstr(_nV_){return _nV_}
    function encode(bs)
     {try
       {var v=target[cst_btoa](bs)}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        if(exn[1] === _a_){var e=exn[2];return [1,e]}
        throw exn}
      return [0,v]}
    function decode(s)
     {try
       {var v=target[cst_atob](s)}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        if(exn[1] === _a_){var e=exn[2];return [1,e]}
        throw exn}
      return [0,v]}
    var
     Base64=
      [0,
       data_utf_8_of_jstr,
       data_utf_8_to_jstr,
       data_of_binary_jstr,
       data_to_binary_jstr,
       encode,
       decode],
     json=target[cst_JSON];
    function encode$0(v){return json.stringify(v)}
    function decode$0(s)
     {try
       {var v=json.parse(s)}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        if(exn[1] === _a_){var e=exn[2];return [1,e]}
        throw exn}
      return [0,v]}
    var
     encode$1=target[cst_encodeURI],
     decode$1=target[cst_decodeURI],
     url=target[cst_URL];
    function v$0(base,s)
     {if(base){var b=base[1];return new url(s,b)}return new url(s)}
    function with_uri(scheme,host,port,path,query,fragment,u)
     {var u$0=new url(u);
      function pct_enc(v){return encode$1(v)}
      try
       {set_if_some
         (u$0,cst_protocol,caml_call2(Stdlib_Option[7],pct_enc,scheme));
        set_if_some
         (u$0,cst_hostname,caml_call2(Stdlib_Option[7],pct_enc,host));
        if(port)
         {var
           p=port[1],
           _nS_=function(eta){return arg(0,eta)},
           _nT_=caml_call2(Stdlib_Option[7],_nS_,p);
          caml_call3(_e_[4],u$0,cst_port,_nT_)}
        set_if_some
         (u$0,cst_pathname,caml_call2(Stdlib_Option[7],pct_enc,path));
        set_if_some(u$0,cst_search,caml_call2(Stdlib_Option[7],pct_enc,query));
        set_if_some
         (u$0,cst_hash,caml_call2(Stdlib_Option[7],pct_enc,fragment));
        var _nU_=[0,u$0];
        return _nU_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        if(exn[1] === _a_){var e=exn[2];return [1,e]}
        throw exn}}
    function pct_dec(v){return decode$1(v)}
    function scheme(u)
     {var p=pct_dec(u[cst_protocol$0]);
      return 0 === length(p)?p:slice(0,_q_,p)}
    function host(u){return pct_dec(u[cst_hostname$0])}
    function port(u)
     {var p=caml_call2(_e_[2],u,cst_port$0);return is_empty(p)?0:to_int(0,p)}
    function query(u)
     {var q=pct_dec(u[cst_search$0]);return is_empty(q)?q:slice(_r_,0,q)}
    function path(u){return pct_dec(u[cst_pathname$0])}
    function fragment(u)
     {var f=decode$1(u[cst_hash$0]);return is_empty(f)?f:slice(_s_,0,f)}
    var usp=target[cst_URLSearchParams];
    function is_empty$0(p)
     {var _nQ_=p.entries(),_nR_=caml_call1(_c_[6],_nQ_);
      return caml_call1(_c_[1],_nR_)}
    function mem(k,p){return p.has(k) | 0}
    function find$6(k,p)
     {var _nO_=p.get(k);return to_option(function(_nP_){return _nP_},_nO_)}
    function find_all(k,p){return caml_list_of_js_array(p.getAll(k))}
    function fold$0(f,p,acc)
     {function key(_nN_){return _nN_}
      function value(_nM_){return _nM_}
      var _nL_=p.entries();
      return caml_call5(_c_[8],key,value,f,_nL_,acc)}
    function of_jstr$1(s){return new usp(s)}
    function to_jstr$0(p){return p.toString()}
    function of_assoc(l)
     {var p=of_jstr$1(empty);
      function _nK_(param){var v=param[2],k=param[1];p.append(k,v);return 0}
      caml_call2(Stdlib_List[17],_nK_,l);
      return p}
    function to_assoc(p)
     {var
       _nI_=0,
       _nJ_=fold$0(function(k,v,acc){return [0,[0,k,v],acc]},p,_nI_);
      return caml_call1(Stdlib_List[9],_nJ_)}
    function of_obj(o){return new usp(o)}
    function code$0(f,s)
     {try
       {var v=f(s)}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        if(exn[1] === _a_){var e=exn[2];return [1,e]}
        throw exn}
      return [0,v]}
    var
     encode_component=target[cst_encodeURIComponent],
     _t_=target[cst_decodeURIComponent];
    function encode$2(s){return code$0(encode$1,s)}
    function decode$2(s){return code$0(decode$1,s)}
    function encode_component$0(s){return code$0(encode_component,s)}
    function decode_component(s){return code$0(_t_,s)}
    function to_jstr$1(u){return u.toString()}
    function of_jstr$2(base,s)
     {try
       {var v=v$0(base,s)}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        if(exn[1] === _a_){var e=exn[2];return [1,e]}
        throw exn}
      return [0,v]}
    function v$1(n,v){return [0,n,v]}
    function true$1(n){return [0,n,empty]}
    function int$0(n,i){return [0,n,arg(0,i)]}
    function add_if(b,at,l){return b?[0,at,l]:l}
    function add_if_some(name,o,l)
     {if(o){var a=o[1];return [0,[0,name,a],l]}return l}
    function to_pair(_nH_){return _nH_}
    var
     accesskey="accesskey",
     autofocus="autofocus",
     charset="charset",
     checked="checked",
     class$0="class",
     content="content",
     contenteditable="contenteditable",
     cols="cols",
     defer="defer",
     disabled="disabled",
     dir="dir",
     draggable="draggable",
     for$0="for",
     height$0="height",
     hidden="hidden",
     href="href",
     id$0="id",
     lang="lang",
     media="media",
     name$1="name",
     placeholder="placeholder",
     rel="rel",
     required="required",
     rows="rows",
     src="src",
     spellcheck="spellcheck",
     tabindex="tabindex",
     title="title",
     type$4="type",
     value="value",
     width$0="width",
     wrap="wrap";
    function accesskey$0(s){return [0,accesskey,s]}
    var autofocus$0=true$1(autofocus);
    function charset$0(_nG_){return [0,charset,_nG_]}
    var checked$0=true$1(checked);
    function class$1(s){return [0,class$0,s]}
    function cols$0(i){return int$0(cols,i)}
    function content$0(s){return [0,content,s]}
    function contenteditable$0(s){return true$1(contenteditable)}
    var defer$0=true$1(defer),disabled$0=true$1(disabled);
    function dir$0(s){return [0,dir,s]}
    function draggable$0(s){return true$1(draggable)}
    function for$1(s){return [0,for$0,s]}
    function height$1(i){return int$0(height$0,i)}
    var hidden$0=true$1(hidden);
    function href$0(s){return [0,href,s]}
    function id$1(s){return [0,id$0,s]}
    function lang$0(s){return [0,lang,s]}
    function media$0(s){return [0,media,s]}
    function name$2(s){return [0,name$1,s]}
    function placeholder$0(s){return [0,placeholder,s]}
    function rel$0(s){return [0,rel,s]}
    var required$0=true$1(required);
    function rows$0(i){return int$0(rows,i)}
    function src$0(s){return [0,src,s]}
    function spellcheck$0(_nF_){return [0,spellcheck,_nF_]}
    function tabindex$0(i){return int$0(tabindex,i)}
    function title$0(s){return [0,title,s]}
    function type$5(s){return [0,type$4,s]}
    function value$0(s){return [0,value,s]}
    function width$1(i){return int$0(width$0,i)}
    function wrap$0(s){return [0,value,s]}
    var document=target[cst_document];
    function document$0(e){return e[cst_ownerDocument]}
    var global_root=document[cst_documentElement];
    function el_list_of_node_list(nl)
     {var acc=[0,0],len=caml_call2(Int[2],nl,cst_length$3),_nD_=len - 1 | 0;
      if(! (_nD_ < 0))
       {var i=_nD_;
        for(;;)
         {acc[1] = [0,nl[i],acc[1]];
          var _nE_=i - 1 | 0;
          if(0 !== i){var i=_nE_;continue}
          break}}
      return acc[1]}
    function _u_(e,n){e.appendChild(n);return 0}
    function v$2(opt,_nz_,name,cs)
     {if(opt)var sth=opt[1],d=sth;else var d=document;
      if(_nz_)var sth$0=_nz_[1],at=sth$0;else var at=0;
      var e=d.createElement(name);
      function _nA_(param)
       {var v=param[2],a=param[1],match=caml_equal(a,class$0);
        return match
                ?is_empty(v)?0:(e[cst_classList].add(v),0)
                :(e.setAttribute(a,v),0)}
      caml_call2(Stdlib_List[17],_nA_,at);
      function _nB_(_nC_){return _u_(e,_nC_)}
      caml_call2(Stdlib_List[17],_nB_,cs);
      return e}
    function txt(opt,s)
     {if(opt)var sth=opt[1],d=sth;else var d=document;
      return d.createTextNode(s)}
    function txt$0(opt,s)
     {if(opt)var sth=opt[1],d=sth;else var d=document;
      return d.createTextNode(caml_jsstring_of_string(s))}
    function sp$0(opt,param){return txt(0," ")}
    function nbsp(opt,param){return txt(0,caml_jsstring_of_string(cst))}
    function is_txt(e){return 3 === caml_call2(Int[2],e,cst_nodeType)?1:0}
    function is_el(e){return 1 === caml_call2(Int[2],e,cst_nodeType$0)?1:0}
    function tag_name(e)
     {return caml_call2(_e_[2],e,cst_nodeName).toLowerCase()}
    function has_tag_name(n,e){return caml_equal(n,tag_name(e))}
    function txt_text(txt)
     {var match=is_txt(txt);
      return match?caml_call2(_e_[2],txt,cst_nodeValue):empty}
    function find_by_class(opt,c)
     {if(opt)var sth=opt[1],root=sth;else var root=global_root;
      return el_list_of_node_list(root.getElementsByClassName(c))}
    function find_by_tag_name(opt,n)
     {if(opt)var sth=opt[1],root=sth;else var root=global_root;
      return el_list_of_node_list(root.getElementsByTagName(n))}
    function find_first_by_selector(opt,sel)
     {if(opt)var sth=opt[1],root=sth;else var root=global_root;
      var _nx_=root.querySelector(sel);
      return to_option(function(_ny_){return _ny_},_nx_)}
    function fold_find_by_selector(opt,f,sel,acc)
     {if(opt)var sth=opt[1],root=sth;else var root=global_root;
      var
       nl=root.querySelectorAll(sel),
       acc$0=[0,acc],
       _nv_=caml_call2(Int[2],nl,cst_length$4) - 1 | 0,
       _nu_=0;
      if(! (_nv_ < 0))
       {var i=_nu_;
        for(;;)
         {acc$0[1] = caml_call2(f,nl[i],acc$0[1]);
          var _nw_=i + 1 | 0;
          if(_nv_ !== i){var i=_nw_;continue}
          break}}
      return acc$0[1]}
    function parent(e)
     {var match=find(e,cst_parentNode);
      if(match){var e$0=match[1];if(is_el(e$0))return [0,e$0]}
      return 0}
    function children(opt,e)
     {if(opt)var sth=opt[1],only_els=sth;else var only_els=0;
      return only_els
              ?el_list_of_node_list(e[cst_children])
              :el_list_of_node_list(e[cst_childNodes])}
    function set_children(e,l)
     {for(;;)
       {if(is_null(e[cst_firstChild]))
         {var _ns_=function(_nt_){return _u_(e,_nt_)};
          return caml_call2(Stdlib_List[17],_ns_,l)}
        e.removeChild(e[cst_firstChild$0]);
        continue}}
    function prepend_children(e,l)
     {caml_js_meth_call(e,cst_prepend,caml_call1(Stdlib_Array[12],l));
      return 0}
    function append_children(e,l)
     {caml_js_meth_call(e,cst_append,caml_call1(Stdlib_Array[12],l));return 0}
    function previous_sibling(e){return find(e,cst_previousElementSibling)}
    function next_sibling(e){return find(e,cst_nextElementSibling)}
    function insert_siblings(loc,e,l)
     {if(-126259180 === loc)
       caml_js_meth_call(e,cst_replaceWith,caml_call1(Stdlib_Array[12],l));
      else
       if(818927100 <= loc)
        caml_js_meth_call(e,cst_after,caml_call1(Stdlib_Array[12],l));
       else
        caml_js_meth_call(e,cst_before,caml_call1(Stdlib_Array[12],l));
      return 0}
    function remove$0(e){e.remove(e);return 0}
    function at(a,e)
     {var _nq_=e.getAttribute(a);
      return to_option(function(_nr_){return _nr_},_nq_)}
    function set_at(a,v,e)
     {if(v){var v$0=v[1];e.setAttribute(a,v$0);return 0}
      e.removeAttribute(a);
      return 0}
    function jv_to_bool(b){return is_undefined(b)?0:b | 0}
    function jv_to_int(i){return is_undefined(i)?0:i}
    function jv_to_float(f){return is_undefined(f)?0.:f}
    function jv_to_jstr(s){return is_undefined(s)?empty:s}
    function bool(n){return [0,n,jv_to_bool,caml_js_from_bool]}
    function int$1(n){return [0,n,jv_to_int,function(_np_){return _np_}]}
    function float$0(n){return [0,n,jv_to_float,function(_no_){return _no_}]}
    function jstr(n){return [0,n,jv_to_jstr,function(_nn_){return _nn_}]}
    var
     checked$1=bool("checked"),
     height$2=int$1("height"),
     id$2=jstr("id"),
     name$3=jstr("name"),
     title$1=jstr("title"),
     value$1=jstr("value"),
     width$2=int$1("width");
    function prop(p,e){return caml_call1(p[2],e[p[1]])}
    function set_prop(p,v,e)
     {var _nm_=caml_call1(p[3],v);e[p[1]] = _nm_;return 0}
    function class$2(c,e){return e[cst_classList$0].contains(c) | 0}
    function set_class(c,b,e)
     {return b?(e[cst_classList$1].add(c),0):(e[cst_classList$2].remove(c),0)}
    var
     background_color="background-color",
     bottom="bottom",
     color="color",
     cursor="cursor",
     display="display",
     height$3="height",
     left="left",
     position="position",
     right="right",
     top="top",
     visibility="visibility",
     width$3="width",
     z_index="z-index",
     Style=
      [0,
       background_color,
       bottom,
       color,
       cursor,
       display,
       height$3,
       left,
       position,
       right,
       top,
       visibility,
       width$3,
       z_index];
    function computed_style(opt,p,e)
     {if(opt)var sth=opt[1],w=sth;else var w=target[cst_window];
      var style=w.getComputedStyle(e),v=style[p];
      return is_none(v)?empty:v}
    function inline_style(p,e)
     {var style=e[cst_style];
      if(is_none(style))return empty;
      var v=style[p];
      return is_none(v)?empty:v}
    function set_inline_style(opt,p,v,e)
     {if(opt)var sth=opt[1],important=sth;else var important=0;
      var priority=important?"important":empty,style=e[cst_style$0];
      return is_none(style)?0:(style.setProperty(p,v,priority),0)}
    function remove_inline_style(p,e)
     {var style=e[cst_style$1];
      return is_none(style)?0:(style.removeProperty(p),0)}
    function inner_x(e){return caml_call2(Float[2],e,cst_clientLeft)}
    function inner_y(e){return caml_call2(Float[2],e,cst_clientTop)}
    function inner_w(e){return caml_call2(Float[2],e,cst_clientWidth)}
    function inner_h(e){return caml_call2(Float[2],e,cst_clientHeight)}
    function bound_x(e)
     {var _nl_=e.getBoundingClientRect();
      return caml_call2(Float[2],_nl_,cst_x)}
    function bound_y(e)
     {var _nk_=e.getBoundingClientRect();
      return caml_call2(Float[2],_nk_,cst_y)}
    function bound_w(e)
     {var _nj_=e.getBoundingClientRect();
      return caml_call2(Float[2],_nj_,cst_width$0)}
    function bound_h(e)
     {var _ni_=e.getBoundingClientRect();
      return caml_call2(Float[2],_ni_,cst_height$0)}
    function scroll_x(e){return caml_call2(Float[2],e,cst_scrollLeft)}
    function scroll_y(e){return caml_call2(Float[2],e,cst_scrollTop)}
    function scroll_w(e){return caml_call2(Float[2],e,cst_scrollWidth)}
    function scroll_h(e){return caml_call2(Float[2],e,cst_scrollHeight)}
    function scroll_into_view(opt,e)
     {if(opt)var sth=opt[1],align_v=sth;else var align_v=389604418;
      var align=389604418 <= align_v?0:1;
      e.scrollIntoView(! ! align);
      return 0}
    function has_focus(e)
     {var
       _ng_=document$0(e)[cst_activeElement],
       match=to_option(function(_nh_){return _nh_},_ng_);
      if(match){var e$0=match[1];return e === e$0?1:0}
      return 0}
    function set_has_focus(b,e){if(b)e.focus();else e.blur();return 0}
    function is_locking_pointer(e)
     {var
       _ne_=document$0(e)[cst_pointerLockElement],
       match=to_option(function(_nf_){return _nf_},_ne_);
      if(match){var e$0=match[1];return e === e$0?1:0}
      return 0}
    function request_pointer_lock(e)
     {var
       match=create$1(0),
       set=match[2],
       fut=match[1],
       d=document$0(e),
       opts=listen_opts(0,_v_,0,0);
      function unlisten$0(param)
       {unlisten([0,opts],pointerlockchange,locked,d);
        return unlisten([0,opts],pointerlockerror,error,d)}
      function locked(ev){caml_call1(set,_w_);return unlisten$0(0)}
      function error(ev)
       {var err=caml_call2(_d_[1],0,"Could not lock pointer");
        caml_call1(set,[1,err]);
        return unlisten$0(0)}
      listen([0,opts],pointerlockchange,locked,d);
      listen([0,opts],pointerlockerror,error,d);
      e.requestPointerLock();
      return fut}
    function click$0(e){e.click();return 0}
    function select_text(e){e.select();return 0}
    var auto="auto",hide="hide",show="show",Navigation_ui=[0,auto,hide,show];
    function fullscreen_opts(navigation_ui,param)
     {var o={};caml_call3(_e_[4],o,cst_navigationUI,navigation_ui);return o}
    function request_fullscreen(opt,e)
     {if(opt)var sth=opt[1],opts=sth;else var opts={};
      var _nc_=e.requestFullscreen(opts);
      return of_promise$0(function(_nd_){return 0},_nc_)}
    function files(e)
     {var match=find(e,cst_files);
      if(match)
       {var files=match[1];return to_list(function(_nb_){return _nb_},files)}
      return 0}
    var
     Input$0=[0,files],
     a="a",
     abbr="abbr",
     address="address",
     area="area",
     article="article",
     aside="aside",
     audio="audio",
     b="b",
     base="base",
     bdi="bdi",
     bdo="bdo",
     blockquote="blockquote",
     body="body",
     br="br",
     button$0="button",
     canvas="canvas",
     caption="caption",
     cite="cite",
     code$1="code",
     col="col",
     colgroup="colgroup",
     command="command",
     datalist="datalist",
     dd="dd",
     del="del",
     details="details",
     dfn="dfn",
     div="div",
     dl="dl",
     dt="dt",
     em="em",
     embed="embed",
     fieldset="fieldset",
     figcaption="figcaption",
     figure="figure",
     footer="footer",
     form="form",
     h1="h1",
     h2="h2",
     h3="h3",
     h4="h4",
     h5="h5",
     h6="h6",
     head="head",
     header="header",
     hgroup="hgroup",
     hr="hr",
     html="html",
     i="i",
     iframe="iframe",
     img="img",
     input$0="input",
     ins="ins",
     kbd="kbd",
     keygen="keygen",
     label="label",
     legend="legend",
     li="li",
     link$0="link",
     map$1="map",
     mark="mark",
     menu="menu",
     meta="meta",
     meter="meter",
     nav="nav",
     noscript="noscript",
     object="object",
     ol="ol",
     optgroup="optgroup",
     option="option",
     output="output",
     p="p",
     param="param",
     pre="pre",
     progress$0="progress",
     q="q",
     rp="rp",
     rt="rt",
     ruby="ruby",
     s="s",
     samp="samp",
     script="script",
     section="section",
     select$0="select",
     small="small",
     source="source",
     span="span",
     strong="strong",
     style="style",
     sub$1="sub",
     summary="summary",
     sup="sup",
     table="table",
     tbody="tbody",
     td="td",
     textarea="textarea",
     tfoot="tfoot",
     th="th",
     thead="thead",
     time="time",
     title$2="title",
     tr="tr",
     track="track",
     u="u",
     ul="ul",
     var$0="var",
     video="video",
     wbr="wbr",
     Name=
      [0,
       a,
       abbr,
       address,
       area,
       article,
       aside,
       audio,
       b,
       base,
       bdi,
       bdo,
       blockquote,
       body,
       br,
       button$0,
       canvas,
       caption,
       cite,
       code$1,
       col,
       colgroup,
       command,
       datalist,
       dd,
       del,
       details,
       dfn,
       div,
       dl,
       dt,
       em,
       embed,
       fieldset,
       figcaption,
       figure,
       footer,
       form,
       h1,
       h2,
       h3,
       h4,
       h5,
       h6,
       head,
       header,
       hgroup,
       hr,
       html,
       i,
       iframe,
       img,
       input$0,
       ins,
       kbd,
       keygen,
       label,
       legend,
       li,
       link$0,
       map$1,
       mark,
       menu,
       meta,
       meter,
       nav,
       noscript,
       object,
       ol,
       optgroup,
       option,
       output,
       p,
       param,
       pre,
       progress$0,
       q,
       rp,
       rt,
       ruby,
       s,
       samp,
       script,
       section,
       select$0,
       small,
       source,
       span,
       strong,
       style,
       sub$1,
       summary,
       sup,
       table,
       tbody,
       td,
       textarea,
       tfoot,
       th,
       thead,
       time,
       title$2,
       tr,
       track,
       u,
       ul,
       var$0,
       video,
       wbr];
    function cons(name,d,at,cs){return v$2(d,at,name,cs)}
    function void_cons(name,d,at,param){return v$2(d,at,name,0)}
    var _x_=Name[1];
    function a$0(_m__,_m$_,_na_){return cons(_x_,_m__,_m$_,_na_)}
    var _y_=Name[2];
    function abbr$0(_m7_,_m8_,_m9_){return cons(_y_,_m7_,_m8_,_m9_)}
    var _z_=Name[3];
    function address$0(_m4_,_m5_,_m6_){return cons(_z_,_m4_,_m5_,_m6_)}
    var _A_=Name[4];
    function area$0(_m1_,_m2_,_m3_){return void_cons(_A_,_m1_,_m2_,_m3_)}
    var _B_=Name[5];
    function article$0(_mY_,_mZ_,_m0_){return cons(_B_,_mY_,_mZ_,_m0_)}
    var _C_=Name[6];
    function aside$0(_mV_,_mW_,_mX_){return cons(_C_,_mV_,_mW_,_mX_)}
    var _D_=Name[7];
    function audio$0(_mS_,_mT_,_mU_){return cons(_D_,_mS_,_mT_,_mU_)}
    var _E_=Name[8];
    function b$0(_mP_,_mQ_,_mR_){return cons(_E_,_mP_,_mQ_,_mR_)}
    var _F_=Name[9];
    function base$0(_mM_,_mN_,_mO_){return void_cons(_F_,_mM_,_mN_,_mO_)}
    var _G_=Name[10];
    function bdi$0(_mJ_,_mK_,_mL_){return cons(_G_,_mJ_,_mK_,_mL_)}
    var _H_=Name[11];
    function bdo$0(_mG_,_mH_,_mI_){return cons(_H_,_mG_,_mH_,_mI_)}
    var _I_=Name[12];
    function blockquote$0(_mD_,_mE_,_mF_){return cons(_I_,_mD_,_mE_,_mF_)}
    var _J_=Name[13];
    function body$0(_mA_,_mB_,_mC_){return cons(_J_,_mA_,_mB_,_mC_)}
    var _K_=Name[14];
    function br$0(_mx_,_my_,_mz_){return void_cons(_K_,_mx_,_my_,_mz_)}
    var _L_=Name[15];
    function button$1(_mu_,_mv_,_mw_){return cons(_L_,_mu_,_mv_,_mw_)}
    var _M_=Name[16];
    function canvas$0(_mr_,_ms_,_mt_){return cons(_M_,_mr_,_ms_,_mt_)}
    var _N_=Name[17];
    function caption$0(_mo_,_mp_,_mq_){return cons(_N_,_mo_,_mp_,_mq_)}
    var _O_=Name[18];
    function cite$0(_ml_,_mm_,_mn_){return cons(_O_,_ml_,_mm_,_mn_)}
    var _P_=Name[19];
    function code$2(_mi_,_mj_,_mk_){return cons(_P_,_mi_,_mj_,_mk_)}
    var _Q_=Name[20];
    function col$0(_mf_,_mg_,_mh_){return void_cons(_Q_,_mf_,_mg_,_mh_)}
    var _R_=Name[21];
    function colgroup$0(_mc_,_md_,_me_){return cons(_R_,_mc_,_md_,_me_)}
    var _S_=Name[22];
    function command$0(_l$_,_ma_,_mb_){return cons(_S_,_l$_,_ma_,_mb_)}
    var _T_=Name[23];
    function datalist$0(_l8_,_l9_,_l__){return cons(_T_,_l8_,_l9_,_l__)}
    var _U_=Name[24];
    function dd$0(_l5_,_l6_,_l7_){return cons(_U_,_l5_,_l6_,_l7_)}
    var _V_=Name[25];
    function del$0(_l2_,_l3_,_l4_){return cons(_V_,_l2_,_l3_,_l4_)}
    var _W_=Name[26];
    function details$0(_lZ_,_l0_,_l1_){return cons(_W_,_lZ_,_l0_,_l1_)}
    var _X_=Name[27];
    function dfn$0(_lW_,_lX_,_lY_){return cons(_X_,_lW_,_lX_,_lY_)}
    var _Y_=Name[28];
    function div$0(_lT_,_lU_,_lV_){return cons(_Y_,_lT_,_lU_,_lV_)}
    var _Z_=Name[29];
    function dl$0(_lQ_,_lR_,_lS_){return cons(_Z_,_lQ_,_lR_,_lS_)}
    var ___=Name[30];
    function dt$0(_lN_,_lO_,_lP_){return cons(___,_lN_,_lO_,_lP_)}
    var _$_=Name[31];
    function em$0(_lK_,_lL_,_lM_){return cons(_$_,_lK_,_lL_,_lM_)}
    var _aa_=Name[32];
    function embed$0(_lH_,_lI_,_lJ_){return void_cons(_aa_,_lH_,_lI_,_lJ_)}
    var _ab_=Name[33];
    function fieldset$0(_lE_,_lF_,_lG_){return cons(_ab_,_lE_,_lF_,_lG_)}
    var _ac_=Name[34];
    function figcaption$0(_lB_,_lC_,_lD_){return cons(_ac_,_lB_,_lC_,_lD_)}
    var _ad_=Name[35];
    function figure$0(_ly_,_lz_,_lA_){return cons(_ad_,_ly_,_lz_,_lA_)}
    var _ae_=Name[36];
    function footer$0(_lv_,_lw_,_lx_){return cons(_ae_,_lv_,_lw_,_lx_)}
    var _af_=Name[37];
    function form$0(_ls_,_lt_,_lu_){return cons(_af_,_ls_,_lt_,_lu_)}
    var _ag_=Name[38];
    function h1$0(_lp_,_lq_,_lr_){return cons(_ag_,_lp_,_lq_,_lr_)}
    var _ah_=Name[39];
    function h2$0(_lm_,_ln_,_lo_){return cons(_ah_,_lm_,_ln_,_lo_)}
    var _ai_=Name[40];
    function h3$0(_lj_,_lk_,_ll_){return cons(_ai_,_lj_,_lk_,_ll_)}
    var _aj_=Name[41];
    function h4$0(_lg_,_lh_,_li_){return cons(_aj_,_lg_,_lh_,_li_)}
    var _ak_=Name[42];
    function h5$0(_ld_,_le_,_lf_){return cons(_ak_,_ld_,_le_,_lf_)}
    var _al_=Name[43];
    function h6$0(_la_,_lb_,_lc_){return cons(_al_,_la_,_lb_,_lc_)}
    var _am_=Name[44];
    function head$0(_k9_,_k__,_k$_){return cons(_am_,_k9_,_k__,_k$_)}
    var _an_=Name[45];
    function header$0(_k6_,_k7_,_k8_){return cons(_an_,_k6_,_k7_,_k8_)}
    var _ao_=Name[46];
    function hgroup$0(_k3_,_k4_,_k5_){return cons(_ao_,_k3_,_k4_,_k5_)}
    var _ap_=Name[47];
    function hr$0(_k0_,_k1_,_k2_){return void_cons(_ap_,_k0_,_k1_,_k2_)}
    var _aq_=Name[48];
    function html$0(_kX_,_kY_,_kZ_){return cons(_aq_,_kX_,_kY_,_kZ_)}
    var _ar_=Name[49];
    function i$0(_kU_,_kV_,_kW_){return cons(_ar_,_kU_,_kV_,_kW_)}
    var _as_=Name[50];
    function iframe$0(_kR_,_kS_,_kT_){return cons(_as_,_kR_,_kS_,_kT_)}
    var _at_=Name[51];
    function img$0(_kO_,_kP_,_kQ_){return void_cons(_at_,_kO_,_kP_,_kQ_)}
    var _au_=Name[52];
    function input$1(_kL_,_kM_,_kN_){return void_cons(_au_,_kL_,_kM_,_kN_)}
    var _av_=Name[53];
    function ins$0(_kI_,_kJ_,_kK_){return cons(_av_,_kI_,_kJ_,_kK_)}
    var _aw_=Name[54];
    function kbd$0(_kF_,_kG_,_kH_){return cons(_aw_,_kF_,_kG_,_kH_)}
    var _ax_=Name[55];
    function keygen$0(_kC_,_kD_,_kE_){return cons(_ax_,_kC_,_kD_,_kE_)}
    var _ay_=Name[56];
    function label$0(_kz_,_kA_,_kB_){return cons(_ay_,_kz_,_kA_,_kB_)}
    var _az_=Name[57];
    function legend$0(_kw_,_kx_,_ky_){return cons(_az_,_kw_,_kx_,_ky_)}
    var _aA_=Name[58];
    function li$0(_kt_,_ku_,_kv_){return cons(_aA_,_kt_,_ku_,_kv_)}
    var _aB_=Name[59];
    function link$1(_kq_,_kr_,_ks_){return void_cons(_aB_,_kq_,_kr_,_ks_)}
    var _aC_=Name[60];
    function map$2(_kn_,_ko_,_kp_){return cons(_aC_,_kn_,_ko_,_kp_)}
    var _aD_=Name[61];
    function mark$0(_kk_,_kl_,_km_){return cons(_aD_,_kk_,_kl_,_km_)}
    var _aE_=Name[62];
    function menu$0(_kh_,_ki_,_kj_){return cons(_aE_,_kh_,_ki_,_kj_)}
    var _aF_=Name[63];
    function meta$0(_ke_,_kf_,_kg_){return void_cons(_aF_,_ke_,_kf_,_kg_)}
    var _aG_=Name[64];
    function meter$0(_kb_,_kc_,_kd_){return cons(_aG_,_kb_,_kc_,_kd_)}
    var _aH_=Name[65];
    function nav$0(_j__,_j$_,_ka_){return cons(_aH_,_j__,_j$_,_ka_)}
    var _aI_=Name[66];
    function noscript$0(_j7_,_j8_,_j9_){return cons(_aI_,_j7_,_j8_,_j9_)}
    var _aJ_=Name[67];
    function object$0(_j4_,_j5_,_j6_){return cons(_aJ_,_j4_,_j5_,_j6_)}
    var _aK_=Name[68];
    function ol$0(_j1_,_j2_,_j3_){return cons(_aK_,_j1_,_j2_,_j3_)}
    var _aL_=Name[69];
    function optgroup$0(_jY_,_jZ_,_j0_){return cons(_aL_,_jY_,_jZ_,_j0_)}
    var _aM_=Name[70];
    function option$0(_jV_,_jW_,_jX_){return cons(_aM_,_jV_,_jW_,_jX_)}
    var _aN_=Name[71];
    function output$0(_jS_,_jT_,_jU_){return cons(_aN_,_jS_,_jT_,_jU_)}
    var _aO_=Name[72];
    function p$0(_jP_,_jQ_,_jR_){return cons(_aO_,_jP_,_jQ_,_jR_)}
    var _aP_=Name[73];
    function param$0(_jM_,_jN_,_jO_){return void_cons(_aP_,_jM_,_jN_,_jO_)}
    var _aQ_=Name[74];
    function pre$0(_jJ_,_jK_,_jL_){return cons(_aQ_,_jJ_,_jK_,_jL_)}
    var _aR_=Name[75];
    function progress$1(_jG_,_jH_,_jI_){return cons(_aR_,_jG_,_jH_,_jI_)}
    var _aS_=Name[76];
    function q$0(_jD_,_jE_,_jF_){return cons(_aS_,_jD_,_jE_,_jF_)}
    var _aT_=Name[77];
    function rp$0(_jA_,_jB_,_jC_){return cons(_aT_,_jA_,_jB_,_jC_)}
    var _aU_=Name[78];
    function rt$0(_jx_,_jy_,_jz_){return cons(_aU_,_jx_,_jy_,_jz_)}
    var _aV_=Name[79];
    function ruby$0(_ju_,_jv_,_jw_){return cons(_aV_,_ju_,_jv_,_jw_)}
    var _aW_=Name[80];
    function s$0(_jr_,_js_,_jt_){return cons(_aW_,_jr_,_js_,_jt_)}
    var _aX_=Name[81];
    function samp$0(_jo_,_jp_,_jq_){return cons(_aX_,_jo_,_jp_,_jq_)}
    var _aY_=Name[82];
    function script$0(_jl_,_jm_,_jn_){return cons(_aY_,_jl_,_jm_,_jn_)}
    var _aZ_=Name[83];
    function section$0(_ji_,_jj_,_jk_){return cons(_aZ_,_ji_,_jj_,_jk_)}
    var _a0_=Name[84];
    function select$1(_jf_,_jg_,_jh_){return cons(_a0_,_jf_,_jg_,_jh_)}
    var _a1_=Name[85];
    function small$0(_jc_,_jd_,_je_){return cons(_a1_,_jc_,_jd_,_je_)}
    var _a2_=Name[86];
    function source$0(_i$_,_ja_,_jb_){return void_cons(_a2_,_i$_,_ja_,_jb_)}
    var _a3_=Name[87];
    function span$0(_i8_,_i9_,_i__){return cons(_a3_,_i8_,_i9_,_i__)}
    var _a4_=Name[88];
    function strong$0(_i5_,_i6_,_i7_){return cons(_a4_,_i5_,_i6_,_i7_)}
    var _a5_=Name[89];
    function style$0(_i2_,_i3_,_i4_){return cons(_a5_,_i2_,_i3_,_i4_)}
    var _a6_=Name[90];
    function sub$2(_iZ_,_i0_,_i1_){return cons(_a6_,_iZ_,_i0_,_i1_)}
    var _a7_=Name[91];
    function summary$0(_iW_,_iX_,_iY_){return cons(_a7_,_iW_,_iX_,_iY_)}
    var _a8_=Name[92];
    function sup$0(_iT_,_iU_,_iV_){return cons(_a8_,_iT_,_iU_,_iV_)}
    var _a9_=Name[93];
    function table$0(_iQ_,_iR_,_iS_){return cons(_a9_,_iQ_,_iR_,_iS_)}
    var _a__=Name[94];
    function tbody$0(_iN_,_iO_,_iP_){return cons(_a__,_iN_,_iO_,_iP_)}
    var _a$_=Name[95];
    function td$0(_iK_,_iL_,_iM_){return cons(_a$_,_iK_,_iL_,_iM_)}
    var _ba_=Name[96];
    function textarea$0(_iH_,_iI_,_iJ_){return cons(_ba_,_iH_,_iI_,_iJ_)}
    var _bb_=Name[97];
    function tfoot$0(_iE_,_iF_,_iG_){return cons(_bb_,_iE_,_iF_,_iG_)}
    var _bc_=Name[98];
    function th$0(_iB_,_iC_,_iD_){return cons(_bc_,_iB_,_iC_,_iD_)}
    var _bd_=Name[99];
    function thead$0(_iy_,_iz_,_iA_){return cons(_bd_,_iy_,_iz_,_iA_)}
    var _be_=Name[100];
    function time$0(_iv_,_iw_,_ix_){return cons(_be_,_iv_,_iw_,_ix_)}
    var _bf_=Name[101];
    function title$3(_is_,_it_,_iu_){return cons(_bf_,_is_,_it_,_iu_)}
    var _bg_=Name[102];
    function tr$0(_ip_,_iq_,_ir_){return cons(_bg_,_ip_,_iq_,_ir_)}
    var _bh_=Name[103];
    function track$0(_im_,_in_,_io_){return void_cons(_bh_,_im_,_in_,_io_)}
    var _bi_=Name[104];
    function u$0(_ij_,_ik_,_il_){return cons(_bi_,_ij_,_ik_,_il_)}
    var _bj_=Name[105];
    function ul$0(_ig_,_ih_,_ii_){return cons(_bj_,_ig_,_ih_,_ii_)}
    var _bk_=Name[106];
    function var$1(_id_,_ie_,_if_){return cons(_bk_,_id_,_ie_,_if_)}
    var _bl_=Name[107];
    function video$0(_ia_,_ib_,_ic_){return cons(_bl_,_ia_,_ib_,_ic_)}
    var _bm_=Name[108];
    function wbr$0(_h9_,_h__,_h$_){return void_cons(_bm_,_h9_,_h__,_h$_)}
    function as_target(d){return d}
    function root(d){return d[cst_documentElement$0]}
    function body$1(d)
     {var b=d[cst_body];
      return is_some(b)
              ?b
              :throw$0
                (0,
                 "Document body is null. Try to defer your script execution.")}
    function head$1(d){return d[cst_head]}
    function active_el(d)
     {var _h7_=d[cst_activeElement$0];
      return to_option(function(_h8_){return _h8_},_h7_)}
    function find_el_by_id(d,id)
     {var _h5_=d.getElementById(id);
      return to_option(function(_h6_){return _h6_},_h5_)}
    function find_els_by_name(d,n)
     {return el_list_of_node_list(d.getElementsByName(n))}
    function referrer(d){return caml_call2(_e_[2],d,cst_referrer)}
    function title$4(d){return caml_call2(_e_[2],d,cst_title)}
    function set_title(d,t){return caml_call3(_e_[3],d,cst_title$0,t)}
    var
     hidden$1="hidden",
     visible="visible",
     Visibility_state=[0,hidden$1,visible];
    function visibility_state(d)
     {return caml_call2(_e_[2],d,cst_visibilityState)}
    function pointer_lock_element(d)
     {var _h3_=d[cst_pointerLockElement$0];
      return to_option(function(_h4_){return _h4_},_h3_)}
    function exit_pointer_lock(d)
     {var fut=next$0(0,pointerlockchange,d);d.exitPointerLock();return fut}
    function fullscreen_available(d)
     {return caml_call2(Bool[2],d,cst_fullscreenEnabled)}
    function fullscreen_element(d)
     {var _h1_=d[cst_fullscreenElement];
      return to_option(function(_h2_){return _h2_},_h1_)}
    function exit_fullscreen(d)
     {var _hZ_=d.exitFullscreen();
      return of_promise$0(function(_h0_){return 0},_hZ_)}
    function aborted(s){return caml_call2(Bool[2],s,cst_aborted)}
    var abort$0="abort",Signal=[0,aborted,abort$0];
    function controller(param){return new (target[cst_AbortController])()}
    function signal(c){return c[cst_signal]}
    function abort$1(c){c.abort();return 0}
    var Abort=[0,Signal,controller,signal,abort$1];
    function call$0(c,meth,args){caml_js_meth_call(c,meth,args);return 0}
    var c=[0,target[cst_console]];
    function get$4(param){return c[1]}
    function set$3(n){c[1] = n;return 0}
    function clear$0(param){return call$0(c[1],cst_clear,[0])}
    function msg(v){return [0,v,0]}
    function str(v)
     {return is_null(v)?"null":is_undefined(v)?"undefined":v.toString()}
    function msg_to_jv_array(msg)
     {var a=caml_call1(Jarray[1],0),i=0,param=msg;
      for(;;)
       {if(param)
         {var vs=param[2],v=param[1];
          a[i] = v;
          var i$0=i + 1 | 0,i=i$0,param=vs;
          continue}
        return runtime.caml_js_to_array(a)}}
    function log(msg)
     {var _hY_=msg_to_jv_array(msg);return call$0(c[1],cst_log,_hY_)}
    function trace(msg)
     {var _hX_=msg_to_jv_array(msg);return call$0(c[1],cst_trace,_hX_)}
    function error$2(msg)
     {var _hW_=msg_to_jv_array(msg);return call$0(c[1],cst_error$1,_hW_)}
    function warn(msg)
     {var _hV_=msg_to_jv_array(msg);return call$0(c[1],cst_warn,_hV_)}
    function info(msg)
     {var _hU_=msg_to_jv_array(msg);return call$0(c[1],cst_info,_hU_)}
    function debug(msg)
     {var _hT_=msg_to_jv_array(msg);return call$0(c[1],cst_debug,_hT_)}
    function assert(b,msg)
     {var _hS_=msg_to_jv_array([0,! ! b,msg]);
      return call$0(c[1],cst_assert,_hS_)}
    function dir$1(o){return call$0(c[1],cst_dir,[0,o])}
    function table$1(cols,v)
     {if(cols)
       var l=cols[1],msg=[0,v,caml_list_to_js_array(l)];
      else
       var msg=[0,v];
      return call$0(c[1],cst_table,msg)}
    function group_end(param){return call$0(c[1],cst_groupEnd,[0])}
    function group(opt,msg)
     {if(opt)var sth=opt[1],closed=sth;else var closed=0;
      if(closed)
       {var _hQ_=msg_to_jv_array(msg);
        return call$0(c[1],cst_groupCollapsed,_hQ_)}
      var _hR_=msg_to_jv_array(msg);
      return call$0(c[1],cst_group,_hR_)}
    function count(label){return call$0(c[1],cst_count,[0,label])}
    function count_reset(label){return call$0(c[1],cst_countReset,[0,label])}
    function time$1(label){return call$0(c[1],cst_time,[0,label])}
    function time_log(label,msg)
     {var _hP_=msg_to_jv_array([0,label,msg]);
      return call$0(c[1],cst_timeLog,_hP_)}
    function time_end(label){return call$0(c[1],cst_timeEnd,[0,label])}
    function profile(label){return call$0(c[1],cst_profile,[0,label])}
    function profile_end(label){return call$0(c[1],cst_profileEnd,[0,label])}
    function time_stamp(label){return call$0(c[1],cst_timeStamp$0,[0,label])}
    function log_result(opt,_hO_,r)
     {if(opt)var sth=opt[1],ok=sth;else var ok=function(v){return [0,v,0]};
      if(_hO_)
       var sth$0=_hO_[1],err=sth$0;
      else
       var err=function(e){return [0,str(e),0]};
      if(0 === r[0])
       {var v=r[1];log(caml_call1(ok,v))}
      else
       {var e=r[1];error$2(caml_call1(err,e))}
      return r}
    function log_if_error(opt,_hN_,use,param)
     {if(opt)var sth=opt[1],l=sth;else var l=error$2;
      if(_hN_)
       var sth$0=_hN_[1],error_msg=sth$0;
      else
       var error_msg=function(e){return [0,str(e),0]};
      if(0 === param[0]){var v=param[1];return v}
      var e=param[1];
      caml_call1(l,caml_call1(error_msg,e));
      return use}
    function log_if_error$0(l,error_msg,use,r)
     {return [0,log_if_error(l,error_msg,use,r)]}
    function as_target$0(w){return w}
    function closed(w){return caml_call2(Bool[2],w,cst_closed)}
    function scroll_x$0(w){return caml_call2(Float[2],w,cst_scrollX)}
    function scroll_y$0(w){return caml_call2(Float[2],w,cst_scrollY)}
    function device_pixel_ratio(w)
     {return caml_call2(Float[2],w,cst_devicePixelRatio)}
    function matches_media(w,s)
     {var o=w.matchMedia(s);return caml_call2(Bool[2],o,cst_matches)}
    function prefers_dark_color_scheme(w)
     {return matches_media(w,"(prefers-color-scheme: dark)")}
    function open$0(opt,_hK_,w,u)
     {if(opt)var sth=opt[1],features=sth;else var features=empty;
      if(_hK_)var sth$0=_hK_[1],name=sth$0;else var name=empty;
      var _hL_=w.open(u,name,features);
      return to_option(function(_hM_){return _hM_},_hL_)}
    function close$0(w){w.close();return 0}
    function print(w){w.print();return 0}
    function reload(w){w[cst_location$0].reload();return 0}
    function location$0(w){return new url(w[cst_location$1])}
    function set_location(w,u){return w[cst_location$2] = u}
    var auto$0="auto",manual="manual",Scroll_restoration=[0,auto$0,manual];
    function length$3(h){return caml_call2(Int[2],h,cst_length$5)}
    function scroll_restoration(h)
     {return caml_call2(_e_[2],h,cst_scrollRestoration)}
    function set_scroll_restoration(h,r)
     {return caml_call3(_e_[3],h,cst_scrollRestoration$0,r)}
    function back(h){h.back();return 0}
    function forward(h){h.forward();return 0}
    function go(h,d){h.go(d);return 0}
    function state(h){return h[cst_state]}
    function push_state(opt,_hJ_,_hI_,h)
     {if(opt)var sth=opt[1],state=sth;else var state=null$0;
      if(_hJ_)var sth$0=_hJ_[1],title=sth$0;else var title=empty;
      if(_hI_)var sth$1=_hI_[1],uri=sth$1;else var uri=null$0;
      h.pushState(state,title,uri);
      return 0}
    function replace_state(opt,_hH_,_hG_,h)
     {if(opt)var sth=opt[1],state=sth;else var state=null$0;
      if(_hH_)var sth$0=_hH_[1],title=sth$0;else var title=empty;
      if(_hG_)var sth$1=_hG_[1],uri=sth$1;else var uri=null$0;
      h.replaceState(state,title,uri);
      return 0}
    function state$0(e){return e[cst_state$0]}
    var
     Popstate=[0,state$0],
     popstate="popstate",
     Ev=[0,Popstate,popstate],
     History=
      [0,
       Scroll_restoration,
       length$3,
       scroll_restoration,
       set_scroll_restoration,
       back,
       forward,
       go,
       state,
       push_state,
       replace_state,
       Ev];
    function history(w){return w[cst_history]}
    var
     Window=
      [0,
       as_target$0,
       closed,
       scroll_x$0,
       scroll_y$0,
       device_pixel_ratio,
       matches_media,
       prefers_dark_color_scheme,
       open$0,
       close$0,
       print,
       reload,
       location$0,
       set_location,
       History,
       history];
    function languages(n)
     {var match=find(n,cst_languages);
      if(match){var a=match[1];return caml_list_of_js_array(a)}
      var match$0=caml_call2(_e_[1],n,cst_language);
      if(match$0){var v=match$0[1];return [0,v,0]}
      return 0}
    function max_touch_points(n)
     {var t=n[cst_maxTouchPoints];return is_none(t)?0:t}
    function online(n){return caml_call2(Bool[2],n,cst_onLine)}
    var
     Navigator=[0,languages,max_touch_points,online],
     frame="frame",
     navigation="navigation",
     resource="resource",
     mark$1="mark",
     measure="measure",
     paint="paint",
     longtask="longtask",
     Type$0=[0,frame,navigation,resource,mark$1,measure,paint,longtask];
    function name$4(e){return caml_call2(_e_[2],e,cst_name$4)}
    function type$6(e){return caml_call2(_e_[2],e,cst_entryType)}
    function start_time(e){return caml_call2(Float[2],e,cst_startTime)}
    function end_time(e){return caml_call2(Float[2],e,cst_endTime)}
    function duration(e){return caml_call2(Float[2],e,cst_duration)}
    function to_json(e){return e.toJSON()}
    function as_entry(_hF_){return _hF_}
    function initiator_type(e){return caml_call2(_e_[2],e,cst_initiatorType)}
    function next_hop_protocol(e)
     {return caml_call2(_e_[2],e,cst_nextHopProtocol)}
    function worker_start(e){return caml_call2(Float[2],e,cst_workerStart)}
    function redirect_start(e)
     {return caml_call2(Float[2],e,cst_redirectStart)}
    function redirect_end(e){return caml_call2(Float[2],e,cst_redirectEnd)}
    function fetch_start(e){return caml_call2(Float[2],e,cst_fetchStart)}
    function domain_lookup_start(e)
     {return caml_call2(Float[2],e,cst_domainLookupStart)}
    function domain_lookup_end(e)
     {return caml_call2(Float[2],e,cst_domainLookupEnd)}
    function connect_start(e){return caml_call2(Float[2],e,cst_connectStart)}
    function connect_end(e){return caml_call2(Float[2],e,cst_connectEnd)}
    function secure_connection_start(e)
     {return caml_call2(Float[2],e,cst_secureConnectionStart)}
    function request_start(e){return caml_call2(Float[2],e,cst_requestStart)}
    function response_start(e)
     {return caml_call2(Float[2],e,cst_responseStart)}
    function response_end(e){return caml_call2(Float[2],e,cst_responseEnd)}
    function transfer_size(e){return caml_call2(Int[2],e,cst_transferSize)}
    function encoded_body_size(e)
     {return caml_call2(Int[2],e,cst_encodedBodySize)}
    function decoded_body_size(e)
     {return caml_call2(Int[2],e,cst_decodedBodySize)}
    var
     Resource_timing=
      [0,
       as_entry,
       initiator_type,
       next_hop_protocol,
       worker_start,
       redirect_start,
       redirect_end,
       fetch_start,
       domain_lookup_start,
       domain_lookup_end,
       connect_start,
       connect_end,
       secure_connection_start,
       request_start,
       response_start,
       response_end,
       transfer_size,
       encoded_body_size,
       decoded_body_size],
     navigate="navigate",
     reload$0="reload",
     back_forward="back_forward",
     prerender="prerender",
     Type$1=[0,navigate,reload$0,back_forward,prerender];
    function as_resource_timing(_hE_){return _hE_}
    function as_entry$0(_hD_){return _hD_}
    function unload_event_start(e)
     {return caml_call2(Float[2],e,cst_unloadEventStart)}
    function unload_event_end(e)
     {return caml_call2(Float[2],e,cst_unloadEventEnd)}
    function dom_interactive(e)
     {return caml_call2(Float[2],e,cst_domInteractive)}
    function dom_content_loaded_event_start(e)
     {return caml_call2(Float[2],e,cst_domContentLoadedEventStart)}
    function dom_content_loaded_event_end(e)
     {return caml_call2(Float[2],e,cst_domContentLoadedEventEnd)}
    function dom_complete(e){return caml_call2(Float[2],e,cst_domComplete)}
    function load_event_start(e)
     {return caml_call2(Float[2],e,cst_loadEventStart)}
    function load_event_end(e){return caml_call2(Float[2],e,cst_loadEventEnd)}
    function type$7(e){return caml_call2(_e_[2],e,cst_type$3)}
    function redirect_count(e){return caml_call2(Int[2],e,cst_redirectCount)}
    function as_resource_timing$0(_hC_){return _hC_}
    function as_navigation_timing(_hB_){return _hB_}
    function time_origin_ms(p){return caml_call2(Float[2],p,cst_timeOrigin)}
    function clear_marks(p,n)
     {if(n)var n$0=n[1],args=[0,n$0];else var args=[0];
      caml_js_meth_call(p,cst_clearMarks,args);
      return 0}
    function clear_measures(p,n)
     {if(n)var n$0=n[1],args=[0,n$0];else var args=[0];
      caml_js_meth_call(p,cst_clearMeasures,args);
      return 0}
    function clear_resource_timings(p){p.clearResourceTimings();return 0}
    function get_entries(type,name,p)
     {if(name)
       {var _hs_=name[1];
        if(type)
         {var t=type[1],_ht_=p.getEntriesByName(_hs_,t);
          return to_list(function(_hA_){return _hA_},_ht_)}
        var _hu_=p.getEntriesByName(_hs_);
        return to_list(function(_hz_){return _hz_},_hu_)}
      if(type)
       {var t$0=type[1],_hv_=p.getEntriesByType(t$0);
        return to_list(function(_hy_){return _hy_},_hv_)}
      var _hw_=p.getEntries();
      return to_list(function(_hx_){return _hx_},_hw_)}
    function mark$2(p,n){p.mark(n);return 0}
    function measure$0(start,stop,p,n)
     {if(start)
       {var _hr_=start[1];
        if(stop){var e=stop[1];p.measure(_hr_,e);return 0}
        p.measure(_hr_);
        return 0}
      if(stop){var e$0=stop[1];p.measure(fn,e$0);return 0}
      p.measure();
      return 0}
    function now_ms(p){return p.now()}
    function to_json$0(p){return p.toJSON()}
    var
     console=target[cst_console$0],
     navigator=target[cst_navigator],
     performance=target[cst_performance],
     window=target[cst_window$0],
     is_secure_context=caml_call2(Bool[2],target,cst_isSecureContext);
    function set_timeout(ms,f){return target.setTimeout(f,ms)}
    function set_interval(ms,f){return target.setInterval(f,ms)}
    function stop_timer(tid){target.clearTimeout(tid);return 0}
    function request_animation_frame(f)
     {return target.requestAnimationFrame(f)}
    function cancel_animation_frame(fid)
     {target.cancelAnimationFrame(fid);return 0}
    var
     _bn_=
      [0,
       console,
       document,
       navigator,
       performance,
       window,
       target,
       is_secure_context,
       set_timeout,
       set_interval,
       stop_timer,
       request_animation_frame,
       cancel_animation_frame],
     _bo_=
      [0,
       v$2,
       txt,
       txt$0,
       sp$0,
       nbsp,
       is_txt,
       is_el,
       tag_name,
       has_tag_name,
       txt_text,
       document$0,
       find_by_class,
       find_by_tag_name,
       find_first_by_selector,
       fold_find_by_selector,
       parent,
       children,
       set_children,
       prepend_children,
       append_children,
       previous_sibling,
       next_sibling,
       insert_siblings,
       remove$0,
       at,
       set_at,
       [0,
        bool,
        int$1,
        float$0,
        jstr,
        checked$1,
        height$2,
        id$2,
        name$3,
        title$1,
        value$1,
        width$2],
       prop,
       set_prop,
       class$2,
       set_class,
       Style,
       computed_style,
       inline_style,
       set_inline_style,
       remove_inline_style,
       inner_x,
       inner_y,
       inner_w,
       inner_h,
       bound_x,
       bound_y,
       bound_w,
       bound_h,
       scroll_x,
       scroll_y,
       scroll_w,
       scroll_h,
       scroll_into_view,
       has_focus,
       set_has_focus,
       is_locking_pointer,
       request_pointer_lock,
       Navigation_ui,
       fullscreen_opts,
       request_fullscreen,
       click$0,
       select_text,
       Input$0,
       Name,
       a$0,
       abbr$0,
       address$0,
       area$0,
       article$0,
       aside$0,
       audio$0,
       b$0,
       base$0,
       bdi$0,
       bdo$0,
       blockquote$0,
       body$0,
       br$0,
       button$1,
       canvas$0,
       caption$0,
       cite$0,
       code$2,
       col$0,
       colgroup$0,
       command$0,
       datalist$0,
       dd$0,
       del$0,
       details$0,
       dfn$0,
       div$0,
       dl$0,
       dt$0,
       em$0,
       embed$0,
       fieldset$0,
       figcaption$0,
       figure$0,
       footer$0,
       form$0,
       h1$0,
       h2$0,
       h3$0,
       h4$0,
       h5$0,
       h6$0,
       head$0,
       header$0,
       hgroup$0,
       hr$0,
       html$0,
       i$0,
       iframe$0,
       img$0,
       input$1,
       ins$0,
       kbd$0,
       keygen$0,
       label$0,
       legend$0,
       li$0,
       link$1,
       map$2,
       mark$0,
       menu$0,
       meta$0,
       meter$0,
       nav$0,
       noscript$0,
       object$0,
       ol$0,
       optgroup$0,
       option$0,
       output$0,
       p$0,
       param$0,
       pre$0,
       progress$1,
       q$0,
       rp$0,
       rt$0,
       ruby$0,
       s$0,
       samp$0,
       script$0,
       section$0,
       select$1,
       small$0,
       source$0,
       span$0,
       strong$0,
       style$0,
       sub$2,
       summary$0,
       sup$0,
       table$0,
       tbody$0,
       td$0,
       textarea$0,
       tfoot$0,
       th$0,
       thead$0,
       time$0,
       title$3,
       tr$0,
       track$0,
       u$0,
       ul$0,
       var$1,
       video$0,
       wbr$0],
     _bp_=
      [0,
       v$0,
       scheme,
       host,
       port,
       path,
       query,
       fragment,
       with_uri,
       [0,
        is_empty$0,
        mem,
        find$6,
        find_all,
        fold$0,
        of_obj,
        of_jstr$1,
        to_jstr$0,
        of_assoc,
        to_assoc],
       encode$2,
       decode$2,
       encode_component$0,
       decode_component,
       of_jstr$2,
       to_jstr$1],
     _bq_=[0,init$1,of_blob,name$0,last_modified_ms],
     Brr=
      [0,
       [0,
        [0,create$3,byte_length,slice$0],
        [0,
         of_buffer,
         buffer,
         byte_offset,
         byte_length$0,
         get_int8,
         get_int16_be,
         get_int16_le,
         get_int32_be,
         get_int32_le,
         get_uint8,
         get_uint16_be,
         get_uint16_le,
         get_uint32_be,
         get_uint32_le,
         get_float32_be,
         get_float32_le,
         get_float64_be,
         get_float64_le,
         set_int8,
         set_int16_be,
         set_int16_le,
         set_int32_be,
         set_int32_le,
         set_uint8,
         set_uint16_be,
         set_uint16_le,
         set_uint32_be,
         set_uint32_le,
         set_float32_be,
         set_float32_le,
         set_float64_be,
         set_float64_le],
        type_size_in_bytes,
        create$4,
        of_buffer$0,
        buffer,
        byte_offset,
        byte_length$0,
        length$2,
        type$2,
        set_tarray,
        fill,
        copy_within,
        slice$1,
        sub$0,
        find$5,
        find_index,
        for_all,
        exists,
        filter,
        iter,
        map$0,
        fold_left,
        fold_right,
        reverse,
        of_tarray,
        uint8_of_buffer,
        of_int_array,
        of_float_array,
        of_jstr,
        to_jstr,
        of_binary_jstr,
        to_binary_jstr,
        to_int_jstr,
        to_hex_jstr,
        type_to_bigarray_kind,
        type_of_bigarray_kind],
       [0,
        Ending_type,
        init$0,
        of_jstr$0,
        of_array_buffer,
        byte_length$1,
        type$3,
        slice$2,
        array_buffer$0,
        stream,
        text,
        data_uri],
       _bq_,
       Base64,
       [0,encode$0,decode$0],
       _bp_,
       [0,
        Type,
        init,
        create$2,
        type,
        target$0,
        current_target,
        composed_path,
        event_phase,
        bubbles,
        stop_propagation,
        stop_immediate_propagation,
        cancelable,
        prevent_default,
        default_prevented,
        composed,
        is_trusted,
        timestamp_ms,
        dispatch,
        listen_opts,
        listen,
        unlisten,
        next$0,
        [0,
         Effect,
         Item,
         [0,length$1,add_jstr,add_file,remove,clear,caml_js_get,items],
         drop_effect,
         set_drop_effect,
         effect_allowed,
         set_effect_allowed,
         items$0],
        Clipboard,
        Composition,
        Error,
        Extendable,
        Focus,
        Hash_change,
        Input,
        Keyboard,
        Mouse,
        Drag,
        Pointer,
        Wheel,
        abort,
        activate,
        auxclick,
        beforeinput,
        beforeunload,
        blur,
        canplay,
        canplaythrough,
        change,
        click,
        clipboardchange,
        close,
        compositionend,
        compositionstart,
        compositionudpate,
        controllerchange,
        copy$0,
        cut,
        dblclick,
        dom_content_loaded,
        drag,
        dragend,
        dragenter,
        dragexit,
        dragleave,
        dragover,
        dragstart,
        drop,
        durationchange,
        emptied,
        ended,
        error$1,
        focus,
        focusin,
        focusout,
        fullscreenchange,
        fullscreenerror,
        gotpointercapture,
        hashchange,
        input,
        install,
        keydown,
        keyup,
        languagechange,
        load,
        loadeddata,
        loadedmetadata,
        loadstart,
        lostpointercapture,
        mousedown,
        mouseenter,
        mouseleave,
        mousemove,
        mouseout,
        mouseover,
        mouseup,
        open,
        paste,
        pause,
        play,
        playing,
        pointercancel,
        pointerdown,
        pointerenter,
        pointerleave,
        pointerlockchange,
        pointerlockerror,
        pointermove,
        pointerout,
        pointerover,
        pointerrawupdate,
        pointerup,
        progress,
        ratechange,
        reset,
        resize,
        scroll,
        seeked,
        seeking,
        select,
        statechange,
        stalled,
        suspend,
        timeupdate,
        unload,
        updatefound,
        visibilitychange,
        volumechange,
        waiting,
        wheel],
       [0,
        v$1,
        true$1,
        int$0,
        add_if,
        add_if_some,
        to_pair,
        [0,
         autofocus,
         charset,
         checked,
         class$0,
         content,
         defer,
         disabled,
         for$0,
         height$0,
         href,
         id$0,
         lang,
         media,
         name$1,
         placeholder,
         rel,
         required,
         src,
         tabindex,
         title,
         type$4,
         value,
         wrap,
         width$0],
        accesskey$0,
        autofocus$0,
        charset$0,
        checked$0,
        class$1,
        content$0,
        contenteditable$0,
        cols$0,
        defer$0,
        disabled$0,
        dir$0,
        draggable$0,
        for$1,
        height$1,
        href$0,
        hidden$0,
        id$1,
        lang$0,
        media$0,
        name$2,
        placeholder$0,
        rel$0,
        required$0,
        rows$0,
        spellcheck$0,
        src$0,
        tabindex$0,
        title$0,
        type$5,
        value$0,
        wrap$0,
        width$1],
       _bo_,
       [0,
        as_target,
        find_el_by_id,
        find_els_by_name,
        root,
        body$1,
        head$1,
        active_el,
        referrer,
        title$4,
        set_title,
        Visibility_state,
        visibility_state,
        pointer_lock_element,
        exit_pointer_lock,
        fullscreen_available,
        fullscreen_element,
        exit_fullscreen],
       Abort,
       [0,
        get$4,
        set$3,
        clear$0,
        msg,
        str,
        log_result,
        log_if_error,
        log_if_error$0,
        log,
        trace,
        error$2,
        warn,
        info,
        debug,
        assert,
        dir$1,
        table$1,
        group,
        group_end,
        count,
        count_reset,
        time$1,
        time_log,
        time_end,
        profile,
        profile_end,
        time_stamp],
       Window,
       Navigator,
       [0,
        [0,
         Type$0,
         name$4,
         type$6,
         start_time,
         end_time,
         duration,
         to_json,
         Resource_timing,
         [0,
          Type$1,
          as_entry$0,
          as_resource_timing,
          unload_event_start,
          unload_event_end,
          dom_interactive,
          dom_content_loaded_event_start,
          dom_content_loaded_event_end,
          dom_complete,
          load_event_start,
          load_event_end,
          type$7,
          redirect_count],
         as_resource_timing$0,
         as_navigation_timing],
        time_origin_ms,
        clear_marks,
        clear_measures,
        clear_resource_timings,
        get_entries,
        mark$2,
        measure$0,
        now_ms,
        to_json$0],
       _bn_];
    caml_register_global(2942,Brr,"Brr");
    var
     unspecified="unspecified",
     inline="inline",
     attachment="attachement",
     Presentation_style=[0,unspecified,inline,attachment];
    function opts(presentation_style,param)
     {var o={};
      caml_call3(_e_[4],o,cst_presentationStyle,presentation_style);
      return o}
    var item=target[cst_ClipboardItem];
    function create$5(opts,vs)
     {var o={};
      function add_v(param){var b=param[2],t=param[1];return o[t] = b}
      caml_call2(Stdlib_List[17],add_v,vs);
      return new item(o)}
    function presentation_style(i)
     {return caml_call2(_e_[2],i,cst_presentationStyle$0)}
    function last_modified_ms$0(i)
     {return caml_call2(Int[2],i,cst_lastModified$1)}
    function delayed(i){return caml_call2(Bool[2],i,cst_delayed)}
    function types(i){return caml_list_of_js_array(i[cst_types])}
    function get_type(i,t)
     {var _hp_=i.getType(i,t);
      return of_promise$0(function(_hq_){return _hq_},_hp_)}
    function of_navigator(n){return n[cst_clipboard]}
    function as_target$1(_ho_){return _ho_}
    function read(c)
     {function _hl_(_hn_){return _hn_}
      function ok(_hm_){return to_list(_hl_,_hm_)}
      return of_promise$0(ok,c.read())}
    function read_text(c)
     {var _hj_=c.readText();
      return of_promise$0(function(_hk_){return _hk_},_hj_)}
    function write(c,data)
     {var _hg_=c.write(of_list(function(_hi_){return _hi_},data));
      return of_promise$0(function(_hh_){return 0},_hg_)}
    function write_text(c,data)
     {var _he_=c.writeText(data);
      return of_promise$0(function(_hf_){return 0},_he_)}
    function of_el(e)
     {return caml_call2(_bo_[9],_bo_[60][37],e)
              ?e
              :throw$0
                (0,
                 "Expected form element but found: ".concat
                  (caml_call1(_bo_[8],e)))}
    function to_el(e){return e}
    function name$5(f){return caml_call2(_e_[2],f,cst_name$5)}
    function method(f){return caml_call2(_e_[2],f,cst_method)}
    function target$1(f){return caml_call2(_e_[2],f,cst_target$0)}
    function action(f){return caml_call2(_e_[2],f,cst_action)}
    function enctype(f){return caml_call2(_e_[2],f,cst_enctype)}
    function accept_charset(f){return caml_call2(_e_[2],f,cst_acceptCharset)}
    function autocomplete(f){return caml_call2(_e_[2],f,cst_autocomplete)}
    function no_validate(f){return caml_call2(Bool[2],f,cst_noValidate)}
    function check_validity(f){return f.checkValidity() | 0}
    function report_validity(f){return f.reportValidity() | 0}
    function request_submit(f,el)
     {if(el)var e=el[1],args=[0,e];else var args=[0];
      caml_js_meth_call(f,cst_requestSubmit,args);
      return 0}
    function reset$0(f){f.reset();return 0}
    function submit(f){f.submit();return 0}
    var formdata=target[cst_FormData];
    function create$6(param){return new formdata()}
    function of_form(f){return new formdata(f)}
    function is_empty$1(d)
     {var _hc_=d.entries(),_hd_=caml_call1(_c_[6],_hc_);
      return caml_call1(_c_[1],_hd_)}
    function mem$0(d,k){return d.has(k) | 0}
    function has_file_entry(d)
     {var it=d.entries();
      for(;;)
       {var r=caml_call1(_c_[6],it);
        if(caml_call1(_c_[1],r))return 0;
        var v=caml_call1(_c_[3],r)[1];
        if(v instanceof target[cst_File$0])return 1;
        continue}}
    function value$2(v)
     {var match=v instanceof target[cst_File$1]?1:0;
      return match?[0,781515420,v]:[0,-976970511,v]}
    function find$7(d,k){return to_option(value$2,d.get(k))}
    function find_all$0(d,k){return to_list(value$2,d.getAll(k))}
    function fold$1(f,d,acc)
     {function key(_hb_){return _hb_}
      var _ha_=d.entries();
      return caml_call5(_c_[8],key,value$2,f,_ha_,acc)}
    function set$4(d,k,v){d.set(k,v);return 0}
    function set_blob(fn$0,d,k,b)
     {if(fn$0)var f=fn$0[1],fn$1=f;else var fn$1=fn;d.set(k,b,fn$1);return 0}
    function append(d,k,v){d.append(k,v);return 0}
    function append_blob(fn$0,d,k,b)
     {if(fn$0)var f=fn$0[1],fn$1=f;else var fn$1=fn;
      d.append(k,b,fn$1);
      return 0}
    function delete$0(d,k){d.delete(k);return 0}
    function of_assoc$0(l)
     {var d=create$6(0);
      function _g$_(param)
       {var v=param[2],k=param[1];
        if(781515420 <= v[1])
         var f=v[2],fn$0=caml_call1(_bq_[3],f),v$0=f;
        else
         var s=v[2],fn$0=fn,v$0=s;
        d.append(k,v$0,fn$0);
        return 0}
      caml_call2(Stdlib_List[17],_g$_,l);
      return d}
    function to_assoc$0(p)
     {var
       _g9_=0,
       _g__=fold$1(function(k,v,acc){return [0,[0,k,v],acc]},p,_g9_);
      return caml_call1(Stdlib_List[9],_g__)}
    function of_uri_params(p)
     {function add(k,v,d){append(d,k,v);return d}
      var _g8_=create$6(0);
      return caml_call3(_bp_[9][5],add,p,_g8_)}
    function to_uri_params(p)
     {var usp=target[cst_URLSearchParams$0];return new usp(p)}
    function form_data(e){return e[cst_formData]}
    var Data=[0,form_data],formdata$0="formdata";
    function submitter(e)
     {var _g6_=e[cst_submitter];
      return to_option(function(_g7_){return _g7_},_g6_)}
    var
     Submit=[0,submitter],
     submit$0="submit",
     Ev$0=[0,Data,formdata$0,Submit,submit$0];
    function of_jstr$3(_g5_){return _g5_}
    function of_uri_params$0(_g4_){return _g4_}
    function of_form_data(_g3_){return _g3_}
    function of_blob$0(_g2_){return _g2_}
    function of_array_buffer$0(_g1_){return _g1_}
    function body_used(r){return caml_call2(Bool[2],r,cst_bodyUsed)}
    function body$2(r)
     {var _gZ_=r[cst_body$0];
      return to_option(function(_g0_){return _g0_},_gZ_)}
    function array_buffer$1(r)
     {var _gX_=r.arrayBuffer();
      return of_promise$0(function(_gY_){return _gY_},_gX_)}
    function blob$0(r)
     {var _gV_=r.blob();return of_promise$0(function(_gW_){return _gW_},_gV_)}
    function form_data$0(r)
     {var _gT_=r.formData();
      return of_promise$0(function(_gU_){return _gU_},_gT_)}
    function json$0(r)
     {var _gR_=r.json();return of_promise$0(function(_gS_){return _gS_},_gR_)}
    function text$0(r)
     {var _gP_=r.text();return of_promise$0(function(_gQ_){return _gQ_},_gP_)}
    var
     Body=
      [0,
       of_jstr$3,
       of_uri_params$0,
       of_form_data,
       of_blob$0,
       of_array_buffer$0,
       body_used,
       body$2,
       array_buffer$1,
       blob$0,
       form_data$0,
       json$0,
       text$0],
     headers=target[cst_Headers];
    function mem$1(h,hs){return hs.has(h) | 0}
    function find$8(h,hs)
     {var _gN_=hs.get(h);return to_option(function(_gO_){return _gO_},_gN_)}
    function fold$2(f,p,acc)
     {function key(_gM_){return _gM_}
      function value(_gL_){return _gL_}
      var _gK_=p.entries();
      return caml_call5(_c_[8],key,value,f,_gK_,acc)}
    function of_obj$0(o){return new headers(o)}
    function of_assoc$1(init,l)
     {if(init)var h=init[1],args=[0,h];else var args=[0];
      var hs=caml_js_new(headers,args);
      function _gJ_(param){var v=param[2],k=param[1];hs.append(k,v);return 0}
      caml_call2(Stdlib_List[17],_gJ_,l);
      return hs}
    function to_assoc$1(p)
     {var
       _gH_=0,
       _gI_=fold$2(function(k,v,acc){return [0,[0,k,v],acc]},p,_gH_);
      return caml_call1(Stdlib_List[9],_gI_)}
    var
     default$0="default",
     force_cache="force-cache",
     no_cache="no-cache",
     no_store="no-store",
     only_if_cached="only-if-cached",
     reload$1="reload",
     Cache=[0,default$0,force_cache,no_cache,no_store,only_if_cached,reload$1],
     include="include",
     omit="omit",
     same_origin="same-origin",
     Credentials=[0,include,omit,same_origin],
     audio$1="audio",
     audioworklet="audioworklet",
     document$1="document",
     embed$1="embed",
     font="font",
     frame$0="frame",
     iframe$1="iframe",
     image="image",
     manifest="manifest",
     object$1="object'",
     paintworklet="paintworklet",
     report="report",
     script$1="script",
     sharedworker="sharedworker",
     style$1="style",
     track$1="track",
     video$1="video",
     worker="worker",
     xslt="xslt",
     Destination=
      [0,
       audio$1,
       audioworklet,
       document$1,
       embed$1,
       font,
       frame$0,
       iframe$1,
       image,
       manifest,
       object$1,
       paintworklet,
       report,
       script$1,
       sharedworker,
       style$1,
       track$1,
       video$1,
       worker,
       xslt],
     cors="cors",
     navigate$0="navigate",
     no_cors="no-cors",
     same_origin$0="same-origin",
     Mode=[0,cors,navigate$0,no_cors,same_origin$0],
     error$3="error",
     follow="follow",
     manual$0="manual",
     Redirect=[0,error$3,follow,manual$0];
    function init$2
     (body,
      cache,
      credentials,
      headers,
      integrity,
      keepalive,
      method,
      mode,
      redirect,
      referrer,
      referrer_policy,
      signal,
      param)
     {var o={};
      o[cst_body$1] = of_option(fn,function(_gG_){return _gG_},body);
      caml_call3(_e_[4],o,cst_cache,cache);
      caml_call3(_e_[4],o,cst_credentials,credentials);
      function _gD_(_gF_){return _gF_}
      set_if_some(o,cst_headers,caml_call2(Stdlib_Option[7],_gD_,headers));
      caml_call3(_e_[4],o,cst_integrity,integrity);
      caml_call3(Bool[4],o,cst_keepalive,keepalive);
      caml_call3(_e_[4],o,cst_method$0,method);
      caml_call3(_e_[4],o,cst_mode,mode);
      caml_call3(_e_[4],o,cst_redirect,redirect);
      caml_call3(_e_[4],o,cst_referrer$0,referrer);
      caml_call3(_e_[4],o,cst_referrerPolicy,referrer_policy);
      o[cst_signal$0] = of_option(fn,function(_gE_){return _gE_},signal);
      return o}
    var request=target[cst_Request];
    function v$3(opt,url)
     {if(opt)var sth=opt[1],init=sth;else var init={};
      return new request(url,init)}
    function of_request(init,r)
     {if(init){var init$0=init[1];return new request(r,init$0)}
      return r.clone()}
    function cache(r){return caml_call2(_e_[2],r,cst_cache$0)}
    function credentials(r){return caml_call2(_e_[2],r,cst_credentials$0)}
    function destination(r){return caml_call2(_e_[2],r,cst_destination)}
    function headers$0(r){return r[cst_headers$0]}
    function integrity(r){return caml_call2(_e_[2],r,cst_integrity$0)}
    function is_history_navigation(r)
     {return caml_call2(Bool[2],r,cst_isHistoryNavigation)}
    function is_reload_navigation(r)
     {return caml_call2(Bool[2],r,cst_isReloadNavigation)}
    function keepalive(r){return caml_call2(Bool[2],r,cst_keepalive$0)}
    function method$0(r){return caml_call2(_e_[2],r,cst_method$1)}
    function mode(r){return caml_call2(_e_[2],r,cst_mode$0)}
    function redirect(r){return caml_call2(_e_[2],r,cst_redirect$0)}
    function referrer$0(r){return caml_call2(_e_[2],r,cst_referrer$1)}
    function referrer_policy(r)
     {return caml_call2(_e_[2],r,cst_referrerPolicy$0)}
    function signal$0(r)
     {var _gB_=r[cst_signal$1];
      return to_option(function(_gC_){return _gC_},_gB_)}
    function url$0(r){return caml_call2(_e_[2],r,cst_url)}
    var
     basic="basic",
     cors$0="cors",
     default$1="default",
     error$4="error",
     opaque="opaque",
     opaqueredirect="opaqueredirect",
     Type$2=[0,basic,cors$0,default$1,error$4,opaque,opaqueredirect];
    function init$3(headers,status,status_text,param)
     {var o={};
      function _gz_(_gA_){return _gA_}
      set_if_some(o,cst_headers$1,caml_call2(Stdlib_Option[7],_gz_,headers));
      caml_call3(Int[4],o,cst_status,status);
      caml_call3(_e_[4],o,cst_statusText,status_text);
      return o}
    var response=target[cst_Response];
    function v$4(opt,body,param)
     {if(opt)var sth=opt[1],init=sth;else var init={};
      var body$0=of_option(null$0,function(_gy_){return _gy_},body);
      return new response(body$0,init)}
    function of_response(r){return r.clone()}
    function error$5(param){return response.error()}
    function redirect$0(status,url)
     {if(status)
       var status$0=status[1],args=[0,url,status$0];
      else
       var args=[0,url];
      return caml_js_meth_call(response,cst_redirect$1,args)}
    function headers$1(r){return r[cst_headers$2]}
    function ok$0(r){return caml_call2(Bool[2],r,cst_ok)}
    function redirected(r){return caml_call2(Bool[2],r,cst_redirected)}
    function status(r){return caml_call2(Int[2],r,cst_status$0)}
    function status_text(r){return caml_call2(_e_[2],r,cst_statusText$0)}
    function url$1(r){return caml_call2(_e_[2],r,cst_url$0)}
    function query_opts
     (ignore_search,ignore_method,ignore_vary,cache_name,param)
     {var o={};
      caml_call3(Bool[4],o,cst_ignoreSearch,ignore_search);
      caml_call3(Bool[4],o,cst_ignoreMethod,ignore_method);
      caml_call3(Bool[4],o,cst_ignoreVary,ignore_vary);
      caml_call3(_e_[4],o,cst_cacheName,cache_name);
      return o}
    function match(opt,c,req)
     {if(opt)var sth=opt[1],query_opts=sth;else var query_opts=fn;
      function _gv_(_gx_){return _gx_}
      function ok(_gw_){return to_option(_gv_,_gw_)}
      return of_promise$0(ok,c.match(req,query_opts))}
    function match_all(opt,c,req)
     {if(opt)var sth=opt[1],query_opts=sth;else var query_opts=fn;
      function _gs_(_gu_){return _gu_}
      function ok(_gt_){return to_list(_gs_,_gt_)}
      return of_promise$0(ok,c.matchAll(req,query_opts))}
    function add(c,req)
     {var _gq_=c.add(req);return of_promise$0(function(_gr_){return 0},_gq_)}
    function add_all(c,reqs)
     {var _gn_=c.addAll(of_list(function(_gp_){return _gp_},reqs));
      return of_promise$0(function(_go_){return 0},_gn_)}
    function put(c,req,resp)
     {var _gl_=c.put(req,resp);
      return of_promise$0(function(_gm_){return 0},_gl_)}
    function delete$1(opt,c,req)
     {if(opt)var sth=opt[1],query_opts=sth;else var query_opts=fn;
      return of_promise$0(caml_js_to_bool,c.delete(req,query_opts))}
    function keys(opt,_gg_,c)
     {if(opt)var sth=opt[1],query_opts=sth;else var query_opts=fn;
      if(_gg_)var sth$0=_gg_[1],req=sth$0;else var req=fn;
      var _gh_=c.keys(req,query_opts);
      function _gi_(_gk_){return _gk_}
      return of_promise$0(function(_gj_){return to_list(_gi_,_gj_)},_gh_)}
    function match$0(opt,s,req)
     {if(opt)var sth=opt[1],query_opts=sth;else var query_opts=fn;
      function _gd_(_gf_){return _gf_}
      function ok(_ge_){return to_option(_gd_,_ge_)}
      return of_promise$0(ok,s.match(req,query_opts))}
    function has$0(s,n){return of_promise$0(caml_js_to_bool,s.has(n))}
    function open$1(s,n)
     {var _gb_=s.open(n);
      return of_promise$0(function(_gc_){return _gc_},_gb_)}
    function delete$2(s,n){return of_promise$0(caml_js_to_bool,s.delete(n))}
    function keys$0(s){return of_promise$0(caml_list_of_js_array,s.keys())}
    var
     Storage=[0,match$0,has$0,open$1,delete$2,keys$0],
     Cache$0=
      [0,query_opts,match,match_all,add,add_all,put,delete$1,keys,Storage],
     fetch="fetch";
    function as_extendable(_ga_){return _ga_}
    function request$0(e){return e[cst_request]}
    function preload_response(e)
     {function _f9_(_f$_){return _f$_}
      function ok(_f__){return to_option(_f9_,_f__)}
      return of_promise$0(ok,e[cst_preloadReponse])}
    function client_id(e){return caml_call2(_e_[2],e,cst_clientId)}
    function resulting_client_id(e)
     {return caml_call2(_e_[2],e,cst_resultingClientId)}
    function replaces_client_id(e)
     {return caml_call2(_e_[2],e,cst_replacesClientId)}
    function handled(e)
     {var _f7_=e[cst_handled];
      return of_promise$0(function(_f8_){return 0},_f7_)}
    function respond_with(e,fut)
     {e.respondWith(to_promise$0(function(_f6_){return _f6_},fut));return 0}
    var
     Ev$1=
      [0,
       fetch,
       as_extendable,
       request$0,
       preload_response,
       client_id,
       resulting_client_id,
       replaces_client_id,
       handled,
       respond_with],
     fetch$0=target[cst_fetch];
    function url$2(opt,url)
     {if(opt)var sth=opt[1],init=sth;else var init={};
      var _f4_=fetch$0(url,init);
      return of_promise$0(function(_f5_){return _f5_},_f4_)}
    function request$1(r)
     {var _f2_=fetch$0(r);
      return of_promise$0(function(_f3_){return _f3_},_f2_)}
    var
     caches=target[cst_caches],
     permission_denied=1,
     position_unavailable=2,
     timeout=3;
    function code$3(e){return caml_call2(Int[2],e,cst_code$0)}
    function message$1(e){return caml_call2(_e_[2],e,cst_message$1)}
    var
     Error$0=
      [0,permission_denied,position_unavailable,timeout,code$3,message$1];
    function coords(p){return p[cst_coords]}
    function latitude(p)
     {var _f1_=coords(p);return caml_call2(Float[2],_f1_,cst_latitude)}
    function longitude(p)
     {var _f0_=coords(p);return caml_call2(Float[2],_f0_,cst_longitude)}
    function altitude(p)
     {var _fZ_=coords(p);return caml_call2(Float[1],_fZ_,cst_altitude)}
    function accuracy(p)
     {var _fY_=coords(p);return caml_call2(Float[2],_fY_,cst_accuracy)}
    function altitude_accuracy(p)
     {var _fX_=coords(p);
      return caml_call2(Float[1],_fX_,cst_altitudeAccuracy)}
    function heading(p)
     {var _fW_=coords(p);return caml_call2(Float[1],_fW_,cst_heading)}
    function speed(p)
     {var _fV_=coords(p);return caml_call2(Float[1],_fV_,cst_speed)}
    function timestamp_ms$0(p){return caml_call2(Float[2],p,cst_timestamp)}
    function of_navigator$0(n){return n[cst_geolocation]}
    function opts$0(high_accuracy,timeout_ms,maximum_age_ms,param)
     {var o={};
      caml_call3(Bool[4],o,cst_enableHighAccuracy,high_accuracy);
      caml_call3(Int[4],o,cst_timeout,timeout_ms);
      caml_call3(Int[4],o,cst_maximumAge,maximum_age_ms);
      return o}
    function get$5(opts,l)
     {var match=create$1(0),set_fut=match[2],fut=match[1];
      function pos(p){return caml_call1(set_fut,[0,p])}
      function error(e){return caml_call1(set_fut,[1,e])}
      var opts$0=of_option(fn,function(_fU_){return _fU_},opts);
      l.getCurrentPosition(pos,error,opts$0);
      return fut}
    function watch(opts,l,f)
     {function pos(p){return caml_call1(f,[0,p])}
      function error(e){return caml_call1(f,[1,e])}
      var opts$0=of_option(fn,function(_fT_){return _fT_},opts);
      return l.watchPosition(pos,error,opts$0)}
    function unwatch(l,id){l.clearWatch(id);return 0}
    function v$5(exact,ideal,param)
     {var o={};
      caml_call3(Bool[4],o,cst_exact,exact);
      caml_call3(Bool[4],o,cst_ideal,ideal);
      return o}
    var Constraint=[0,v$5],Bool$0=[0,Constraint];
    function v$6(min,max,param)
     {var o={};
      caml_call3(Int[4],o,cst_min,min);
      caml_call3(Int[4],o,cst_max,max);
      return o}
    function min(r){return caml_call2(Int[1],r,cst_min$0)}
    function max(r){return caml_call2(Int[1],r,cst_max$0)}
    var Range=[0,v$6,min,max];
    function v$7(min,max,exact,ideal,param)
     {var o={};
      caml_call3(Int[4],o,cst_min$1,min);
      caml_call3(Int[4],o,cst_max$1,max);
      caml_call3(Int[4],o,cst_exact$0,exact);
      caml_call3(Int[4],o,cst_ideal$0,ideal);
      return o}
    var Constraint$0=[0,v$7],Int$0=[0,Range,Constraint$0];
    function v$8(min,max,param)
     {var o={};
      caml_call3(Float[4],o,cst_min$2,min);
      caml_call3(Float[4],o,cst_max$2,max);
      return o}
    function min$0(r){return caml_call2(Float[1],r,cst_min$3)}
    function max$0(r){return caml_call2(Float[1],r,cst_max$3)}
    var Range$0=[0,v$8,min$0,max$0];
    function v$9(min,max,exact,ideal,param)
     {var o={};
      caml_call3(Float[4],o,cst_min$4,min);
      caml_call3(Float[4],o,cst_max$4,max);
      caml_call3(Float[4],o,cst_exact$1,exact);
      caml_call3(Float[4],o,cst_ideal$1,ideal);
      return o}
    var Constraint$1=[0,v$9],Float$0=[0,Range$0,Constraint$1];
    function v$10(exact,ideal,param)
     {var o={};
      set_if_some
       (o,
        cst_exact$2,
        caml_call2(Stdlib_Option[7],caml_list_to_js_array,exact));
      set_if_some
       (o,
        cst_ideal$2,
        caml_call2(Stdlib_Option[7],caml_list_to_js_array,ideal));
      return o}
    var Constraint$2=[0,v$10],Jstr$0=[0,Constraint$2];
    function v$11(name,param,_fS_,_fR_)
     {var
       constr_of_jv=_fR_[2],
       constr_to_jv=_fR_[1],
       cap_of_jv=_fS_[2],
       cap_to_jv=_fS_[1],
       value_of_jv=param[2],
       value_to_jv=param[1];
      return [0,
              name,
              value_to_jv,
              value_of_jv,
              cap_to_jv,
              cap_of_jv,
              constr_to_jv,
              constr_of_jv]}
    function name$6(p){return p[1]}
    function value_to_jv(p){return p[2]}
    function value_of_jv(p){return p[3]}
    function cap_to_jv(p){return p[4]}
    function cap_of_jv(p){return p[5]}
    function constr_to_jv(p){return p[6]}
    function constr_of_jv(p){return p[7]}
    function bool$0(name)
     {var
       value_conv=[0,caml_js_from_bool,caml_js_to_bool],
       _fJ_=caml_js_to_bool;
      function _fK_(_fQ_){return to_list(_fJ_,_fQ_)}
      var
       _fL_=caml_js_from_bool,
       cap_conv=[0,function(_fP_){return of_list(_fL_,_fP_)},_fK_];
      function _fM_(_fO_){return _fO_}
      var constr_conv=[0,function(_fN_){return _fN_},_fM_];
      return v$11(name,value_conv,cap_conv,constr_conv)}
    function int$2(name)
     {function _fA_(_fI_){return _fI_}
      var value_conv=[0,function(_fH_){return _fH_},_fA_];
      function _fB_(_fG_){return _fG_}
      var cap_conv=[0,function(_fF_){return _fF_},_fB_];
      function _fC_(_fE_){return _fE_}
      var constr_conv=[0,function(_fD_){return _fD_},_fC_];
      return v$11(name,value_conv,cap_conv,constr_conv)}
    function float$1(name)
     {function _fr_(_fz_){return _fz_}
      var value_conv=[0,function(_fy_){return _fy_},_fr_];
      function _fs_(_fx_){return _fx_}
      var cap_conv=[0,function(_fw_){return _fw_},_fs_];
      function _ft_(_fv_){return _fv_}
      var constr_conv=[0,function(_fu_){return _fu_},_ft_];
      return v$11(name,value_conv,cap_conv,constr_conv)}
    function jstr$0(name)
     {function _fl_(_fq_){return _fq_}
      var value_conv=[0,function(_fp_){return _fp_},_fl_];
      function _fm_(_fo_){return _fo_}
      var constr_conv=[0,function(_fn_){return _fn_},_fm_];
      return v$11(name,value_conv,value_conv,constr_conv)}
    function jstr_enum(name)
     {function _ff_(_fk_){return _fk_}
      var
       value_conv=[0,function(_fj_){return _fj_},_ff_],
       cap_conv=[0,caml_list_to_js_array,caml_list_of_js_array];
      function _fg_(_fi_){return _fi_}
      var constr_conv=[0,function(_fh_){return _fh_},_fg_];
      return v$11(name,value_conv,cap_conv,constr_conv)}
    function mem$2(p,cs){var mem=cs[p[1]];return is_none(mem)?0:mem | 0}
    function names(cs)
     {return caml_list_of_js_array(target[cst_Object].keys(cs))}
    var Supported_constraints=[0,mem$2,names];
    function empty$0(param){return {}}
    function find$9(p,c){return find_map$0(p[7],c,p[1])}
    function set$5(p,v,c){var _fe_=caml_call1(p[6],v);return c[p[1]] = _fe_}
    function delete$3(p,c){return delete c[p[1]]}
    var Constraints=[0,empty$0,find$9,set$5,delete$3];
    function find$10(p,s){return find_map$0(p[5],s,p[1])}
    function set$6(p,v,s){var _fd_=caml_call1(p[4],v);return s[p[1]] = _fd_}
    function delete$4(p,s){return delete s[p[1]]}
    var Capabilities=[0,find$10,set$6,delete$4];
    function get$6(p,s){return caml_call1(p[3],s[p[1]])}
    function find$11(p,s){return find_map$0(p[3],s,p[1])}
    var
     Settings=[0,get$6,find$11],
     aspect_ratio=float$1("aspectRatio"),
     auto_gain_control=bool$0("autoGainControl"),
     channel_count=int$2("channelCount"),
     cursor$0=jstr_enum("cursor"),
     device_id=jstr$0("deviceId"),
     display_surface=jstr_enum("displaySurface"),
     echo_cancellation=bool$0("echoCancellation"),
     facing_mode=jstr_enum("facingMode"),
     frame_rate=float$1("frameRate"),
     group_id=jstr$0("groupId"),
     height$4=int$2("height"),
     latency=float$1("latency"),
     logical_surface=bool$0("logicalSurface"),
     noise_suppresion=bool$0("noiseSuppresion"),
     resize_mode=jstr_enum("resizeMode"),
     sample_rate=int$2("sampleRate"),
     sample_size=int$2("sampleSize"),
     width$4=int$2("width"),
     Prop=
      [0,
       aspect_ratio,
       auto_gain_control,
       channel_count,
       cursor$0,
       device_id,
       display_surface,
       echo_cancellation,
       facing_mode,
       frame_rate,
       group_id,
       height$4,
       latency,
       logical_surface,
       noise_suppresion,
       resize_mode,
       sample_rate,
       sample_size,
       width$4],
     live="live",
     ended$0="ended",
     State=[0,live,ended$0],
     audio$2="audio",
     video$2="video",
     Kind$0=[0,audio$2,video$2];
    function id$3(t){return caml_call2(_e_[2],t,cst_id)}
    function isolated(t){return caml_call2(Bool[2],t,cst_isolated)}
    function kind$0(t){return caml_call2(_e_[2],t,cst_kind$0)}
    function label$1(t){return caml_call2(_e_[2],t,cst_label)}
    function muted(t){return caml_call2(Bool[2],t,cst_muted)}
    function ready_state(t){return caml_call2(_e_[2],t,cst_readyState)}
    function enabled(t){return caml_call2(Bool[2],t,cst_enabled)}
    function set_enabled(t,b){return caml_call3(Bool[3],t,cst_enabled$0,b)}
    function get_capabilities(t){return t.getCapabilities()}
    function get_constraints(t){return t.getConstraints()}
    function apply_constraints(t,c)
     {if(c)var c$0=c[1],a=[0,c$0];else var a=[0];
      var _fc_=caml_js_meth_call(t,cst_applyConstraints,a);
      return of_promise$0(caml_call1(Stdlib_Fun[1],0),_fc_)}
    function get_settings(t){return t.getSettings()}
    function stop(t){t.stop();return 0}
    function clone(t){return t.clone()}
    var
     ended$1="ended",
     isolationchange="isolationchange",
     mute="mute",
     unmute="unmute";
    function track$2(p){return p[cst_track]}
    function v$12(opt,_fa_,param)
     {if(opt)var sth=opt[1],audio=sth;else var audio=17505;
      if(_fa_)var sth$0=_fa_[1],video=sth$0;else var video=17505;
      var o={};
      function set_track(o,n,param)
       {if(typeof param === "number")return caml_call3(Bool[3],o,n,0);
        var _fb_=param[2];
        if(_fb_){var c=_fb_[1];return o[n] = c}
        return caml_call3(Bool[3],o,n,1)}
      set_track(o,cst_audio,audio);
      set_track(o,cst_video,video);
      return o}
    function av(param){return v$12(_bs_,_br_,0)}
    var Constraints$0=[0,v$12,av],stream$0=target[cst_MediaStream];
    function create$7(param){return new stream$0()}
    function of_stream(s){return new stream$0(s)}
    function of_tracks(ts)
     {return new stream$0(of_list(function(_e$_){return _e$_},ts))}
    function id$4(s){return caml_call2(_e_[2],s,cst_id$0)}
    function active(s){return caml_call2(Bool[2],s,cst_active)}
    function get_audio_tracks(s)
     {var _e9_=s.getAudioTracks();
      return to_list(function(_e__){return _e__},_e9_)}
    function get_video_tracks(s)
     {var _e7_=s.getVideoTracks();
      return to_list(function(_e8_){return _e8_},_e7_)}
    function get_tracks(s)
     {var _e5_=s.getTracks();return to_list(function(_e6_){return _e6_},_e5_)}
    function get_track_by_id(s,id)
     {var _e3_=s.getTrackById(id);
      return to_option(function(_e4_){return _e4_},_e3_)}
    function add_track(s,t){s.addTrack(t);return 0}
    function remove_track(s,t){s.removeTrack(t);return 0}
    function clone$0(s){return s.clone()}
    var
     addtrack="addtrack",
     removetrack="removetrack",
     Ev$2=[0,addtrack,removetrack],
     cbr="cbr",
     vbr="vbr",
     Bitrate_mode=[0,cbr,vbr],
     inactive="inactive",
     recording="recording",
     paused="paused",
     Recording_state=[0,inactive,recording,paused];
    function init$4(type,audio_bps,video_bps,bps,audio_bitrate_mode,param)
     {var o={};
      caml_call3(_e_[4],o,cst_mimeType,type);
      caml_call3(Int[4],o,cst_audioBitsPerSecond,audio_bps);
      caml_call3(Int[4],o,cst_videoBitsPerSecond,video_bps);
      caml_call3(Int[4],o,cst_bitsPerSecond,bps);
      caml_call3(_e_[4],o,cst_audioBitrateMode,audio_bitrate_mode);
      return o}
    var recorder=target[cst_MediaRecorder];
    function is_type_supported(t){return recorder.isTypeSupported(t) | 0}
    function create$8(opt,s)
     {if(opt)var sth=opt[1],init=sth;else var init={};
      return new recorder(s,init)}
    function stream$1(r){return r[cst_stream$0]}
    function type$8(r){return caml_call2(_e_[2],r,cst_mimeType$0)}
    function state$1(r){return caml_call2(_e_[2],r,cst_state$1)}
    function video_bps(r)
     {return caml_call2(Int[2],r,cst_videoBitsPerSecond$0)}
    function audio_bps(r)
     {return caml_call2(Int[2],r,cst_audioBitsPerSecond$0)}
    function audio_bitrate_mode(r)
     {return caml_call2(_e_[2],r,cst_audioBitrateMode$0)}
    function start(r,ts)
     {if(ts)var ms=ts[1],args=[0,ms];else var args=[0];
      try
       {caml_js_meth_call(r,cst_start,args);return _bt_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        if(exn[1] === _a_){var e=exn[2];return [1,e]}
        throw exn}}
    function stop$0(r){r.stop();return 0}
    function pause$0(r){r.pause();return 0}
    function resume(r){r.resume();return 0}
    function request_data(r){r.requestData();return 0}
    function data$2(e){return e[cst_data$1]}
    function timecode(e){return caml_call2(Float[2],e,cst_timecode)}
    var Blob=[0,data$2,timecode];
    function error$6(e){return e[cst_error$2]}
    var
     Error$1=[0,error$6],
     start$0="start",
     stop$1="stop",
     dataavailable="dataavailable",
     pause$1="pause",
     resume$0="resume",
     error$7="error",
     Ev$3=
      [0,Blob,Error$1,start$0,stop$1,dataavailable,pause$1,resume$0,error$7],
     audioinput="audioinput",
     audiooutput="audiooutput",
     videoinput="videoinput",
     Kind$1=[0,audioinput,audiooutput,videoinput];
    function device_id$0(d){return caml_call2(_e_[2],d,cst_deviceId)}
    function kind$1(d){return caml_call2(_e_[2],d,cst_kind$1)}
    function label$2(d){return caml_call2(_e_[2],d,cst_label$0)}
    function group_id$0(d){return caml_call2(_e_[2],d,cst_groupId)}
    function to_json$1(d){return d.toJSON()}
    var
     Info=[0,device_id$0,kind$1,label$2,group_id$0,to_json$1],
     Device=[0,Kind$1,Info];
    function of_navigator$1(n){return n[cst_mediaDevices]}
    function enumerate(m)
     {function _e0_(_e2_){return _e2_}
      function ok(_e1_){return to_list(_e0_,_e1_)}
      return of_promise$0(ok,m.enumerateDevices())}
    function get_supported_constraints(m){return m.getSupportedConstraints()}
    function get_user_media(m,c)
     {function ok(_eZ_){return _eZ_}return of_promise$0(ok,m.getUserMedia(c))}
    function get_display_media(m,c)
     {function ok(_eY_){return _eY_}
      return of_promise$0(ok,m.getDisplayMedia(c))}
    var
     devicechange="devicechange",
     Ev$4=[0,devicechange],
     Devices=
      [0,
       of_navigator$1,
       enumerate,
       get_supported_constraints,
       get_user_media,
       get_display_media,
       Ev$4],
     aborted$0=1,
     network=2,
     decode$3=3,
     src_not_supported=4;
    function code$4(e){return caml_call2(Int[2],e,cst_code$1)}
    function message$2(e){return caml_call2(_e_[2],e,cst_message$2)}
    var
     Error$2=[0,aborted$0,network,decode$3,src_not_supported,code$4,message$2],
     maybe="maybe",
     probably="probably",
     Can_play=[0,maybe,probably],
     Have=[0,0,1,2,3,4],
     Network=[0,0,1,2,3],
     anonymous="anonymous",
     use_credentials="use-credentials",
     Cors=[0,anonymous,use_credentials];
    function of_media_stream(_eX_){return _eX_}
    function of_blob$1(_eW_){return _eW_}
    function of_media_source(_eV_){return _eV_}
    var
     Provider=[0,of_media_stream,of_blob$1,of_media_source],
     List=[0],
     Audio_track=[0,List],
     List$0=[0],
     Video_track=[0,List$0],
     Kind$2=[0],
     List$1=[0],
     Text_track=[0,Kind$2,List$1];
    function length$4(r){return caml_call2(Int[2],r,cst_length$6)}
    function start$1(r,i){return r.start(i)}
    function end(r,i){return r.end(i)}
    var Time_ranges=[0,length$4,start$1,end];
    function of_el$0(e)
     {return caml_call2(_bo_[9],_bo_[60][107],e)
              ?e
              :caml_call2(_bo_[9],_bo_[60][7],e)
                ?e
                :throw$0
                  (0,
                   "Expected audio or video element but found: ".concat
                    (caml_call1(_bo_[8],e)))}
    function to_el$0(_eU_){return _eU_}
    function error$8(m)
     {var _eS_=m[cst_error$3];
      return to_option(function(_eT_){return _eT_},_eS_)}
    function src$1(m){return caml_call2(_e_[2],m,cst_src)}
    function set_src(m,s){return caml_call3(_e_[3],m,cst_src$0,s)}
    function src_object(m)
     {var _eQ_=m[cst_srcObject];
      return to_option(function(_eR_){return _eR_},_eQ_)}
    function set_src_object(m,o)
     {return m[cst_srcObject$0]
             =
             of_option(null$0,function(_eP_){return _eP_},o)}
    function current_src(m){return caml_call2(_e_[2],m,cst_currentSrc)}
    function cross_origin(m){return caml_call2(_e_[2],m,cst_crossOrigin)}
    function set_cross_origin(m,c)
     {return caml_call3(_e_[3],m,cst_crossOrigin$0,c)}
    function network_state(m){return caml_call2(Int[2],m,cst_networkState)}
    function preload(m){return caml_call2(_e_[2],m,cst_preload)}
    function set_preload(m,p){return caml_call3(_e_[3],m,cst_preload$0,p)}
    function buffered(m){return m[cst_buffered]}
    function load$0(m){m.load();return 0}
    function can_play_type(m,t){return m.canPlayType(t)}
    function ready_state$0(m){return caml_call2(Int[2],m,cst_readyState$0)}
    function seeking$0(m){return caml_call2(Bool[2],m,cst_seeking)}
    function current_time_s(m){return caml_call2(Float[2],m,cst_currentTime)}
    function set_current_time_s(m,t)
     {return caml_call3(Float[3],m,cst_currentTime$0,t)}
    function fast_seek_s(m,t){m.fastSeek(t);return 0}
    function duration_s(m){return caml_call2(Float[2],m,cst_duration$0)}
    function paused$0(m){return caml_call2(Bool[2],m,cst_paused)}
    function default_playback_rate(m)
     {return caml_call2(Float[2],m,cst_defaultPlaybackRate)}
    function set_default_playback_rate(m,r)
     {return caml_call3(Float[3],m,cst_defaultPlaybackRate$0,r)}
    function playback_rate(m){return caml_call2(Float[2],m,cst_playbackRate)}
    function set_playback_rate(m,r)
     {return caml_call3(Float[3],m,cst_playbackRate$0,r)}
    function played(m){return m[cst_played]}
    function seekable(m){return m[cst_seekable]}
    function ended$2(m){return caml_call2(Bool[2],m,cst_ended)}
    function autoplay(m){return caml_call2(Bool[2],m,cst_autoplay)}
    function set_auto_play(m,b){return caml_call3(Bool[3],m,cst_autoplay$0,b)}
    function loop(m){return caml_call2(Bool[2],m,cst_loop)}
    function set_loop(m,b){return caml_call3(Bool[3],m,cst_loop$0,b)}
    function play$0(m)
     {var _eN_=m.play();return of_promise$0(function(_eO_){return 0},_eN_)}
    function pause$2(m){m.pause();return 0}
    function controls(m){return caml_call2(Bool[2],m,cst_controls)}
    function set_controls(m,b){return caml_call3(Bool[3],m,cst_controls$0,b)}
    function volume(m){return caml_call2(Float[2],m,cst_volume)}
    function set_volume(m,f){return caml_call3(Float[3],m,cst_volume$0,f)}
    function muted$0(m){return caml_call2(Bool[2],m,cst_muted$0)}
    function set_muted(m,b){return caml_call3(Bool[3],m,cst_muted$1,b)}
    function default_muted(m){return caml_call2(Bool[2],m,cst_defaultMuted)}
    function set_default_muted(m,b)
     {return caml_call3(Bool[3],m,cst_defaultMuted$0,b)}
    function audio_track_list(m){return m[cst_audioTracks]}
    function video_track_list(m){return m[cst_videoTracks]}
    function text_track_list(m){return m[cst_textTracks]}
    function capture_stream(m){return m.captureStream()}
    var
     El=
      [0,
       Error$2,
       Can_play,
       Have,
       Network,
       Cors,
       Provider,
       Audio_track,
       Video_track,
       Text_track,
       Time_ranges,
       of_el$0,
       to_el$0,
       error$8,
       src$1,
       set_src,
       src_object,
       set_src_object,
       current_src,
       cross_origin,
       set_cross_origin,
       network_state,
       preload,
       set_preload,
       buffered,
       load$0,
       can_play_type,
       ready_state$0,
       seeking$0,
       current_time_s,
       set_current_time_s,
       fast_seek_s,
       duration_s,
       paused$0,
       default_playback_rate,
       set_default_playback_rate,
       playback_rate,
       set_playback_rate,
       played,
       seekable,
       ended$2,
       autoplay,
       set_auto_play,
       loop,
       set_loop,
       play$0,
       pause$2,
       controls,
       set_controls,
       volume,
       set_volume,
       muted$0,
       set_muted,
       default_muted,
       set_default_muted,
       audio_track_list,
       video_track_list,
       text_track_list,
       capture_stream];
    function transfer(_eM_){return _eM_}
    function opts$1(target_origin,transfer,param)
     {var o={};
      caml_call3(_e_[4],o,cst_targetOrigin,target_origin);
      set_if_some
       (o,
        cst_transfer,
        caml_call2(Stdlib_Option[7],caml_list_to_js_array,transfer));
      return o}
    function start$2(p){p.start();return 0}
    function close$1(p){p.close();return 0}
    function post(opt,p,v)
     {if(opt)var sth=opt[1],opts=sth;else var opts=fn;
      p.postMessage(v,opts);
      return 0}
    var Port=[0,start$2,close$1,post],channel=target[cst_MessageChannel];
    function create$9(param){return new channel()}
    function port1(c){return c[cst_port1]}
    function port2(c){return c[cst_port2]}
    var broadcast=target[cst_BroadcastChannel];
    function create$10(n){return new broadcast(n)}
    function name$7(b){return caml_call2(_e_[2],b,cst_name$6)}
    function close$2(b){b.close();return 0}
    function post$0(b,v){b.postMessage(v);return 0}
    function window_post(opt,w,v)
     {if(opt)var sth=opt[1],opts=sth;else var opts=fn;
      w.postMessage(v,opts);
      return 0}
    var message$3="message",messageerror="messageerror";
    function as_extendable$0(_eL_){return _eL_}
    function data$3(e){return e[cst_data$2]}
    function origin(e){return caml_call2(_e_[2],e,cst_origin)}
    function last_event_id(e){return caml_call2(_e_[2],e,cst_lastEventId)}
    function source$1(e)
     {var _eJ_=e[cst_source];
      return to_option(function(_eK_){return _eK_},_eJ_)}
    function ports(e)
     {var _eH_=e[cst_ports];return to_list(function(_eI_){return _eI_},_eH_)}
    var
     default$2="default",
     denied="denied",
     granted="granted",
     Permission=[0,default$2,denied,granted],
     notification=target[cst_Notification];
    function permission(param)
     {return caml_call2(_e_[2],notification,cst_permission)}
    function request_permission(param)
     {var _eF_=notification.requestPermission();
      return of_promise$0(function(_eG_){return _eG_},_eF_)}
    var auto$1="auto",ltr="ltr",rtl="rtl",Direction=[0,auto$1,ltr,rtl];
    function max$1(param)
     {return caml_call2(Int[2],notification,cst_maxActions)}
    function v$13(icon,action,title,param)
     {var o={};
      caml_call3(_e_[3],o,cst_action$0,action);
      caml_call3(_e_[3],o,cst_title$1,title);
      caml_call3(_e_[4],o,cst_icon,icon);
      return o}
    function action$0(a){return caml_call2(_e_[2],a,cst_action$1)}
    function title$5(a){return caml_call2(_e_[2],a,cst_title$2)}
    function icon(a){return caml_call2(_e_[1],a,cst_icon$0)}
    var Action=[0,max$1,v$13,action$0,title$5,icon];
    function opts$2
     (dir,
      lang,
      body,
      tag,
      image,
      icon,
      badge,
      timestamp_ms,
      renotify,
      silent,
      require_interaction,
      data,
      opt,
      param)
     {if(opt)var sth=opt[1],actions=sth;else var actions=0;
      var o={};
      caml_call3(_e_[4],o,cst_dir$0,dir);
      caml_call3(_e_[4],o,cst_lang,lang);
      caml_call3(_e_[4],o,cst_body$2,body);
      caml_call3(_e_[4],o,cst_image,image);
      caml_call3(_e_[4],o,cst_icon$1,icon);
      caml_call3(_e_[4],o,cst_badge,badge);
      caml_call3(Int[4],o,cst_timestamp$0,timestamp_ms);
      caml_call3(Bool[4],o,cst_renotify,renotify);
      caml_call3(Bool[4],o,cst_silent,silent);
      caml_call3(Bool[4],o,cst_requireInteraction,require_interaction);
      function _eC_(_eE_){return _eE_}
      set_if_some(o,cst_data$3,caml_call2(Stdlib_Option[7],_eC_,data));
      o[cst_actions] = of_list(function(_eD_){return _eD_},actions);
      return o}
    function create$11(opt,title)
     {if(opt)var sth=opt[1],opts=sth;else var opts=fn;
      return new notification(title,opts)}
    function close$3(n){n.close();return 0}
    function actions(n)
     {var _eA_=n[cst_actions$0];
      return to_list(function(_eB_){return _eB_},_eA_)}
    function badge(n){return caml_call2(_e_[2],n,cst_badge$0)}
    function body$3(n){return caml_call2(_e_[2],n,cst_body$3)}
    function data$4(n){return n[cst_data$4]}
    function dir$2(n){return caml_call2(_e_[2],n,cst_dir$1)}
    function lang$1(n){return caml_call2(_e_[2],n,cst_lang$0)}
    function tag(n){return caml_call2(_e_[2],n,cst_tag)}
    function icon$0(n){return caml_call2(_e_[2],n,cst_icon$2)}
    function image$0(n){return caml_call2(_e_[2],n,cst_image$0)}
    function renotify(n){return caml_call2(Bool[2],n,cst_renotify$0)}
    function require_interaction(n)
     {return caml_call2(Bool[2],n,cst_requireInteraction$0)}
    function silent(n){return caml_call2(Bool[2],n,cst_silent$0)}
    function timestamp_ms$1(n){return caml_call2(Int[2],n,cst_timestamp$1)}
    function title$6(n){return caml_call2(_e_[2],n,cst_title$3)}
    var
     notificationclick="notificationclick",
     notificationclose="notificationclose";
    function as_extendable$1(_ez_){return _ez_}
    function notification$0(e){return e[cst_notification]}
    function action$1(e){return caml_call2(_e_[2],e,cst_action$2)}
    function local(w){return w[cst_localStorage]}
    function session(w){return w[cst_sessionStorage]}
    function length$5(s){return caml_call2(Int[2],s,cst_length$7)}
    function key$0(s,i)
     {var _ex_=s.key(i);return to_option(function(_ey_){return _ey_},_ex_)}
    function get_item(s,k)
     {var _ev_=s.getItem(k);
      return to_option(function(_ew_){return _ew_},_ev_)}
    function set_item(s,k,v)
     {try
       {s.setItem(k,v);return _bu_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        if(exn[1] === _a_){var e=exn[2];return [1,e]}
        throw exn}}
    function remove_item(s,k){s.removeItem(k);return 0}
    function clear$1(s){s.clear();return 0}
    var storage="storage";
    function key$1(e){return caml_call2(_e_[1],e,cst_key$0)}
    function old_value(e){return caml_call2(_e_[1],e,cst_oldValue)}
    function new_value(e){return caml_call2(_e_[1],e,cst_newValue)}
    function url$3(e){return caml_call2(_e_[2],e,cst_url$1)}
    function storage_area(e){return find(e,cst_storageArea)}
    var
     blob$1="blob",
     arraybuffer="arraybuffer",
     Binary_type=[0,blob$1,arraybuffer],
     Ready_state=[0,0,1,2,3],
     websocket=target[cst_WebSocket];
    function create$12(protocols,url)
     {if(protocols)
       var ps=protocols[1],protocols$0=caml_list_to_js_array(ps);
      else
       var protocols$0=fn;
      return new websocket(url,protocols$0)}
    function binary_type(s){return caml_call2(_e_[2],s,cst_binaryType)}
    function set_binary_type(s,t)
     {return caml_call3(_e_[3],s,cst_binaryType$0,t)}
    function close$4(code,r,s)
     {if(code)var c=code[1],code$0=c;else var code$0=fn;
      if(r)var s$0=r[1],reason=s$0;else var reason=fn;
      s.close(code$0,reason);
      return 0}
    function url$4(s){return caml_call2(_e_[2],s,cst_url$2)}
    function ready_state$1(s){return caml_call2(Int[2],s,cst_readyState$1)}
    function buffered_amount(s)
     {return caml_call2(Int[2],s,cst_bufferedAmount)}
    function extensions(s){return caml_call2(_e_[2],s,cst_extensions)}
    function protocol(s){return caml_call2(_e_[2],s,cst_protocol$1)}
    function send_string(s,d){s.send(d);return 0}
    function send_blob(s,d){s.send(d);return 0}
    function send_tarray(s,d){s.send(d);return 0}
    function send_array_buffer(s,d){s.send(d);return 0}
    function was_clean(e){return caml_call2(Bool[2],e,cst_wasClean)}
    function code$5(e){return caml_call2(Int[2],e,cst_code$2)}
    function reason(e){return caml_call2(_e_[2],e,cst_reason)}
    var
     Close=[0,was_clean,code$5,reason],
     close$5="close",
     Ev$5=[0,Close,close$5],
     Brr_io=
      [0,
       [0,
        [0,
         Presentation_style,
         opts,
         create$5,
         presentation_style,
         last_modified_ms$0,
         delayed,
         types,
         get_type],
        of_navigator,
        as_target$1,
        read,
        read_text,
        write,
        write_text],
       [0,
        of_el,
        to_el,
        name$5,
        method,
        target$1,
        action,
        enctype,
        accept_charset,
        autocomplete,
        no_validate,
        check_validity,
        report_validity,
        request_submit,
        reset$0,
        submit,
        [0,
         create$6,
         of_form,
         is_empty$1,
         has_file_entry,
         mem$0,
         find$7,
         find_all$0,
         fold$1,
         set$4,
         set_blob,
         append,
         append_blob,
         delete$0,
         of_assoc$0,
         to_assoc$0,
         of_uri_params,
         to_uri_params],
        Ev$0],
       [0,
        Body,
        [0,mem$1,find$8,fold$2,of_obj$0,of_assoc$1,to_assoc$1],
        [0,
         Cache,
         Credentials,
         Destination,
         Mode,
         Redirect,
         init$2,
         v$3,
         of_request,
         cache,
         credentials,
         destination,
         headers$0,
         integrity,
         is_history_navigation,
         is_reload_navigation,
         keepalive,
         method$0,
         mode,
         redirect,
         referrer$0,
         referrer_policy,
         signal$0,
         url$0],
        [0,
         Type$2,
         init$3,
         v$4,
         of_response,
         error$5,
         redirect$0,
         headers$1,
         ok$0,
         redirected,
         status,
         status_text,
         url$1],
        Cache$0,
        Ev$1,
        url$2,
        request$1,
        caches],
       [0,
        Error$0,
        [0,
         latitude,
         longitude,
         accuracy,
         altitude,
         altitude_accuracy,
         heading,
         speed,
         timestamp_ms$0],
        opts$0,
        of_navigator$0,
        get$5,
        watch,
        unwatch],
       [0,
        [0,
         Bool$0,
         Int$0,
         Float$0,
         Jstr$0,
         bool$0,
         int$2,
         float$1,
         jstr$0,
         jstr_enum,
         v$11,
         name$6,
         value_of_jv,
         value_to_jv,
         cap_of_jv,
         cap_to_jv,
         constr_of_jv,
         constr_to_jv],
        Supported_constraints,
        Constraints,
        Capabilities,
        Settings,
        [0,
         State,
         Kind$0,
         Prop,
         id$3,
         isolated,
         kind$0,
         label$1,
         muted,
         ready_state,
         enabled,
         set_enabled,
         get_capabilities,
         get_constraints,
         apply_constraints,
         get_settings,
         stop,
         clone,
         [0,track$2,ended$1,isolationchange,mute,unmute]],
        [0,
         Constraints$0,
         create$7,
         of_stream,
         of_tracks,
         id$4,
         active,
         get_audio_tracks,
         get_video_tracks,
         get_tracks,
         get_track_by_id,
         add_track,
         remove_track,
         clone$0,
         Ev$2],
        [0,
         Bitrate_mode,
         Recording_state,
         is_type_supported,
         init$4,
         create$8,
         stream$1,
         type$8,
         state$1,
         video_bps,
         audio_bps,
         audio_bitrate_mode,
         start,
         stop$0,
         pause$0,
         resume,
         request_data,
         Ev$3],
        Device,
        Devices,
        El],
       [0,
        transfer,
        opts$1,
        Port,
        [0,create$9,port1,port2],
        [0,create$10,name$7,close$2,post$0],
        window_post,
        [0,
         as_extendable$0,
         data$3,
         origin,
         last_event_id,
         source$1,
         ports,
         message$3,
         messageerror]],
       [0,
        Permission,
        permission,
        request_permission,
        Direction,
        Action,
        opts$2,
        create$11,
        close$3,
        actions,
        badge,
        body$3,
        data$4,
        dir$2,
        lang$1,
        tag,
        icon$0,
        image$0,
        renotify,
        require_interaction,
        silent,
        timestamp_ms$1,
        title$6,
        [0,
         as_extendable$1,
         notification$0,
         action$1,
         notificationclick,
         notificationclose]],
       [0,
        local,
        session,
        length$5,
        key$0,
        get_item,
        set_item,
        remove_item,
        clear$1,
        [0,key$1,old_value,new_value,url$3,storage_area,storage]],
       [0,
        Binary_type,
        Ready_state,
        create$12,
        binary_type,
        set_binary_type,
        close$4,
        url$4,
        ready_state$1,
        buffered_amount,
        extensions,
        protocol,
        send_string,
        send_blob,
        send_array_buffer,
        send_tarray,
        Ev$5]];
    caml_register_global(2944,Brr_io,"Brr_io");
    function is_2d(m){return caml_call2(Bool[2],m,cst_is2D)}
    function is_identity(m){return caml_call2(Bool[2],m,cst_isIdentity)}
    function inverse(m){return m.inverse()}
    function multiply(m$0,m){return m$0.multiply(m)}
    function m11(m){return caml_call2(Float[2],m,cst_m11)}
    function m12(m){return caml_call2(Float[2],m,cst_m12)}
    function m13(m){return caml_call2(Float[2],m,cst_m13)}
    function m14(m){return caml_call2(Float[2],m,cst_m14)}
    function m21(m){return caml_call2(Float[2],m,cst_m21)}
    function m22(m){return caml_call2(Float[2],m,cst_m22)}
    function m23(m){return caml_call2(Float[2],m,cst_m23)}
    function m24(m){return caml_call2(Float[2],m,cst_m24)}
    function m31(m){return caml_call2(Float[2],m,cst_m31)}
    function m32(m){return caml_call2(Float[2],m,cst_m32)}
    function m33(m){return caml_call2(Float[2],m,cst_m33)}
    function m34(m){return caml_call2(Float[2],m,cst_m34)}
    function m41(m){return caml_call2(Float[2],m,cst_m41)}
    function m42(m){return caml_call2(Float[2],m,cst_m42)}
    function m43(m){return caml_call2(Float[2],m,cst_m43)}
    function m44(m){return caml_call2(Float[2],m,cst_m44)}
    function a$1(m){return caml_call2(Float[2],m,cst_a)}
    function b$1(m){return caml_call2(Float[2],m,cst_b)}
    function c$0(m){return caml_call2(Float[2],m,cst_c)}
    function d(m){return caml_call2(Float[2],m,cst_d)}
    function e(m){return caml_call2(Float[2],m,cst_e)}
    function f(m){return caml_call2(Float[2],m,cst_f)}
    var dommatrixro=target[cst_DOMMatrixReadOnly];
    function to_float32_array(m){return m.toFloat32Array()}
    function of_float32_array(a){return dommatrixro.fromFloat32Array(a)}
    function to_float64_array(m){return m.toFloat64Array()}
    function of_float64_array(a){return dommatrixro.fromFloat64Array(a)}
    var v4=target[cst_DOMPointReadOnly];
    function v$14(x,y,z,w){return new v4(x,y,z,w)}
    function tr$1(m,v){return v.matrixTransform(m)}
    function to_json$2(v){return v.toJSON()}
    function x(v){return caml_call2(Float[2],v,cst_x$0)}
    function y(v){return caml_call2(Float[2],v,cst_y$0)}
    function z(v){return caml_call2(Float[2],v,cst_z)}
    function w(v){return caml_call2(Float[2],v,cst_w)}
    function create$13(d,at,opt,_eu_,cs)
     {if(opt)var sth=opt[1],w=sth;else var w=0;
      if(_eu_)var sth$0=_eu_[1],h=sth$0;else var h=0;
      var c=caml_call3(_bo_[76],d,at,cs);
      caml_call3(Int[3],c,cst_width$1,w);
      caml_call3(Int[3],c,cst_height$1,h);
      return c}
    function of_el$1(e)
     {return caml_call2(_bo_[9],_bo_[60][16],e)
              ?e
              :throw$0
                (0,
                 "Expected canvas element but found: ".concat
                  (caml_call1(_bo_[8],e)))}
    function to_el$1(_et_){return _et_}
    function w$0(c){return caml_call2(Int[2],c,cst_width$2)}
    function h(c){return caml_call2(Int[2],c,cst_height$2)}
    function set_w(c,w){return caml_call3(Int[3],c,cst_width$3,w)}
    function set_h(c,h){return caml_call3(Int[3],c,cst_height$3,h)}
    function set_size_to_layout_size(opt,c)
     {if(opt)var sth=opt[1],hidpi=sth;else var hidpi=1;
      var
       dpr=hidpi?caml_call1(Window[5],_bn_[5]):1.,
       cw=Math.ceil(dpr * caml_call1(_bo_[39],c)) | 0,
       ch=Math.ceil(dpr * caml_call1(_bo_[40],c)) | 0,
       _er_=w$0(c) !== cw?1:0,
       _es_=_er_ || (h(c) !== ch?1:0);
      return _es_?(set_w(c,cw),set_h(c,ch)):_es_}
    function image_encode(opt,quality,param)
     {if(opt)var sth=opt[1],type=sth;else var type="image/png";
      var o={};
      caml_call3(_e_[3],o,cst_type$4,type);
      caml_call3(Float[4],o,cst_quality,quality);
      return o}
    function enc(encode,c,meth,arg)
     {if(encode)
       var e=encode[1],encode$0=e;
      else
       var encode$0=image_encode(0,0,0);
      var t=encode$0[cst_type$5],q=find(encode$0,cst_quality$0);
      if(arg)
       {var a=arg[1];
        if(q)var q$0=q[1],_eq_=[0,a,t,q$0];else var _eq_=[0,a,t];
        var args=_eq_}
      else
       if(q)var q$1=q[1],args=[0,t,q$1];else var args=[0,t];
      return caml_js_meth_call(c,meth,args)}
    function to_data_url(encode,c)
     {try
       {var v=enc(0,c,cst_toDataURL,0)}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        if(exn[1] === _a_){var e=exn[2];return [1,e]}
        throw exn}
      return [0,v]}
    function to_blob(encode,c)
     {var match=create$1(0),set=match[2],fut=match[1];
      function cb(blob)
       {return caml_call1(set,[0,to_option(function(_ep_){return _ep_},blob)])}
      try
       {enc(0,c,cst_toBlob,[0,cb]);return fut}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        if(exn[1] === _a_){var e=exn[2];caml_call1(set,[1,e]);return fut}
        throw exn}}
    function capture_stream$0(hz,c)
     {if(hz)var hz$0=hz[1],args=[0,hz$0];else var args=[0];
      return caml_js_meth_call(c,cst_captureStrseam,args)}
    var
     nonzero="nonzero",
     evenodd="evenodd",
     Fill_rule=[0,nonzero,evenodd],
     low="low",
     medium="medium",
     high="high",
     Image_smoothing_quality=[0,low,medium,high],
     butt="butt",
     round="round",
     square="square",
     Line_cap=[0,butt,round,square],
     round$0="round",
     bevel="bevel",
     miter="miter",
     Line_join=[0,round$0,bevel,miter],
     start$3="start",
     end$0="end",
     left$0="left",
     right$0="right",
     center="center",
     Text_align=[0,start$3,end$0,left$0,right$0,center],
     top$0="top",
     hanging="hanging",
     middle="middle",
     alphabetic="alphabetic",
     ideographic="ideographic",
     bottom$0="bottom",
     Text_baseline=[0,top$0,hanging,middle,alphabetic,ideographic,bottom$0],
     ltr$0="ltr",
     rtl$0="rtl",
     inherit="inherit",
     Text_direction=[0,ltr$0,rtl$0,inherit],
     normal="normal",
     multiply$0="multiply",
     screen="screen",
     overlay="overlay",
     darken="darken",
     lighten="lighten",
     color_dodge="color-dodge",
     color_burn="color-burn",
     hard_light="hard-light",
     soft_light="soft-light",
     difference="difference",
     exclusion="exclusion",
     hue="hue",
     saturation="saturation",
     color$0="color",
     luminosity="luminosity",
     clear$2="clear",
     copy$1="copy",
     source_over="source-over",
     destination_over="destination-over",
     source_in="source-in",
     destination_in="destination-in",
     source_out="source-out",
     destination_out="destination-out",
     source_atop="source-atop",
     destination_atop="destination-atop",
     xor="xor",
     lighter="lighter",
     plus_darker="plus-darker",
     plus_lighter="plus-lighter",
     Composite_op=
      [0,
       normal,
       multiply$0,
       screen,
       overlay,
       darken,
       lighten,
       color_dodge,
       color_burn,
       hard_light,
       soft_light,
       difference,
       exclusion,
       hue,
       saturation,
       color$0,
       luminosity,
       clear$2,
       copy$1,
       source_over,
       destination_over,
       source_in,
       destination_in,
       source_out,
       destination_out,
       source_atop,
       destination_atop,
       xor,
       lighter,
       plus_darker,
       plus_lighter],
     xy="repeat",
     x$0="repeat-x",
     y$0="repeat-y",
     no="no-repeat",
     Repeat=[0,xy,x$0,y$0,no],
     path$0=target[cst_Path2D];
    function create$14(param){return new path$0()}
    function of_svg(svg){return new path$0(svg)}
    function of_path(p){return new path$0(p)}
    function add$0(tr,p$0,p)
     {if(tr)var t=tr[1],_eo_=[0,p,t];else var _eo_=[0,p];
      caml_js_meth_call(p$0,cst_addPath,_eo_);
      return 0}
    function close$6(p){p.closePath();return 0}
    function move_to(p,x,y){p.moveTo(x,y);return 0}
    function line_to(p,x,y){p.lineTo(x,y);return 0}
    function qcurve_to(p,cx,cy,x,y){p.quadraticCurveTo(cx,cy,x,y);return 0}
    function ccurve_to(p,cx$0,cy$0,cx,cy,x,y)
     {p.bezierCurveTo(cx$0,cy$0,cx,cy,x,y);return 0}
    function arc_to(p,cx$0,cy$0,cx,cy,r){p.arcTo(cx$0,cy$0,cx,cy,r);return 0}
    function arc(opt,p,cx,cy,r,start,stop)
     {if(opt)var sth=opt[1],anticlockwise=sth;else var anticlockwise=0;
      p.arc(cx,cy,r,start,stop,! ! anticlockwise);
      return 0}
    function rect(p,x,y,w,h){p.rect(x,y,w,h);return 0}
    function ellipse(opt,p,cx,cy,rx,ry,rot,start,stop)
     {if(opt)var sth=opt[1],anticlockwise=sth;else var anticlockwise=0;
      p.ellipse(cx,cy,rx,ry,rot,start,stop,! ! anticlockwise);
      return 0}
    function image_src_of_el(_en_){return _en_}
    function image_src_of_jv(_em_){return _em_}
    function attrs_alpha(o){return caml_call2(Bool[2],o,cst_alpha)}
    function attrs_desynchronized(o)
     {return caml_call2(Bool[2],o,cst_desynchronized)}
    function create$15(opt,cnv)
     {if(opt)var sth=opt[1],attrs=sth;else var attrs=fn;
      return cnv.getContext("2d",attrs)}
    function canvas$1(c)
     {return find_map(function(_el_){return _el_},c,cst_canvas)}
    function attrs(c){return c.getContextAttributes()}
    function save(c){c.save();return 0}
    function restore(c){c.restore();return 0}
    function image_smoothing_enabled(c)
     {return caml_call2(Bool[2],c,cst_imageSmoothingEnabled)}
    function set_image_smoothing_enabled(c,b)
     {return caml_call3(Bool[3],c,cst_imageSmoothingEnabled$0,b)}
    function image_smoothing_quality(c)
     {return caml_call2(_e_[2],c,cst_imageSmoothingQuality)}
    function set_image_smoothing_quality(c,v)
     {return caml_call3(_e_[3],c,cst_imageSmoothingQuality$0,v)}
    function global_alpha(c){return caml_call2(Float[2],c,cst_globalAlpha)}
    function set_global_alpha(c,a)
     {return caml_call3(Float[3],c,cst_globalAlpha$0,a)}
    function global_composite_op(c)
     {return caml_call2(_e_[2],c,cst_globalCompositeOperation)}
    function set_global_composite_op(c,o)
     {return caml_call3(_e_[3],c,cst_globalCompositeOperation$0,o)}
    function filter$0(c){return caml_call2(_e_[2],c,cst_filter)}
    function set_filter(c,f){return caml_call3(_e_[3],c,cst_filter$0,f)}
    function get_transform(c){return c.getTransform()}
    function set_transform(c,m){c.setTransform(m);return 0}
    function reset_transform(c){c.resetTransform();return 0}
    function transform(c,m)
     {var _eg_=f(m),_eh_=e(m),_ei_=d(m),_ej_=c$0(m),_ek_=b$1(m);
      c.resetTransform(a$1(m),_ek_,_ej_,_ei_,_eh_,_eg_);
      return 0}
    function translate(c,x,y){c.translate(x,y);return 0}
    function rotate(c,r){c.rotate(r);return 0}
    function scale(c,sx,sy){c.scale(sx,sy);return 0}
    function set_stroke_style(c,s){return c[cst_strokeStyle] = s}
    function set_fill_style(c,s){return c[cst_fillStyle] = s}
    function color$1(_ef_){return _ef_}
    function gradient_style(_ee_){return _ee_}
    function make_stops(g,stops)
     {function _ed_(param)
       {var c=param[2],off=param[1];g.addColorStop(off,c);return 0}
      return caml_call2(Stdlib_List[17],_ed_,stops)}
    function linear_gradient(c,x0,y0,x1,y1,stops)
     {var g=c.createLinearGradient(x0,y0,x1,y1);make_stops(g,stops);return g}
    function radial_gradient(c,x0,y0,r0,x1,y1,r1,stops)
     {var g=c.createRadialGradient(x0,y0,r0,x1,y1,r1);
      make_stops(g,stops);
      return g}
    function pattern(c,img,r,tr)
     {var p=c.createPattern(img,r);
      if(tr){var t=tr[1];p.setTransform(t);return p}
      return p}
    function pattern_style(_ec_){return _ec_}
    function line_width(c){return caml_call2(Float[2],c,cst_lineWidth)}
    function set_line_width(c,w)
     {return caml_call3(Float[3],c,cst_lineWidth$0,w)}
    function line_cap(c){return caml_call2(_e_[2],c,cst_lineCap)}
    function set_line_cap(c,cap)
     {return caml_call3(_e_[3],c,cst_lineCap$0,cap)}
    function line_join(c){return caml_call2(_e_[2],c,cst_lineJoin)}
    function set_line_join(c,join)
     {return caml_call3(_e_[3],c,cst_lineJoin$0,join)}
    function miter_limit(c){return caml_call2(Float[2],c,cst_miterLimit)}
    function set_miter_limit(c,l)
     {return caml_call3(Float[3],c,cst_miterLimit$0,l)}
    function line_dash(c)
     {var _ea_=c.getLineDash();
      return to_list(function(_eb_){return _eb_},_ea_)}
    function set_line_dash(c,ds)
     {c.setLineDash(of_list(function(_d$_){return _d$_},ds));return 0}
    function line_dash_offset(c)
     {return caml_call2(Float[2],c,cst_lineDashOffset)}
    function set_line_dash_offset(c,o)
     {return caml_call3(Float[3],c,cst_lineDashOffset$0,o)}
    function shadow_blur(c){return caml_call2(Float[2],c,cst_shadowBlur)}
    function set_shadow_blur(c,b)
     {return caml_call3(Float[3],c,cst_shadowBlur$0,b)}
    function shadow_offset_x(c)
     {return caml_call2(Float[2],c,cst_shadowOffsetX)}
    function set_shadow_offset_x(c,o)
     {return caml_call3(Float[3],c,cst_shadowOffsetX$0,o)}
    function shadow_offset_y(c)
     {return caml_call2(Float[2],c,cst_shadowOffsetY)}
    function set_shadow_offset_y(c,o)
     {return caml_call3(Float[3],c,cst_shadowOffsetY$0,o)}
    function shadow_color(c){return caml_call2(_e_[2],c,cst_shadowColor)}
    function set_shadow_color(c,col)
     {return caml_call3(_e_[3],c,cst_shadowColor$0,col)}
    function font$0(c){return caml_call2(_e_[2],c,cst_font)}
    function set_font(c,f){return caml_call3(_e_[3],c,cst_font$0,f)}
    function text_align(c){return caml_call2(_e_[2],c,cst_textAlign)}
    function set_text_align(c,a)
     {return caml_call3(_e_[3],c,cst_textAlign$0,a)}
    function text_baseline(c){return caml_call2(_e_[2],c,cst_textBaseline)}
    function set_text_baseline(c,b)
     {return caml_call3(_e_[3],c,cst_textBaseline$0,b)}
    function text_direction(c){return caml_call2(_e_[2],c,cst_direction)}
    function set_text_direction(c,d)
     {return caml_call3(_e_[3],c,cst_direction$0,d)}
    function clear_rect(c,x,y,w,h){c.clearRect(x,y,w,h);return 0}
    function fill_rect(c,x,y,w,h){c.fillRect(x,y,w,h);return 0}
    function stroke_rect(c,x,y,w,h){c.strokeRect(x,y,w,h);return 0}
    function fill$0(opt,c,p)
     {if(opt)var sth=opt[1],fill_rule=sth;else var fill_rule=Fill_rule[1];
      c.fill(p,fill_rule);
      return 0}
    function stroke(c,p){c.stroke(p);return 0}
    function clip(opt,c,p)
     {if(opt)var sth=opt[1],fill_rule=sth;else var fill_rule=Fill_rule[1];
      c.clip(p,fill_rule);
      return 0}
    function draw_focus_if_needed(c,p,e){c.drawFocusIfNeeded(p,e);return 0}
    function scroll_path_into_view(c,p){c.scrollPathIntoView(p);return 0}
    function is_point_in_fill(opt,c,p,x,y)
     {if(opt)var sth=opt[1],fill_rule=sth;else var fill_rule=Fill_rule[1];
      return c.isPointInPath(p,x,y,fill_rule) | 0}
    function is_point_in_stroke(c,p,x,y){return c.isPointInStroke(p,x,y) | 0}
    function call_text(c,meth,max_width,txt,x,y)
     {if(max_width)
       var m=max_width[1],args=[0,txt,x,y,m];
      else
       var args=[0,txt,x,y];
      caml_js_meth_call(c,meth,args);
      return 0}
    function fill_text(max_width,c,txt,x,y)
     {return call_text(c,cst_fillText,max_width,txt,x,y)}
    function stroke_text(max_width,c,txt,x,y)
     {return call_text(c,cst_strokeText,max_width,txt,x,y)}
    function width$5(m){return caml_call2(Float[2],m,cst_width$4)}
    function actual_bounding_box_left(m)
     {return caml_call2(Float[2],m,cst_actualBoundingBoxLeft)}
    function actual_bounding_box_right(m)
     {return caml_call2(Float[2],m,cst_actualBoundingBoxRight)}
    function font_bounding_box_ascent(m)
     {return caml_call2(Float[2],m,cst_fontBoundingBoxAscent)}
    function font_bounding_box_descent(m)
     {return caml_call2(Float[2],m,cst_fontBoundingBoxDescent)}
    function actual_bounding_box_ascent(m)
     {return caml_call2(Float[2],m,cst_actualBoundingBoxAscent)}
    function actual_bounding_box_descent(m)
     {return caml_call2(Float[2],m,cst_actualBoundingBoxDescent)}
    function em_height_ascent(m)
     {return caml_call2(Float[2],m,cst_emHeightAscent)}
    function em_height_descent(m)
     {return caml_call2(Float[2],m,cst_emHeightDescent)}
    function hanging_baseline(m)
     {return caml_call2(Float[2],m,cst_hangingBaseline)}
    function alphabetic_baseline(m)
     {return caml_call2(Float[2],m,cst_alphabeticBaseline)}
    function ideographic_baseline(m)
     {return caml_call2(Float[2],m,cst_ideographicBaseline)}
    var
     Text_metrics=
      [0,
       width$5,
       actual_bounding_box_left,
       actual_bounding_box_right,
       font_bounding_box_ascent,
       font_bounding_box_descent,
       actual_bounding_box_ascent,
       actual_bounding_box_descent,
       em_height_ascent,
       em_height_descent,
       hanging_baseline,
       alphabetic_baseline,
       ideographic_baseline];
    function measure_text(c,txt){return c.measureText(txt)}
    function draw_image(c,i,x,y){c.drawImage(i,x,y);return 0}
    function draw_image_in_rect(c,i,x,y,w,h){c.drawImage(i,x,y,w,h);return 0}
    function draw_sub_image_in_rect(c,i,sx,sy,sw,sh,x,y,w,h)
     {c.drawImage(i,sx,sy,sw,sh,x,y,w,h);return 0}
    var image_data=target[cst_ImageData];
    function create$16(data,w,h,param)
     {if(data)var data$0=data[1],args=[0,data$0,w,h];else var args=[0,w,h];
      return caml_js_new(image_data,args)}
    function w$1(d){return caml_call2(Int[2],d,cst_width$5)}
    function h$0(d){return caml_call2(Int[2],d,cst_height$4)}
    function data$5(d){return d[cst_data$5]}
    function create_image_data(c,w,h){return c.createImageData(w,h)}
    function get_image_data(c,x,y,w,h){return c.getImageData(x,y,w,h)}
    function put_image_data(c,d,x,y){c.putImageData(d,x,y);return 0}
    function put_sub_image_data(c,d,sx,sy,sw,sh,x,y)
     {c.putImageData(d,x,y,sx,sy,sw,sh);return 0}
    var
     default$3="default",
     high_performance="high-performance",
     low_power="low-power",
     Power_preference=[0,default$3,high_performance,low_power];
    function v$15
     (alpha,
      depth,
      stencil,
      antialias,
      premultiplied_alpha,
      preserve_drawing_buffer,
      power_preference,
      fail_if_major_performance_cave,
      desynchronized,
      param)
     {var o={};
      caml_call3(Bool[4],o,cst_alpha$0,alpha);
      caml_call3(Bool[4],o,cst_depth,depth);
      caml_call3(Bool[4],o,cst_stencil,stencil);
      caml_call3(Bool[4],o,cst_antialias,antialias);
      caml_call3(Bool[4],o,cst_premultipliedApha,premultiplied_alpha);
      caml_call3(Bool[4],o,cst_preserveDrawingBuffer,preserve_drawing_buffer);
      caml_call3(_e_[4],o,cst_powerPreference,power_preference);
      caml_call3
       (Bool[4],
        o,
        cst_failIfMajorPerformanceCave,
        fail_if_major_performance_cave);
      caml_call3(Bool[4],o,cst_desynchronized$0,desynchronized);
      return o}
    function alpha(a){return caml_call2(Bool[2],a,cst_alpha$1)}
    function depth(a){return caml_call2(Bool[2],a,cst_depth$0)}
    function stencil(a){return caml_call2(Bool[2],a,cst_stencil$0)}
    function antialias(a){return caml_call2(Bool[2],a,cst_antialias$0)}
    function premultiplied_alpha(a)
     {return caml_call2(Bool[2],a,cst_premultipliedApha$0)}
    function preserve_drawing_buffer(a)
     {return caml_call2(Bool[2],a,cst_preserveDrawingBuffer$0)}
    function power_preference(a)
     {return caml_call2(_e_[2],a,cst_powerPreference$0)}
    function desynchronized(a)
     {return caml_call2(Bool[2],a,cst_desynchronized$1)}
    function create$17(opt,_d7_,cnv)
     {if(opt)var sth=opt[1],attrs=sth;else var attrs=fn;
      if(_d7_)var sth$0=_d7_[1],v1=sth$0;else var v1=0;
      var
       _d8_=v1?cst_webgl:cst_webgl2,
       webgl=caml_jsstring_of_string(_d8_),
       _d9_=cnv.getContext(webgl,attrs);
      return to_option(function(_d__){return _d__},_d9_)}
    function canvas$2(c)
     {return find_map(function(_d6_){return _d6_},c,cst_canvas$0)}
    function attrs$0(c){return c.getContextAttributes()}
    function drawing_buffer_width(c)
     {return caml_call2(Int[2],c,cst_drawingBufferWidth)}
    function drawing_buffer_height(c)
     {return caml_call2(Int[2],c,cst_drawingBufferHeight)}
    function is_context_lost(c)
     {return caml_call2(Bool[2],c,cst_isContextLost)}
    function get_supported_extensions(c)
     {return caml_list_of_js_array(c.getSupportedExtensions())}
    function get_extension(c,ext){return c.getExtension(ext)}
    function size(i){return caml_call2(Int[2],i,cst_size$0)}
    function type$9(i){return caml_call2(Int[2],i,cst_type$6)}
    function name$8(i){return caml_call2(_e_[2],i,cst_name$7)}
    var Active_info=[0,size,type$9,name$8];
    function range_min(f){return caml_call2(Int[2],f,cst_rangeMin)}
    function range_max(f){return caml_call2(Int[2],f,cst_rangeMax)}
    function precision(f){return caml_call2(Int[2],f,cst_precision)}
    var Shader_precision_format=[0,range_min,range_max,precision];
    function of_image_data(_d5_){return _d5_}
    function of_img_el(_d4_){return _d4_}
    function of_canvas_el(_d3_){return _d3_}
    function of_video_el(_d2_){return _d2_}
    function of_offscreen_canvas(_d1_){return _d1_}
    var
     Tex_image_source=
      [0,of_image_data,of_img_el,of_canvas_el,of_video_el,of_offscreen_canvas];
    function active_texture(c,texture){c.activeTexture(texture);return 0}
    function attach_shader(c,program,shader)
     {c.attachShader(program,shader);return 0}
    function begin_query(c,target,query){c.beginQuery(target,query);return 0}
    function begin_transform_feedback(c,primitiveMode)
     {c.beginTransformFeedback(primitiveMode);return 0}
    function bind_attrib_location(c,program,index,name)
     {c.bindAttribLocation(program,index,name);return 0}
    function bind_buffer(c,target,buffer)
     {c.bindBuffer
       (target,of_option(null$0,function(_d0_){return _d0_},buffer));
      return 0}
    function bind_buffer_base(c,target,index,buffer)
     {c.bindBufferBase(target,index,buffer);return 0}
    function bind_buffer_range(c,target,index,buffer,offset,size)
     {c.bindBufferRange(target,index,buffer,offset,size);return 0}
    function bind_framebuffer(c,target,framebuffer)
     {c.bindFramebuffer
       (target,of_option(null$0,function(_dZ_){return _dZ_},framebuffer));
      return 0}
    function bind_renderbuffer(c,target,renderbuffer)
     {c.bindRenderbuffer
       (target,of_option(null$0,function(_dY_){return _dY_},renderbuffer));
      return 0}
    function bind_sampler(c,unit,sampler)
     {c.bindSampler
       (unit,of_option(null$0,function(_dX_){return _dX_},sampler));
      return 0}
    function bind_texture(c,target,texture)
     {c.bindTexture
       (target,of_option(null$0,function(_dW_){return _dW_},texture));
      return 0}
    function bind_transform_feedback(c,target,tf)
     {c.bindTransformFeedback
       (target,of_option(null$0,function(_dV_){return _dV_},tf));
      return 0}
    function bind_vertex_array(c,array)
     {c.bindVertexArray(of_option(null$0,function(_dU_){return _dU_},array));
      return 0}
    function blend_color(c,red,green,blue,alpha)
     {c.blendColor(red,green,blue,alpha);return 0}
    function blend_equation(c,mode){c.blendEquation(mode);return 0}
    function blend_equation_separate(c,modeRGB,modeAlpha)
     {c.blendEquationSeparate(modeRGB,modeAlpha);return 0}
    function blend_func(c,sfactor,dfactor)
     {c.blendFunc(sfactor,dfactor);return 0}
    function blend_func_separate(c,srcRGB,dstRGB,srcAlpha,dstAlpha)
     {c.blendFuncSeparate(srcRGB,dstRGB,srcAlpha,dstAlpha);return 0}
    function blit_framebuffer
     (c,srcX0,srcY0,srcX1,srcY1,dstX0,dstY0,dstX1,dstY1,mask,filter)
     {c.blitFramebuffer
       (srcX0,srcY0,srcX1,srcY1,dstX0,dstY0,dstX1,dstY1,mask,filter);
      return 0}
    function buffer_data(c,target,srcData,usage)
     {c.bufferData(target,srcData,usage);return 0}
    function buffer_data_size(c,target,size,usage)
     {c.bufferData(target,size,usage);return 0}
    function buffer_sub_data(c,target,dstByteOffset,srcData)
     {c.bufferSubData(target,dstByteOffset,srcData);return 0}
    function check_framebuffer_status(c,target)
     {return c.checkFramebufferStatus(target)}
    function clear$3(c,mask){c.clear(mask);return 0}
    function clear_bufferfi(c,buffer,drawbuffer,depth,stencil)
     {c.clearBufferfi(buffer,drawbuffer,depth,stencil);return 0}
    function clear_bufferfv(c,buffer,drawbuffer,values)
     {c.clearBufferfv(buffer,drawbuffer,values);return 0}
    function clear_bufferiv(c,buffer,drawbuffer,values)
     {c.clearBufferiv(buffer,drawbuffer,values);return 0}
    function clear_bufferuiv(c,buffer,drawbuffer,values)
     {c.clearBufferuiv(buffer,drawbuffer,values);return 0}
    function clear_color(c,red,green,blue,alpha)
     {c.clearColor(red,green,blue,alpha);return 0}
    function clear_depth(c,depth){c.clearDepth(depth);return 0}
    function clear_stencil(c,s){c.clearStencil(s);return 0}
    function client_wait_sync(c,sync,flags,timeout)
     {return c.clientWaitSync(sync,flags,timeout)}
    function color_mask(c,red,green,blue,alpha)
     {c.colorMask(! ! red,! ! green,! ! blue,! ! alpha);return 0}
    function compile_shader(c,shader){c.compileShader(shader);return 0}
    function compressed_tex_image2d
     (c,target,level,internalformat,width,height,border,srcData)
     {c.compressedTexImage2D
       (target,level,internalformat,width,height,border,srcData);
      return 0}
    function compressed_tex_image2d_size
     (c,target,level,internalformat,width,height,border,imageSize,offset)
     {c.compressedTexImage2D
       (target,level,internalformat,width,height,border,imageSize,offset);
      return 0}
    function compressed_tex_image3d
     (c,target,level,internalformat,width,height,depth,border,srcData)
     {c.compressedTexImage3D
       (target,level,internalformat,width,height,depth,border,srcData);
      return 0}
    function compressed_tex_image3d_size
     (c,
      target,
      level,
      internalformat,
      width,
      height,
      depth,
      border,
      imageSize,
      offset)
     {c.compressedTexImage3D
       (target,
        level,
        internalformat,
        width,
        height,
        depth,
        border,
        imageSize,
        offset);
      return 0}
    function compressed_tex_sub_image2d
     (c,target,level,xoffset,yoffset,width,height,format,srcData)
     {c.compressedTexSubImage2D
       (target,level,xoffset,yoffset,width,height,format,srcData);
      return 0}
    function compressed_tex_sub_image2d_siz
     (c,target,level,xoffset,yoffset,width,height,format,imageSize,offset)
     {c.compressedTexSubImage2D
       (target,level,xoffset,yoffset,width,height,format,imageSize,offset);
      return 0}
    function compressed_tex_sub_image3d
     (c,
      target,
      level,
      xoffset,
      yoffset,
      zoffset,
      width,
      height,
      depth,
      format,
      srcData)
     {c.compressedTexSubImage3D
       (target,
        level,
        xoffset,
        yoffset,
        zoffset,
        width,
        height,
        depth,
        format,
        srcData);
      return 0}
    function compressed_tex_sub_image3d_siz
     (c,
      target,
      level,
      xoffset,
      yoffset,
      zoffset,
      width,
      height,
      depth,
      format,
      imageSize,
      offset)
     {c.compressedTexSubImage3D
       (target,
        level,
        xoffset,
        yoffset,
        zoffset,
        width,
        height,
        depth,
        format,
        imageSize,
        offset);
      return 0}
    function copy_buffer_sub_data
     (c,readTarget,writeTarget,readOffset,writeOffset,size)
     {c.copyBufferSubData(readTarget,writeTarget,readOffset,writeOffset,size);
      return 0}
    function copy_tex_image2d
     (c,target,level,internalformat,x,y,width,height,border)
     {c.copyTexImage2D(target,level,internalformat,x,y,width,height,border);
      return 0}
    function copy_tex_sub_image2d
     (c,target,level,xoffset,yoffset,x,y,width,height)
     {c.copyTexSubImage2D(target,level,xoffset,yoffset,x,y,width,height);
      return 0}
    function copy_tex_sub_image3d
     (c,target,level,xoffset,yoffset,zoffset,x,y,width,height)
     {c.copyTexSubImage3D
       (target,level,xoffset,yoffset,zoffset,x,y,width,height);
      return 0}
    function create_buffer(c){return c.createBuffer()}
    function create_framebuffer(c){return c.createFramebuffer()}
    function create_program(c){return c.createProgram()}
    function create_query(c){return c.createQuery()}
    function create_renderbuffer(c){return c.createRenderbuffer()}
    function create_sampler(c){return c.createSampler()}
    function create_shader(c,type){return c.createShader(type)}
    function create_texture(c){return c.createTexture()}
    function create_transform_feedback(c){return c.createTransformFeedback()}
    function create_vertex_array(c){return c.createVertexArray()}
    function cull_face(c,mode){c.cullFace(mode);return 0}
    function delete_buffer(c,buffer){c.deleteBuffer(buffer);return 0}
    function delete_framebuffer(c,framebuffer)
     {c.deleteFramebuffer(framebuffer);return 0}
    function delete_program(c,program){c.deleteProgram(program);return 0}
    function delete_query(c,query){c.deleteQuery(query);return 0}
    function delete_renderbuffer(c,renderbuffer)
     {c.deleteRenderbuffer(renderbuffer);return 0}
    function delete_sampler(c,sampler){c.deleteSampler(sampler);return 0}
    function delete_shader(c,shader){c.deleteShader(shader);return 0}
    function delete_sync(c,sync){c.deleteSync(sync);return 0}
    function delete_texture(c,texture){c.deleteTexture(texture);return 0}
    function delete_transform_feedback(c,tf)
     {c.deleteTransformFeedback(tf);return 0}
    function delete_vertex_array(c,vertexArray)
     {c.deleteVertexArray(vertexArray);return 0}
    function depth_func(c,func){c.depthFunc(func);return 0}
    function depth_mask(c,flag){c.depthMask(! ! flag);return 0}
    function detach_shader(c,program,shader)
     {c.detachShader(program,shader);return 0}
    function disable(c,cap){c.disable(cap);return 0}
    function disable_vertex_attrib_array(c,index)
     {c.disableVertexAttribArray(index);return 0}
    function draw_arrays(c,mode,first,count)
     {c.drawArrays(mode,first,count);return 0}
    function draw_arrays_instanced(c,mode,first,count,instanceCount)
     {c.drawArraysInstanced(mode,first,count,instanceCount);return 0}
    function draw_buffers(c,buffers)
     {c.drawBuffers(of_list(function(_dT_){return _dT_},buffers));return 0}
    function draw_elements(c,mode,count,type,offset)
     {c.drawElements(mode,count,type,offset);return 0}
    function draw_elements_instanced(c,mode,count,type,offset,instanceCount)
     {c.drawElementsInstanced(mode,count,type,offset,instanceCount);return 0}
    function draw_range_elements(c,mode,start,end,count,type,offset)
     {c.drawRangeElements(mode,start,end,count,type,offset);return 0}
    function enable(c,cap){c.enable(cap);return 0}
    function enable_vertex_attrib_array(c,index)
     {c.enableVertexAttribArray(index);return 0}
    function end_query(c,target){c.endQuery(target);return 0}
    function end_transform_feedback(c){c.endTransformFeedback();return 0}
    function fence_sync(c,condition,flags)
     {return c.fenceSync(condition,flags)}
    function finish(c){c.finish();return 0}
    function flush(c){c.flush();return 0}
    function framebuffer_renderbuffer
     (c,target,attachment,renderbuffertarget,renderbuffer)
     {c.framebufferRenderbuffer
       (target,attachment,renderbuffertarget,renderbuffer);
      return 0}
    function framebuffer_texture2d
     (c,target,attachment,textarget,texture,level)
     {c.framebufferTexture2D(target,attachment,textarget,texture,level);
      return 0}
    function framebuffer_texture_layer
     (c,target,attachment,texture,level,layer)
     {c.framebufferTextureLayer(target,attachment,texture,level,layer);
      return 0}
    function front_face(c,mode){c.frontFace(mode);return 0}
    function generate_mipmap(c,target){c.generateMipmap(target);return 0}
    function get_active_attrib(c,program,index)
     {return c.getActiveAttrib(program,index)}
    function get_active_uniform(c,program,index)
     {return c.getActiveUniform(program,index)}
    function get_active_uniform_block_name(c,program,uniformBlockIndex)
     {return c.getActiveUniformBlockName(program,uniformBlockIndex)}
    function get_active_uniform_block_param(c,program,uniformBlockIndex,pname)
     {return c.getActiveUniformBlockParameter(program,uniformBlockIndex,pname)}
    function get_active_uniforms(c,program,uniformIndices,pname)
     {return c.getActiveUniforms
              (program,
               of_list(function(_dS_){return _dS_},uniformIndices),
               pname)}
    function get_attached_shaders(c,program)
     {return caml_list_of_js_array(c.getAttachedShaders(program))}
    function get_attrib_location(c,program,name)
     {return c.getAttribLocation(program,name)}
    function get_buffer_parameter(c,target,pname)
     {return c.getBufferParameter(target,pname)}
    function get_buffer_sub_data(c,target,srcByteOffset,dstBuffer)
     {c.getBufferSubData(target,srcByteOffset,dstBuffer);return 0}
    function get_error(c){return c.getError()}
    function get_frag_data_location(c,program,name)
     {return c.getFragDataLocation(program,name)}
    function get_framebuffer_attachment_par(c,target,attachment,pname)
     {return c.getFramebufferAttachmentParameter(target,attachment,pname)}
    function get_indexed_parameter(c,target,index)
     {return c.getIndexedParameter(target,index)}
    function get_internalformat_parameter(c,target,internalformat,pname)
     {return c.getInternalformatParameter(target,internalformat,pname)}
    function get_parameter(c,pname){return c.getParameter(pname)}
    function get_program_info_log(c,program)
     {return c.getProgramInfoLog(program)}
    function get_program_parameter(c,program,pname)
     {return c.getProgramParameter(program,pname)}
    function get_query(c,target,pname){return c.getQuery(target,pname)}
    function get_query_parameter(c,query,pname)
     {return c.getQueryParameter(query,pname)}
    function get_renderbuffer_parameter(c,target,pname)
     {return c.getRenderbufferParameter(target,pname)}
    function get_sampler_parameter(c,sampler,pname)
     {return c.getSamplerParameter(sampler,pname)}
    function get_shader_info_log(c,shader){return c.getShaderInfoLog(shader)}
    function get_shader_parameter(c,shader,pname)
     {return c.getShaderParameter(shader,pname)}
    function get_shader_precision_format(c,shadertype,precisiontype)
     {return c.getShaderPrecisionFormat(shadertype,precisiontype)}
    function get_shader_source(c,shader){return c.getShaderSource(shader)}
    function get_sync_parameter(c,sync,pname)
     {return c.getSyncParameter(sync,pname)}
    function get_tex_parameter(c,target,pname)
     {return c.getTexParameter(target,pname)}
    function get_transform_feedback_varying(c,program,index)
     {return c.getTransformFeedbackVarying(program,index)}
    function get_uniform(c,program,location)
     {return c.getUniform(program,location)}
    function get_uniform_block_index(c,program,uniformBlockName)
     {return c.getUniformBlockIndex(program,uniformBlockName)}
    function get_uniform_indices(c,program,uniformNames)
     {var
       _dQ_=
        c.getUniformIndices(program,caml_list_to_js_array(uniformNames));
      return to_list(function(_dR_){return _dR_},_dQ_)}
    function get_uniform_location(c,program,name)
     {return c.getUniformLocation(program,name)}
    function get_vertex_attrib(c,index,pname)
     {return c.getVertexAttrib(index,pname)}
    function get_vertex_attrib_offset(c,index,pname)
     {return c.getVertexAttribOffset(index,pname)}
    function hint(c,target,mode){c.hint(target,mode);return 0}
    function invalidate_framebuffer(c,target,attachments)
     {c.invalidateFramebuffer
       (target,of_list(function(_dP_){return _dP_},attachments));
      return 0}
    function invalidate_sub_framebuffer(c,target,attachments,x,y,width,height)
     {c.invalidateSubFramebuffer
       (target,
        of_list(function(_dO_){return _dO_},attachments),
        x,
        y,
        width,
        height);
      return 0}
    function is_buffer(c,buffer){return c.isBuffer(buffer) | 0}
    function is_enabled(c,cap){return c.isEnabled(cap) | 0}
    function is_framebuffer(c,framebuffer)
     {return c.isFramebuffer(framebuffer) | 0}
    function is_program(c,program){return c.isProgram(program) | 0}
    function is_query(c,query){return c.isQuery(query) | 0}
    function is_renderbuffer(c,renderbuffer)
     {return c.isRenderbuffer(renderbuffer) | 0}
    function is_sampler(c,sampler){return c.isSampler(sampler) | 0}
    function is_shader(c,shader){return c.isShader(shader) | 0}
    function is_texture(c,texture){return c.isTexture(texture) | 0}
    function is_transform_feedback(c,tf){return c.isTransformFeedback(tf) | 0}
    function is_vertex_array(c,vertexArray)
     {return c.isVertexArray(vertexArray) | 0}
    function line_width$0(c,width){c.lineWidth(width);return 0}
    function link_program(c,program){c.linkProgram(program);return 0}
    function pause_transform_feedback(c){c.pauseTransformFeedback();return 0}
    function pixel_storei(c,pname,param){c.pixelStorei(pname,param);return 0}
    function polygon_offset(c,factor,units)
     {c.polygonOffset(factor,units);return 0}
    function read_buffer(c,src){c.readBuffer(src);return 0}
    function read_pixels_to_pixel_pack(c,x,y,width,height,format,type,offset)
     {c.readPixels(x,y,width,height,format,type,offset);return 0}
    function read_pixels(c,x,y,width,height,format,type,dstData)
     {c.readPixels(x,y,width,height,format,type,dstData);return 0}
    function renderbuffer_storage(c,target,internalformat,width,height)
     {c.renderbufferStorage(target,internalformat,width,height);return 0}
    function renderbuffer_storage_multisamp
     (c,target,samples,internalformat,width,height)
     {c.renderbufferStorageMultisample
       (target,samples,internalformat,width,height);
      return 0}
    function resume_transform_feedback(c)
     {c.resumeTransformFeedback();return 0}
    function sample_coverage(c,value,invert)
     {c.sampleCoverage(value,! ! invert);return 0}
    function sampler_parameterf(c,sampler,pname,param)
     {c.samplerParameterf(sampler,pname,param);return 0}
    function sampler_parameteri(c,sampler,pname,param)
     {c.samplerParameteri(sampler,pname,param);return 0}
    function scissor(c,x,y,width,height){c.scissor(x,y,width,height);return 0}
    function shader_source(c,shader,source)
     {c.shaderSource(shader,source);return 0}
    function stencil_func(c,func,ref,mask)
     {c.stencilFunc(func,ref,mask);return 0}
    function stencil_func_separate(c,face,func,ref,mask)
     {c.stencilFuncSeparate(face,func,ref,mask);return 0}
    function stencil_mask(c,mask){c.stencilMask(mask);return 0}
    function stencil_mask_separate(c,face,mask)
     {c.stencilMaskSeparate(face,mask);return 0}
    function stencil_op(c,fail,zfail,zpass)
     {c.stencilOp(fail,zfail,zpass);return 0}
    function stencil_op_separate(c,face,fail,zfail,zpass)
     {c.stencilOpSeparate(face,fail,zfail,zpass);return 0}
    function tex_image2d
     (c,
      target,
      level,
      internalformat,
      width,
      height,
      border,
      format,
      type,
      srcData,
      srcOffset)
     {c.texImage2D
       (target,
        level,
        internalformat,
        width,
        height,
        border,
        format,
        type,
        srcData,
        srcOffset);
      return 0}
    function tex_image2d_of_source
     (c,target,level,internalformat,width,height,border,format,type,source)
     {c.texImage2D
       (target,level,internalformat,width,height,border,format,type,source);
      return 0}
    function tex_image2d_of_pixel_unpack
     (c,target,level,internalformat,width,height,border,format,type,pboOffset)
     {c.texImage2D
       (target,level,internalformat,width,height,border,format,type,pboOffset);
      return 0}
    function tex_image3d
     (c,
      target,
      level,
      internalformat,
      width,
      height,
      depth,
      border,
      format,
      type,
      srcData,
      srcOffset)
     {c.texImage3D
       (target,
        level,
        internalformat,
        width,
        height,
        depth,
        border,
        format,
        type,
        srcData,
        srcOffset);
      return 0}
    function tex_image3d_of_source
     (c,
      target,
      level,
      internalformat,
      width,
      height,
      depth,
      border,
      format,
      type,
      source)
     {c.texImage3D
       (target,
        level,
        internalformat,
        width,
        height,
        depth,
        border,
        format,
        type,
        source);
      return 0}
    function tex_image3d_of_pixel_unpack
     (c,
      target,
      level,
      internalformat,
      width,
      height,
      depth,
      border,
      format,
      type,
      pboOffset)
     {c.texImage3D
       (target,
        level,
        internalformat,
        width,
        height,
        depth,
        border,
        format,
        type,
        pboOffset);
      return 0}
    function tex_parameterf(c,target,pname,param)
     {c.texParameterf(target,pname,param);return 0}
    function tex_parameteri(c,target,pname,param)
     {c.texParameteri(target,pname,param);return 0}
    function tex_storage2d(c,target,levels,internalformat,width,height)
     {c.texStorage2D(target,levels,internalformat,width,height);return 0}
    function tex_storage3d(c,target,levels,internalformat,width,height,depth)
     {c.texStorage3D(target,levels,internalformat,width,height,depth);
      return 0}
    function tex_sub_image2d
     (c,
      target,
      level,
      xoffset,
      yoffset,
      width,
      height,
      format,
      type,
      srcData,
      srcOffset)
     {c.texSubImage2D
       (target,
        level,
        xoffset,
        yoffset,
        width,
        height,
        format,
        type,
        srcData,
        srcOffset);
      return 0}
    function tex_sub_image2d_of_source
     (c,target,level,xoffset,yoffset,width,height,format,type,source)
     {c.texSubImage2D
       (target,level,xoffset,yoffset,width,height,format,type,source);
      return 0}
    function tex_sub_image2d_of_pixel_unpac
     (c,target,level,xoffset,yoffset,width,height,format,type,pboOffset)
     {c.texSubImage2D
       (target,level,xoffset,yoffset,width,height,format,type,pboOffset);
      return 0}
    function tex_sub_image3d
     (c,
      target,
      level,
      xoffset,
      yoffset,
      zoffset,
      width,
      height,
      depth,
      format,
      type,
      srcData)
     {c.texSubImage3D
       (target,
        level,
        xoffset,
        yoffset,
        zoffset,
        width,
        height,
        depth,
        format,
        type,
        srcData);
      return 0}
    function tex_sub_image3d_of_source
     (c,
      target,
      level,
      xoffset,
      yoffset,
      zoffset,
      width,
      height,
      depth,
      format,
      type,
      source)
     {c.texSubImage3D
       (target,
        level,
        xoffset,
        yoffset,
        zoffset,
        width,
        height,
        depth,
        format,
        type,
        source);
      return 0}
    function tex_sub_image3d_of_pixel_unpac
     (c,
      target,
      level,
      xoffset,
      yoffset,
      zoffset,
      width,
      height,
      depth,
      format,
      type,
      pboOffset)
     {c.texSubImage3D
       (target,
        level,
        xoffset,
        yoffset,
        zoffset,
        width,
        height,
        depth,
        format,
        type,
        pboOffset);
      return 0}
    function transform_feedback_varyings(c,program,varyings,bufferMode)
     {c.transformFeedbackVaryings
       (program,caml_list_to_js_array(varyings),bufferMode);
      return 0}
    function uniform1f(c,location,x){c.uniform1f(location,x);return 0}
    function uniform1fv(c,location,data){c.uniform1fv(location,data);return 0}
    function uniform1i(c,location,x){c.uniform1i(location,x);return 0}
    function uniform1iv(c,location,data){c.uniform1iv(location,data);return 0}
    function uniform1ui(c,location,v0){c.uniform1ui(location,v0);return 0}
    function uniform1uiv(c,location,data)
     {c.uniform1uiv(location,data);return 0}
    function uniform2f(c,location,x,y){c.uniform2f(location,x,y);return 0}
    function uniform2fv(c,location,data){c.uniform2fv(location,data);return 0}
    function uniform2i(c,location,x,y){c.uniform2i(location,x,y);return 0}
    function uniform2iv(c,location,data){c.uniform2iv(location,data);return 0}
    function uniform2ui(c,location,v0,v1)
     {c.uniform2ui(location,v0,v1);return 0}
    function uniform2uiv(c,location,data)
     {c.uniform2uiv(location,data);return 0}
    function uniform3f(c,location,x,y,z){c.uniform3f(location,x,y,z);return 0}
    function uniform3fv(c,location,data){c.uniform3fv(location,data);return 0}
    function uniform3i(c,location,x,y,z){c.uniform3i(location,x,y,z);return 0}
    function uniform3iv(c,location,data){c.uniform3iv(location,data);return 0}
    function uniform3ui(c,location,v0,v1,v2)
     {c.uniform3ui(location,v0,v1,v2);return 0}
    function uniform3uiv(c,location,data)
     {c.uniform3uiv(location,data);return 0}
    function uniform4f(c,location,x,y,z,w)
     {c.uniform4f(location,x,y,z,w);return 0}
    function uniform4fv(c,location,data){c.uniform4fv(location,data);return 0}
    function uniform4i(c,location,x,y,z,w)
     {c.uniform4i(location,x,y,z,w);return 0}
    function uniform4iv(c,location,data){c.uniform4iv(location,data);return 0}
    function uniform4ui(c,location,v0,v1,v2,v3)
     {c.uniform4ui(location,v0,v1,v2,v3);return 0}
    function uniform4uiv(c,location,data)
     {c.uniform4uiv(location,data);return 0}
    function uniform_block_binding
     (c,program,uniformBlockIndex,uniformBlockBinding)
     {c.uniformBlockBinding(program,uniformBlockIndex,uniformBlockBinding);
      return 0}
    function uniform_matrix2fv(c,location,transpose,data)
     {c.uniformMatrix2fv(location,! ! transpose,data);return 0}
    function uniform_matrix2x3fv(c,location,transpose,data)
     {c.uniformMatrix2x3fv(location,! ! transpose,data);return 0}
    function uniform_matrix2x4fv(c,location,transpose,data)
     {c.uniformMatrix2x4fv(location,! ! transpose,data);return 0}
    function uniform_matrix3fv(c,location,transpose,data)
     {c.uniformMatrix3fv(location,! ! transpose,data);return 0}
    function uniform_matrix3x2fv(c,location,transpose,data)
     {c.uniformMatrix3x2fv(location,! ! transpose,data);return 0}
    function uniform_matrix3x4fv(c,location,transpose,data)
     {c.uniformMatrix3x4fv(location,! ! transpose,data);return 0}
    function uniform_matrix4fv(c,location,transpose,data)
     {c.uniformMatrix4fv(location,! ! transpose,data);return 0}
    function uniform_matrix4x2fv(c,location,transpose,data)
     {c.uniformMatrix4x2fv(location,! ! transpose,data);return 0}
    function uniform_matrix4x3fv(c,location,transpose,data)
     {c.uniformMatrix4x3fv(location,! ! transpose,data);return 0}
    function use_program(c,program){c.useProgram(program);return 0}
    function validate_program(c,program){c.validateProgram(program);return 0}
    function vertex_attrib1f(c,index,x){c.vertexAttrib1f(index,x);return 0}
    function vertex_attrib1fv(c,index,values)
     {c.vertexAttrib1fv(index,values);return 0}
    function vertex_attrib2f(c,index,x,y)
     {c.vertexAttrib2f(index,x,y);return 0}
    function vertex_attrib2fv(c,index,values)
     {c.vertexAttrib2fv(index,values);return 0}
    function vertex_attrib3f(c,index,x,y,z)
     {c.vertexAttrib3f(index,x,y,z);return 0}
    function vertex_attrib3fv(c,index,values)
     {c.vertexAttrib3fv(index,values);return 0}
    function vertex_attrib4f(c,index,x,y,z,w)
     {c.vertexAttrib4f(index,x,y,z,w);return 0}
    function vertex_attrib4fv(c,index,values)
     {c.vertexAttrib4fv(index,values);return 0}
    function vertex_attrib_divisor(c,index,divisor)
     {c.vertexAttribDivisor(index,divisor);return 0}
    function vertex_attrib_i4i(c,index,x,y,z,w)
     {c.vertexAttribI4i(index,x,y,z,w);return 0}
    function vertex_attrib_i4iv(c,index,values)
     {c.vertexAttribI4iv(index,values);return 0}
    function vertex_attrib_i4ui(c,index,x,y,z,w)
     {c.vertexAttribI4ui(index,x,y,z,w);return 0}
    function vertex_attrib_i4uiv(c,index,values)
     {c.vertexAttribI4uiv(index,values);return 0}
    function vertex_attrib_ipointer(c,index,size,type,stride,offset)
     {c.vertexAttribIPointer(index,size,type,stride,offset);return 0}
    function vertex_attrib_pointer(c,index,size,type,normalized,stride,offset)
     {c.vertexAttribPointer(index,size,type,! ! normalized,stride,offset);
      return 0}
    function viewport(c,x,y,width,height)
     {c.viewport(x,y,width,height);return 0}
    function wait_sync(c,sync,flags,timeout)
     {c.waitSync(sync,flags,timeout);return 0}
    var
     gl1ctx=target[cst_WebGLRenderingContext],
     depth_buffer_bit=caml_call2(Int[2],gl1ctx,cst_DEPTH_BUFFER_BIT),
     stencil_buffer_bit=caml_call2(Int[2],gl1ctx,cst_STENCIL_BUFFER_BIT),
     color_buffer_bit=caml_call2(Int[2],gl1ctx,cst_COLOR_BUFFER_BIT),
     points=caml_call2(Int[2],gl1ctx,cst_POINTS),
     lines=caml_call2(Int[2],gl1ctx,cst_LINES),
     line_loop=caml_call2(Int[2],gl1ctx,cst_LINE_LOOP),
     line_strip=caml_call2(Int[2],gl1ctx,cst_LINE_STRIP),
     triangles=caml_call2(Int[2],gl1ctx,cst_TRIANGLES),
     triangle_strip=caml_call2(Int[2],gl1ctx,cst_TRIANGLE_STRIP),
     triangle_fan=caml_call2(Int[2],gl1ctx,cst_TRIANGLE_FAN),
     zero=caml_call2(Int[2],gl1ctx,cst_ZERO),
     one=caml_call2(Int[2],gl1ctx,cst_ONE),
     src_color=caml_call2(Int[2],gl1ctx,cst_SRC_COLOR),
     one_minus_src_color=caml_call2(Int[2],gl1ctx,cst_ONE_MINUS_SRC_COLOR),
     src_alpha=caml_call2(Int[2],gl1ctx,cst_SRC_ALPHA),
     one_minus_src_alpha=caml_call2(Int[2],gl1ctx,cst_ONE_MINUS_SRC_ALPHA),
     dst_alpha=caml_call2(Int[2],gl1ctx,cst_DST_ALPHA),
     one_minus_dst_alpha=caml_call2(Int[2],gl1ctx,cst_ONE_MINUS_DST_ALPHA),
     dst_color=caml_call2(Int[2],gl1ctx,cst_DST_COLOR),
     one_minus_dst_color=caml_call2(Int[2],gl1ctx,cst_ONE_MINUS_DST_COLOR),
     src_alpha_saturate=caml_call2(Int[2],gl1ctx,cst_SRC_ALPHA_SATURATE),
     func_add=caml_call2(Int[2],gl1ctx,cst_FUNC_ADD),
     blend_equation$0=caml_call2(Int[2],gl1ctx,cst_BLEND_EQUATION),
     blend_equation_rgb=caml_call2(Int[2],gl1ctx,cst_BLEND_EQUATION_RGB),
     blend_equation_alpha=caml_call2(Int[2],gl1ctx,cst_BLEND_EQUATION_ALPHA),
     func_subtract=caml_call2(Int[2],gl1ctx,cst_FUNC_SUBTRACT),
     func_reverse_subtract=caml_call2(Int[2],gl1ctx,cst_FUNC_REVERSE_SUBTRACT),
     blend_dst_rgb=caml_call2(Int[2],gl1ctx,cst_BLEND_DST_RGB),
     blend_src_rgb=caml_call2(Int[2],gl1ctx,cst_BLEND_SRC_RGB),
     blend_dst_alpha=caml_call2(Int[2],gl1ctx,cst_BLEND_DST_ALPHA),
     blend_src_alpha=caml_call2(Int[2],gl1ctx,cst_BLEND_SRC_ALPHA),
     constant_color=caml_call2(Int[2],gl1ctx,cst_CONSTANT_COLOR),
     one_minus_constant_color=
      caml_call2(Int[2],gl1ctx,cst_ONE_MINUS_CONSTANT_COLOR),
     constant_alpha=caml_call2(Int[2],gl1ctx,cst_CONSTANT_ALPHA),
     one_minus_constant_alpha=
      caml_call2(Int[2],gl1ctx,cst_ONE_MINUS_CONSTANT_ALPHA),
     blend_color$0=caml_call2(Int[2],gl1ctx,cst_BLEND_COLOR),
     array_buffer$2=caml_call2(Int[2],gl1ctx,cst_ARRAY_BUFFER),
     element_array_buffer=caml_call2(Int[2],gl1ctx,cst_ELEMENT_ARRAY_BUFFER),
     array_buffer_binding=caml_call2(Int[2],gl1ctx,cst_ARRAY_BUFFER_BINDING),
     element_array_buffer_binding=
      caml_call2(Int[2],gl1ctx,cst_ELEMENT_ARRAY_BUFFER_BINDI),
     stream_draw=caml_call2(Int[2],gl1ctx,cst_STREAM_DRAW),
     static_draw=caml_call2(Int[2],gl1ctx,cst_STATIC_DRAW),
     dynamic_draw=caml_call2(Int[2],gl1ctx,cst_DYNAMIC_DRAW),
     buffer_size=caml_call2(Int[2],gl1ctx,cst_BUFFER_SIZE),
     buffer_usage=caml_call2(Int[2],gl1ctx,cst_BUFFER_USAGE),
     current_vertex_attrib=caml_call2(Int[2],gl1ctx,cst_CURRENT_VERTEX_ATTRIB),
     front=caml_call2(Int[2],gl1ctx,cst_FRONT),
     back$0=caml_call2(Int[2],gl1ctx,cst_BACK),
     front_and_back=caml_call2(Int[2],gl1ctx,cst_FRONT_AND_BACK),
     cull_face$0=caml_call2(Int[2],gl1ctx,cst_CULL_FACE),
     blend=caml_call2(Int[2],gl1ctx,cst_BLEND),
     dither=caml_call2(Int[2],gl1ctx,cst_DITHER),
     stencil_test=caml_call2(Int[2],gl1ctx,cst_STENCIL_TEST),
     depth_test=caml_call2(Int[2],gl1ctx,cst_DEPTH_TEST),
     scissor_test=caml_call2(Int[2],gl1ctx,cst_SCISSOR_TEST),
     polygon_offset_fill=caml_call2(Int[2],gl1ctx,cst_POLYGON_OFFSET_FILL),
     sample_alpha_to_coverage=
      caml_call2(Int[2],gl1ctx,cst_SAMPLE_ALPHA_TO_COVERAGE),
     sample_coverage$0=caml_call2(Int[2],gl1ctx,cst_SAMPLE_COVERAGE),
     no_error=caml_call2(Int[2],gl1ctx,cst_NO_ERROR),
     invalid_enum=caml_call2(Int[2],gl1ctx,cst_INVALID_ENUM),
     invalid_value=caml_call2(Int[2],gl1ctx,cst_INVALID_VALUE),
     invalid_operation=caml_call2(Int[2],gl1ctx,cst_INVALID_OPERATION),
     out_of_memory=caml_call2(Int[2],gl1ctx,cst_OUT_OF_MEMORY),
     cw=caml_call2(Int[2],gl1ctx,cst_CW),
     ccw=caml_call2(Int[2],gl1ctx,cst_CCW),
     line_width$1=caml_call2(Int[2],gl1ctx,cst_LINE_WIDTH),
     aliased_point_size_range=
      caml_call2(Int[2],gl1ctx,cst_ALIASED_POINT_SIZE_RANGE),
     aliased_line_width_range=
      caml_call2(Int[2],gl1ctx,cst_ALIASED_LINE_WIDTH_RANGE),
     cull_face_mode=caml_call2(Int[2],gl1ctx,cst_CULL_FACE_MODE),
     front_face$0=caml_call2(Int[2],gl1ctx,cst_FRONT_FACE),
     depth_range=caml_call2(Int[2],gl1ctx,cst_DEPTH_RANGE),
     depth_writemask=caml_call2(Int[2],gl1ctx,cst_DEPTH_WRITEMASK),
     depth_clear_value=caml_call2(Int[2],gl1ctx,cst_DEPTH_CLEAR_VALUE),
     depth_func$0=caml_call2(Int[2],gl1ctx,cst_DEPTH_FUNC),
     stencil_clear_value=caml_call2(Int[2],gl1ctx,cst_STENCIL_CLEAR_VALUE),
     stencil_func$0=caml_call2(Int[2],gl1ctx,cst_STENCIL_FUNC),
     stencil_fail=caml_call2(Int[2],gl1ctx,cst_STENCIL_FAIL),
     stencil_pass_depth_fail=
      caml_call2(Int[2],gl1ctx,cst_STENCIL_PASS_DEPTH_FAIL),
     stencil_pass_depth_pass=
      caml_call2(Int[2],gl1ctx,cst_STENCIL_PASS_DEPTH_PASS),
     stencil_ref=caml_call2(Int[2],gl1ctx,cst_STENCIL_REF),
     stencil_value_mask=caml_call2(Int[2],gl1ctx,cst_STENCIL_VALUE_MASK),
     stencil_writemask=caml_call2(Int[2],gl1ctx,cst_STENCIL_WRITEMASK),
     stencil_back_func=caml_call2(Int[2],gl1ctx,cst_STENCIL_BACK_FUNC),
     stencil_back_fail=caml_call2(Int[2],gl1ctx,cst_STENCIL_BACK_FAIL),
     stencil_back_pass_depth_fail=
      caml_call2(Int[2],gl1ctx,cst_STENCIL_BACK_PASS_DEPTH_FA),
     stencil_back_pass_depth_pass=
      caml_call2(Int[2],gl1ctx,cst_STENCIL_BACK_PASS_DEPTH_PA),
     stencil_back_ref=caml_call2(Int[2],gl1ctx,cst_STENCIL_BACK_REF),
     stencil_back_value_mask=
      caml_call2(Int[2],gl1ctx,cst_STENCIL_BACK_VALUE_MASK),
     stencil_back_writemask=
      caml_call2(Int[2],gl1ctx,cst_STENCIL_BACK_WRITEMASK),
     viewport$0=caml_call2(Int[2],gl1ctx,cst_VIEWPORT),
     scissor_box=caml_call2(Int[2],gl1ctx,cst_SCISSOR_BOX),
     color_clear_value=caml_call2(Int[2],gl1ctx,cst_COLOR_CLEAR_VALUE),
     color_writemask=caml_call2(Int[2],gl1ctx,cst_COLOR_WRITEMASK),
     unpack_alignment=caml_call2(Int[2],gl1ctx,cst_UNPACK_ALIGNMENT),
     pack_alignment=caml_call2(Int[2],gl1ctx,cst_PACK_ALIGNMENT),
     max_texture_size=caml_call2(Int[2],gl1ctx,cst_MAX_TEXTURE_SIZE),
     max_viewport_dims=caml_call2(Int[2],gl1ctx,cst_MAX_VIEWPORT_DIMS),
     subpixel_bits=caml_call2(Int[2],gl1ctx,cst_SUBPIXEL_BITS),
     red_bits=caml_call2(Int[2],gl1ctx,cst_RED_BITS),
     green_bits=caml_call2(Int[2],gl1ctx,cst_GREEN_BITS),
     blue_bits=caml_call2(Int[2],gl1ctx,cst_BLUE_BITS),
     alpha_bits=caml_call2(Int[2],gl1ctx,cst_ALPHA_BITS),
     depth_bits=caml_call2(Int[2],gl1ctx,cst_DEPTH_BITS),
     stencil_bits=caml_call2(Int[2],gl1ctx,cst_STENCIL_BITS),
     polygon_offset_units=caml_call2(Int[2],gl1ctx,cst_POLYGON_OFFSET_UNITS),
     polygon_offset_factor=caml_call2(Int[2],gl1ctx,cst_POLYGON_OFFSET_FACTOR),
     texture_binding_2d=caml_call2(Int[2],gl1ctx,cst_TEXTURE_BINDING_2D),
     sample_buffers=caml_call2(Int[2],gl1ctx,cst_SAMPLE_BUFFERS),
     samples=caml_call2(Int[2],gl1ctx,cst_SAMPLES),
     sample_coverage_value=caml_call2(Int[2],gl1ctx,cst_SAMPLE_COVERAGE_VALUE),
     sample_coverage_invert=
      caml_call2(Int[2],gl1ctx,cst_SAMPLE_COVERAGE_INVERT),
     compressed_texture_formats=
      caml_call2(Int[2],gl1ctx,cst_COMPRESSED_TEXTURE_FORMATS),
     dont_care=caml_call2(Int[2],gl1ctx,cst_DONT_CARE),
     fastest=caml_call2(Int[2],gl1ctx,cst_FASTEST),
     nicest=caml_call2(Int[2],gl1ctx,cst_NICEST),
     generate_mipmap_hint=caml_call2(Int[2],gl1ctx,cst_GENERATE_MIPMAP_HINT),
     byte$0=caml_call2(Int[2],gl1ctx,cst_BYTE),
     unsigned_byte=caml_call2(Int[2],gl1ctx,cst_UNSIGNED_BYTE),
     short$0=caml_call2(Int[2],gl1ctx,cst_SHORT),
     unsigned_short=caml_call2(Int[2],gl1ctx,cst_UNSIGNED_SHORT),
     int$3=caml_call2(Int[2],gl1ctx,cst_INT),
     unsigned_int=caml_call2(Int[2],gl1ctx,cst_UNSIGNED_INT),
     float$2=caml_call2(Int[2],gl1ctx,cst_FLOAT),
     depth_component=caml_call2(Int[2],gl1ctx,cst_DEPTH_COMPONENT),
     alpha$0=caml_call2(Int[2],gl1ctx,cst_ALPHA),
     rgb=caml_call2(Int[2],gl1ctx,cst_RGB),
     rgba=caml_call2(Int[2],gl1ctx,cst_RGBA),
     luminance=caml_call2(Int[2],gl1ctx,cst_LUMINANCE),
     luminance_alpha=caml_call2(Int[2],gl1ctx,cst_LUMINANCE_ALPHA),
     unsigned_short_4_4_4_4=
      caml_call2(Int[2],gl1ctx,cst_UNSIGNED_SHORT_4_4_4_4),
     unsigned_short_5_5_5_1=
      caml_call2(Int[2],gl1ctx,cst_UNSIGNED_SHORT_5_5_5_1),
     unsigned_short_5_6_5=caml_call2(Int[2],gl1ctx,cst_UNSIGNED_SHORT_5_6_5),
     fragment_shader=caml_call2(Int[2],gl1ctx,cst_FRAGMENT_SHADER),
     vertex_shader=caml_call2(Int[2],gl1ctx,cst_VERTEX_SHADER),
     max_vertex_attribs=caml_call2(Int[2],gl1ctx,cst_MAX_VERTEX_ATTRIBS),
     max_vertex_uniform_vectors=
      caml_call2(Int[2],gl1ctx,cst_MAX_VERTEX_UNIFORM_VECTORS),
     max_varying_vectors=caml_call2(Int[2],gl1ctx,cst_MAX_VARYING_VECTORS),
     max_combined_texture_image_uni=
      caml_call2(Int[2],gl1ctx,cst_MAX_COMBINED_TEXTURE_IMAGE),
     max_vertex_texture_image_units=
      caml_call2(Int[2],gl1ctx,cst_MAX_VERTEX_TEXTURE_IMAGE_U),
     max_texture_image_units=
      caml_call2(Int[2],gl1ctx,cst_MAX_TEXTURE_IMAGE_UNITS),
     max_fragment_uniform_vectors=
      caml_call2(Int[2],gl1ctx,cst_MAX_FRAGMENT_UNIFORM_VECTO),
     shader_type=caml_call2(Int[2],gl1ctx,cst_SHADER_TYPE),
     delete_status=caml_call2(Int[2],gl1ctx,cst_DELETE_STATUS),
     link_status=caml_call2(Int[2],gl1ctx,cst_LINK_STATUS),
     validate_status=caml_call2(Int[2],gl1ctx,cst_VALIDATE_STATUS),
     attached_shaders=caml_call2(Int[2],gl1ctx,cst_ATTACHED_SHADERS),
     active_uniforms=caml_call2(Int[2],gl1ctx,cst_ACTIVE_UNIFORMS),
     active_attributes=caml_call2(Int[2],gl1ctx,cst_ACTIVE_ATTRIBUTES),
     shading_language_version=
      caml_call2(Int[2],gl1ctx,cst_SHADING_LANGUAGE_VERSION),
     current_program=caml_call2(Int[2],gl1ctx,cst_CURRENT_PROGRAM),
     never=caml_call2(Int[2],gl1ctx,cst_NEVER),
     less=caml_call2(Int[2],gl1ctx,cst_LESS),
     equal$0=caml_call2(Int[2],gl1ctx,cst_EQUAL),
     lequal=caml_call2(Int[2],gl1ctx,cst_LEQUAL),
     greater=caml_call2(Int[2],gl1ctx,cst_GREATER),
     notequal=caml_call2(Int[2],gl1ctx,cst_NOTEQUAL),
     gequal=caml_call2(Int[2],gl1ctx,cst_GEQUAL),
     always=caml_call2(Int[2],gl1ctx,cst_ALWAYS),
     keep=caml_call2(Int[2],gl1ctx,cst_KEEP),
     replace=caml_call2(Int[2],gl1ctx,cst_REPLACE),
     incr=caml_call2(Int[2],gl1ctx,cst_INCR),
     decr=caml_call2(Int[2],gl1ctx,cst_DECR),
     invert=caml_call2(Int[2],gl1ctx,cst_INVERT),
     incr_wrap=caml_call2(Int[2],gl1ctx,cst_INCR_WRAP),
     decr_wrap=caml_call2(Int[2],gl1ctx,cst_DECR_WRAP),
     vendor=caml_call2(Int[2],gl1ctx,cst_VENDOR),
     renderer=caml_call2(Int[2],gl1ctx,cst_RENDERER),
     version=caml_call2(Int[2],gl1ctx,cst_VERSION),
     nearest=caml_call2(Int[2],gl1ctx,cst_NEAREST),
     linear=caml_call2(Int[2],gl1ctx,cst_LINEAR),
     nearest_mipmap_nearest=
      caml_call2(Int[2],gl1ctx,cst_NEAREST_MIPMAP_NEAREST),
     linear_mipmap_nearest=caml_call2(Int[2],gl1ctx,cst_LINEAR_MIPMAP_NEAREST),
     nearest_mipmap_linear=caml_call2(Int[2],gl1ctx,cst_NEAREST_MIPMAP_LINEAR),
     linear_mipmap_linear=caml_call2(Int[2],gl1ctx,cst_LINEAR_MIPMAP_LINEAR),
     texture_mag_filter=caml_call2(Int[2],gl1ctx,cst_TEXTURE_MAG_FILTER),
     texture_min_filter=caml_call2(Int[2],gl1ctx,cst_TEXTURE_MIN_FILTER),
     texture_wrap_s=caml_call2(Int[2],gl1ctx,cst_TEXTURE_WRAP_S),
     texture_wrap_t=caml_call2(Int[2],gl1ctx,cst_TEXTURE_WRAP_T),
     texture_2d=caml_call2(Int[2],gl1ctx,cst_TEXTURE_2D),
     texture=caml_call2(Int[2],gl1ctx,cst_TEXTURE),
     texture_cube_map=caml_call2(Int[2],gl1ctx,cst_TEXTURE_CUBE_MAP),
     texture_binding_cube_map=
      caml_call2(Int[2],gl1ctx,cst_TEXTURE_BINDING_CUBE_MAP),
     texture_cube_map_positive_x=
      caml_call2(Int[2],gl1ctx,cst_TEXTURE_CUBE_MAP_POSITIVE_),
     texture_cube_map_negative_x=
      caml_call2(Int[2],gl1ctx,cst_TEXTURE_CUBE_MAP_NEGATIVE_),
     texture_cube_map_positive_y=
      caml_call2(Int[2],gl1ctx,cst_TEXTURE_CUBE_MAP_POSITIVE_$0),
     texture_cube_map_negative_y=
      caml_call2(Int[2],gl1ctx,cst_TEXTURE_CUBE_MAP_NEGATIVE_$0),
     texture_cube_map_positive_z=
      caml_call2(Int[2],gl1ctx,cst_TEXTURE_CUBE_MAP_POSITIVE_$1),
     texture_cube_map_negative_z=
      caml_call2(Int[2],gl1ctx,cst_TEXTURE_CUBE_MAP_NEGATIVE_$1),
     max_cube_map_texture_size=
      caml_call2(Int[2],gl1ctx,cst_MAX_CUBE_MAP_TEXTURE_SIZE),
     texture0=caml_call2(Int[2],gl1ctx,cst_TEXTURE0),
     texture1=caml_call2(Int[2],gl1ctx,cst_TEXTURE1),
     texture2=caml_call2(Int[2],gl1ctx,cst_TEXTURE2),
     texture3=caml_call2(Int[2],gl1ctx,cst_TEXTURE3),
     texture4=caml_call2(Int[2],gl1ctx,cst_TEXTURE4),
     texture5=caml_call2(Int[2],gl1ctx,cst_TEXTURE5),
     texture6=caml_call2(Int[2],gl1ctx,cst_TEXTURE6),
     texture7=caml_call2(Int[2],gl1ctx,cst_TEXTURE7),
     texture8=caml_call2(Int[2],gl1ctx,cst_TEXTURE8),
     texture9=caml_call2(Int[2],gl1ctx,cst_TEXTURE9),
     texture10=caml_call2(Int[2],gl1ctx,cst_TEXTURE10),
     texture11=caml_call2(Int[2],gl1ctx,cst_TEXTURE11),
     texture12=caml_call2(Int[2],gl1ctx,cst_TEXTURE12),
     texture13=caml_call2(Int[2],gl1ctx,cst_TEXTURE13),
     texture14=caml_call2(Int[2],gl1ctx,cst_TEXTURE14),
     texture15=caml_call2(Int[2],gl1ctx,cst_TEXTURE15),
     texture16=caml_call2(Int[2],gl1ctx,cst_TEXTURE16),
     texture17=caml_call2(Int[2],gl1ctx,cst_TEXTURE17),
     texture18=caml_call2(Int[2],gl1ctx,cst_TEXTURE18),
     texture19=caml_call2(Int[2],gl1ctx,cst_TEXTURE19),
     texture20=caml_call2(Int[2],gl1ctx,cst_TEXTURE20),
     texture21=caml_call2(Int[2],gl1ctx,cst_TEXTURE21),
     texture22=caml_call2(Int[2],gl1ctx,cst_TEXTURE22),
     texture23=caml_call2(Int[2],gl1ctx,cst_TEXTURE23),
     texture24=caml_call2(Int[2],gl1ctx,cst_TEXTURE24),
     texture25=caml_call2(Int[2],gl1ctx,cst_TEXTURE25),
     texture26=caml_call2(Int[2],gl1ctx,cst_TEXTURE26),
     texture27=caml_call2(Int[2],gl1ctx,cst_TEXTURE27),
     texture28=caml_call2(Int[2],gl1ctx,cst_TEXTURE28),
     texture29=caml_call2(Int[2],gl1ctx,cst_TEXTURE29),
     texture30=caml_call2(Int[2],gl1ctx,cst_TEXTURE30),
     texture31=caml_call2(Int[2],gl1ctx,cst_TEXTURE31),
     active_texture$0=caml_call2(Int[2],gl1ctx,cst_ACTIVE_TEXTURE),
     repeat$1=caml_call2(Int[2],gl1ctx,cst_REPEAT),
     clamp_to_edge=caml_call2(Int[2],gl1ctx,cst_CLAMP_TO_EDGE),
     mirrored_repeat=caml_call2(Int[2],gl1ctx,cst_MIRRORED_REPEAT),
     float_vec2=caml_call2(Int[2],gl1ctx,cst_FLOAT_VEC2),
     float_vec3=caml_call2(Int[2],gl1ctx,cst_FLOAT_VEC3),
     float_vec4=caml_call2(Int[2],gl1ctx,cst_FLOAT_VEC4),
     int_vec2=caml_call2(Int[2],gl1ctx,cst_INT_VEC2),
     int_vec3=caml_call2(Int[2],gl1ctx,cst_INT_VEC3),
     int_vec4=caml_call2(Int[2],gl1ctx,cst_INT_VEC4),
     bool$1=caml_call2(Int[2],gl1ctx,cst_BOOL),
     bool_vec2=caml_call2(Int[2],gl1ctx,cst_BOOL_VEC2),
     bool_vec3=caml_call2(Int[2],gl1ctx,cst_BOOL_VEC3),
     bool_vec4=caml_call2(Int[2],gl1ctx,cst_BOOL_VEC4),
     float_mat2=caml_call2(Int[2],gl1ctx,cst_FLOAT_MAT2),
     float_mat3=caml_call2(Int[2],gl1ctx,cst_FLOAT_MAT3),
     float_mat4=caml_call2(Int[2],gl1ctx,cst_FLOAT_MAT4),
     sampler_2d=caml_call2(Int[2],gl1ctx,cst_SAMPLER_2D),
     sampler_cube=caml_call2(Int[2],gl1ctx,cst_SAMPLER_CUBE),
     vertex_attrib_array_enabled=
      caml_call2(Int[2],gl1ctx,cst_VERTEX_ATTRIB_ARRAY_ENABLE),
     vertex_attrib_array_size=
      caml_call2(Int[2],gl1ctx,cst_VERTEX_ATTRIB_ARRAY_SIZE),
     vertex_attrib_array_stride=
      caml_call2(Int[2],gl1ctx,cst_VERTEX_ATTRIB_ARRAY_STRIDE),
     vertex_attrib_array_type=
      caml_call2(Int[2],gl1ctx,cst_VERTEX_ATTRIB_ARRAY_TYPE),
     vertex_attrib_array_normalized=
      caml_call2(Int[2],gl1ctx,cst_VERTEX_ATTRIB_ARRAY_NORMAL),
     vertex_attrib_array_pointer=
      caml_call2(Int[2],gl1ctx,cst_VERTEX_ATTRIB_ARRAY_POINTE),
     vertex_attrib_array_buffer_bin=
      caml_call2(Int[2],gl1ctx,cst_VERTEX_ATTRIB_ARRAY_BUFFER),
     implementation_color_read_type=
      caml_call2(Int[2],gl1ctx,cst_IMPLEMENTATION_COLOR_READ_),
     implementation_color_read_form=
      caml_call2(Int[2],gl1ctx,cst_IMPLEMENTATION_COLOR_READ_$0),
     compile_status=caml_call2(Int[2],gl1ctx,cst_COMPILE_STATUS),
     low_float=caml_call2(Int[2],gl1ctx,cst_LOW_FLOAT),
     medium_float=caml_call2(Int[2],gl1ctx,cst_MEDIUM_FLOAT),
     high_float=caml_call2(Int[2],gl1ctx,cst_HIGH_FLOAT),
     low_int=caml_call2(Int[2],gl1ctx,cst_LOW_INT),
     medium_int=caml_call2(Int[2],gl1ctx,cst_MEDIUM_INT),
     high_int=caml_call2(Int[2],gl1ctx,cst_HIGH_INT),
     framebuffer=caml_call2(Int[2],gl1ctx,cst_FRAMEBUFFER),
     renderbuffer=caml_call2(Int[2],gl1ctx,cst_RENDERBUFFER),
     rgba4=caml_call2(Int[2],gl1ctx,cst_RGBA4),
     rgb5_a1=caml_call2(Int[2],gl1ctx,cst_RGB5_A1),
     rgb565=caml_call2(Int[2],gl1ctx,cst_RGB565),
     depth_component16=caml_call2(Int[2],gl1ctx,cst_DEPTH_COMPONENT16),
     stencil_index8=caml_call2(Int[2],gl1ctx,cst_STENCIL_INDEX8),
     depth_stencil=caml_call2(Int[2],gl1ctx,cst_DEPTH_STENCIL),
     renderbuffer_width=caml_call2(Int[2],gl1ctx,cst_RENDERBUFFER_WIDTH),
     renderbuffer_height=caml_call2(Int[2],gl1ctx,cst_RENDERBUFFER_HEIGHT),
     renderbuffer_internal_format=
      caml_call2(Int[2],gl1ctx,cst_RENDERBUFFER_INTERNAL_FORM),
     renderbuffer_red_size=caml_call2(Int[2],gl1ctx,cst_RENDERBUFFER_RED_SIZE),
     renderbuffer_green_size=
      caml_call2(Int[2],gl1ctx,cst_RENDERBUFFER_GREEN_SIZE),
     renderbuffer_blue_size=
      caml_call2(Int[2],gl1ctx,cst_RENDERBUFFER_BLUE_SIZE),
     renderbuffer_alpha_size=
      caml_call2(Int[2],gl1ctx,cst_RENDERBUFFER_ALPHA_SIZE),
     renderbuffer_depth_size=
      caml_call2(Int[2],gl1ctx,cst_RENDERBUFFER_DEPTH_SIZE),
     renderbuffer_stencil_size=
      caml_call2(Int[2],gl1ctx,cst_RENDERBUFFER_STENCIL_SIZE),
     framebuffer_attachment_object_=
      caml_call2(Int[2],gl1ctx,cst_FRAMEBUFFER_ATTACHMENT_OBJ),
     framebuffer_attachment_object_$0=
      caml_call2(Int[2],gl1ctx,cst_FRAMEBUFFER_ATTACHMENT_OBJ$0),
     framebuffer_attachment_texture=
      caml_call2(Int[2],gl1ctx,cst_FRAMEBUFFER_ATTACHMENT_TEX),
     framebuffer_attachment_texture$0=
      caml_call2(Int[2],gl1ctx,cst_FRAMEBUFFER_ATTACHMENT_TEX$0),
     color_attachment0=caml_call2(Int[2],gl1ctx,cst_COLOR_ATTACHMENT0),
     depth_attachment=caml_call2(Int[2],gl1ctx,cst_DEPTH_ATTACHMENT),
     stencil_attachment=caml_call2(Int[2],gl1ctx,cst_STENCIL_ATTACHMENT),
     depth_stencil_attachment=
      caml_call2(Int[2],gl1ctx,cst_DEPTH_STENCIL_ATTACHMENT),
     none$0=caml_call2(Int[2],gl1ctx,cst_NONE),
     framebuffer_complete=caml_call2(Int[2],gl1ctx,cst_FRAMEBUFFER_COMPLETE),
     framebuffer_incomplete_attachm=
      caml_call2(Int[2],gl1ctx,cst_FRAMEBUFFER_INCOMPLETE_ATT),
     framebuffer_incomplete_missing=
      caml_call2(Int[2],gl1ctx,cst_FRAMEBUFFER_INCOMPLETE_MIS),
     framebuffer_incomplete_dimensi=
      caml_call2(Int[2],gl1ctx,cst_FRAMEBUFFER_INCOMPLETE_DIM),
     framebuffer_unsupported=
      caml_call2(Int[2],gl1ctx,cst_FRAMEBUFFER_UNSUPPORTED),
     framebuffer_binding=caml_call2(Int[2],gl1ctx,cst_FRAMEBUFFER_BINDING),
     renderbuffer_binding=caml_call2(Int[2],gl1ctx,cst_RENDERBUFFER_BINDING),
     max_renderbuffer_size=caml_call2(Int[2],gl1ctx,cst_MAX_RENDERBUFFER_SIZE),
     invalid_framebuffer_operation=
      caml_call2(Int[2],gl1ctx,cst_INVALID_FRAMEBUFFER_OPERAT),
     unpack_flip_y_webgl=caml_call2(Int[2],gl1ctx,cst_UNPACK_FLIP_Y_WEBGL),
     unpack_premultiply_alpha_webgl=
      caml_call2(Int[2],gl1ctx,cst_UNPACK_PREMULTIPLY_ALPHA_W),
     context_lost_webgl=caml_call2(Int[2],gl1ctx,cst_CONTEXT_LOST_WEBGL),
     unpack_colorspace_conversion_w=
      caml_call2(Int[2],gl1ctx,cst_UNPACK_COLORSPACE_CONVERSI),
     browser_default_webgl=caml_call2(Int[2],gl1ctx,cst_BROWSER_DEFAULT_WEBGL),
     gl2ctx=target[cst_WebGL2RenderingContext],
     _bv_=is_none(gl2ctx)?function(param,_dN_){return 0}:Int[2],
     read_buffer$0=caml_call2(_bv_,gl2ctx,cst_READ_BUFFER),
     unpack_row_length=caml_call2(_bv_,gl2ctx,cst_UNPACK_ROW_LENGTH),
     unpack_skip_rows=caml_call2(_bv_,gl2ctx,cst_UNPACK_SKIP_ROWS),
     unpack_skip_pixels=caml_call2(_bv_,gl2ctx,cst_UNPACK_SKIP_PIXELS),
     pack_row_length=caml_call2(_bv_,gl2ctx,cst_PACK_ROW_LENGTH),
     pack_skip_rows=caml_call2(_bv_,gl2ctx,cst_PACK_SKIP_ROWS),
     pack_skip_pixels=caml_call2(_bv_,gl2ctx,cst_PACK_SKIP_PIXELS),
     color$2=caml_call2(_bv_,gl2ctx,cst_COLOR),
     depth$0=caml_call2(_bv_,gl2ctx,cst_DEPTH),
     stencil$0=caml_call2(_bv_,gl2ctx,cst_STENCIL),
     red=caml_call2(_bv_,gl2ctx,cst_RED),
     rgb8=caml_call2(_bv_,gl2ctx,cst_RGB8),
     rgba8=caml_call2(_bv_,gl2ctx,cst_RGBA8),
     rgb10_a2=caml_call2(_bv_,gl2ctx,cst_RGB10_A2),
     texture_binding_3d=caml_call2(_bv_,gl2ctx,cst_TEXTURE_BINDING_3D),
     unpack_skip_images=caml_call2(_bv_,gl2ctx,cst_UNPACK_SKIP_IMAGES),
     unpack_image_height=caml_call2(_bv_,gl2ctx,cst_UNPACK_IMAGE_HEIGHT),
     texture_3d=caml_call2(_bv_,gl2ctx,cst_TEXTURE_3D),
     texture_wrap_r=caml_call2(_bv_,gl2ctx,cst_TEXTURE_WRAP_R),
     max_3d_texture_size=caml_call2(_bv_,gl2ctx,cst_MAX_3D_TEXTURE_SIZE),
     unsigned_int_2_10_10_10_rev=
      caml_call2(_bv_,gl2ctx,cst_UNSIGNED_INT_2_10_10_10_RE),
     max_elements_vertices=caml_call2(_bv_,gl2ctx,cst_MAX_ELEMENTS_VERTICES),
     max_elements_indices=caml_call2(_bv_,gl2ctx,cst_MAX_ELEMENTS_INDICES),
     texture_min_lod=caml_call2(_bv_,gl2ctx,cst_TEXTURE_MIN_LOD),
     texture_max_lod=caml_call2(_bv_,gl2ctx,cst_TEXTURE_MAX_LOD),
     texture_base_level=caml_call2(_bv_,gl2ctx,cst_TEXTURE_BASE_LEVEL),
     texture_max_level=caml_call2(_bv_,gl2ctx,cst_TEXTURE_MAX_LEVEL),
     min$1=caml_call2(_bv_,gl2ctx,cst_MIN),
     max$2=caml_call2(_bv_,gl2ctx,cst_MAX),
     depth_component24=caml_call2(_bv_,gl2ctx,cst_DEPTH_COMPONENT24),
     max_texture_lod_bias=caml_call2(_bv_,gl2ctx,cst_MAX_TEXTURE_LOD_BIAS),
     texture_compare_mode=caml_call2(_bv_,gl2ctx,cst_TEXTURE_COMPARE_MODE),
     texture_compare_func=caml_call2(_bv_,gl2ctx,cst_TEXTURE_COMPARE_FUNC),
     current_query=caml_call2(_bv_,gl2ctx,cst_CURRENT_QUERY),
     query_result=caml_call2(_bv_,gl2ctx,cst_QUERY_RESULT),
     query_result_available=caml_call2(_bv_,gl2ctx,cst_QUERY_RESULT_AVAILABLE),
     stream_read=caml_call2(_bv_,gl2ctx,cst_STREAM_READ),
     stream_copy=caml_call2(_bv_,gl2ctx,cst_STREAM_COPY),
     static_read=caml_call2(_bv_,gl2ctx,cst_STATIC_READ),
     static_copy=caml_call2(_bv_,gl2ctx,cst_STATIC_COPY),
     dynamic_read=caml_call2(_bv_,gl2ctx,cst_DYNAMIC_READ),
     dynamic_copy=caml_call2(_bv_,gl2ctx,cst_DYNAMIC_COPY),
     max_draw_buffers=caml_call2(_bv_,gl2ctx,cst_MAX_DRAW_BUFFERS),
     draw_buffer0=caml_call2(_bv_,gl2ctx,cst_DRAW_BUFFER0),
     draw_buffer1=caml_call2(_bv_,gl2ctx,cst_DRAW_BUFFER1),
     draw_buffer2=caml_call2(_bv_,gl2ctx,cst_DRAW_BUFFER2),
     draw_buffer3=caml_call2(_bv_,gl2ctx,cst_DRAW_BUFFER3),
     draw_buffer4=caml_call2(_bv_,gl2ctx,cst_DRAW_BUFFER4),
     draw_buffer5=caml_call2(_bv_,gl2ctx,cst_DRAW_BUFFER5),
     draw_buffer6=caml_call2(_bv_,gl2ctx,cst_DRAW_BUFFER6),
     draw_buffer7=caml_call2(_bv_,gl2ctx,cst_DRAW_BUFFER7),
     draw_buffer8=caml_call2(_bv_,gl2ctx,cst_DRAW_BUFFER8),
     draw_buffer9=caml_call2(_bv_,gl2ctx,cst_DRAW_BUFFER9),
     draw_buffer10=caml_call2(_bv_,gl2ctx,cst_DRAW_BUFFER10),
     draw_buffer11=caml_call2(_bv_,gl2ctx,cst_DRAW_BUFFER11),
     draw_buffer12=caml_call2(_bv_,gl2ctx,cst_DRAW_BUFFER12),
     draw_buffer13=caml_call2(_bv_,gl2ctx,cst_DRAW_BUFFER13),
     draw_buffer14=caml_call2(_bv_,gl2ctx,cst_DRAW_BUFFER14),
     draw_buffer15=caml_call2(_bv_,gl2ctx,cst_DRAW_BUFFER15),
     max_fragment_uniform_component=
      caml_call2(_bv_,gl2ctx,cst_MAX_FRAGMENT_UNIFORM_COMPO),
     max_vertex_uniform_components=
      caml_call2(_bv_,gl2ctx,cst_MAX_VERTEX_UNIFORM_COMPONE),
     sampler_3d=caml_call2(_bv_,gl2ctx,cst_SAMPLER_3D),
     sampler_2d_shadow=caml_call2(_bv_,gl2ctx,cst_SAMPLER_2D_SHADOW),
     fragment_shader_derivative_hin=
      caml_call2(_bv_,gl2ctx,cst_FRAGMENT_SHADER_DERIVATIVE),
     pixel_pack_buffer=caml_call2(_bv_,gl2ctx,cst_PIXEL_PACK_BUFFER),
     pixel_unpack_buffer=caml_call2(_bv_,gl2ctx,cst_PIXEL_UNPACK_BUFFER),
     pixel_pack_buffer_binding=
      caml_call2(_bv_,gl2ctx,cst_PIXEL_PACK_BUFFER_BINDING),
     pixel_unpack_buffer_binding=
      caml_call2(_bv_,gl2ctx,cst_PIXEL_UNPACK_BUFFER_BINDIN),
     float_mat2x3=caml_call2(_bv_,gl2ctx,cst_FLOAT_MAT2x3),
     float_mat2x4=caml_call2(_bv_,gl2ctx,cst_FLOAT_MAT2x4),
     float_mat3x2=caml_call2(_bv_,gl2ctx,cst_FLOAT_MAT3x2),
     float_mat3x4=caml_call2(_bv_,gl2ctx,cst_FLOAT_MAT3x4),
     float_mat4x2=caml_call2(_bv_,gl2ctx,cst_FLOAT_MAT4x2),
     float_mat4x3=caml_call2(_bv_,gl2ctx,cst_FLOAT_MAT4x3),
     srgb=caml_call2(_bv_,gl2ctx,cst_SRGB),
     srgb8=caml_call2(_bv_,gl2ctx,cst_SRGB8),
     srgb8_alpha8=caml_call2(_bv_,gl2ctx,cst_SRGB8_ALPHA8),
     compare_ref_to_texture=caml_call2(_bv_,gl2ctx,cst_COMPARE_REF_TO_TEXTURE),
     rgba32f=caml_call2(_bv_,gl2ctx,cst_RGBA32F),
     rgb32f=caml_call2(_bv_,gl2ctx,cst_RGB32F),
     rgba16f=caml_call2(_bv_,gl2ctx,cst_RGBA16F),
     rgb16f=caml_call2(_bv_,gl2ctx,cst_RGB16F),
     vertex_attrib_array_integer=
      caml_call2(_bv_,gl2ctx,cst_VERTEX_ATTRIB_ARRAY_INTEGE),
     max_array_texture_layers=
      caml_call2(_bv_,gl2ctx,cst_MAX_ARRAY_TEXTURE_LAYERS),
     min_program_texel_offset=
      caml_call2(_bv_,gl2ctx,cst_MIN_PROGRAM_TEXEL_OFFSET),
     max_program_texel_offset=
      caml_call2(_bv_,gl2ctx,cst_MAX_PROGRAM_TEXEL_OFFSET),
     max_varying_components=caml_call2(_bv_,gl2ctx,cst_MAX_VARYING_COMPONENTS),
     texture_2d_array=caml_call2(_bv_,gl2ctx,cst_TEXTURE_2D_ARRAY),
     texture_binding_2d_array=
      caml_call2(_bv_,gl2ctx,cst_TEXTURE_BINDING_2D_ARRAY),
     r11f_g11f_b10f=caml_call2(_bv_,gl2ctx,cst_R11F_G11F_B10F),
     unsigned_int_10f_11f_11f_rev=
      caml_call2(_bv_,gl2ctx,cst_UNSIGNED_INT_10F_11F_11F_R),
     rgb9_e5=caml_call2(_bv_,gl2ctx,cst_RGB9_E5),
     unsigned_int_5_9_9_9_rev=
      caml_call2(_bv_,gl2ctx,cst_UNSIGNED_INT_5_9_9_9_REV),
     transform_feedback_buffer_mode=
      caml_call2(_bv_,gl2ctx,cst_TRANSFORM_FEEDBACK_BUFFER_),
     max_transform_feedback_separat=
      caml_call2(_bv_,gl2ctx,cst_MAX_TRANSFORM_FEEDBACK_SEP),
     transform_feedback_varyings$0=
      caml_call2(_bv_,gl2ctx,cst_TRANSFORM_FEEDBACK_VARYING),
     transform_feedback_buffer_star=
      caml_call2(_bv_,gl2ctx,cst_TRANSFORM_FEEDBACK_BUFFER_$0),
     transform_feedback_buffer_size=
      caml_call2(_bv_,gl2ctx,cst_TRANSFORM_FEEDBACK_BUFFER_$1),
     transform_feedback_primitives_=
      caml_call2(_bv_,gl2ctx,cst_TRANSFORM_FEEDBACK_PRIMITI),
     rasterizer_discard=caml_call2(_bv_,gl2ctx,cst_RASTERIZER_DISCARD),
     max_transform_feedback_interle=
      caml_call2(_bv_,gl2ctx,cst_MAX_TRANSFORM_FEEDBACK_INT),
     max_transform_feedback_separat$0=
      caml_call2(_bv_,gl2ctx,cst_MAX_TRANSFORM_FEEDBACK_SEP$0),
     interleaved_attribs=caml_call2(_bv_,gl2ctx,cst_INTERLEAVED_ATTRIBS),
     separate_attribs=caml_call2(_bv_,gl2ctx,cst_SEPARATE_ATTRIBS),
     transform_feedback_buffer=
      caml_call2(_bv_,gl2ctx,cst_TRANSFORM_FEEDBACK_BUFFER),
     transform_feedback_buffer_bind=
      caml_call2(_bv_,gl2ctx,cst_TRANSFORM_FEEDBACK_BUFFER_$2),
     rgba32ui=caml_call2(_bv_,gl2ctx,cst_RGBA32UI),
     rgb32ui=caml_call2(_bv_,gl2ctx,cst_RGB32UI),
     rgba16ui=caml_call2(_bv_,gl2ctx,cst_RGBA16UI),
     rgb16ui=caml_call2(_bv_,gl2ctx,cst_RGB16UI),
     rgba8ui=caml_call2(_bv_,gl2ctx,cst_RGBA8UI),
     rgb8ui=caml_call2(_bv_,gl2ctx,cst_RGB8UI),
     rgba32i=caml_call2(_bv_,gl2ctx,cst_RGBA32I),
     rgb32i=caml_call2(_bv_,gl2ctx,cst_RGB32I),
     rgba16i=caml_call2(_bv_,gl2ctx,cst_RGBA16I),
     rgb16i=caml_call2(_bv_,gl2ctx,cst_RGB16I),
     rgba8i=caml_call2(_bv_,gl2ctx,cst_RGBA8I),
     rgb8i=caml_call2(_bv_,gl2ctx,cst_RGB8I),
     red_integer=caml_call2(_bv_,gl2ctx,cst_RED_INTEGER),
     rgb_integer=caml_call2(_bv_,gl2ctx,cst_RGB_INTEGER),
     rgba_integer=caml_call2(_bv_,gl2ctx,cst_RGBA_INTEGER),
     sampler_2d_array=caml_call2(_bv_,gl2ctx,cst_SAMPLER_2D_ARRAY),
     sampler_2d_array_shadow=
      caml_call2(_bv_,gl2ctx,cst_SAMPLER_2D_ARRAY_SHADOW),
     sampler_cube_shadow=caml_call2(_bv_,gl2ctx,cst_SAMPLER_CUBE_SHADOW),
     unsigned_int_vec2=caml_call2(_bv_,gl2ctx,cst_UNSIGNED_INT_VEC2),
     unsigned_int_vec3=caml_call2(_bv_,gl2ctx,cst_UNSIGNED_INT_VEC3),
     unsigned_int_vec4=caml_call2(_bv_,gl2ctx,cst_UNSIGNED_INT_VEC4),
     int_sampler_2d=caml_call2(_bv_,gl2ctx,cst_INT_SAMPLER_2D),
     int_sampler_3d=caml_call2(_bv_,gl2ctx,cst_INT_SAMPLER_3D),
     int_sampler_cube=caml_call2(_bv_,gl2ctx,cst_INT_SAMPLER_CUBE),
     int_sampler_2d_array=caml_call2(_bv_,gl2ctx,cst_INT_SAMPLER_2D_ARRAY),
     unsigned_int_sampler_2d=
      caml_call2(_bv_,gl2ctx,cst_UNSIGNED_INT_SAMPLER_2D),
     unsigned_int_sampler_3d=
      caml_call2(_bv_,gl2ctx,cst_UNSIGNED_INT_SAMPLER_3D),
     unsigned_int_sampler_cube=
      caml_call2(_bv_,gl2ctx,cst_UNSIGNED_INT_SAMPLER_CUBE),
     unsigned_int_sampler_2d_array=
      caml_call2(_bv_,gl2ctx,cst_UNSIGNED_INT_SAMPLER_2D_AR),
     depth_component32f=caml_call2(_bv_,gl2ctx,cst_DEPTH_COMPONENT32F),
     depth32f_stencil8=caml_call2(_bv_,gl2ctx,cst_DEPTH32F_STENCIL8),
     float_32_unsigned_int_24_8_rev=
      caml_call2(_bv_,gl2ctx,cst_FLOAT_32_UNSIGNED_INT_24_8),
     framebuffer_attachment_color_e=
      caml_call2(_bv_,gl2ctx,cst_FRAMEBUFFER_ATTACHMENT_COL),
     framebuffer_attachment_compone=
      caml_call2(_bv_,gl2ctx,cst_FRAMEBUFFER_ATTACHMENT_COM),
     framebuffer_attachment_red_siz=
      caml_call2(_bv_,gl2ctx,cst_FRAMEBUFFER_ATTACHMENT_RED),
     framebuffer_attachment_green_s=
      caml_call2(_bv_,gl2ctx,cst_FRAMEBUFFER_ATTACHMENT_GRE),
     framebuffer_attachment_blue_si=
      caml_call2(_bv_,gl2ctx,cst_FRAMEBUFFER_ATTACHMENT_BLU),
     framebuffer_attachment_alpha_s=
      caml_call2(_bv_,gl2ctx,cst_FRAMEBUFFER_ATTACHMENT_ALP),
     framebuffer_attachment_depth_s=
      caml_call2(_bv_,gl2ctx,cst_FRAMEBUFFER_ATTACHMENT_DEP),
     framebuffer_attachment_stencil=
      caml_call2(_bv_,gl2ctx,cst_FRAMEBUFFER_ATTACHMENT_STE),
     framebuffer_default=caml_call2(_bv_,gl2ctx,cst_FRAMEBUFFER_DEFAULT),
     unsigned_int_24_8=caml_call2(_bv_,gl2ctx,cst_UNSIGNED_INT_24_8),
     depth24_stencil8=caml_call2(_bv_,gl2ctx,cst_DEPTH24_STENCIL8),
     unsigned_normalized=caml_call2(_bv_,gl2ctx,cst_UNSIGNED_NORMALIZED),
     draw_framebuffer_binding=
      caml_call2(_bv_,gl2ctx,cst_DRAW_FRAMEBUFFER_BINDING),
     read_framebuffer=caml_call2(_bv_,gl2ctx,cst_READ_FRAMEBUFFER),
     draw_framebuffer=caml_call2(_bv_,gl2ctx,cst_DRAW_FRAMEBUFFER),
     read_framebuffer_binding=
      caml_call2(_bv_,gl2ctx,cst_READ_FRAMEBUFFER_BINDING),
     renderbuffer_samples=caml_call2(_bv_,gl2ctx,cst_RENDERBUFFER_SAMPLES),
     framebuffer_attachment_texture$1=
      caml_call2(_bv_,gl2ctx,cst_FRAMEBUFFER_ATTACHMENT_TEX$1),
     max_color_attachments=caml_call2(_bv_,gl2ctx,cst_MAX_COLOR_ATTACHMENTS),
     color_attachment1=caml_call2(_bv_,gl2ctx,cst_COLOR_ATTACHMENT1),
     color_attachment2=caml_call2(_bv_,gl2ctx,cst_COLOR_ATTACHMENT2),
     color_attachment3=caml_call2(_bv_,gl2ctx,cst_COLOR_ATTACHMENT3),
     color_attachment4=caml_call2(_bv_,gl2ctx,cst_COLOR_ATTACHMENT4),
     color_attachment5=caml_call2(_bv_,gl2ctx,cst_COLOR_ATTACHMENT5),
     color_attachment6=caml_call2(_bv_,gl2ctx,cst_COLOR_ATTACHMENT6),
     color_attachment7=caml_call2(_bv_,gl2ctx,cst_COLOR_ATTACHMENT7),
     color_attachment8=caml_call2(_bv_,gl2ctx,cst_COLOR_ATTACHMENT8),
     color_attachment9=caml_call2(_bv_,gl2ctx,cst_COLOR_ATTACHMENT9),
     color_attachment10=caml_call2(_bv_,gl2ctx,cst_COLOR_ATTACHMENT10),
     color_attachment11=caml_call2(_bv_,gl2ctx,cst_COLOR_ATTACHMENT11),
     color_attachment12=caml_call2(_bv_,gl2ctx,cst_COLOR_ATTACHMENT12),
     color_attachment13=caml_call2(_bv_,gl2ctx,cst_COLOR_ATTACHMENT13),
     color_attachment14=caml_call2(_bv_,gl2ctx,cst_COLOR_ATTACHMENT14),
     color_attachment15=caml_call2(_bv_,gl2ctx,cst_COLOR_ATTACHMENT15),
     framebuffer_incomplete_multisa=
      caml_call2(_bv_,gl2ctx,cst_FRAMEBUFFER_INCOMPLETE_MUL),
     max_samples=caml_call2(_bv_,gl2ctx,cst_MAX_SAMPLES),
     half_float=caml_call2(_bv_,gl2ctx,cst_HALF_FLOAT),
     rg=caml_call2(_bv_,gl2ctx,cst_RG),
     rg_integer=caml_call2(_bv_,gl2ctx,cst_RG_INTEGER),
     r8=caml_call2(_bv_,gl2ctx,cst_R8),
     rg8=caml_call2(_bv_,gl2ctx,cst_RG8),
     r16f=caml_call2(_bv_,gl2ctx,cst_R16F),
     r32f=caml_call2(_bv_,gl2ctx,cst_R32F),
     rg16f=caml_call2(_bv_,gl2ctx,cst_RG16F),
     rg32f=caml_call2(_bv_,gl2ctx,cst_RG32F),
     r8i=caml_call2(_bv_,gl2ctx,cst_R8I),
     r8ui=caml_call2(_bv_,gl2ctx,cst_R8UI),
     r16i=caml_call2(_bv_,gl2ctx,cst_R16I),
     r16ui=caml_call2(_bv_,gl2ctx,cst_R16UI),
     r32i=caml_call2(_bv_,gl2ctx,cst_R32I),
     r32ui=caml_call2(_bv_,gl2ctx,cst_R32UI),
     rg8i=caml_call2(_bv_,gl2ctx,cst_RG8I),
     rg8ui=caml_call2(_bv_,gl2ctx,cst_RG8UI),
     rg16i=caml_call2(_bv_,gl2ctx,cst_RG16I),
     rg16ui=caml_call2(_bv_,gl2ctx,cst_RG16UI),
     rg32i=caml_call2(_bv_,gl2ctx,cst_RG32I),
     rg32ui=caml_call2(_bv_,gl2ctx,cst_RG32UI),
     vertex_array_binding=caml_call2(_bv_,gl2ctx,cst_VERTEX_ARRAY_BINDING),
     r8_snorm=caml_call2(_bv_,gl2ctx,cst_R8_SNORM),
     rg8_snorm=caml_call2(_bv_,gl2ctx,cst_RG8_SNORM),
     rgb8_snorm=caml_call2(_bv_,gl2ctx,cst_RGB8_SNORM),
     rgba8_snorm=caml_call2(_bv_,gl2ctx,cst_RGBA8_SNORM),
     signed_normalized=caml_call2(_bv_,gl2ctx,cst_SIGNED_NORMALIZED),
     copy_read_buffer=caml_call2(_bv_,gl2ctx,cst_COPY_READ_BUFFER),
     copy_write_buffer=caml_call2(_bv_,gl2ctx,cst_COPY_WRITE_BUFFER),
     copy_read_buffer_binding=
      caml_call2(_bv_,gl2ctx,cst_COPY_READ_BUFFER_BINDING),
     copy_write_buffer_binding=
      caml_call2(_bv_,gl2ctx,cst_COPY_WRITE_BUFFER_BINDING),
     uniform_buffer=caml_call2(_bv_,gl2ctx,cst_UNIFORM_BUFFER),
     uniform_buffer_binding=caml_call2(_bv_,gl2ctx,cst_UNIFORM_BUFFER_BINDING),
     uniform_buffer_start=caml_call2(_bv_,gl2ctx,cst_UNIFORM_BUFFER_START),
     uniform_buffer_size=caml_call2(_bv_,gl2ctx,cst_UNIFORM_BUFFER_SIZE),
     max_vertex_uniform_blocks=
      caml_call2(_bv_,gl2ctx,cst_MAX_VERTEX_UNIFORM_BLOCKS),
     max_fragment_uniform_blocks=
      caml_call2(_bv_,gl2ctx,cst_MAX_FRAGMENT_UNIFORM_BLOCK),
     max_combined_uniform_blocks=
      caml_call2(_bv_,gl2ctx,cst_MAX_COMBINED_UNIFORM_BLOCK),
     max_uniform_buffer_bindings=
      caml_call2(_bv_,gl2ctx,cst_MAX_UNIFORM_BUFFER_BINDING),
     max_uniform_block_size=caml_call2(_bv_,gl2ctx,cst_MAX_UNIFORM_BLOCK_SIZE),
     max_combined_vertex_uniform_co=
      caml_call2(_bv_,gl2ctx,cst_MAX_COMBINED_VERTEX_UNIFOR),
     max_combined_fragment_uniform_=
      caml_call2(_bv_,gl2ctx,cst_MAX_COMBINED_FRAGMENT_UNIF),
     uniform_buffer_offset_alignmen=
      caml_call2(_bv_,gl2ctx,cst_UNIFORM_BUFFER_OFFSET_ALIG),
     active_uniform_blocks=caml_call2(_bv_,gl2ctx,cst_ACTIVE_UNIFORM_BLOCKS),
     uniform_type=caml_call2(_bv_,gl2ctx,cst_UNIFORM_TYPE),
     uniform_size=caml_call2(_bv_,gl2ctx,cst_UNIFORM_SIZE),
     uniform_block_index=caml_call2(_bv_,gl2ctx,cst_UNIFORM_BLOCK_INDEX),
     uniform_offset=caml_call2(_bv_,gl2ctx,cst_UNIFORM_OFFSET),
     uniform_array_stride=caml_call2(_bv_,gl2ctx,cst_UNIFORM_ARRAY_STRIDE),
     uniform_matrix_stride=caml_call2(_bv_,gl2ctx,cst_UNIFORM_MATRIX_STRIDE),
     uniform_is_row_major=caml_call2(_bv_,gl2ctx,cst_UNIFORM_IS_ROW_MAJOR),
     uniform_block_binding$0=caml_call2(_bv_,gl2ctx,cst_UNIFORM_BLOCK_BINDING),
     uniform_block_data_size=
      caml_call2(_bv_,gl2ctx,cst_UNIFORM_BLOCK_DATA_SIZE),
     uniform_block_active_uniforms=
      caml_call2(_bv_,gl2ctx,cst_UNIFORM_BLOCK_ACTIVE_UNIFO),
     uniform_block_active_uniform_i=
      caml_call2(_bv_,gl2ctx,cst_UNIFORM_BLOCK_ACTIVE_UNIFO$0),
     uniform_block_referenced_by_ve=
      caml_call2(_bv_,gl2ctx,cst_UNIFORM_BLOCK_REFERENCED_B),
     uniform_block_referenced_by_fr=
      caml_call2(_bv_,gl2ctx,cst_UNIFORM_BLOCK_REFERENCED_B$0),
     invalid_index=caml_call2(_bv_,gl2ctx,cst_INVALID_INDEX),
     max_vertex_output_components=
      caml_call2(_bv_,gl2ctx,cst_MAX_VERTEX_OUTPUT_COMPONEN),
     max_fragment_input_components=
      caml_call2(_bv_,gl2ctx,cst_MAX_FRAGMENT_INPUT_COMPONE),
     max_server_wait_timeout=
      caml_call2(_bv_,gl2ctx,cst_MAX_SERVER_WAIT_TIMEOUT),
     object_type=caml_call2(_bv_,gl2ctx,cst_OBJECT_TYPE),
     sync_condition=caml_call2(_bv_,gl2ctx,cst_SYNC_CONDITION),
     sync_status=caml_call2(_bv_,gl2ctx,cst_SYNC_STATUS),
     sync_flags=caml_call2(_bv_,gl2ctx,cst_SYNC_FLAGS),
     sync_fence=caml_call2(_bv_,gl2ctx,cst_SYNC_FENCE),
     sync_gpu_commands_complete=
      caml_call2(_bv_,gl2ctx,cst_SYNC_GPU_COMMANDS_COMPLETE),
     unsignaled=caml_call2(_bv_,gl2ctx,cst_UNSIGNALED),
     signaled=caml_call2(_bv_,gl2ctx,cst_SIGNALED),
     already_signaled=caml_call2(_bv_,gl2ctx,cst_ALREADY_SIGNALED),
     timeout_expired=caml_call2(_bv_,gl2ctx,cst_TIMEOUT_EXPIRED),
     condition_satisfied=caml_call2(_bv_,gl2ctx,cst_CONDITION_SATISFIED),
     wait_failed=caml_call2(_bv_,gl2ctx,cst_WAIT_FAILED),
     sync_flush_commands_bit=
      caml_call2(_bv_,gl2ctx,cst_SYNC_FLUSH_COMMANDS_BIT),
     vertex_attrib_array_divisor=
      caml_call2(_bv_,gl2ctx,cst_VERTEX_ATTRIB_ARRAY_DIVISO),
     any_samples_passed=caml_call2(_bv_,gl2ctx,cst_ANY_SAMPLES_PASSED),
     any_samples_passed_conservativ=
      caml_call2(_bv_,gl2ctx,cst_ANY_SAMPLES_PASSED_CONSERV),
     sampler_binding=caml_call2(_bv_,gl2ctx,cst_SAMPLER_BINDING),
     rgb10_a2ui=caml_call2(_bv_,gl2ctx,cst_RGB10_A2UI),
     int_2_10_10_10_rev=caml_call2(_bv_,gl2ctx,cst_INT_2_10_10_10_REV),
     transform_feedback=caml_call2(_bv_,gl2ctx,cst_TRANSFORM_FEEDBACK),
     transform_feedback_paused=
      caml_call2(_bv_,gl2ctx,cst_TRANSFORM_FEEDBACK_PAUSED),
     transform_feedback_active=
      caml_call2(_bv_,gl2ctx,cst_TRANSFORM_FEEDBACK_ACTIVE),
     transform_feedback_binding=
      caml_call2(_bv_,gl2ctx,cst_TRANSFORM_FEEDBACK_BINDING),
     texture_immutable_format=
      caml_call2(_bv_,gl2ctx,cst_TEXTURE_IMMUTABLE_FORMAT),
     max_element_index=caml_call2(_bv_,gl2ctx,cst_MAX_ELEMENT_INDEX),
     texture_immutable_levels=
      caml_call2(_bv_,gl2ctx,cst_TEXTURE_IMMUTABLE_LEVELS),
     timeout_ignored=caml_call2(_bv_,gl2ctx,cst_TIMEOUT_IGNORED),
     max_client_wait_timeout_webgl=
      caml_call2(_bv_,gl2ctx,cst_MAX_CLIENT_WAIT_TIMEOUT_WE),
     Brr_canvas=
      [0,
       [0,
        is_2d,
        is_identity,
        inverse,
        multiply,
        m11,
        m12,
        m13,
        m14,
        m21,
        m22,
        m23,
        m24,
        m31,
        m32,
        m33,
        m34,
        m41,
        m42,
        m43,
        m44,
        a$1,
        b$1,
        c$0,
        d,
        e,
        f,
        to_float32_array,
        of_float32_array,
        to_float64_array,
        of_float64_array],
       [0,v$14,tr$1,to_json$2,x,y,z,w],
       [0,
        create$13,
        of_el$1,
        to_el$1,
        w$0,
        h,
        set_w,
        set_h,
        set_size_to_layout_size,
        image_encode,
        to_data_url,
        to_blob,
        capture_stream$0],
       [0,
        Fill_rule,
        Image_smoothing_quality,
        Line_cap,
        Line_join,
        Text_align,
        Text_baseline,
        Text_direction,
        Composite_op,
        Repeat,
        [0,
         create$14,
         of_svg,
         of_path,
         add$0,
         close$6,
         move_to,
         line_to,
         qcurve_to,
         ccurve_to,
         arc_to,
         arc,
         rect,
         ellipse],
        image_src_of_el,
        image_src_of_jv,
        attrs_alpha,
        attrs_desynchronized,
        create$15,
        canvas$1,
        attrs,
        save,
        restore,
        image_smoothing_enabled,
        set_image_smoothing_enabled,
        image_smoothing_quality,
        set_image_smoothing_quality,
        global_alpha,
        set_global_alpha,
        global_composite_op,
        set_global_composite_op,
        filter$0,
        set_filter,
        get_transform,
        set_transform,
        reset_transform,
        transform,
        translate,
        rotate,
        scale,
        set_stroke_style,
        set_fill_style,
        color$1,
        gradient_style,
        linear_gradient,
        radial_gradient,
        pattern_style,
        pattern,
        line_width,
        set_line_width,
        line_cap,
        set_line_cap,
        line_join,
        set_line_join,
        miter_limit,
        set_miter_limit,
        line_dash,
        set_line_dash,
        line_dash_offset,
        set_line_dash_offset,
        shadow_blur,
        set_shadow_blur,
        shadow_offset_x,
        set_shadow_offset_x,
        shadow_offset_y,
        set_shadow_offset_y,
        shadow_color,
        set_shadow_color,
        font$0,
        set_font,
        text_align,
        set_text_align,
        text_baseline,
        set_text_baseline,
        text_direction,
        set_text_direction,
        clear_rect,
        fill_rect,
        stroke_rect,
        fill$0,
        stroke,
        clip,
        draw_focus_if_needed,
        scroll_path_into_view,
        is_point_in_fill,
        is_point_in_stroke,
        fill_text,
        stroke_text,
        Text_metrics,
        measure_text,
        draw_image,
        draw_image_in_rect,
        draw_sub_image_in_rect,
        [0,create$16,w$1,h$0,data$5],
        create_image_data,
        get_image_data,
        put_image_data,
        put_sub_image_data],
       [0,
        [0,
         Power_preference,
         v$15,
         alpha,
         depth,
         stencil,
         antialias,
         premultiplied_alpha,
         preserve_drawing_buffer,
         power_preference,
         desynchronized],
        create$17,
        canvas$2,
        drawing_buffer_width,
        drawing_buffer_height,
        attrs$0,
        is_context_lost,
        get_supported_extensions,
        get_extension,
        Active_info,
        Shader_precision_format,
        Tex_image_source,
        active_texture,
        attach_shader,
        begin_query,
        begin_transform_feedback,
        bind_attrib_location,
        bind_buffer,
        bind_buffer_base,
        bind_buffer_range,
        bind_framebuffer,
        bind_renderbuffer,
        bind_sampler,
        bind_texture,
        bind_transform_feedback,
        bind_vertex_array,
        blend_color,
        blend_equation,
        blend_equation_separate,
        blend_func,
        blend_func_separate,
        blit_framebuffer,
        buffer_data,
        buffer_data_size,
        buffer_sub_data,
        check_framebuffer_status,
        clear$3,
        clear_bufferfi,
        clear_bufferfv,
        clear_bufferiv,
        clear_bufferuiv,
        clear_color,
        clear_depth,
        clear_stencil,
        client_wait_sync,
        color_mask,
        compile_shader,
        compressed_tex_image2d,
        compressed_tex_image2d_size,
        compressed_tex_image3d,
        compressed_tex_image3d_size,
        compressed_tex_sub_image2d,
        compressed_tex_sub_image2d_siz,
        compressed_tex_sub_image3d,
        compressed_tex_sub_image3d_siz,
        copy_buffer_sub_data,
        copy_tex_image2d,
        copy_tex_sub_image2d,
        copy_tex_sub_image3d,
        create_buffer,
        create_framebuffer,
        create_program,
        create_query,
        create_renderbuffer,
        create_sampler,
        create_shader,
        create_texture,
        create_transform_feedback,
        create_vertex_array,
        cull_face,
        delete_buffer,
        delete_framebuffer,
        delete_program,
        delete_query,
        delete_renderbuffer,
        delete_sampler,
        delete_shader,
        delete_sync,
        delete_texture,
        delete_transform_feedback,
        delete_vertex_array,
        depth_func,
        depth_mask,
        detach_shader,
        disable,
        disable_vertex_attrib_array,
        draw_arrays,
        draw_arrays_instanced,
        draw_buffers,
        draw_elements,
        draw_elements_instanced,
        draw_range_elements,
        enable,
        enable_vertex_attrib_array,
        end_query,
        end_transform_feedback,
        fence_sync,
        finish,
        flush,
        framebuffer_renderbuffer,
        framebuffer_texture2d,
        framebuffer_texture_layer,
        front_face,
        generate_mipmap,
        get_active_attrib,
        get_active_uniform,
        get_active_uniform_block_name,
        get_active_uniform_block_param,
        get_active_uniforms,
        get_attached_shaders,
        get_attrib_location,
        get_buffer_parameter,
        get_buffer_sub_data,
        get_error,
        get_frag_data_location,
        get_framebuffer_attachment_par,
        get_indexed_parameter,
        get_internalformat_parameter,
        get_parameter,
        get_program_info_log,
        get_program_parameter,
        get_query,
        get_query_parameter,
        get_renderbuffer_parameter,
        get_sampler_parameter,
        get_shader_info_log,
        get_shader_parameter,
        get_shader_precision_format,
        get_shader_source,
        get_sync_parameter,
        get_tex_parameter,
        get_transform_feedback_varying,
        get_uniform,
        get_uniform_block_index,
        get_uniform_indices,
        get_uniform_location,
        get_vertex_attrib,
        get_vertex_attrib_offset,
        hint,
        invalidate_framebuffer,
        invalidate_sub_framebuffer,
        is_buffer,
        is_enabled,
        is_framebuffer,
        is_program,
        is_query,
        is_renderbuffer,
        is_sampler,
        is_shader,
        is_texture,
        is_transform_feedback,
        is_vertex_array,
        line_width$0,
        link_program,
        pause_transform_feedback,
        pixel_storei,
        polygon_offset,
        read_buffer,
        read_pixels_to_pixel_pack,
        read_pixels,
        renderbuffer_storage,
        renderbuffer_storage_multisamp,
        resume_transform_feedback,
        sample_coverage,
        sampler_parameterf,
        sampler_parameteri,
        scissor,
        shader_source,
        stencil_func,
        stencil_func_separate,
        stencil_mask,
        stencil_mask_separate,
        stencil_op,
        stencil_op_separate,
        tex_image2d,
        tex_image2d_of_source,
        tex_image2d_of_pixel_unpack,
        tex_image3d,
        tex_image3d_of_source,
        tex_image3d_of_pixel_unpack,
        tex_parameterf,
        tex_parameteri,
        tex_storage2d,
        tex_storage3d,
        tex_sub_image2d,
        tex_sub_image2d_of_source,
        tex_sub_image2d_of_pixel_unpac,
        tex_sub_image3d,
        tex_sub_image3d_of_source,
        tex_sub_image3d_of_pixel_unpac,
        transform_feedback_varyings,
        uniform1f,
        uniform1fv,
        uniform1i,
        uniform1iv,
        uniform1ui,
        uniform1uiv,
        uniform2f,
        uniform2fv,
        uniform2i,
        uniform2iv,
        uniform2ui,
        uniform2uiv,
        uniform3f,
        uniform3fv,
        uniform3i,
        uniform3iv,
        uniform3ui,
        uniform3uiv,
        uniform4f,
        uniform4fv,
        uniform4i,
        uniform4iv,
        uniform4ui,
        uniform4uiv,
        uniform_block_binding,
        uniform_matrix2fv,
        uniform_matrix2x3fv,
        uniform_matrix2x4fv,
        uniform_matrix3fv,
        uniform_matrix3x2fv,
        uniform_matrix3x4fv,
        uniform_matrix4fv,
        uniform_matrix4x2fv,
        uniform_matrix4x3fv,
        use_program,
        validate_program,
        vertex_attrib1f,
        vertex_attrib1fv,
        vertex_attrib2f,
        vertex_attrib2fv,
        vertex_attrib3f,
        vertex_attrib3fv,
        vertex_attrib4f,
        vertex_attrib4fv,
        vertex_attrib_divisor,
        vertex_attrib_i4i,
        vertex_attrib_i4iv,
        vertex_attrib_i4ui,
        vertex_attrib_i4uiv,
        vertex_attrib_ipointer,
        vertex_attrib_pointer,
        viewport,
        wait_sync,
        active_attributes,
        active_texture$0,
        active_uniform_blocks,
        active_uniforms,
        aliased_line_width_range,
        aliased_point_size_range,
        alpha$0,
        alpha_bits,
        already_signaled,
        always,
        any_samples_passed,
        any_samples_passed_conservativ,
        array_buffer$2,
        array_buffer_binding,
        attached_shaders,
        back$0,
        blend,
        blend_color$0,
        blend_dst_alpha,
        blend_dst_rgb,
        blend_equation$0,
        blend_equation_alpha,
        blend_equation_rgb,
        blend_src_alpha,
        blend_src_rgb,
        blue_bits,
        bool$1,
        bool_vec2,
        bool_vec3,
        bool_vec4,
        browser_default_webgl,
        buffer_size,
        buffer_usage,
        byte$0,
        ccw,
        clamp_to_edge,
        color$2,
        color_attachment0,
        color_attachment1,
        color_attachment10,
        color_attachment11,
        color_attachment12,
        color_attachment13,
        color_attachment14,
        color_attachment15,
        color_attachment2,
        color_attachment3,
        color_attachment4,
        color_attachment5,
        color_attachment6,
        color_attachment7,
        color_attachment8,
        color_attachment9,
        color_buffer_bit,
        color_clear_value,
        color_writemask,
        compare_ref_to_texture,
        compile_status,
        compressed_texture_formats,
        condition_satisfied,
        constant_alpha,
        constant_color,
        context_lost_webgl,
        copy_read_buffer,
        copy_read_buffer_binding,
        copy_write_buffer,
        copy_write_buffer_binding,
        cull_face$0,
        cull_face_mode,
        current_program,
        current_query,
        current_vertex_attrib,
        cw,
        decr,
        decr_wrap,
        delete_status,
        depth$0,
        depth24_stencil8,
        depth32f_stencil8,
        depth_attachment,
        depth_bits,
        depth_buffer_bit,
        depth_clear_value,
        depth_component,
        depth_component16,
        depth_component24,
        depth_component32f,
        depth_func$0,
        depth_range,
        depth_stencil,
        depth_stencil_attachment,
        depth_test,
        depth_writemask,
        dither,
        dont_care,
        draw_buffer0,
        draw_buffer1,
        draw_buffer10,
        draw_buffer11,
        draw_buffer12,
        draw_buffer13,
        draw_buffer14,
        draw_buffer15,
        draw_buffer2,
        draw_buffer3,
        draw_buffer4,
        draw_buffer5,
        draw_buffer6,
        draw_buffer7,
        draw_buffer8,
        draw_buffer9,
        draw_framebuffer,
        draw_framebuffer_binding,
        dst_alpha,
        dst_color,
        dynamic_copy,
        dynamic_draw,
        dynamic_read,
        element_array_buffer,
        element_array_buffer_binding,
        equal$0,
        fastest,
        float$2,
        float_32_unsigned_int_24_8_rev,
        float_mat2,
        float_mat2x3,
        float_mat2x4,
        float_mat3,
        float_mat3x2,
        float_mat3x4,
        float_mat4,
        float_mat4x2,
        float_mat4x3,
        float_vec2,
        float_vec3,
        float_vec4,
        fragment_shader,
        fragment_shader_derivative_hin,
        framebuffer,
        framebuffer_attachment_alpha_s,
        framebuffer_attachment_blue_si,
        framebuffer_attachment_color_e,
        framebuffer_attachment_compone,
        framebuffer_attachment_depth_s,
        framebuffer_attachment_green_s,
        framebuffer_attachment_object_$0,
        framebuffer_attachment_object_,
        framebuffer_attachment_red_siz,
        framebuffer_attachment_stencil,
        framebuffer_attachment_texture$0,
        framebuffer_attachment_texture$1,
        framebuffer_attachment_texture,
        framebuffer_binding,
        framebuffer_complete,
        framebuffer_default,
        framebuffer_incomplete_attachm,
        framebuffer_incomplete_dimensi,
        framebuffer_incomplete_missing,
        framebuffer_incomplete_multisa,
        framebuffer_unsupported,
        front,
        front_and_back,
        front_face$0,
        func_add,
        func_reverse_subtract,
        func_subtract,
        generate_mipmap_hint,
        gequal,
        greater,
        green_bits,
        half_float,
        high_float,
        high_int,
        implementation_color_read_form,
        implementation_color_read_type,
        incr,
        incr_wrap,
        int$3,
        int_2_10_10_10_rev,
        int_sampler_2d,
        int_sampler_2d_array,
        int_sampler_3d,
        int_sampler_cube,
        int_vec2,
        int_vec3,
        int_vec4,
        interleaved_attribs,
        invalid_enum,
        invalid_framebuffer_operation,
        invalid_index,
        invalid_operation,
        invalid_value,
        invert,
        keep,
        lequal,
        less,
        line_loop,
        line_strip,
        line_width$1,
        linear,
        linear_mipmap_linear,
        linear_mipmap_nearest,
        lines,
        link_status,
        low_float,
        low_int,
        luminance,
        luminance_alpha,
        max$2,
        max_3d_texture_size,
        max_array_texture_layers,
        max_client_wait_timeout_webgl,
        max_color_attachments,
        max_combined_fragment_uniform_,
        max_combined_texture_image_uni,
        max_combined_uniform_blocks,
        max_combined_vertex_uniform_co,
        max_cube_map_texture_size,
        max_draw_buffers,
        max_element_index,
        max_elements_indices,
        max_elements_vertices,
        max_fragment_input_components,
        max_fragment_uniform_blocks,
        max_fragment_uniform_component,
        max_fragment_uniform_vectors,
        max_program_texel_offset,
        max_renderbuffer_size,
        max_samples,
        max_server_wait_timeout,
        max_texture_image_units,
        max_texture_lod_bias,
        max_texture_size,
        max_transform_feedback_interle,
        max_transform_feedback_separat$0,
        max_transform_feedback_separat,
        max_uniform_block_size,
        max_uniform_buffer_bindings,
        max_varying_components,
        max_varying_vectors,
        max_vertex_attribs,
        max_vertex_output_components,
        max_vertex_texture_image_units,
        max_vertex_uniform_blocks,
        max_vertex_uniform_components,
        max_vertex_uniform_vectors,
        max_viewport_dims,
        medium_float,
        medium_int,
        min$1,
        min_program_texel_offset,
        mirrored_repeat,
        nearest,
        nearest_mipmap_linear,
        nearest_mipmap_nearest,
        never,
        nicest,
        no_error,
        none$0,
        notequal,
        object_type,
        one,
        one_minus_constant_alpha,
        one_minus_constant_color,
        one_minus_dst_alpha,
        one_minus_dst_color,
        one_minus_src_alpha,
        one_minus_src_color,
        out_of_memory,
        pack_alignment,
        pack_row_length,
        pack_skip_pixels,
        pack_skip_rows,
        pixel_pack_buffer,
        pixel_pack_buffer_binding,
        pixel_unpack_buffer,
        pixel_unpack_buffer_binding,
        points,
        polygon_offset_factor,
        polygon_offset_fill,
        polygon_offset_units,
        query_result,
        query_result_available,
        r11f_g11f_b10f,
        r16f,
        r16i,
        r16ui,
        r32f,
        r32i,
        r32ui,
        r8,
        r8_snorm,
        r8i,
        r8ui,
        rasterizer_discard,
        read_buffer$0,
        read_framebuffer,
        read_framebuffer_binding,
        red,
        red_bits,
        red_integer,
        renderbuffer,
        renderbuffer_alpha_size,
        renderbuffer_binding,
        renderbuffer_blue_size,
        renderbuffer_depth_size,
        renderbuffer_green_size,
        renderbuffer_height,
        renderbuffer_internal_format,
        renderbuffer_red_size,
        renderbuffer_samples,
        renderbuffer_stencil_size,
        renderbuffer_width,
        renderer,
        repeat$1,
        replace,
        rg,
        rg16f,
        rg16i,
        rg16ui,
        rg32f,
        rg32i,
        rg32ui,
        rg8,
        rg8_snorm,
        rg8i,
        rg8ui,
        rg_integer,
        rgb,
        rgb10_a2,
        rgb10_a2ui,
        rgb16f,
        rgb16i,
        rgb16ui,
        rgb32f,
        rgb32i,
        rgb32ui,
        rgb565,
        rgb5_a1,
        rgb8,
        rgb8_snorm,
        rgb8i,
        rgb8ui,
        rgb9_e5,
        rgb_integer,
        rgba,
        rgba16f,
        rgba16i,
        rgba16ui,
        rgba32f,
        rgba32i,
        rgba32ui,
        rgba4,
        rgba8,
        rgba8_snorm,
        rgba8i,
        rgba8ui,
        rgba_integer,
        sample_alpha_to_coverage,
        sample_buffers,
        sample_coverage$0,
        sample_coverage_invert,
        sample_coverage_value,
        sampler_2d,
        sampler_2d_array,
        sampler_2d_array_shadow,
        sampler_2d_shadow,
        sampler_3d,
        sampler_binding,
        sampler_cube,
        sampler_cube_shadow,
        samples,
        scissor_box,
        scissor_test,
        separate_attribs,
        shader_type,
        shading_language_version,
        short$0,
        signaled,
        signed_normalized,
        src_alpha,
        src_alpha_saturate,
        src_color,
        srgb,
        srgb8,
        srgb8_alpha8,
        static_copy,
        static_draw,
        static_read,
        stencil$0,
        stencil_attachment,
        stencil_back_fail,
        stencil_back_func,
        stencil_back_pass_depth_fail,
        stencil_back_pass_depth_pass,
        stencil_back_ref,
        stencil_back_value_mask,
        stencil_back_writemask,
        stencil_bits,
        stencil_buffer_bit,
        stencil_clear_value,
        stencil_fail,
        stencil_func$0,
        stencil_index8,
        stencil_pass_depth_fail,
        stencil_pass_depth_pass,
        stencil_ref,
        stencil_test,
        stencil_value_mask,
        stencil_writemask,
        stream_copy,
        stream_draw,
        stream_read,
        subpixel_bits,
        sync_condition,
        sync_fence,
        sync_flags,
        sync_flush_commands_bit,
        sync_gpu_commands_complete,
        sync_status,
        texture,
        texture0,
        texture1,
        texture10,
        texture11,
        texture12,
        texture13,
        texture14,
        texture15,
        texture16,
        texture17,
        texture18,
        texture19,
        texture2,
        texture20,
        texture21,
        texture22,
        texture23,
        texture24,
        texture25,
        texture26,
        texture27,
        texture28,
        texture29,
        texture3,
        texture30,
        texture31,
        texture4,
        texture5,
        texture6,
        texture7,
        texture8,
        texture9,
        texture_2d,
        texture_2d_array,
        texture_3d,
        texture_base_level,
        texture_binding_2d,
        texture_binding_2d_array,
        texture_binding_3d,
        texture_binding_cube_map,
        texture_compare_func,
        texture_compare_mode,
        texture_cube_map,
        texture_cube_map_negative_x,
        texture_cube_map_negative_y,
        texture_cube_map_negative_z,
        texture_cube_map_positive_x,
        texture_cube_map_positive_y,
        texture_cube_map_positive_z,
        texture_immutable_format,
        texture_immutable_levels,
        texture_mag_filter,
        texture_max_level,
        texture_max_lod,
        texture_min_filter,
        texture_min_lod,
        texture_wrap_r,
        texture_wrap_s,
        texture_wrap_t,
        timeout_expired,
        timeout_ignored,
        transform_feedback,
        transform_feedback_active,
        transform_feedback_binding,
        transform_feedback_buffer,
        transform_feedback_buffer_bind,
        transform_feedback_buffer_mode,
        transform_feedback_buffer_size,
        transform_feedback_buffer_star,
        transform_feedback_paused,
        transform_feedback_primitives_,
        transform_feedback_varyings$0,
        triangle_fan,
        triangle_strip,
        triangles,
        uniform_array_stride,
        uniform_block_active_uniform_i,
        uniform_block_active_uniforms,
        uniform_block_binding$0,
        uniform_block_data_size,
        uniform_block_index,
        uniform_block_referenced_by_fr,
        uniform_block_referenced_by_ve,
        uniform_buffer,
        uniform_buffer_binding,
        uniform_buffer_offset_alignmen,
        uniform_buffer_size,
        uniform_buffer_start,
        uniform_is_row_major,
        uniform_matrix_stride,
        uniform_offset,
        uniform_size,
        uniform_type,
        unpack_alignment,
        unpack_colorspace_conversion_w,
        unpack_flip_y_webgl,
        unpack_image_height,
        unpack_premultiply_alpha_webgl,
        unpack_row_length,
        unpack_skip_images,
        unpack_skip_pixels,
        unpack_skip_rows,
        unsignaled,
        unsigned_byte,
        unsigned_int,
        unsigned_int_10f_11f_11f_rev,
        unsigned_int_24_8,
        unsigned_int_2_10_10_10_rev,
        unsigned_int_5_9_9_9_rev,
        unsigned_int_sampler_2d,
        unsigned_int_sampler_2d_array,
        unsigned_int_sampler_3d,
        unsigned_int_sampler_cube,
        unsigned_int_vec2,
        unsigned_int_vec3,
        unsigned_int_vec4,
        unsigned_normalized,
        unsigned_short,
        unsigned_short_4_4_4_4,
        unsigned_short_5_5_5_1,
        unsigned_short_5_6_5,
        validate_status,
        vendor,
        version,
        vertex_array_binding,
        vertex_attrib_array_buffer_bin,
        vertex_attrib_array_divisor,
        vertex_attrib_array_enabled,
        vertex_attrib_array_integer,
        vertex_attrib_array_normalized,
        vertex_attrib_array_pointer,
        vertex_attrib_array_size,
        vertex_attrib_array_stride,
        vertex_attrib_array_type,
        vertex_shader,
        viewport$0,
        wait_failed,
        zero]];
    caml_register_global(2945,Brr_canvas,"Brr_canvas");
    var a_rate="a-rate",k_rate="k-rate",Automation_rate=[0,a_rate,k_rate];
    function descriptor(automation_rate,min_value,max_value,default_value,n)
     {var o={};
      o[cst_name$8] = n;
      caml_call3(_e_[4],o,cst_automationRate,automation_rate);
      caml_call3(Float[4],o,cst_minValue,min_value);
      caml_call3(Float[4],o,cst_maxValue,max_value);
      caml_call3(Float[4],o,cst_defaultValue,max_value);
      return o}
    function value$3(p){return caml_call2(Float[2],p,cst_value$2)}
    function set_value(p,v){return caml_call3(Float[3],p,cst_value$3,v)}
    function automation_rate(p)
     {return caml_call2(_e_[2],p,cst_automationRate$0)}
    function set_automation_rate(p,v)
     {return caml_call3(_e_[3],p,cst_automationRate$1,v)}
    function default_value(p)
     {return caml_call2(Float[2],p,cst_defaultValue$0)}
    function min_value(p){return caml_call2(Float[2],p,cst_minValue$0)}
    function max_value(p){return caml_call2(Float[2],p,cst_maxValue$0)}
    function set_value_at_time(p,v,t){p.setValueAtTime(v,t);return 0}
    function linear_ramp_to_value_at_time(p,v,t)
     {p.linearRampToValueAtTime(v,t);return 0}
    function exponential_ramp_to_value_at_t(p,v,t)
     {p.exponentialRampToValueAtTime(v,t);return 0}
    function set_target_at_time(p,v,t,r){p.setTargetAtTime(v,t,r);return 0}
    function set_value_curve_at_time(p,vs,t,d)
     {p.setValueCurveAtTime(vs,t,d);return 0}
    function cancel_scheduled_values(p,t){p.cancelScheduledValues(t);return 0}
    function cancel_and_hold_at_time(p,t){p.cancelAndHoldAtTime(t);return 0}
    var
     Param=
      [0,
       Automation_rate,
       descriptor,
       value$3,
       set_value,
       automation_rate,
       set_automation_rate,
       default_value,
       min_value,
       max_value,
       set_value_at_time,
       linear_ramp_to_value_at_time,
       exponential_ramp_to_value_at_t,
       set_target_at_time,
       set_value_curve_at_time,
       cancel_scheduled_values,
       cancel_and_hold_at_time];
    function position_x(l){return l.positionX()}
    function position_y(l){return l.positionY()}
    function position_z(l){return l.positionZ()}
    function forward_x(l){return l.forwardX()}
    function forward_y(l){return l.forwardY()}
    function forward_z(l){return l.forwardZ()}
    function up_x(l){return l.upX()}
    function up_y(l){return l.upY()}
    function up_z(l){return l.upZ()}
    var
     Listener=
      [0,
       position_x,
       position_y,
       position_z,
       forward_x,
       forward_y,
       forward_z,
       up_x,
       up_y,
       up_z];
    function add_module(w,url)
     {var _dL_=w.addModule(url);
      return of_promise$0(function(_dM_){return 0},_dL_)}
    function register_processor(n,c)
     {target[cst_registerProcessor](n,c);return 0}
    function current_frame(param)
     {return caml_call2(Int[2],target,cst_currentFrame)}
    function current_time(param)
     {return caml_call2(Float[2],target,cst_currentTime$1)}
    function sample_rate$0(param)
     {return caml_call2(Float[2],target,cst_sampleRate)}
    var G=[0,register_processor,current_frame,current_time,sample_rate$0];
    function port$0(p){return p[cst_port$1]}
    var Processor=[0,port$0],Worklet=[0,add_module,G,Processor];
    function opts$3(cc,l,r,param)
     {return {"numberOfChannels":cc,"length":l,"sampleRate":r}}
    function create$18(opts){return new (target[cst_AudioBuffer])(opts)}
    function sample_rate$1(b){return caml_call2(Float[2],b,cst_sampleRate$0)}
    function length$6(b){return caml_call2(Int[2],b,cst_length$8)}
    function duration_s$0(b){return caml_call2(Float[2],b,cst_length$9)}
    function channel_count$0(b)
     {return caml_call2(Int[2],b,cst_numberOfChannels)}
    function get_channel_data(b,channel){return b.getChannelData(channel)}
    function copy_from_channel(opt,b,c,dst)
     {if(opt)var sth=opt[1],dst_start=sth;else var dst_start=0;
      b.copyFromChannel(dst,c,dst_start);
      return 0}
    function copy_to_channel(opt,b,src,c)
     {if(opt)var sth=opt[1],dst_start=sth;else var dst_start=0;
      b.copyToChannel(src,c,dst_start);
      return 0}
    var
     Buffer=
      [0,
       opts$3,
       create$18,
       sample_rate$1,
       length$6,
       duration_s$0,
       channel_count$0,
       get_channel_data,
       copy_from_channel,
       copy_to_channel],
     max$3="max",
     clamped_max="clamped-max",
     explicit="explicit",
     Channel_count_mode=[0,max$3,clamped_max,explicit],
     speakers="speakers",
     discrete="discrete",
     Channel_interpretation=[0,speakers,discrete];
    function context(n){return n[cst_context]}
    function input_count(n){return caml_call2(Int[2],n,cst_numberOfInputs)}
    function output_count(n){return caml_call2(Int[2],n,cst_numberOfOutputs)}
    function channel_count$1(n){return caml_call2(Int[2],n,cst_channelCount)}
    function set_channel_count(n,c)
     {return caml_call3(Int[3],n,cst_channelCount$0,c)}
    function channel_count_mode(n)
     {return caml_call2(_e_[2],n,cst_channelCountMode)}
    function set_channel_count_mode(n,m)
     {return caml_call3(_e_[3],n,cst_channelCountMode$0,m)}
    function channel_interpretation(n)
     {return caml_call2(_e_[2],n,cst_channelInterpretation)}
    function set_channel_interpretation(n,i)
     {return caml_call3(_e_[3],n,cst_channelInterpretation$0,i)}
    function connect_node(opt,_dK_,n,dst)
     {if(opt)var sth=opt[1],output=sth;else var output=0;
      if(_dK_)var sth$0=_dK_[1],input=sth$0;else var input=0;
      n.connect(dst,output,input);
      return 0}
    function connect_param(opt,n,dst)
     {if(opt)var sth=opt[1],output=sth;else var output=0;
      n.connect(dst,output);
      return 0}
    function disconnect(n){n.disconnect();return 0}
    function disconnect_node(output,input,n,dst)
     {var
       output$0=of_option(fn,function(_dJ_){return _dJ_},output),
       input$0=of_option(fn,function(_dI_){return _dI_},input);
      n.disconnect(dst,output$0,input$0);
      return 0}
    function disconnect_param(output,n,dst)
     {var output$0=of_option(fn,function(_dH_){return _dH_},output);
      n.disconnect(dst,output$0);
      return 0}
    function opts$4
     (channel_count,
      channel_count_mode,
      channel_interpretation,
      fft_size,
      max_decibels,
      min_decibels,
      smoothing_time_constant,
      param)
     {var o={};
      caml_call3(Int[4],o,cst_channelCount$1,channel_count);
      caml_call3(_e_[4],o,cst_channelCountMode$1,channel_count_mode);
      caml_call3(_e_[4],o,cst_channelInterpretation$1,channel_interpretation);
      caml_call3(Int[4],o,cst_fftSize,fft_size);
      caml_call3(Float[4],o,cst_minDecibels,min_decibels);
      caml_call3(Float[4],o,cst_maxDecibels,max_decibels);
      caml_call3(Float[4],o,cst_smoothingTimeConstant,smoothing_time_constant);
      return o}
    function create$19(opt,c)
     {if(opt)var sth=opt[1],opts=sth;else var opts=fn;
      return new (target[cst_AnalyserNode])(c,opts)}
    function get_float_frequency_data(n,a)
     {n.getFloatFrequencyData(a);return 0}
    function get_byte_frequency_data(n,a){n.getByteFrequencyData(a);return 0}
    function get_float_time_domain_data(n,a)
     {n.getFloatTimeDomainData(a);return 0}
    function get_byte_time_domain_data(n,a)
     {n.getByteTimeDomainData(a);return 0}
    function fft_size(n){return caml_call2(Int[2],n,cst_fftSize$0)}
    function set_fft_size(n,v){return caml_call3(Int[3],n,cst_fftSize$1,v)}
    function frequency_bin_count(n)
     {return caml_call2(Int[2],n,cst_frequencyBinCount)}
    function min_decibels(n){return caml_call2(Float[2],n,cst_minDecibels$0)}
    function set_min_decibels(n,v)
     {return caml_call3(Float[3],n,cst_minDecibels$1,v)}
    function max_decibels(n){return caml_call2(Float[2],n,cst_maxDecibels$0)}
    function set_max_decibels(n,v)
     {return caml_call3(Float[3],n,cst_maxDecibels$1,v)}
    function smoothing_time_constant(n)
     {return caml_call2(Float[2],n,cst_smoothingTimeConstant$0)}
    function set_smoothing_time_constant(n,v)
     {return caml_call3(Float[3],n,cst_smoothingTimeConstant$1,v)}
    var
     Analyser=
      [0,
       opts$4,
       create$19,
       get_float_frequency_data,
       get_byte_frequency_data,
       get_float_time_domain_data,
       get_byte_time_domain_data,
       fft_size,
       set_fft_size,
       frequency_bin_count,
       min_decibels,
       set_min_decibels,
       max_decibels,
       set_max_decibels,
       smoothing_time_constant,
       set_smoothing_time_constant],
     lowpass="lowpass",
     highpass="highpass",
     bandpass="bandpass",
     lowshelf="lowshelf",
     highshelf="highshelf",
     peaking="peaking",
     notch="notch",
     allpass="allpass",
     Type$3=
      [0,lowpass,highpass,bandpass,lowshelf,highshelf,peaking,notch,allpass];
    function opts$5
     (channel_count,
      channel_count_mode,
      channel_interpretation,
      type,
      q,
      detune,
      frequency,
      gain,
      param)
     {var o={};
      caml_call3(Int[4],o,cst_channelCount$2,channel_count);
      caml_call3(_e_[4],o,cst_channelCountMode$2,channel_count_mode);
      caml_call3(_e_[4],o,cst_channelInterpretation$2,channel_interpretation);
      caml_call3(_e_[4],o,cst_type$7,type);
      caml_call3(Float[4],o,cst_Q,q);
      caml_call3(Float[4],o,cst_detune,detune);
      caml_call3(Float[4],o,cst_frequency,frequency);
      caml_call3(Float[4],o,cst_gain,gain);
      return o}
    function create$20(opt,c)
     {if(opt)var sth=opt[1],opts=sth;else var opts=fn;
      return new (target[cst_BiquadFilterNode])(c,opts)}
    function type$10(n){return caml_call2(_e_[2],n,cst_type$8)}
    function set_type(n,v){return caml_call3(_e_[3],n,cst_type$9,v)}
    function detune(n){return n.detune()}
    function frequency(n){return n.frequency()}
    function q$1(n){return n.Q()}
    function gain(n){return n.gain()}
    function get_frequency_response(n,f,m,p)
     {n.getFrequencyResponse(f,m,p);return 0}
    var
     Biquad_filter=
      [0,
       Type$3,
       opts$5,
       create$20,
       type$10,
       set_type,
       detune,
       frequency,
       q$1,
       gain,
       get_frequency_response];
    function opts$6
     (buffer,detune,loop,loop_start,loop_end,playback_rate,param)
     {var o={};
      set_if_some(o,cst_buffer$0,buffer);
      caml_call3(Float[4],o,cst_detune$0,detune);
      caml_call3(Bool[4],o,cst_loop$1,loop);
      caml_call3(Float[4],o,cst_loop_start,loop_start);
      caml_call3(Float[4],o,cst_loop_end,loop_end);
      caml_call3(Float[4],o,cst_playbackRate$1,playback_rate);
      return o}
    function create$21(opt,c)
     {if(opt)var sth=opt[1],opts=sth;else var opts=fn;
      return new (target[cst_AudioBufferSourceNode])(c,opts)}
    function buffer$0(n)
     {return find_map(function(_dG_){return _dG_},n,cst_buffer$1)}
    function set_buffer(n,v)
     {return n[cst_buffer$2] = of_option(null$0,function(_dF_){return _dF_},v)}
    function playback_rate$0(n){return n[cst_playbackRate$2]}
    function detune$0(n){return n[cst_detune$1]}
    function loop$0(n){return caml_call2(Bool[2],n,cst_loop$2)}
    function set_loop$0(n,b){return caml_call3(Bool[3],n,cst_loop$3,b)}
    function loop_start(n){return caml_call2(Float[2],n,cst_loopStart)}
    function set_loop_start(n,v)
     {return caml_call3(Float[3],n,cst_loopStart$0,v)}
    function loop_end(n){return caml_call2(Float[2],n,cst_loopEnd)}
    function set_loop_end(n,v){return caml_call3(Float[3],n,cst_loopEnd$0,v)}
    function start$4(t,o,d,n)
     {var
       t$0=of_option(fn,function(_dE_){return _dE_},t),
       o$0=of_option(fn,function(_dD_){return _dD_},o),
       d$0=of_option(fn,function(_dC_){return _dC_},d);
      n.start(t$0,o$0,d$0);
      return 0}
    function stop$2(t,n)
     {var t$0=of_option(fn,function(_dB_){return _dB_},t);
      n.stop(t$0);
      return 0}
    var
     Buffer_source=
      [0,
       opts$6,
       create$21,
       buffer$0,
       set_buffer,
       playback_rate$0,
       detune$0,
       loop$0,
       set_loop$0,
       loop_start,
       set_loop_start,
       loop_end,
       set_loop_end,
       start$4,
       stop$2];
    function opts$7
     (channel_count,
      channel_count_mode,
      channel_interpretation,
      input_count,
      param)
     {var o={};
      caml_call3(Int[4],o,cst_channelCount$3,channel_count);
      caml_call3(_e_[4],o,cst_channelCountMode$3,channel_count_mode);
      caml_call3(_e_[4],o,cst_channelInterpretation$3,channel_interpretation);
      caml_call3(Int[4],o,cst_numberOfInputs$0,input_count);
      return o}
    function create$22(opt,c)
     {if(opt)var sth=opt[1],opts=sth;else var opts=fn;
      return new (target[cst_ChannelMergerNode])(c,opts)}
    var Channel_merger=[0,opts$7,create$22];
    function opts$8
     (channel_count,
      channel_count_mode,
      channel_interpretation,
      output_count,
      param)
     {var o={};
      caml_call3(Int[4],o,cst_channelCount$4,channel_count);
      caml_call3(_e_[4],o,cst_channelCountMode$4,channel_count_mode);
      caml_call3(_e_[4],o,cst_channelInterpretation$4,channel_interpretation);
      caml_call3(Int[4],o,cst_numberOfOutput,output_count);
      return o}
    function create$23(opt,c)
     {if(opt)var sth=opt[1],opts=sth;else var opts=fn;
      return new (target[cst_ChannelSplitterNode])(c,opts)}
    var Channel_splitter=[0,opts$8,create$23];
    function opts$9(offset,param)
     {var o={};caml_call3(Float[4],o,cst_offset,offset);return o}
    function create$24(opt,c)
     {if(opt)var sth=opt[1],opts=sth;else var opts=fn;
      return new (target[cst_ConstantSourceNode])(c,opts)}
    function offset(n){return n[cst_offset$0]}
    function start$5(t,n)
     {var t$0=of_option(fn,function(_dA_){return _dA_},t);
      n.start(t$0);
      return 0}
    function stop$3(t,n)
     {var t$0=of_option(fn,function(_dz_){return _dz_},t);
      n.stop(t$0);
      return 0}
    var Constant_source=[0,opts$9,create$24,offset,start$5,stop$3];
    function opts$10
     (channel_count,
      channel_count_mode,
      channel_interpretation,
      buffer,
      disable_normalization,
      param)
     {var o={};
      caml_call3(Int[4],o,cst_channelCount$5,channel_count);
      caml_call3(_e_[4],o,cst_channelCountMode$5,channel_count_mode);
      caml_call3(_e_[4],o,cst_channelInterpretation$5,channel_interpretation);
      set_if_some(o,cst_buffer$3,buffer);
      caml_call3(Bool[4],o,cst_disableNormalization,disable_normalization);
      return o}
    function create$25(opt,c)
     {if(opt)var sth=opt[1],opts=sth;else var opts=fn;
      return new (target[cst_ConvolverNode])(c,opts)}
    function buffer$1(n)
     {return find_map(function(_dy_){return _dy_},n,cst_buffer$4)}
    function set_buffer$0(n,v)
     {return n[cst_buffer$5] = of_option(null$0,function(_dx_){return _dx_},v)}
    function normalize(n){return caml_call2(Bool[2],n,cst_normalize)}
    function set_normalize(n,b)
     {return caml_call3(Bool[3],n,cst_normalize$0,b)}
    var
     Convolver=
      [0,opts$10,create$25,buffer$1,set_buffer$0,normalize,set_normalize];
    function opts$11
     (channel_count,
      channel_count_mode,
      channel_interpretation,
      delay_time,
      max_delay_time,
      param)
     {var o={};
      caml_call3(Int[4],o,cst_channelCount$6,channel_count);
      caml_call3(_e_[4],o,cst_channelCountMode$6,channel_count_mode);
      caml_call3(_e_[4],o,cst_channelInterpretation$6,channel_interpretation);
      caml_call3(Float[4],o,cst_delayTime,delay_time);
      caml_call3(Float[4],o,cst_maxDelayTime,max_delay_time);
      return o}
    function create$26(opt,c)
     {if(opt)var sth=opt[1],opts=sth;else var opts=fn;
      return new (target[cst_DelayNode])(c,opts)}
    function delay_time(n){return n[cst_delayTime$0]}
    var Delay=[0,opts$11,create$26,delay_time];
    function max_channel_count(n)
     {return caml_call2(Int[2],n,cst_maxChannelCount)}
    var Destination$0=[0,max_channel_count];
    function opts$12
     (channel_count,
      channel_count_mode,
      channel_interpretation,
      attack,
      knee,
      ratio,
      release,
      threshold,
      param)
     {var o={};
      caml_call3(Int[4],o,cst_channelCount$7,channel_count);
      caml_call3(_e_[4],o,cst_channelCountMode$7,channel_count_mode);
      caml_call3(_e_[4],o,cst_channelInterpretation$7,channel_interpretation);
      caml_call3(Float[4],o,cst_attack,attack);
      caml_call3(Float[4],o,cst_knee,knee);
      caml_call3(Float[4],o,cst_ratio,ratio);
      caml_call3(Float[4],o,cst_release,release);
      caml_call3(Float[4],o,cst_threshold,threshold);
      return o}
    function create$27(opt,c)
     {if(opt)var sth=opt[1],opts=sth;else var opts=fn;
      return new (target[cst_DynamicsCompressorNode])(c,opts)}
    function attack(n){return n[cst_attack$0]}
    function knee(n){return n[cst_knee$0]}
    function ratio(n){return n[cst_ratio$0]}
    function reduction(n){return caml_call2(Float[2],n,cst_reduction)}
    function release(n){return n[cst_release$0]}
    function threshold(n){return n[cst_threshold$0]}
    var
     Dynamics_compressor=
      [0,opts$12,create$27,attack,knee,ratio,reduction,release,threshold];
    function opts$13
     (channel_count,channel_count_mode,channel_interpretation,gain,param)
     {var o={};
      caml_call3(Int[4],o,cst_channelCount$8,channel_count);
      caml_call3(_e_[4],o,cst_channelCountMode$8,channel_count_mode);
      caml_call3(_e_[4],o,cst_channelInterpretation$8,channel_interpretation);
      caml_call3(Float[4],o,cst_gain$0,gain);
      return o}
    function create$28(opt,c)
     {if(opt)var sth=opt[1],opts=sth;else var opts=fn;
      return new (target[cst_GainNode])(c,opts)}
    function gain$0(n){return n[cst_gain$1]}
    var Gain=[0,opts$13,create$28,gain$0];
    function opts$14
     (channel_count,
      channel_count_mode,
      channel_interpretation,
      feedforward,
      feedback,
      param)
     {var o={};
      caml_call3(Int[4],o,cst_channelCount$9,channel_count);
      caml_call3(_e_[4],o,cst_channelCountMode$9,channel_count_mode);
      caml_call3(_e_[4],o,cst_channelInterpretation$9,channel_interpretation);
      o[cst_feedforward] = feedforward;
      o[cst_feedback] = feedback;
      return o}
    function create$29(c,opts){return new (target[cst_IIRFilterNode])(c,opts)}
    function get_frequency_response$0(n,f,m,p)
     {n.getFrequencyResponse(f,m,p);return 0}
    var Iir_filter=[0,opts$14,create$29,get_frequency_response$0];
    function opts$15(el,param){var o={};o[cst_mediaElement] = el;return o}
    function create$30(c,opts)
     {return new (target[cst_MediaElementAudioSourceNod])(c,opts)}
    function media_element(n){return n[cst_mediaElement$0]}
    var Media_element_source=[0,opts$15,create$30,media_element];
    function opts$16
     (channel_count,channel_count_mode,channel_interpretation,param)
     {var o={};
      caml_call3(Int[4],o,cst_channelCount$10,channel_count);
      caml_call3(_e_[4],o,cst_channelCountMode$10,channel_count_mode);
      caml_call3(_e_[4],o,cst_channelInterpretation$10,channel_interpretation);
      return o}
    function create$31(opt,c)
     {if(opt)var sth=opt[1],opts=sth;else var opts=fn;
      return new (target[cst_MediaStreamAudioDestinatio])(c,opts)}
    function stream$2(n){return n[cst_stream$1]}
    var Media_stream_destination=[0,opts$16,create$31,stream$2];
    function opts$17(stream,param)
     {var o={};o[cst_mediaStream] = stream;return o}
    function create$32(c,opts)
     {return new (target[cst_MediaStreamAudioSourceNode])(c,opts)}
    function media_stream(n){return n[cst_mediaStream$0]}
    var Media_stream_source=[0,opts$17,create$32,media_stream];
    function opts$18(stream,param)
     {var o={};o[cst_mediaStreamTrack] = stream;return o}
    function create$33(c,opts)
     {return new (target[cst_MediaStreamTrackAudioSourc])(c,opts)}
    var Media_stream_track_source=[0,opts$18,create$33];
    function opts$19(disable_normalization,real,imag,param)
     {var o={};
      caml_call3(Bool[4],o,cst_disableNormalization$0,disable_normalization);
      o[cst_real] = of_option(fn,function(_dw_){return _dw_},real);
      o[cst_imag] = of_option(fn,function(_dv_){return _dv_},imag);
      return o}
    function create$34(opt,c)
     {if(opt)var sth=opt[1],opts=sth;else var opts=fn;
      return new (target[cst_PeriodicWave])(c,opts)}
    var
     Periodic_wave=[0,opts$19,create$34],
     sine="sine",
     square$0="square",
     sawtooth="sawtooth",
     triangle="triangle",
     custom="custom",
     Type$4=[0,sine,square$0,sawtooth,triangle,custom];
    function opts$20
     (channel_count,
      channel_count_mode,
      channel_interpretation,
      type,
      frequency,
      detune,
      periodic_wave,
      param)
     {var o={};
      caml_call3(Int[4],o,cst_channelCount$11,channel_count);
      caml_call3(_e_[4],o,cst_channelCountMode$11,channel_count_mode);
      caml_call3(_e_[4],o,cst_channelInterpretation$11,channel_interpretation);
      caml_call3(_e_[4],o,cst_type$10,type);
      caml_call3(Float[4],o,cst_frequency$0,frequency);
      caml_call3(Float[4],o,cst_detune$2,detune);
      set_if_some(o,cst_periodicWave,periodic_wave);
      return o}
    function create$35(opt,c)
     {if(opt)var sth=opt[1],opts=sth;else var opts=fn;
      return new (target[cst_OscillatorNode])(c,opts)}
    function type$11(n){return caml_call2(_e_[2],n,cst_type$11)}
    function set_type$0(n,v){return caml_call3(_e_[3],n,cst_type$12,v)}
    function detune$1(n){return n.detune()}
    function frequency$0(n){return n.frequency()}
    function set_periodic_wave(n,w){n.setPeriodicWave(w);return 0}
    function start$6(t,n)
     {var t$0=of_option(fn,function(_du_){return _du_},t);
      n.start(t$0);
      return 0}
    function stop$4(t,n)
     {var t$0=of_option(fn,function(_dt_){return _dt_},t);
      n.stop(t$0);
      return 0}
    var
     Oscillator=
      [0,
       Periodic_wave,
       Type$4,
       opts$20,
       create$35,
       type$11,
       set_type$0,
       detune$1,
       frequency$0,
       set_periodic_wave,
       start$6,
       stop$4],
     equalpower="equalpower",
     hrtf="HRTF",
     Panning_model=[0,equalpower,hrtf],
     linear$0="linear",
     inverse$0="inverse",
     exponential="exponential",
     Distance_model=[0,linear$0,inverse$0,exponential];
    function opts$21
     (channel_count,
      channel_count_mode,
      channel_interpretation,
      panning_model,
      distance_model,
      position_x,
      position_y,
      position_z,
      orientation_x,
      orientation_y,
      orientation_z,
      ref_distance,
      max_distance,
      rolloff_factor,
      cone_inner_angle,
      cone_outer_angle,
      cone_outer_gain,
      param)
     {var o={};
      caml_call3(Int[4],o,cst_channelCount$12,channel_count);
      caml_call3(_e_[4],o,cst_channelCountMode$12,channel_count_mode);
      caml_call3(_e_[4],o,cst_channelInterpretation$12,channel_interpretation);
      caml_call3(_e_[4],o,cst_panningModel,panning_model);
      caml_call3(_e_[4],o,cst_distanceModel,distance_model);
      caml_call3(Float[4],o,cst_positionX,position_x);
      caml_call3(Float[4],o,cst_positionY,position_y);
      caml_call3(Float[4],o,cst_positionZ,position_z);
      caml_call3(Float[4],o,cst_orientationX,orientation_x);
      caml_call3(Float[4],o,cst_orientationY,orientation_y);
      caml_call3(Float[4],o,cst_orientationZ,orientation_z);
      caml_call3(Float[4],o,cst_refDistance,ref_distance);
      caml_call3(Float[4],o,cst_maxDistance,max_distance);
      caml_call3(Float[4],o,cst_rolloff_factor,rolloff_factor);
      caml_call3(Float[4],o,cst_cone_inner_angle,cone_inner_angle);
      caml_call3(Float[4],o,cst_cone_outer_angle,cone_outer_angle);
      caml_call3(Float[4],o,cst_cone_outer_gain,cone_outer_gain);
      return o}
    function create$36(opt,c)
     {if(opt)var sth=opt[1],opts=sth;else var opts=fn;
      return new (target[cst_PannerNode])(c,opts)}
    function panning_model(n){return caml_call2(_e_[2],n,cst_panningModel$0)}
    function set_panning_model(n,v)
     {return caml_call3(_e_[3],n,cst_panningModel$1,v)}
    function distance_model(n)
     {return caml_call2(_e_[2],n,cst_distanceModel$0)}
    function set_distance_model(n,v)
     {return caml_call3(_e_[3],n,cst_distanceModel$1,v)}
    function position_x$0(n){return n[cst_positionX$0]}
    function position_y$0(n){return n[cst_positionY$0]}
    function position_z$0(n){return n[cst_positionZ$0]}
    function orientation_x(n){return n[cst_orientationX$0]}
    function orientation_y(n){return n[cst_orientationY$0]}
    function orientation_z(n){return n[cst_orientationZ$0]}
    function ref_distance(n){return caml_call2(Float[2],n,cst_refDistance$0)}
    function set_ref_distance(n,v)
     {return caml_call3(Float[3],n,cst_refDistance$1,v)}
    function max_distance(n){return caml_call2(Float[2],n,cst_maxDistance$0)}
    function set_max_distance(n,v)
     {return caml_call3(Float[3],n,cst_maxDistance$1,v)}
    function cone_inner_angle(n)
     {return caml_call2(Float[2],n,cst_coneInnerAngle)}
    function set_cone_inner_angle(n,v)
     {return caml_call3(Float[3],n,cst_coneInnerAngle$0,v)}
    function cone_outer_angle(n)
     {return caml_call2(Float[2],n,cst_coneOuterAngle)}
    function set_cone_outer_angle(n,v)
     {return caml_call3(Float[3],n,cst_coneOuterAngle$0,v)}
    function cone_outer_gain(n)
     {return caml_call2(Float[2],n,cst_coneOuterGain)}
    function set_cone_outer_gain(n,v)
     {return caml_call3(Float[3],n,cst_coneOuterGain$0,v)}
    var
     Panner=
      [0,
       Panning_model,
       Distance_model,
       opts$21,
       create$36,
       panning_model,
       set_panning_model,
       distance_model,
       set_distance_model,
       position_x$0,
       position_y$0,
       position_z$0,
       orientation_x,
       orientation_y,
       orientation_z,
       ref_distance,
       set_ref_distance,
       max_distance,
       set_max_distance,
       cone_inner_angle,
       set_cone_inner_angle,
       cone_outer_angle,
       set_cone_outer_angle,
       cone_outer_gain,
       set_cone_outer_gain];
    function opts$22
     (channel_count,channel_count_mode,channel_interpretation,pan,param)
     {var o={};
      caml_call3(Int[4],o,cst_channelCount$13,channel_count);
      caml_call3(_e_[4],o,cst_channelCountMode$13,channel_count_mode);
      caml_call3(_e_[4],o,cst_channelInterpretation$13,channel_interpretation);
      caml_call3(Float[4],o,cst_pan,pan);
      return o}
    function create$37(opt,c)
     {if(opt)var sth=opt[1],opts=sth;else var opts=fn;
      return new (target[cst_StereoPannerNode])(c,opts)}
    function pan(n){return n[cst_pan$0]}
    var
     Stereo_panner=[0,opts$22,create$37,pan],
     none$1="none",
     mul_2x="2x",
     mul_4x="4x",
     Oversample=[0,none$1,mul_2x,mul_4x];
    function opts$23
     (channel_count,
      channel_count_mode,
      channel_interpretation,
      curve,
      oversample,
      param)
     {var o={};
      caml_call3(Int[4],o,cst_channelCount$14,channel_count);
      caml_call3(_e_[4],o,cst_channelCountMode$14,channel_count_mode);
      caml_call3(_e_[4],o,cst_channelInterpretation$14,channel_interpretation);
      o[cst_curve] = of_option(fn,function(_ds_){return _ds_},curve);
      caml_call3(_e_[4],o,cst_oversample,oversample);
      return o}
    function create$38(opt,c)
     {if(opt)var sth=opt[1],opts=sth;else var opts=fn;
      return new (target[cst_WaveShaperNode])(c,opts)}
    function curve(n)
     {var _dq_=n[cst_curve$0];
      return to_option(function(_dr_){return _dr_},_dq_)}
    function set_curve(n,v)
     {return n[cst_curve$1] = of_option(null$0,function(_dp_){return _dp_},v)}
    function oversample(n){return caml_call2(_e_[2],n,cst_oversample$0)}
    function set_oversample(n,v)
     {return caml_call3(_e_[3],n,cst_oversample$1,v)}
    var
     Wave_shaper=
      [0,
       Oversample,
       opts$23,
       create$38,
       curve,
       set_curve,
       oversample,
       set_oversample];
    function opts$24
     (channel_count,
      channel_count_mode,
      channel_interpretation,
      input_count,
      output_count,
      output_channel_count,
      parameters,
      processor_options,
      param)
     {var o={};
      caml_call3(Int[4],o,cst_channelCount$15,channel_count);
      caml_call3(_e_[4],o,cst_channelCountMode$15,channel_count_mode);
      caml_call3(_e_[4],o,cst_channelInterpretation$15,channel_interpretation);
      caml_call3(Int[4],o,cst_numberOfInputs$1,input_count);
      caml_call3(Int[4],o,cst_numberOfOutputs$0,output_count);
      function _dl_(_do_){return _do_}
      function _dm_(_dn_){return of_list(_dl_,_dn_)}
      set_if_some
       (o,
        cst_outputChannelCount,
        caml_call2(Stdlib_Option[7],_dm_,output_channel_count));
      set_if_some(o,cst_parameterData,parameters);
      set_if_some(o,cst_processorOptions,processor_options);
      return o}
    function create$39(opt,c,name)
     {if(opt)var sth=opt[1],opts=sth;else var opts=fn;
      return new (target[cst_AudioWorkletNode])(c,name,opts)}
    function parameter(n,k)
     {var p=n[cst_parameters].get(k);
      return is_none(p)?throw$0(0,"no parameter named ".concat(k)):p}
    function port$1(n){return n[cst_port$2]}
    var
     Worklet$0=[0,opts$24,create$39,parameter,port$1],
     Node=
      [0,
       Channel_count_mode,
       Channel_interpretation,
       context,
       input_count,
       output_count,
       channel_count$1,
       set_channel_count,
       channel_count_mode,
       set_channel_count_mode,
       channel_interpretation,
       set_channel_interpretation,
       connect_node,
       connect_param,
       disconnect,
       disconnect_node,
       disconnect_param,
       Analyser,
       Biquad_filter,
       Buffer_source,
       Channel_merger,
       Channel_splitter,
       Constant_source,
       Convolver,
       Delay,
       Destination$0,
       Dynamics_compressor,
       Gain,
       Iir_filter,
       Media_element_source,
       Media_stream_destination,
       Media_stream_source,
       Media_stream_track_source,
       Oscillator,
       Panner,
       Stereo_panner,
       Wave_shaper,
       Worklet$0];
    function context_time(t){return caml_call2(Float[2],t,cst_contextTime)}
    function performance_time(t)
     {return caml_call2(Float[2],t,cst_performanceTime)}
    var
     Timestamp=[0,context_time,performance_time],
     suspended="suspended",
     running="running",
     closed$0="closed",
     State$0=[0,suspended,running,closed$0];
    function decode_audio_data(c,b)
     {var _dj_=c.decodeAudioData(b);
      return of_promise$0(function(_dk_){return _dk_},_dj_)}
    function destination$0(c){return c[cst_destination$0]}
    function sample_rate$2(c){return caml_call2(Float[2],c,cst_sampleRate$1)}
    function current_time$0(c)
     {return caml_call2(Float[2],c,cst_currentTime$2)}
    function listener(c){return c[cst_listener]}
    function state$2(c){return caml_call2(_e_[2],c,cst_state$2)}
    function audio_worklet(c){return c[cst_audioWorklet]}
    var
     Base=
      [0,
       decode_audio_data,
       destination$0,
       sample_rate$2,
       current_time$0,
       listener,
       state$2,
       audio_worklet],
     balanced="balanced",
     interactive="interactive",
     playback="playback",
     Latency_category=[0,balanced,interactive,playback];
    function opts$25(latency_hint,sample_rate_hz,param)
     {var o={};
      if(latency_hint)
       {var _dh_=latency_hint[1];
        if(925478882 <= _dh_[1])
         var s=_dh_[2],_di_=[0,s];
        else
         var c=_dh_[2],_di_=[0,c];
        var latency_hint$0=_di_}
      else
       var latency_hint$0=0;
      set_if_some(o,cst_latencyHint,latency_hint$0);
      caml_call3(Float[4],o,cst_sampleRate$2,sample_rate_hz);
      return o}
    function create$40(opt,param)
     {if(opt)var sth=opt[1],opts=sth;else var opts=fn;
      return new (target[cst_AudioContext])(opts)}
    function base_latency(c){return caml_call2(Float[2],c,cst_baseLatency)}
    function output_latency(c)
     {return caml_call2(Float[2],c,cst_outputLatency)}
    function get_output_timestamp(c){return c.getOutputTimestamp()}
    function resume$1(c)
     {var _df_=c.resume();return of_promise$0(function(_dg_){return 0},_df_)}
    function suspend$0(c)
     {var _dd_=c.suspend();return of_promise$0(function(_de_){return 0},_dd_)}
    function close$7(c)
     {var _db_=c.close();return of_promise$0(function(_dc_){return 0},_db_)}
    function opts$26(cc,l,r,param)
     {return {"numberOfChannels":cc,"length":l,"sampleRate":r}}
    function length$7(c){return caml_call2(Int[2],c,cst_length$10)}
    function create$41(opts)
     {return new (target[cst_OfflineAudioContext])(opts)}
    function start_rendering(c)
     {var _c$_=c.startRenderig();
      return of_promise$0(function(_da_){return _da_},_c$_)}
    function suspend$1(c,secs)
     {var _c9_=c.suspend(secs);
      return of_promise$0(function(_c__){return 0},_c9_)}
    function resume$2(c)
     {var _c7_=c.resume();return of_promise$0(function(_c8_){return 0},_c7_)}
    var
     Brr_webaudio=
      [0,
       [0,
        Param,
        Listener,
        Worklet,
        Buffer,
        Node,
        Timestamp,
        [0,
         State$0,
         Base,
         Latency_category,
         opts$25,
         create$40,
         base_latency,
         output_latency,
         get_output_timestamp,
         resume$1,
         suspend$0,
         close$7,
         [0,opts$26,create$41,length$7,start_rendering,suspend$1,resume$2]]]];
    caml_register_global(2946,Brr_webaudio,"Brr_webaudio");
    var
     public$0="public",
     private$0="private",
     secret="secret",
     Type$5=[0,public$0,private$0,secret],
     encrypt="encrypt",
     decrypt="decrypt",
     sign="sign",
     verify="verify",
     derive_key="deriveKey",
     derive_bits="deriveBits",
     wrap_key="wrapKey",
     unwrap_key="unwrapKey",
     Usage=
      [0,
       encrypt,
       decrypt,
       sign,
       verify,
       derive_key,
       derive_bits,
       wrap_key,
       unwrap_key],
     raw="raw",
     pkcs8="pkcs8",
     spki="spki",
     jwk="jwk",
     Format=[0,raw,pkcs8,spki,jwk];
    function type$12(k){return caml_call2(_e_[2],k,cst_type$13)}
    function extractable(k){return caml_call2(Bool[2],k,cst_extractable)}
    function algorithm(k){return k[cst_algorithm]}
    function usages(k){return caml_list_of_js_array(k[cst_usages])}
    function public$1(p){return p[cst_publicKey]}
    function private$1(p){return p[cst_privateKey]}
    var
     Crypto_key=
      [0,
       Type$5,
       Usage,
       Format,
       type$12,
       extractable,
       algorithm,
       usages,
       public$1,
       private$1];
    function v$16(n){return {"name":n}}
    function name$9(a){return caml_call2(_e_[2],a,cst_name$9)}
    var rsassa_pkcs1_v1_5="RSASSA-PKCS1-v1_5";
    function v$17(name,modulus_length,public_exponent,hash,param)
     {return {"name":name,
              "modulusLength":modulus_length,
              "publicExponent":public_exponent,
              "hash":hash}}
    function of_algo(_c6_){return _c6_}
    function name$10(a){return caml_call2(_e_[2],a,cst_name$10)}
    function modulus_length(a){return caml_call2(Int[2],a,cst_modulusLength)}
    function public_exponent(a){return a[cst_publicExponent]}
    function hash(a){return caml_call2(_e_[2],a,cst_hash$1)}
    var
     Rsa_hashed_key_gen_params=
      [0,v$17,of_algo,name$10,modulus_length,public_exponent,hash];
    function v$18(name,hash,param){return {"name":name,"hash":hash}}
    function of_algo$0(_c5_){return _c5_}
    function name$11(a){return caml_call2(_e_[2],a,cst_name$11)}
    function hash$0(a){return caml_call2(_e_[2],a,cst_hash$2)}
    var
     Rsa_hashed_import_params=[0,v$18,of_algo$0,name$11,hash$0],
     rsa_pss="RSA-PSS";
    function v$19(opt,salt_length,param)
     {if(opt)var sth=opt[1],name=sth;else var name=rsa_pss;
      return {"name":name,"saltLength":salt_length}}
    function of_algo$1(_c4_){return _c4_}
    function name$12(a){return caml_call2(_e_[2],a,cst_name$12)}
    function salt_length(a){return caml_call2(Int[2],a,cst_saltLength)}
    var
     Rsa_pss_params=[0,v$19,of_algo$1,name$12,salt_length],
     rsa_oaep="RSA-OAEP";
    function v$20(opt,label,param)
     {if(opt)var sth=opt[1],name=sth;else var name=rsa_oaep;
      if(label)var l=label[1],label$0=l;else var label$0=fn;
      return {"name":name,"label":label$0}}
    function of_algo$2(_c3_){return _c3_}
    function name$13(a){return caml_call2(_e_[2],a,cst_name$13)}
    function label$3(a)
     {var _c1_=a[cst_label$1];
      return to_option(function(_c2_){return _c2_},_c1_)}
    var Rsa_oaep_params=[0,v$20,of_algo$2,name$13,label$3],ecdsa="ECDSA";
    function v$21(name,named_curve,param)
     {return {"name":name,"namedCurve":named_curve}}
    function of_algo$3(_c0_){return _c0_}
    function name$14(a){return caml_call2(_e_[2],a,cst_name$14)}
    function named_curve(a){return caml_call2(_e_[2],a,cst_namedCurve)}
    var Ec_key_gen_params=[0,v$21,of_algo$3,name$14,named_curve];
    function v$22(name,named_curve,param)
     {return {"name":name,"namedCurve":named_curve}}
    function of_algo$4(_cZ_){return _cZ_}
    function name$15(a){return caml_call2(_e_[2],a,cst_name$15)}
    function named_curve$0(a){return caml_call2(_e_[2],a,cst_namedCurve$0)}
    var Ec_key_import_params=[0,v$22,of_algo$4,name$15,named_curve$0];
    function v$23(name,hash,param){return {"name":name,"hash":hash}}
    function of_algo$5(_cY_){return _cY_}
    function name$16(a){return caml_call2(_e_[2],a,cst_name$16)}
    function hash$1(a){return caml_call2(_e_[2],a,cst_hash$3)}
    var Ecdsa_params=[0,v$23,of_algo$5,name$16,hash$1],ecdh="ECDH";
    function v$24(name,public$0,param){return {"name":name,"public":public$0}}
    function of_algo$6(_cX_){return _cX_}
    function name$17(a){return caml_call2(_e_[2],a,cst_name$17)}
    function public$2(a){return a[cst_public]}
    var
     Ecdh_key_derive_params=[0,v$24,of_algo$6,name$17,public$2],
     aes_ctr="AES-CTR";
    function v$25(name,length,param){return {"name":name,"length":length}}
    function of_algo$7(_cW_){return _cW_}
    function name$18(a){return caml_call2(_e_[2],a,cst_name$18)}
    function length$8(a){return caml_call2(Int[2],a,cst_length$11)}
    var Aes_key_gen_params=[0,v$25,of_algo$7,name$18,length$8];
    function v$26(opt,counter,length,param)
     {if(opt)var sth=opt[1],name=sth;else var name=aes_ctr;
      return {"name":name,"counter":counter,"length":length}}
    function of_algo$8(_cV_){return _cV_}
    function name$19(a){return caml_call2(_e_[2],a,cst_name$19)}
    function counter(a){return a[cst_counter]}
    function length$9(a){return caml_call2(Int[2],a,cst_length$12)}
    var
     Aes_ctr_params=[0,v$26,of_algo$8,name$19,counter,length$9],
     aes_cbc="AES-CBC";
    function v$27(opt,iv,param)
     {if(opt)var sth=opt[1],name=sth;else var name=aes_cbc;
      return {"name":name,"iv":iv}}
    function of_algo$9(_cU_){return _cU_}
    function name$20(a){return caml_call2(_e_[2],a,cst_name$20)}
    function iv(a){return a[cst_iv]}
    var Aes_cbc_params=[0,v$27,of_algo$9,name$20,iv],aes_gcm="AES-GCM";
    function v$28(opt,iv,additional_data,tag_length,param)
     {if(opt)var sth=opt[1],name=sth;else var name=aes_cbc;
      if(additional_data)var a=additional_data[1],add=a;else var add=fn;
      if(tag_length)var l=tag_length[1],tlen=l;else var tlen=fn;
      return {"name":name,"iv":iv,"additionalData":add,"tagLength":tlen}}
    function of_algo$10(_cT_){return _cT_}
    function name$21(a){return caml_call2(_e_[2],a,cst_name$21)}
    function iv$0(a){return a[cst_iv$0]}
    function additional_data(a)
     {return find_map(function(_cS_){return _cS_},a,cst_additionalData)}
    function tag_length(a)
     {return find_map(function(_cR_){return _cR_},a,cst_tagLength)}
    var
     Aes_gcm_params=
      [0,v$28,of_algo$10,name$21,iv$0,additional_data,tag_length],
     aes_kw="AES-KW",
     hmac="HMAC";
    function v$29(opt,length,hash,param)
     {if(opt)var sth=opt[1],name=sth;else var name=hmac;
      if(length)var l=length[1],l$0=l;else var l$0=fn;
      return {"name":name,"hash":hash,"length":l$0}}
    function of_algo$11(_cQ_){return _cQ_}
    function name$22(a){return caml_call2(_e_[2],a,cst_name$22)}
    function hash$2(a){return caml_call2(_e_[2],a,cst_hash$4)}
    function length$10(a)
     {return find_map(function(_cP_){return _cP_},a,cst_length$13)}
    var
     Hmac_key_gen_params=[0,v$29,of_algo$11,name$22,hash$2,length$10],
     sha_1="SHA-1",
     sha_256="SHA-256",
     sha_384="SHA-384",
     sha_512="SHA-512",
     hkdf="HKDF";
    function v$30(opt,hash,salt,info,param)
     {if(opt)var sth=opt[1],name=sth;else var name=hkdf;
      return {"name":name,"hash":hash,"salt":salt,"info":info}}
    function of_algo$12(_cO_){return _cO_}
    function name$23(a){return caml_call2(_e_[2],a,cst_name$23)}
    function hash$3(a){return caml_call2(_e_[2],a,cst_hash$5)}
    function salt(a){return a[cst_salt]}
    function info$0(a){return a[cst_info$0]}
    var
     Hkdf_params=[0,v$30,of_algo$12,name$23,hash$3,salt,info$0],
     pbkdf2="PBKDF2";
    function v$31(opt,hash,salt,iterations,param)
     {if(opt)var sth=opt[1],name=sth;else var name=pbkdf2;
      return {"name":name,"hash":hash,"salt":salt,"iterations":iterations}}
    function of_algo$13(_cN_){return _cN_}
    function name$24(a){return caml_call2(_e_[2],a,cst_name$24)}
    function hash$4(a){return caml_call2(_e_[2],a,cst_hash$6)}
    function salt$0(a){return a[cst_salt$0]}
    function iterations(a){return caml_call2(Int[2],a,cst_iterations)}
    var Pbkdf2_params=[0,v$31,of_algo$13,name$24,hash$4,salt$0,iterations];
    function encrypt$0(s,a,k,d)
     {var _cL_=s.encrypt(a,k,d);
      return of_promise$0(function(_cM_){return _cM_},_cL_)}
    function decrypt$0(s,a,k,d)
     {var _cJ_=s.decrypt(a,k,d);
      return of_promise$0(function(_cK_){return _cK_},_cJ_)}
    function digest(s,a,d)
     {var _cH_=s.digest(a,d);
      return of_promise$0(function(_cI_){return _cI_},_cH_)}
    function sign$0(s,a,k,d)
     {var _cF_=s.sign(a,k,d);
      return of_promise$0(function(_cG_){return _cG_},_cF_)}
    function verify$0(s,a,k,sig,d)
     {return of_promise$0(caml_js_to_bool,s.verify(a,k,sig,d))}
    function generate_key(s,a,extractable,usages)
     {var _cD_=s.generateKey(a,! ! extractable,caml_list_to_js_array(usages));
      return of_promise$0(function(_cE_){return _cE_},_cD_)}
    function generate_key_pair(s,a,extractable,usages)
     {var _cB_=s.generateKey(a,! ! extractable,caml_list_to_js_array(usages));
      return of_promise$0(function(_cC_){return _cC_},_cB_)}
    function derive_bits$0(s,a,k,l)
     {var _cz_=s.deriveBits(a,k,l);
      return of_promise$0(function(_cA_){return _cA_},_cz_)}
    function derive_key$0(s,a,k,derived,extractable,usages)
     {var
       _cx_=
        s.deriveKey(a,k,derived,! ! extractable,caml_list_to_js_array(usages));
      return of_promise$0(function(_cy_){return _cy_},_cx_)}
    function import_key(s,f,k,a,extractable,usages)
     {if(98868477 <= k[1])var k$0=k[2],k$1=k$0;else var b=k[2],k$1=b;
      var
       _cv_=
        s.importKey(f,k$1,a,! ! extractable,caml_list_to_js_array(usages));
      return of_promise$0(function(_cw_){return _cw_},_cv_)}
    function export_key(s,f,k)
     {var
       match=caml_equal(Crypto_key[3][4],f),
       ok=
        match
         ?function(v){return [0,98868477,v]}
         :function(v){return [0,86585632,v]};
      return of_promise$0(ok,s.exportKey(f,k))}
    function wrap_key$0(s,f,k,wrap_key,wrapper)
     {var _ct_=s.wrapKey(f,k,wrap_key,wrapper);
      return of_promise$0(function(_cu_){return _cu_},_ct_)}
    function unwrap_key$0(s,f,k,wrap_key,wrapper,unwrapped,extractable,usages)
     {var
       _cr_=
        s.unwrapKey
         (f,
          k,
          wrap_key,
          wrapper,
          unwrapped,
          ! ! extractable,
          caml_list_to_js_array(usages));
      return of_promise$0(function(_cs_){return _cs_},_cr_)}
    var crypto=target[cst_crypto];
    function subtle(c){return c[cst_subtle]}
    function set_random_values(c,a){c.getRandomValues(a);return 0}
    var
     Crypto=[0,crypto,subtle,set_random_values],
     Brr_webcrypto=
      [0,
       Crypto_key,
       [0,
        v$16,
        name$9,
        rsassa_pkcs1_v1_5,
        Rsa_hashed_key_gen_params,
        Rsa_hashed_import_params,
        rsa_pss,
        Rsa_pss_params,
        rsa_oaep,
        Rsa_oaep_params,
        ecdsa,
        Ec_key_gen_params,
        Ec_key_import_params,
        Ecdsa_params,
        ecdh,
        Ecdh_key_derive_params,
        aes_ctr,
        Aes_key_gen_params,
        Aes_ctr_params,
        aes_cbc,
        Aes_cbc_params,
        aes_gcm,
        Aes_gcm_params,
        aes_kw,
        hmac,
        Hmac_key_gen_params,
        Hmac_key_gen_params,
        sha_1,
        sha_256,
        sha_384,
        sha_512,
        hkdf,
        Hkdf_params,
        pbkdf2,
        Pbkdf2_params],
       [0,
        encrypt$0,
        decrypt$0,
        digest,
        sign$0,
        verify$0,
        generate_key,
        generate_key_pair,
        derive_bits$0,
        derive_key$0,
        export_key,
        import_key,
        wrap_key$0,
        unwrap_key$0],
       Crypto];
    caml_register_global(2947,Brr_webcrypto,"Brr_webcrypto");
    var classic="classic",module="module",Type$6=[0,classic,module];
    function opts$27(type,credentials,name,param)
     {var o=obj([0]);
      caml_call3(_e_[4],o,cst_type$14,type);
      caml_call3(_e_[4],o,cst_credentials$1,credentials);
      caml_call3(_e_[4],o,cst_name$25,name);
      return o}
    var worker$0=target[cst_Worker];
    function create$42(opt,uri)
     {if(opt)var sth=opt[1],opts=sth;else var opts=fn;
      return new worker$0(uri,opts)}
    function terminate(w){w.terminate();return 0}
    function post$1(opts,w,v)
     {if(opts)var o=opts[1],opts$0=o;else var opts$0=fn;
      w.postMessage(v,opts$0);
      return 0}
    var shared=target[cst_SharedWorker];
    function create$43(opt,uri)
     {if(opt)var sth=opt[1],opts=sth;else var opts=fn;
      return new shared(uri,opts)}
    function port$2(w){return w[cst_port$3]}
    function ami(param){return has(cst_WorkerGlobalScope,target)}
    function import_scripts(uris)
     {target.importScripts(caml_list_to_js_array(uris));return 0}
    function post$2(opts,v)
     {if(opts)var o=opts[1],opts$0=o;else var opts$0=fn;
      target.postMessage(v,opts$0);
      return 0}
    function close$8(param){target.close();return 0}
    var
     G$0=[0,import_scripts,post$2,close$8],
     imports="imports",
     all$1="all",
     none$2="none",
     Update_via_cache=[0,imports,all$1,none$2],
     parsed="parsed",
     installing="installing",
     installed="installed",
     activating="activating",
     activated="activated",
     redundant="redundant",
     State$1=[0,parsed,installing,installed,activating,activated,redundant];
    function script_url(w){return w.scriptURL()}
    function state$3(w){return w.state()}
    function enable$0(p)
     {var _cp_=p.enable();return of_promise$0(function(_cq_){return 0},_cp_)}
    function disable$0(p)
     {var _cn_=p.disable();return of_promise$0(function(_co_){return 0},_cn_)}
    function set_header_value(p,v)
     {var _cl_=p.setHeaderValue(v);
      return of_promise$0(function(_cm_){return 0},_cl_)}
    function get_state(p)
     {function extract(s)
       {var _ck_=caml_call2(_e_[2],s,cst_headerValue);
        return [0,caml_call2(Bool[2],s,cst_enabled$1),_ck_]}
      return of_promise$0(extract,p.getState())}
    var
     Navigation_preload_manager=
      [0,enable$0,disable$0,set_header_value,get_state];
    function installing$0(r)
     {var _ci_=r[cst_installing];
      return to_option(function(_cj_){return _cj_},_ci_)}
    function waiting$0(r)
     {var _cg_=r[cst_waiting];
      return to_option(function(_ch_){return _ch_},_cg_)}
    function active$0(r)
     {var _ce_=r[cst_active$0];
      return to_option(function(_cf_){return _cf_},_ce_)}
    function navigation_preload(r){return r[cst_navigationPreload]}
    function scope(r){return caml_call2(_e_[2],r,cst_scope)}
    function update_via_cache(r)
     {return caml_call2(_e_[2],r,cst_updateViaCache)}
    function update(r)
     {var _cc_=r.update();return of_promise$0(function(_cd_){return 0},_cc_)}
    function unregister(r)
     {return of_promise$0(caml_js_to_bool,r.unregister())}
    function show_notification(opts,r,title)
     {var
       opts$0=of_option(fn,function(_cb_){return _cb_},opts),
       _b$_=r.showNotification(title,opts$0);
      return of_promise$0(function(_ca_){return 0},_b$_)}
    function get_notifications(tag,r)
     {if(tag)var tag$0=tag[1],opts={"tag":tag$0};else var opts=fn;
      var _b7_=r.getNotifications(opts);
      function _b8_(_b__){return _b__}
      return of_promise$0(function(_b9_){return to_list(_b8_,_b9_)},_b7_)}
    function of_navigator$2(n){return n[cst_serviceWorker]}
    function controller$0(c)
     {var _b5_=c[cst_controller];
      return to_option(function(_b6_){return _b6_},_b5_)}
    function ready(c)
     {var _b3_=c[cst_ready];
      return of_promise$0(function(_b4_){return _b4_},_b3_)}
    function register_opts(scope,type,update_via_cache,param)
     {var o={};
      caml_call3(_e_[4],o,cst_scope$0,scope);
      caml_call3(_e_[4],o,cst_type$15,type);
      caml_call3(_e_[4],o,cst_updateViaCache$0,update_via_cache);
      return o}
    function register(opt,c,uri)
     {if(opt)var sth=opt[1],register_opts=sth;else var register_opts=fn;
      var _b1_=c.register(uri,register_opts);
      return of_promise$0(function(_b2_){return _b2_},_b1_)}
    function get_registration(c,uri)
     {var
       uri$0=of_option(fn,function(_b0_){return _b0_},uri),
       _bW_=c.getRegistration(uri$0);
      function _bX_(_bZ_){return _bZ_}
      return of_promise$0(function(_bY_){return to_option(_bX_,_bY_)},_bW_)}
    function get_registrations(c)
     {var _bS_=c.getRegistrations();
      function _bT_(_bV_){return _bV_}
      return of_promise$0(function(_bU_){return to_list(_bT_,_bU_)},_bS_)}
    function start_messages(c){c.startMessages();return 0}
    var
     Container=
      [0,
       of_navigator$2,
       controller$0,
       ready,
       register_opts,
       register,
       get_registration,
       get_registrations,
       start_messages],
     hidden$2="hidden",
     visible$0="visible",
     Visibility_state$0=[0,hidden$2,visible$0],
     window$0="window",
     worker$1="worker",
     sharedworker$0="sharedworker",
     all$2="all",
     Type$7=[0,window$0,worker$1,sharedworker$0,all$2],
     auxiliary="auxiliary",
     top_level="top-level",
     nested="nested",
     none$3="none",
     Frame_type=[0,auxiliary,top_level,nested,none$3];
    function url$5(c){return caml_call2(_e_[2],c,cst_url$3)}
    function frame_type(c){return caml_call2(_e_[2],c,cst_frameType)}
    function id$5(c){return caml_call2(_e_[2],c,cst_id$1)}
    function type$13(c){return caml_call2(_e_[2],c,cst_type$16)}
    function post$3(opts,c,v)
     {if(opts)var o=opts[1],opts$0=o;else var opts$0=fn;
      c.postMessage(v,opts$0);
      return 0}
    function visibility_state$0(w)
     {return caml_call2(_e_[2],w,cst_visibilityState$0)}
    function focused(w){return caml_call2(Bool[2],w,cst_focused)}
    function ancestor_origins(w)
     {var _bQ_=w[cst_ancestorOrigins];
      return to_list(function(_bR_){return _bR_},_bQ_)}
    function focus$0(w)
     {var _bO_=w.focus();
      return of_promise$0(function(_bP_){return _bP_},_bO_)}
    function navigate$1(w,url)
     {var _bM_=w.focus(url);
      return of_promise$0(function(_bN_){return _bN_},_bM_)}
    var
     Window$0=
      [0,visibility_state$0,focused,ancestor_origins,focus$0,navigate$1],
     Client=
      [0,
       Visibility_state$0,
       Type$7,
       Frame_type,
       url$5,
       frame_type,
       id$5,
       type$13,
       post$3,
       Window$0];
    function query_opts$0(include_uncontrolled,type,param)
     {var o={};
      caml_call3(Bool[4],o,cst_includeUncontrolled,include_uncontrolled);
      caml_call3(_e_[4],o,cst_type$17,type);
      return o}
    function get$7(cs,id)
     {var _bI_=cs.get(id);
      function _bJ_(_bL_){return _bL_}
      return of_promise$0(function(_bK_){return to_option(_bJ_,_bK_)},_bI_)}
    function match_all$0(opt,cs)
     {if(opt)var sth=opt[1],query_opts=sth;else var query_opts=fn;
      var _bE_=cs.matchAll(query_opts);
      function _bF_(_bH_){return _bH_}
      return of_promise$0(function(_bG_){return to_list(_bF_,_bG_)},_bE_)}
    function open_window(cs,url)
     {var _bA_=cs.openWindow(url);
      function _bB_(_bD_){return _bD_}
      return of_promise$0(function(_bC_){return to_option(_bB_,_bC_)},_bA_)}
    function claim(cs)
     {var _by_=cs.claim();return of_promise$0(function(_bz_){return 0},_by_)}
    var
     Clients=[0,query_opts$0,get$7,match_all$0,open_window,claim],
     clients=target[cst_clients],
     registration=target[cst_registration],
     service_worker=target[cst_serviceWorker$0];
    function skip_waiting(param)
     {var _bw_=target.skipWaiting();
      return of_promise$0(function(_bx_){return 0},_bw_)}
    var
     G$1=[0,clients,registration,service_worker,skip_waiting],
     Brr_webworkers=
      [0,
       [0,
        Type$6,
        opts$27,
        create$42,
        terminate,
        post$1,
        [0,create$43,port$2],
        ami,
        G$0],
       [0,
        Update_via_cache,
        State$1,
        script_url,
        state$3,
        Navigation_preload_manager,
        [0,
         update,
         unregister,
         show_notification,
         get_notifications,
         installing$0,
         waiting$0,
         active$0,
         navigation_preload,
         scope,
         update_via_cache],
        Container,
        Client,
        Clients,
        G$1]];
    caml_register_global(2948,Brr_webworkers,"Brr_webworkers");
    return}
  (globalThis));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJicnIuY21hLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbImdsb2JhbFRoaXMiLCJTeW1ib2wiLCJudWxsIiwidW5kZWZpbmVkIiwiZXhuIl0sInNvdXJjZXMiOlsiIl0sIm1hcHBpbmdzIjoiOztJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lCQUFBQztJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFBQUMsSyxHQUFBQztJOzs7Ozs7O2VBQUFIO0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bURBQVdJLEtBQU8sTUFBTUEsR0FBdkIsSTt3Q0FBREg7SSIsInNvdXJjZXNDb250ZW50IjpbbnVsbF19
