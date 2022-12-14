module type S = sig
  module Transport : Dns_client.S
    with type io_addr = [ `Plaintext of Ipaddr.t * int | `Tls of Tls.Config.client * Ipaddr.t * int ]
     and type +'a io = 'a Lwt.t

  include module type of Dns_client.Make(Transport)

  val nameserver_of_string : string -> (Transport.io_addr, [> `Msg of string ]) result
  (** [nameserver_of_string authenticators str] returns a {!Transport.io_addr}
      from the given string. The format is:
      - [tcp:<ipaddr>(:port)?] for a simple nameserver and we will communicate
        with it {i via} the TCP/IP protocol
      - [tls:<ipaddr>(:port)?(!authenticator)?] for a nameserver and we will
        communicate with it {i via} the TCP/IP protocol plus the TLS encrypted
        layer. The user can verify the nameserver {i via} an {i authenticator}
        (see {!X509.Authenticator.of_string} for the format of it). By default,
        {!Ca_certs_nss.authenticator} is used.
    *)

  val connect :
    ?nameservers:string list ->
    ?timeout:int64 ->
    Transport.stack -> t Lwt.t
  (** [connect ?nameservers ?timeout stack] creates a DNS entity which
      is able to resolve domain-name. It expects few optional arguments:
      - [nameservers] a list of {i nameservers} used to resolve domain-names
      - [timeout] (in nanoseconds), passed to {create}

      @raise [Invalid_argument] if given strings don't respect formats explained
      by {!nameserver_of_string}.
   *)
end

module Make (R : Mirage_random.S) (T : Mirage_time.S) (M : Mirage_clock.MCLOCK) (P : Mirage_clock.PCLOCK) (S : Tcpip.Stack.V4V6) : S with type Transport.stack = S.t
