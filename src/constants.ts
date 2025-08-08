export const variABLES = {
  antiphish_match: {
    variable: "ANTIPHISH_MATCH",
    description: "tag_desc_ANTIPHISH_MATCH",
  },
  appcat: {
    variable: "APPCAT",
    description: "Displays the FortiGuard Category of the application.",
  },
  appid: {
    variable: "APPID",
    description: "tag_desc_APPID",
  },
  appname: {
    variable: "APPNAME",
    description:
      "Displays the name of the application blocked in the FortiGuard Application Control block page.",
  },
  ap_ip: {
    variable: "AP_IP",
    description: "tag_desc_AP_IP",
  },
  ap_mac: {
    variable: "AP_MAC",
    description: "tag_desc_AP_MAC",
  },
  ap_name: {
    variable: "AP_NAME",
    description: "tag_desc_AP_NAME",
  },
  ap_ssid: {
    variable: "AP_SSID",
    description: "tag_desc_AP_SSID",
  },
  authority: {
    variable: "AUTHORITY",
    description: "Displays the Certificate Authority.",
  },
  auth_post_url: {
    variable: "AUTH_POST_URL",
    description: "The URL to POST log in credentials.",
  },
  automation_email_body: {
    variable: "AUTOMATION_EMAIL_BODY",
    description: "Body message of the automation alert email.",
  },
  automation_fgt_serial: {
    variable: "AUTOMATION_FGT_SERIAL",
    description:
      "Serial of the FortiGate that triggered the automation stitch.",
  },
  automation_stitch_name: {
    variable: "AUTOMATION_STITCH_NAME",
    description: "Name of the automation stitch.",
  },
  casb_profile: {
    variable: "CASB_PROFILE",
    description: "tag_desc_CASB_PROFILE",
  },
  casb_saas_app: {
    variable: "CASB_SAAS_APP",
    description: "tag_desc_CASB_SAAS_APP",
  },
  casb_user_activity: {
    variable: "CASB_USER_ACTIVITY",
    description: "tag_desc_CASB_USER_ACTIVITY",
  },
  category: {
    variable: "CATEGORY",
    description: "Displays the FortiGuard Category of a website.",
  },
  cert_chain: {
    variable: "CERT_CHAIN",
    description: "tag_desc_CERT_CHAIN",
  },
  cn: {
    variable: "CN",
    description: "Displays the Common Name of the certificate.",
  },
  comment: {
    variable: "COMMENT",
    description: "tag_desc_COMMENT",
  },
  company: {
    variable: "COMPANY",
    description: "The guest user's company name.",
  },
  contenttype: {
    variable: "CONTENTTYPE",
    description: "Content type.",
  },
  cpauth_intf: {
    variable: "CPAUTH_INTF",
    description:
      "Displays the name of the interface used for captive portal authentication.",
  },
  cpauth_ssid: {
    variable: "CPAUTH_SSID",
    description:
      "Displays the name of the SSID used for captive portal authentication.",
  },
  critical_event: {
    variable: "CRITICAL_EVENT",
    description:
      "Displays the critical event message that triggered the alert email.",
  },
  dest_ip: {
    variable: "DEST_IP",
    description:
      "The IP address of the device attempting to receive the blocked file.",
  },
  device_type: {
    variable: "DEVICE_TYPE",
    description: "tag_desc_DEVICE_TYPE",
  },
  dst_addr_label: {
    variable: "DST_ADDR_LABEL",
    description: "The destination URL that the user entered.",
  },
  duration: {
    variable: "DURATION",
    description:
      "The amount of time in the reporting period. You can set this in the user defined protection profile. (FortiOS Carrier only)",
  },
  email: {
    variable: "EMAIL",
    description: "The guest's email address.",
  },
  email_credentials: {
    variable: "EMAIL_CREDENTIALS",
    description: "The email's credentials.",
  },
  email_from: {
    variable: "EMAIL_FROM",
    description:
      "The email address of the sender of the message that the FortiGate removed the file from.",
  },
  email_to: {
    variable: "EMAIL_TO",
    description:
      "The email address of the intended receiver of the message that the FortiGate removed the file from.",
  },
  end_valid: {
    variable: "END_VALID",
    description: "The date the certificate expires.",
  },
  expire: {
    variable: "EXPIRE",
    description: "Specifies the time until the credential expires.",
  },
  expiredays: {
    variable: "EXPIREDAYS",
    description:
      "The number of days before the current password expires and the user needs to change his or her password.",
  },
  failed_message: {
    variable: "FAILED_MESSAGE",
    description: 'The default failure message on the "auth-login-failed" page.',
  },
  feature_block_reasons: {
    variable: "FEATURE_BLOCK_REASONS",
    description: "Displays text explaining why the feature is blocked.",
  },
  fgt_hostname: {
    variable: "FGT_HOSTNAME",
    description: "Displays the FortiGate hostname.",
  },
  file: {
    variable: "FILE",
    description:
      "The name of a file removed from a content stream because of antivirus file blocking.",
  },
  fortiguard_wf: {
    variable: "FORTIGUARD_WF",
    description: "Displays the following text: FORTINET Web Filter.",
  },
  fortinet: {
    variable: "FORTINET",
    description: "Displays the following text: FORTINET.",
  },
  ftcl_vpn_name: {
    variable: "FTCL_VPN_NAME",
    description: "tag_desc_FTCL_VPN_NAME",
  },
  groupname: {
    variable: "GROUPNAME",
    description: "The user group.",
  },
  hemail_action: {
    variable: "HEMAIL_ACTION",
    description: "tag_desc_HEMAIL_ACTION",
  },
  hemail_method: {
    variable: "HEMAIL_METHOD",
    description: "tag_desc_HEMAIL_METHOD",
  },
  hostname: {
    variable: "HOSTNAME",
    description: "The URL address of host website.",
  },
  http_err_code: {
    variable: "HTTP_ERR_CODE",
    description: "The returned HTTP error code.",
  },
  http_err_desc: {
    variable: "HTTP_ERR_DESC",
    description: "The returned HTTP error message.",
  },
  icap_err_desc: {
    variable: "ICAP_ERR_DESC",
    description: "tag_desc_ICAP_ERR_DESC",
  },
  ips_desc: {
    variable: "IPS_DESC",
    description: "tag_desc_IPS_DESC",
  },
  last_failed_login: {
    variable: "LAST_FAILED_LOGIN",
    description: "Displays the user's last failed login time.",
  },
  last_successful_login: {
    variable: "LAST_SUCCESSFUL_LOGIN",
    description: "Displays the user's last successful login time.",
  },
  link: {
    variable: "LINK",
    description:
      "This link takes the user to the FortiClient Host Security install page to download the Endpoint Control feature.",
  },
  min_length: {
    variable: "MIN_LENGTH",
    description: "tag_desc_MIN_LENGTH",
  },
  min_lower_letter_length: {
    variable: "MIN_LOWER_LETTER_LENGTH",
    description: "tag_desc_MIN_LOWER_LETTER_LENGTH",
  },
  min_non_alpha_length: {
    variable: "MIN_NON_ALPHA_LENGTH",
    description: "tag_desc_MIN_NON_ALPHA_LENGTH",
  },
  min_numeric_length: {
    variable: "MIN_NUMERIC_LENGTH",
    description: "tag_desc_MIN_NUMERIC_LENGTH",
  },
  min_unique_char: {
    variable: "MIN_UNIQUE_CHAR",
    description: "tag_desc_MIN_UNIQUE_CHAR",
  },
  min_upper_letter_length: {
    variable: "MIN_UPPER_LETTER_LENGTH",
    description: "tag_desc_MIN_UPPER_LETTER_LENGTH",
  },
  mobilephone: {
    variable: "MOBILEPHONE",
    description: "Displays the phone number for your mobile phone.",
  },
  new_build_available: {
    variable: "NEW_BUILD_AVAILABLE",
    description: "tag_desc_NEW_BUILD_AVAILABLE",
  },
  nids_event: {
    variable: "NIDS_EVENT",
    description: "The IPS intrusion message for a TCP_SYN_FLOOD.",
  },
  override: {
    variable: "OVERRIDE",
    description:
      "The link to the FortiGuard Web filtering override form. Displays only for users belonging to groups with permission to create FortiGuard web filtering overrides.",
  },
  page_num: {
    variable: "PAGE_NUM",
    description: "tag_desc_PAGE_NUM",
  },
  password: {
    variable: "PASSWORD",
    description:
      "The input type for a text entry field that prompts users to enter authentication credentials to login, in this case a password.",
  },
  policy_id: {
    variable: "POLICY_ID",
    description: "tag_desc_POLICY_ID",
  },
  policy_uuid: {
    variable: "POLICY_UUID",
    description: "tag_desc_POLICY_UUID",
  },
  portal_addr: {
    variable: "PORTAL_ADDR",
    description: "tag_desc_PORTAL_ADDR",
  },
  prevent_reuse: {
    variable: "PREVENT_REUSE",
    description: "tag_desc_PREVENT_REUSE",
  },
  print_credentials: {
    variable: "PRINT_CREDENTIALS",
    description:
      "Displays the network guest's access credentials: the user ID, password, email, and expiration time.",
  },
  protocol: {
    variable: "PROTOCOL",
    description:
      "The protocol (HTTP, FTP, FTP, POP3, IMAP, SMTP) in which the FortiGate detected the virus.",
  },
  protouri: {
    variable: "PROTOURI",
    description: "tag_desc_PROTOURI",
  },
  quarfilename: {
    variable: "QUARFILENAME",
    description:
      "The name of a file removed from a content stream and added to the quarantine due to an antivirus threat.",
  },
  question: {
    variable: "QUESTION",
    description:
      "Authentication challenge prompt to enter username and password information on the authentication login page.",
  },
  quota_info: {
    variable: "QUOTA_INFO",
    description:
      "Displays information about the traffic shaping quota setting that is blocking the user.",
  },
  rating_method: {
    variable: "RATING_METHOD",
    description: "tag_desc_RATING_METHOD",
  },
  secure_webproxy_cert_info: {
    variable: "SECURE_WEBPROXY_CERT_INFO",
    description: "tag_desc_SECURE_WEBPROXY_CERT_INFO",
  },
  secure_webproxy_error_code: {
    variable: "SECURE_WEBPROXY_ERROR_CODE",
    description: "tag_desc_SECURE_WEBPROXY_ERROR_CODE",
  },
  secure_webproxy_req_time: {
    variable: "SECURE_WEBPROXY_REQ_TIME",
    description: "tag_desc_SECURE_WEBPROXY_REQ_TIME",
  },
  service: {
    variable: "SERVICE",
    description: "The name of the web filtering service.",
  },
  sni: {
    variable: "SNI",
    description: "tag_desc_SNI",
  },
  source_ip: {
    variable: "SOURCE_IP",
    description:
      "The IP address of one of the following: the email server that sent the email containing the virus, the request originator who would have received the blocked file, or the device that attempted to download the email message that the file was removed from.",
  },
  source_sn: {
    variable: "SOURCE_SN",
    description:
      "The serial number of the device which is presenting the warning/disclaimer",
  },
  sponsor: {
    variable: "SPONSOR",
    description:
      "When enabled, a guest can add a sponsor on the form field for guest access.",
  },
  ssl_hidden: {
    variable: "SSL_HIDDEN",
    description:
      "A required SSL VPN message tag used in the FortiGate SSL VPN portal login page form.",
  },
  ssl_login: {
    variable: "SSL_LOGIN",
    description:
      "A required tag that provides the login form on the FortiGate SSL VPN portal login page form.",
  },
  ssl_login_anyway: {
    variable: "SSL_LOGIN_ANYWAY",
    description:
      "The %%SSL_LOGIN_ANYWAY%% tag prompts the user to continue with the log in process.",
  },
  ssl_login_cancel: {
    variable: "SSL_LOGIN_CANCEL",
    description:
      "The %%SSL_LOGIN_CANCEL%% tag prompts the user to cancel the log in process.",
  },
  ssl_options: {
    variable: "SSL_OPTIONS",
    description:
      "A required tag that contains the user controls for an SSL-VPN user.",
  },
  ssl_status_info: {
    variable: "SSL_STATUS_INFO",
    description: "A SSL-VPN tag that shows session stats to the user.",
  },
  start_valid: {
    variable: "START_VALID",
    description: "The certificate is not valid before this start date.",
  },
  subject: {
    variable: "SUBJECT",
    description: "tag_desc_SUBJECT",
  },
  timeout: {
    variable: "TIMEOUT",
    description:
      "The configured number of seconds between authentication %%KEEPALIVEURL%% connections.",
  },
  url: {
    variable: "URL",
    description:
      "The URL of a web page blocked by web filtering or URL blocking, or the URL of a web page with a blocked file that a user attempted to download.",
  },
  urlfilter_error: {
    variable: "URLFILTER_ERROR",
    description: "The web filtering error message.",
  },
  urlfilter_error_detail: {
    variable: "URLFILTER_ERROR_DETAIL",
    description: "The reason for the web filtering service error.",
  },
  url_source: {
    variable: "URL_SOURCE",
    description: "tag_desc_URL_SOURCE",
  },
  userid: {
    variable: "USERID",
    description:
      "Selects either an auto-generated value, an email address or a specified value.",
  },
  username: {
    variable: "USERNAME",
    description:
      "The text entry field where a user can enter his or her username credential to login.",
  },
  user_ip: {
    variable: "USER_IP",
    description: "tag_desc_USER_IP",
  },
  user_mac: {
    variable: "USER_MAC",
    description: "tag_desc_USER_MAC",
  },
  videofilter_desc: {
    variable: "VIDEOFILTER_DESC",
    description: "tag_desc_VIDEOFILTER_DESC",
  },
  virus: {
    variable: "VIRUS",
    description:
      "The name of the virus that the antivirus system found in a file.",
  },
  virus_ref_url: {
    variable: "VIRUS_REF_URL",
    description: "Displays a virus reference URL.",
  },
  waf_desc: {
    variable: "WAF_DESC",
    description: "tag_desc_WAF_DESC",
  },
  waf_sig_id: {
    variable: "WAF_SIG_ID",
    description: "tag_desc_WAF_SIG_ID",
  },
  webproxy_auth_fail_comment: {
    variable: "WEBPROXY_AUTH_FAIL_COMMENT",
    description: "tag_desc_WEBPROXY_AUTH_FAIL_COMMENT",
  },
  webproxy_auth_fail_reason: {
    variable: "WEBPROXY_AUTH_FAIL_REASON",
    description: "tag_desc_WEBPROXY_AUTH_FAIL_REASON",
  },
  ztna_cert_info: {
    variable: "ZTNA_CERT_INFO",
    description: "tag_desc_ZTNA_CERT_INFO",
  },
  ztna_dev_info: {
    variable: "ZTNA_DEV_INFO",
    description: "tag_desc_ZTNA_DEV_INFO",
  },
  ztna_dev_tags: {
    variable: "ZTNA_DEV_TAGS",
    description: "tag_desc_ZTNA_DEV_TAGS",
  },
  ztna_error_code: {
    variable: "ZTNA_ERROR_CODE",
    description: "tag_desc_ZTNA_ERROR_CODE",
  },
  ztna_req_time: {
    variable: "ZTNA_REQ_TIME",
    description: "tag_desc_ZTNA_REQ_TIME",
  },
  ztna_user_name: {
    variable: "ZTNA_USER_NAME",
    description: "tag_desc_ZTNA_USER_NAME",
  },
};

export const PAGE_TYPES = [
  {
    name: "FortiGuard Block Page",
    id: "fortiguard-block-page",
  },
];
