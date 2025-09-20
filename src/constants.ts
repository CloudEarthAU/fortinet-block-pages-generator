export const CONFIG_FILE = "block-pages-generator.json";

export const VARIABLES = {
  antiphish_match: {
    variable: "ANTIPHISH_MATCH",
    default: "Phishing credential match",
    description: "tag_desc_ANTIPHISH_MATCH",
  },
  appcat: {
    variable: "APPCAT",
    default: "Social.Media",
    description: "Displays the FortiGuard Category of the application.",
  },
  appid: {
    variable: "APPID",
    default: "15832",
    description: "tag_desc_APPID",
  },
  appname: {
    variable: "APPNAME",
    default: "Facebook",
    description:
      "Displays the name of the application blocked in the FortiGuard Application Control block page.",
  },
  ap_ip: {
    variable: "AP_IP",
    default: "192.168.1.1",
    description: "tag_desc_AP_IP",
  },
  ap_mac: {
    variable: "AP_MAC",
    default: "12:34:56:78:9A:BC",
    description: "tag_desc_AP_MAC",
  },
  ap_name: {
    variable: "AP_NAME",
    default: "FortiAP",
    description: "tag_desc_AP_NAME",
  },
  ap_ssid: {
    variable: "AP_SSID",
    default: "wifi",
    description: "tag_desc_AP_SSID",
  },
  authority: {
    variable: "AUTHORITY",
    default: "Example CA",
    description: "Displays the Certificate Authority.",
  },
  auth_post_url: {
    variable: "AUTH_POST_URL",
    default: "example for AUTH_POST_URL",
    description: "The URL to POST log in credentials.",
  },
  automation_email_body: {
    variable: "AUTOMATION_EMAIL_BODY",
    default: "Automation email body",
    description: "Body message of the automation alert email.",
  },
  automation_fgt_serial: {
    variable: "AUTOMATION_FGT_SERIAL",
    default: "Automation FortiGate serial",
    description:
      "Serial of the FortiGate that triggered the automation stitch.",
  },
  automation_stitch_name: {
    variable: "AUTOMATION_STITCH_NAME",
    default: "Automation stitch name",
    description: "Name of the automation stitch.",
  },
  casb_profile: {
    variable: "CASB_PROFILE",
    default: "CASB profile",
    description: "tag_desc_CASB_PROFILE",
  },
  casb_saas_app: {
    variable: "CASB_SAAS_APP",
    default: "CASB SaaS application",
    description: "tag_desc_CASB_SAAS_APP",
  },
  casb_user_activity: {
    variable: "CASB_USER_ACTIVITY",
    default: "CASB user activity",
    description: "tag_desc_CASB_USER_ACTIVITY",
  },
  category: {
    variable: "CATEGORY",
    default: "Personal Websites and Blogs",
    description: "Displays the FortiGuard Category of a website.",
  },
  cert_chain: {
    variable: "CERT_CHAIN",
    default: "Certificate Chain",
    description: "tag_desc_CERT_CHAIN",
  },
  cn: {
    variable: "CN",
    default: "Example CN",
    description: "Displays the Common Name of the certificate.",
  },
  comment: {
    variable: "COMMENT",
    default: "comment",
    description: "tag_desc_COMMENT",
  },
  company: {
    variable: "COMPANY",
    default: "none",
    description: "The guest user's company name.",
  },
  contenttype: {
    variable: "CONTENTTYPE",
    default: "text/html",
    description: "Content type.",
  },
  cpauth_intf: {
    variable: "CPAUTH_INTF",
    default: "lan",
    description:
      "Displays the name of the interface used for captive portal authentication.",
  },
  cpauth_ssid: {
    variable: "CPAUTH_SSID",
    default: "Fortinet",
    description:
      "Displays the name of the SSID used for captive portal authentication.",
  },
  critical_event: {
    variable: "CRITICAL_EVENT",
    default: "Critical Event",
    description:
      "Displays the critical event message that triggered the alert email.",
  },
  dest_ip: {
    variable: "DEST_IP",
    default: "198.51.100.1",
    description:
      "The IP address of the device attempting to receive the blocked file.",
  },
  device_type: {
    variable: "DEVICE_TYPE",
    default: "windows-pc",
    description: "tag_desc_DEVICE_TYPE",
  },
  dst_addr_label: {
    variable: "DST_ADDR_LABEL",
    default: "www.fortinet.com",
    description: "The destination URL that the user entered.",
  },
  duration: {
    variable: "DURATION",
    default: "300",
    description:
      "The amount of time in the reporting period. You can set this in the user defined protection profile. (FortiOS Carrier only)",
  },
  email: {
    variable: "EMAIL",
    default: "guest@example.com",
    description: "The guest's email address.",
  },
  email_credentials: {
    variable: "EMAIL_CREDENTIALS",
    default: "*credentials*",
    description: "The email's credentials.",
  },
  email_from: {
    variable: "EMAIL_FROM",
    default: "from@example.com",
    description:
      "The email address of the sender of the message that the FortiGate removed the file from.",
  },
  email_to: {
    variable: "EMAIL_TO",
    default: "rcpt@example.com",
    description:
      "The email address of the intended receiver of the message that the FortiGate removed the file from.",
  },
  end_valid: {
    variable: "END_VALID",
    default: "2012-01-01",
    description: "The date the certificate expires.",
  },
  expire: {
    variable: "EXPIRE",
    default: "4 hours after first successful login",
    description: "Specifies the time until the credential expires.",
  },
  expiredays: {
    variable: "EXPIREDAYS",
    default: "3",
    description:
      "The number of days before the current password expires and the user needs to change his or her password.",
  },
  failed_message: {
    variable: "FAILED_MESSAGE",
    default: "Firewall authentication failed. Please try again.",
    description: 'The default failure message on the "auth-login-failed" page.',
  },
  feature_block_reasons: {
    variable: "FEATURE_BLOCK_REASONS",
    default: "FortiClient security checking",
    description: "Displays text explaining why the feature is blocked.",
  },
  fgt_hostname: {
    variable: "FGT_HOSTNAME",
    default: "CorporateFortiGate",
    description: "Displays the FortiGate hostname.",
  },
  file: {
    variable: "FILE",
    default: "example.exe",
    description:
      "The name of a file removed from a content stream because of antivirus file blocking.",
  },
  fortiguard_wf: {
    variable: "FORTIGUARD_WF",
    default: "FORTINET Webfilter",
    description: "Displays the following text: FORTINET Web Filter.",
  },
  fortinet: {
    variable: "FORTINET",
    default: "FORTINET",
    description: "Displays the following text: FORTINET.",
  },
  ftcl_vpn_name: {
    variable: "FTCL_VPN_NAME",
    default: "FortiClient-VPN",
    description: "tag_desc_FTCL_VPN_NAME",
  },
  groupname: {
    variable: "GROUPNAME",
    default: "Guest-group",
    description: "The user group.",
  },
  hemail_action: {
    variable: "HEMAIL_ACTION",
    default: "/",
    description: "tag_desc_HEMAIL_ACTION",
  },
  hemail_method: {
    variable: "HEMAIL_METHOD",
    default: "post",
    description: "tag_desc_HEMAIL_METHOD",
  },
  hostname: {
    variable: "HOSTNAME",
    default: "www.example.com",
    description: "The URL address of host website.",
  },
  http_err_code: {
    variable: "HTTP_ERR_CODE",
    default: "404",
    description: "The returned HTTP error code.",
  },
  http_err_desc: {
    variable: "HTTP_ERR_DESC",
    default: "Not Found",
    description: "The returned HTTP error message.",
  },
  icap_err_desc: {
    variable: "ICAP_ERR_DESC",
    default:
      "An error occurred while trying to scan the traffic using ICAP service.",
    description: "tag_desc_ICAP_ERR_DESC",
  },
  ips_desc: {
    variable: "IPS_DESC",
    default: "Request Blocked",
    description: "tag_desc_IPS_DESC",
  },
  last_failed_login: {
    variable: "LAST_FAILED_LOGIN",
    default: "Last Failed Login: None",
    description: "Displays the user's last failed login time.",
  },
  last_successful_login: {
    variable: "LAST_SUCCESSFUL_LOGIN",
    default: "Last Successful Login: None",
    description: "Displays the user's last successful login time.",
  },
  link: {
    variable: "LINK",
    default: "FortiClientInstaller",
    description:
      "This link takes the user to the FortiClient Host Security install page to download the Endpoint Control feature.",
  },
  min_length: {
    variable: "MIN_LENGTH",
    default: "8",
    description: "tag_desc_MIN_LENGTH",
  },
  min_lower_letter_length: {
    variable: "MIN_LOWER_LETTER_LENGTH",
    default: "0",
    description: "tag_desc_MIN_LOWER_LETTER_LENGTH",
  },
  min_non_alpha_length: {
    variable: "MIN_NON_ALPHA_LENGTH",
    default: "0",
    description: "tag_desc_MIN_NON_ALPHA_LENGTH",
  },
  min_numeric_length: {
    variable: "MIN_NUMERIC_LENGTH",
    default: "0",
    description: "tag_desc_MIN_NUMERIC_LENGTH",
  },
  min_unique_char: {
    variable: "MIN_UNIQUE_CHAR",
    default: "0",
    description: "tag_desc_MIN_UNIQUE_CHAR",
  },
  min_upper_letter_length: {
    variable: "MIN_UPPER_LETTER_LENGTH",
    default: "0",
    description: "tag_desc_MIN_UPPER_LETTER_LENGTH",
  },
  mobilephone: {
    variable: "MOBILEPHONE",
    default: "555-123-4567",
    description: "Displays the phone number for your mobile phone.",
  },
  new_build_available: {
    variable: "NEW_BUILD_AVAILABLE",
    default: "A new firmware version is available.",
    description: "tag_desc_NEW_BUILD_AVAILABLE",
  },
  nids_event: {
    variable: "NIDS_EVENT",
    default: "tcp_syn_flood",
    description: "The IPS intrusion message for a TCP_SYN_FLOOD.",
  },
  override: {
    variable: "OVERRIDE",
    default: "override",
    description:
      "The link to the FortiGuard Web filtering override form. Displays only for users belonging to groups with permission to create FortiGuard web filtering overrides.",
  },
  page_num: {
    variable: "PAGE_NUM",
    default: "567890",
    description: "tag_desc_PAGE_NUM",
  },
  password: {
    variable: "PASSWORD",
    default: "123456",
    description:
      "The input type for a text entry field that prompts users to enter authentication credentials to login, in this case a password.",
  },
  policy_id: {
    variable: "POLICY_ID",
    default: "123",
    description: "tag_desc_POLICY_ID",
  },
  policy_uuid: {
    variable: "POLICY_UUID",
    default: "35ef0f54-35d5-51e3-ae02-3d6776b41e4d",
    description: "tag_desc_POLICY_UUID",
  },
  portal_addr: {
    variable: "PORTAL_ADDR",
    default: "www.portal.com",
    description: "tag_desc_PORTAL_ADDR",
  },
  prevent_reuse: {
    variable: "PREVENT_REUSE",
    default: "0",
    description: "tag_desc_PREVENT_REUSE",
  },
  print_credentials: {
    variable: "PRINT_CREDENTIALS",
    default:
      '<ul class="user_details"><li class="user_info"><label class="user_info_label">User ID</label>user@example.com</li><li class="user_info"><label class="user_info_label">Password</label>XXXXXXX</li><li class="user_info"><label class="user_info_label">Email</label>user@example.com</li><li class="user_info"><label class="user_info_label">Expiration</label>2012-12-21 00:00:00</li></ul>',
    description:
      "Displays the network guest's access credentials: the user ID, password, email, and expiration time.",
  },
  protocol: {
    variable: "PROTOCOL",
    default: "http",
    description:
      "The protocol (HTTP, FTP, FTP, POP3, IMAP, SMTP) in which the FortiGate detected the virus.",
  },
  protouri: {
    variable: "PROTOURI",
    default: "http://www.example.com",
    description: "tag_desc_PROTOURI",
  },
  quarfilename: {
    variable: "QUARFILENAME",
    default: "example.exe",
    description:
      "The name of a file removed from a content stream and added to the quarantine due to an antivirus threat.",
  },
  question: {
    variable: "QUESTION",
    default: "Please enter the required information to continue.",
    description:
      "Authentication challenge prompt to enter username and password information on the authentication login page.",
  },
  quota_info: {
    variable: "QUOTA_INFO",
    default: "2097000",
    description:
      "Displays information about the traffic shaping quota setting that is blocking the user.",
  },
  rating_method: {
    variable: "RATING_METHOD",
    default: "IP/Domain",
    description: "tag_desc_RATING_METHOD",
  },
  secure_webproxy_cert_info: {
    variable: "SECURE_WEBPROXY_CERT_INFO",
    default: "Invalid client certificate.",
    description: "tag_desc_SECURE_WEBPROXY_CERT_INFO",
  },
  secure_webproxy_error_code: {
    variable: "SECURE_WEBPROXY_ERROR_CODE",
    default: "001",
    description: "tag_desc_SECURE_WEBPROXY_ERROR_CODE",
  },
  secure_webproxy_req_time: {
    variable: "SECURE_WEBPROXY_REQ_TIME",
    default: "1698094304 (Tue Oct 24 08:51:44 2023).",
    description: "tag_desc_SECURE_WEBPROXY_REQ_TIME",
  },
  service: {
    variable: "SERVICE",
    default: "HTTP",
    description: "The name of the web filtering service.",
  },
  sni: {
    variable: "SNI",
    default: "Example SNI",
    description: "tag_desc_SNI",
  },
  source_ip: {
    variable: "SOURCE_IP",
    default: "192.168.x.x",
    description:
      "The IP address of one of the following: the email server that sent the email containing the virus, the request originator who would have received the blocked file, or the device that attempted to download the email message that the file was removed from.",
  },
  source_sn: {
    variable: "SOURCE_SN",
    default: "FG00SN_EXAMPLE00",
    description:
      "The serial number of the device which is presenting the warning/disclaimer",
  },
  sponsor: {
    variable: "SPONSOR",
    default: "none",
    description:
      "When enabled, a guest can add a sponsor on the form field for guest access.",
  },
  ssl_hidden: {
    variable: "SSL_HIDDEN",
    default: "<input type=hidden>",
    description:
      "A required SSL VPN message tag used in the FortiGate SSL VPN portal login page form.",
  },
  ssl_login: {
    variable: "SSL_LOGIN",
    default:
      '<input type="text" placeholder="Name"><input type="password" placeholder="Password">',
    description:
      "A required tag that provides the login form on the FortiGate SSL VPN portal login page form.",
  },
  ssl_login_anyway: {
    variable: "SSL_LOGIN_ANYWAY",
    default: "Log in Anyway",
    description:
      "The %%SSL_LOGIN_ANYWAY%% tag prompts the user to continue with the log in process.",
  },
  ssl_login_cancel: {
    variable: "SSL_LOGIN_CANCEL",
    default: "Cancel",
    description:
      "The %%SSL_LOGIN_CANCEL%% tag prompts the user to cancel the log in process.",
  },
  ssl_options: {
    variable: "SSL_OPTIONS",
    default:
      '<div class="header-actions"><button type="button" class="bare"><f-icon class="ftnt-help-o"></f-icon></button><button type="button" class="bare"><f-icon class="fa-user-circle"></f-icon><span>user</span></button>',
    description:
      "A required tag that contains the user controls for an SSL-VPN user.",
  },
  ssl_status_info: {
    variable: "SSL_STATUS_INFO",
    default:
      '<div class="header-info"><div class="flex-row-centered"><div class="info-item">21m 36s&nbsp</div><div class="info-item">36 kB&nbsp;<f-icon class="fa-arrow-down icon-sm"></f-icon></div><div class="info-item">22 kB&nbsp;<f-icon class="fa-arrow-up icon-sm"></f-icon></div></div></div>',
    description: "A SSL-VPN tag that shows session stats to the user.",
  },
  start_valid: {
    variable: "START_VALID",
    default: "2009-01-01",
    description: "The certificate is not valid before this start date.",
  },
  subject: {
    variable: "SUBJECT",
    default: "Email subject",
    description: "tag_desc_SUBJECT",
  },
  timeout: {
    variable: "TIMEOUT",
    default: "60",
    description:
      "The configured number of seconds between authentication %%KEEPALIVEURL%% connections.",
  },
  url: {
    variable: "URL",
    default: "www.example.com/",
    description:
      "The URL of a web page blocked by web filtering or URL blocking, or the URL of a web page with a blocked file that a user attempted to download.",
  },
  urlfilter_error: {
    variable: "URLFILTER_ERROR",
    default:
      "An error occurred while trying to rate the website using the webfiltering service.",
    description: "The web filtering error message.",
  },
  urlfilter_error_detail: {
    variable: "URLFILTER_ERROR_DETAIL",
    default: "Invalid license",
    description: "The reason for the web filtering service error.",
  },
  url_source: {
    variable: "URL_SOURCE",
    default: "Blocking Source",
    description: "tag_desc_URL_SOURCE",
  },
  userid: {
    variable: "USERID",
    default: "guest",
    description:
      "Selects either an auto-generated value, an email address or a specified value.",
  },
  username: {
    variable: "USERNAME",
    default: "Guest",
    description:
      "The text entry field where a user can enter his or her username credential to login.",
  },
  user_ip: {
    variable: "USER_IP",
    default: "192.168.1.2",
    description: "tag_desc_USER_IP",
  },
  user_mac: {
    variable: "USER_MAC",
    default: "12:34:56:78:9A:BC",
    description: "tag_desc_USER_MAC",
  },
  videofilter_desc: {
    variable: "VIDEOFILTER_DESC",
    default: "Video category is blocked, category-id=0",
    description: "tag_desc_VIDEOFILTER_DESC",
  },
  virus: {
    variable: "VIRUS",
    default: "example.virus",
    description:
      "The name of the virus that the antivirus system found in a file.",
  },
  virus_ref_url: {
    variable: "VIRUS_REF_URL",
    default: "https://fortiguard.com/encyclopedia/virus/1",
    description: "Displays a virus reference URL.",
  },
  waf_desc: {
    variable: "WAF_DESC",
    default: "Forbidden HTTP method",
    description: "tag_desc_WAF_DESC",
  },
  waf_sig_id: {
    variable: "WAF_SIG_ID",
    default: "20000000",
    description: "tag_desc_WAF_SIG_ID",
  },
  webproxy_auth_fail_comment: {
    variable: "WEBPROXY_AUTH_FAIL_COMMENT",
    default: "Please check with the Administrator.",
    description: "tag_desc_WEBPROXY_AUTH_FAIL_COMMENT",
  },
  webproxy_auth_fail_reason: {
    variable: "WEBPROXY_AUTH_FAIL_REASON",
    default: "The SAML assertion response from IdP is invalid",
    description: "tag_desc_WEBPROXY_AUTH_FAIL_REASON",
  },
  ztna_cert_info: {
    variable: "ZTNA_CERT_INFO",
    default: "Invalid client certificate.",
    description: "tag_desc_ZTNA_CERT_INFO",
  },
  ztna_dev_info: {
    variable: "ZTNA_DEV_INFO",
    default: "the device is unknown.",
    description: "tag_desc_ZTNA_DEV_INFO",
  },
  ztna_dev_tags: {
    variable: "ZTNA_DEV_TAGS",
    default: "No device tag found.",
    description: "tag_desc_ZTNA_DEV_TAGS",
  },
  ztna_error_code: {
    variable: "ZTNA_ERROR_CODE",
    default: "001",
    description: "tag_desc_ZTNA_ERROR_CODE",
  },
  ztna_req_time: {
    variable: "ZTNA_REQ_TIME",
    default: "1698094304 (Tue Oct 24 08:51:44 2023).",
    description: "tag_desc_ZTNA_REQ_TIME",
  },
  ztna_user_name: {
    variable: "ZTNA_USER_NAME",
    default: "test",
    description: "tag_desc_ZTNA_USER_NAME",
  },
};

