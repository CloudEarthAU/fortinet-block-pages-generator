const VARIABLES = [
  {
    variable: "ANTIPHISH_MATCH",
    description: "tag_desc_ANTIPHISH_MATCH",
  },
  {
    variable: "APPCAT",
    description: "Displays the FortiGuard Category of the application.",
  },
  {
    variable: "APPID",
    description: "tag_desc_APPID",
  },
  {
    variable: "APPNAME",
    description:
      "Displays the name of the application blocked in the FortiGuard Application Control block page.",
  },
  { variable: "AP_IP", description: "tag_desc_AP_IP" },
  { variable: "AP_MAC", description: "tag_desc_AP_MAC" },
  { variable: "AP_NAME", description: "tag_desc_AP_NAME" },
  { variable: "AP_SSID", description: "tag_desc_AP_SSID" },
  { variable: "AUTHORITY", description: "Displays the Certificate Authority." },
  {
    variable: "AUTH_POST_URL",
    description: "The URL to POST log in credentials.",
  },
  {
    variable: "AUTOMATION_EMAIL_BODY",
    description: "Body message of the automation alert email.",
  },
  {
    variable: "AUTOMATION_FGT_SERIAL",
    description:
      "Serial of the FortiGate that triggered the automation stitch.",
  },
  {
    variable: "AUTOMATION_STITCH_NAME",
    description: "Name of the automation stitch.",
  },
  { variable: "CASB_PROFILE", description: "tag_desc_CASB_PROFILE" },
  { variable: "CASB_SAAS_APP", description: "tag_desc_CASB_SAAS_APP" },
  {
    variable: "CASB_USER_ACTIVITY",
    description: "tag_desc_CASB_USER_ACTIVITY",
  },
  {
    variable: "CATEGORY",
    description: "Displays the FortiGuard Category of a website.",
  },
  { variable: "CERT_CHAIN", description: "tag_desc_CERT_CHAIN" },
  {
    variable: "CN",
    description: "Displays the Common Name of the certificate.",
  },
  { variable: "COMMENT", description: "tag_desc_COMMENT" },
  { variable: "COMPANY", description: "The guest user's company name." },
  { variable: "CONTENTTYPE", description: "Content type." },
  {
    variable: "CPAUTH_INTF",
    description:
      "Displays the name of the interface used for captive portal authentication.",
  },
  {
    variable: "CPAUTH_SSID",
    description:
      "Displays the name of the SSID used for captive portal authentication.",
  },
  {
    variable: "CRITICAL_EVENT",
    description:
      "Displays the critical event message that triggered the alert email.",
  },
  {
    variable: "DEST_IP",
    description:
      "The IP address of the device attempting to receive the blocked file.",
  },
  { variable: "DEVICE_TYPE", description: "tag_desc_DEVICE_TYPE" },
  {
    variable: "DST_ADDR_LABEL",
    description: "The destination URL that the user entered.",
  },
  {
    variable: "DURATION",
    description:
      "The amount of time in the reporting period. You can set this in the user defined protection profile. (FortiOS Carrier only)",
  },
  { variable: "EMAIL", description: "The guest's email address." },
  { variable: "EMAIL_CREDENTIALS", description: "The email's credentials." },
  {
    variable: "EMAIL_FROM",
    description:
      "The email address of the sender of the message that the FortiGate removed the file from.",
  },
  {
    variable: "EMAIL_TO",
    description:
      "The email address of the intended receiver of the message that the FortiGate removed the file from.",
  },
  { variable: "END_VALID", description: "The date the certificate expires." },
  {
    variable: "EXPIRE",
    description: "Specifies the time until the credential expires.",
  },
  {
    variable: "EXPIREDAYS",
    description:
      "The number of days before the current password expires and the user needs to change his or her password.",
  },
  {
    variable: "FAILED_MESSAGE",
    description: 'The default failure message on the "auth-login-failed" page.',
  },
  {
    variable: "FEATURE_BLOCK_REASONS",
    description: "Displays text explaining why the feature is blocked.",
  },
  { variable: "FGT_HOSTNAME", description: "Displays the FortiGate hostname." },
  {
    variable: "FILE",
    description:
      "The name of a file removed from a content stream because of antivirus file blocking.",
  },
  {
    variable: "FORTIGUARD_WF",
    description: "Displays the following text: FORTINET Web Filter.",
  },
  {
    variable: "FORTINET",
    description: "Displays the following text: FORTINET.",
  },
  { variable: "FTCL_VPN_NAME", description: "tag_desc_FTCL_VPN_NAME" },
  { variable: "GROUPNAME", description: "The user group." },
  { variable: "HEMAIL_ACTION", description: "tag_desc_HEMAIL_ACTION" },
  { variable: "HEMAIL_METHOD", description: "tag_desc_HEMAIL_METHOD" },
  { variable: "HOSTNAME", description: "The URL address of host website." },
  { variable: "HTTP_ERR_CODE", description: "The returned HTTP error code." },
  {
    variable: "HTTP_ERR_DESC",
    description: "The returned HTTP error message.",
  },
  { variable: "ICAP_ERR_DESC", description: "tag_desc_ICAP_ERR_DESC" },
  { variable: "IPS_DESC", description: "tag_desc_IPS_DESC" },
  {
    variable: "LAST_FAILED_LOGIN",
    description: "Displays the user's last failed login time.",
  },
  {
    variable: "LAST_SUCCESSFUL_LOGIN",
    description: "Displays the user's last successful login time.",
  },
  {
    variable: "LINK",
    description:
      "This link takes the user to the FortiClient Host Security install page to download the Endpoint Control feature.",
  },
  { variable: "MIN_LENGTH", description: "tag_desc_MIN_LENGTH" },
  {
    variable: "MIN_LOWER_LETTER_LENGTH",
    description: "tag_desc_MIN_LOWER_LETTER_LENGTH",
  },
  {
    variable: "MIN_NON_ALPHA_LENGTH",
    description: "tag_desc_MIN_NON_ALPHA_LENGTH",
  },
  {
    variable: "MIN_NUMERIC_LENGTH",
    description: "tag_desc_MIN_NUMERIC_LENGTH",
  },
  { variable: "MIN_UNIQUE_CHAR", description: "tag_desc_MIN_UNIQUE_CHAR" },
  {
    variable: "MIN_UPPER_LETTER_LENGTH",
    description: "tag_desc_MIN_UPPER_LETTER_LENGTH",
  },
  {
    variable: "MOBILEPHONE",
    description: "Displays the phone number for your mobile phone.",
  },
  {
    variable: "NEW_BUILD_AVAILABLE",
    description: "tag_desc_NEW_BUILD_AVAILABLE",
  },
  {
    variable: "NIDS_EVENT",
    description: "The IPS intrusion message for a TCP_SYN_FLOOD.",
  },
  {
    variable: "OVERRIDE",
    description:
      "The link to the FortiGuard Web filtering override form. Displays only for users belonging to groups with permission to create FortiGuard web filtering overrides.",
  },
  { variable: "PAGE_NUM", description: "tag_desc_PAGE_NUM" },
  {
    variable: "PASSWORD",
    description:
      "The input type for a text entry field that prompts users to enter authentication credentials to login, in this case a password.",
  },
  { variable: "POLICY_ID", description: "tag_desc_POLICY_ID" },
  { variable: "POLICY_UUID", description: "tag_desc_POLICY_UUID" },
  { variable: "PORTAL_ADDR", description: "tag_desc_PORTAL_ADDR" },
  { variable: "PREVENT_REUSE", description: "tag_desc_PREVENT_REUSE" },
  {
    variable: "PRINT_CREDENTIALS",
    description:
      "Displays the network guest's access credentials: the user ID, password, email, and expiration time.",
  },
  {
    variable: "PROTOCOL",
    description:
      "The protocol (HTTP, FTP, FTP, POP3, IMAP, SMTP) in which the FortiGate detected the virus.",
  },
  { variable: "PROTOURI", description: "tag_desc_PROTOURI" },
  {
    variable: "QUARFILENAME",
    description:
      "The name of a file removed from a content stream and added to the quarantine due to an antivirus threat.",
  },
  {
    variable: "QUESTION",
    description:
      "Authentication challenge prompt to enter username and password information on the authentication login page.",
  },
  {
    variable: "QUOTA_INFO",
    description:
      "Displays information about the traffic shaping quota setting that is blocking the user.",
  },
  { variable: "RATING_METHOD", description: "tag_desc_RATING_METHOD" },
  {
    variable: "SECURE_WEBPROXY_CERT_INFO",
    description: "tag_desc_SECURE_WEBPROXY_CERT_INFO",
  },
  {
    variable: "SECURE_WEBPROXY_ERROR_CODE",
    description: "tag_desc_SECURE_WEBPROXY_ERROR_CODE",
  },
  {
    variable: "SECURE_WEBPROXY_REQ_TIME",
    description: "tag_desc_SECURE_WEBPROXY_REQ_TIME",
  },
  {
    variable: "SERVICE",
    description: "The name of the web filtering service.",
  },
  { variable: "SNI", description: "tag_desc_SNI" },
  {
    variable: "SOURCE_IP",
    description:
      "The IP address of one of the following: the email server that sent the email containing the virus, the request originator who would have received the blocked file, or the device that attempted to download the email message that the file was removed from.",
  },
  {
    variable: "SOURCE_SN",
    description:
      "The serial number of the device which is presenting the warning/disclaimer",
  },
  {
    variable: "SPONSOR",
    description:
      "When enabled, a guest can add a sponsor on the form field for guest access.",
  },
  {
    variable: "SSL_HIDDEN",
    description:
      "A required SSL VPN message tag used in the FortiGate SSL VPN portal login page form.",
  },
  {
    variable: "SSL_LOGIN",
    description:
      "A required tag that provides the login form on the FortiGate SSL VPN portal login page form.",
  },
  {
    variable: "SSL_LOGIN_ANYWAY",
    description:
      "The %%SSL_LOGIN_ANYWAY%% tag prompts the user to continue with the log in process.",
  },
  {
    variable: "SSL_LOGIN_CANCEL",
    description:
      "The %%SSL_LOGIN_CANCEL%% tag prompts the user to cancel the log in process.",
  },
  {
    variable: "SSL_OPTIONS",
    description:
      "A required tag that contains the user controls for an SSL-VPN user.",
  },
  {
    variable: "SSL_STATUS_INFO",
    description: "A SSL-VPN tag that shows session stats to the user.",
  },
  {
    variable: "START_VALID",
    description: "The certificate is not valid before this start date.",
  },
  { variable: "SUBJECT", description: "tag_desc_SUBJECT" },
  {
    variable: "TIMEOUT",
    description:
      "The configured number of seconds between authentication %%KEEPALIVEURL%% connections.",
  },
  {
    variable: "URL",
    description:
      "The URL of a web page blocked by web filtering or URL blocking, or the URL of a web page with a blocked file that a user attempted to download.",
  },
  {
    variable: "URLFILTER_ERROR",
    description: "The web filtering error message.",
  },
  {
    variable: "URLFILTER_ERROR_DETAIL",
    description: "The reason for the web filtering service error.",
  },
  { variable: "URL_SOURCE", description: "tag_desc_URL_SOURCE" },
  {
    variable: "USERID",
    description:
      "Selects either an auto-generated value, an email address or a specified value.",
  },
  {
    variable: "USERNAME",
    description:
      "The text entry field where a user can enter his or her username credential to login.",
  },
  { variable: "USER_IP", description: "tag_desc_USER_IP" },
  { variable: "USER_MAC", description: "tag_desc_USER_MAC" },
  { variable: "VIDEOFILTER_DESC", description: "tag_desc_VIDEOFILTER_DESC" },
  {
    variable: "VIRUS",
    description:
      "The name of the virus that the antivirus system found in a file.",
  },
  { variable: "VIRUS_REF_URL", description: "Displays a virus reference URL." },
  { variable: "WAF_DESC", description: "tag_desc_WAF_DESC" },
  { variable: "WAF_SIG_ID", description: "tag_desc_WAF_SIG_ID" },
  {
    variable: "WEBPROXY_AUTH_FAIL_COMMENT",
    description: "tag_desc_WEBPROXY_AUTH_FAIL_COMMENT",
  },
  {
    variable: "WEBPROXY_AUTH_FAIL_REASON",
    description: "tag_desc_WEBPROXY_AUTH_FAIL_REASON",
  },
  { variable: "ZTNA_CERT_INFO", description: "tag_desc_ZTNA_CERT_INFO" },
  { variable: "ZTNA_DEV_INFO", description: "tag_desc_ZTNA_DEV_INFO" },
  { variable: "ZTNA_DEV_TAGS", description: "tag_desc_ZTNA_DEV_TAGS" },
  { variable: "ZTNA_ERROR_CODE", description: "tag_desc_ZTNA_ERROR_CODE" },
  { variable: "ZTNA_REQ_TIME", description: "tag_desc_ZTNA_REQ_TIME" },
  { variable: "ZTNA_USER_NAME", description: "tag_desc_ZTNA_USER_NAME" },
];

const PAGE_TYPES = [
  {
    name: "FortiGuard Block Page",
    id: "fortiguard-block-page",
  },
];
