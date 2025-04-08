var intervalID = window.setInterval(updateScreen, 200);
var c = document.getElementById("console");

var txt = [
  "INIT: SCAN_TARGET // IP: <VICTIM_IP>",
  "TIME: 12:37:02 EEST",
  "USER: k1@shadow_node",
  "--------------------------------------------------------",
  "FORCE: XX9911. DECRYPT://777.111.9876",
  "TRYPASS: ********* AUTH CODE: DELTA SEVEN: 3___ PRIORITY 1",
  "RETRY: MIDNIGHT SUNRISE",
  "sh > /TOOLS/NETSCAN/PROBE -p 1-1000",
  "================================================",
  "Priority 1 // local / scanning target: <VICTIM_IP>...",
  "scanning ports (TCP)...",
  "PORT 21: CLOSED",
  "PORT 22: OPEN (SSH)",
  "PORT 23: CLOSED",
  "PORT 80: OPEN (HTTP)",
  "PORT 135: OPEN (MS-RPC)",
  "PORT 443: OPEN (HTTPS)",
  "PORT 445: OPEN (SMB)",
  "PORT 3389: OPEN (RDP)",
  "PORT 8080: CLOSED",
  "...",
  "...",
  "BACKDOOR CANDIDATE FOUND (<VICTIM_IP>:6667)",
  "BACKDOOR CANDIDATE FOUND (<VICTIM_IP>:9999)",
  "--------------------------------------------------------",
  "BRUTE.EXE -t <VICTIM_IP> -m SMB_NULL_SESSION",
  "...attempting exploit...",
  "...exploit failed...",
  "BRUTE.EXE -t <VICTIM_IP> -m RDP_BLUEKEEP",
  "...attempting exploit...",
  "...exploit potential...",
  "--------------------------------------------------------",
  "sh > DEPLOY VULN_SCANNER -deep",
  "...analyzing services...",
  "...identified vulnerabilities...",
  "SCAN: __ <VICTIM_IP>:80 (CVE-2021-XXXXX) - Apache < 2.4.50",
  "SCAN: __ <VICTIM_IP>:445 (CVE-2020-YYYYY) - SMBv1 Enabled",
  "SCAN: __ <VICTIM_IP>:3389 (CVE-2019-ZZZZZ) - Unpatched RDP",
  "SCAN: __ <VICTIM_IP>:6667 (UNKNOWN) - Possible Backdoor Service",
  "SCAN: __ <VICTIM_IP>:9999 (UNKNOWN) - Potential Custom Backdoor",
  "--------------------------------------------------------",
  "sh > /TOOLS/EXPLOIT/REMOTE_SHELL -ip <VICTIM_IP> -port 3389 -exploit BLUEKEEP",
  "...attempting connection...",
  "...RDP connection established...",
  "--------------------------------------------------------",
  "Priority 1 // local / post-exploit...",
  "sh > whoami",
  "output: NT AUTHORITY\\SYSTEM",
];

var docfrag = document.createDocumentFragment();

function updateScreen() {
  //Shuffle the "txt" array
  txt.push(txt.shift());
  //Rebuild document fragment
  txt.forEach(function (e) {
    var p = document.createElement("p");
    p.textContent = e;
    docfrag.appendChild(p);
  });
  //Clear DOM body
  while (c.firstChild) {
    c.removeChild(c.firstChild);
  }
  c.appendChild(docfrag);
}