export const PAGE_TYPES = {
  fortiguard_block_page: {
    name: "FortiGuard Block Page",
    fileName: "fortiguard-block-page",
    details: [
      {
        title: "URL",
        value: {
          default: `${VARIABLES.protocol.default}://${VARIABLES.url.default}`,
          variable: `%%PROTOCOL%%://%%URL%%`,
        },
      },
      {
        title: "Category",
        value: {
          default: VARIABLES.category.default,
          variable: `%%CATEGORY%%`,
        },
      },
    ],
    actions: [
      {
        title: "Learn More",
        location: {
          default: VARIABLES.virus_ref_url.default,
          variable: "%%VIRUS_REF_URL%%",
        },
      },
    ],
  },
  url_block_page: {
    name: "URL Block Page",
    fileName: "url-block-page",
    details: [
      {
        title: "URL",
        value: {
          default: `${VARIABLES.protocol.default}://${VARIABLES.url.default}`,
          variable: `%%PROTOCOL%%://%%URL%%`,
        },
      },
      {
        title: "Description",
        value: {
          default: VARIABLES.ips_desc.default,
          variable: `%%IPS_DESC%%`,
        },
      },
      {
        title: "URL Source",
        value: {
          default: VARIABLES.url_source.default,
          variable: `%%URL_SOURCE%%`,
        },
      },
    ],
    actions: [],
  },
};
