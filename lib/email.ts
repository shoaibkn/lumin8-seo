export const reportGeneratedEmail = ({
  id,
  confidence_score,
  data_sources_count,
  entity_name,
}: {
  id: string;
  confidence_score: number;
  data_sources_count: number;
  entity_name: string;
}) => {
  return `<!doctype html>
      <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
          <head>
              <meta charset="UTF-8" />
              <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
              <!--[if !mso]><!-- -->
              <meta http-equiv="X-UA-Compatible" content="IE=edge" />
              <!--<![endif]-->
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <meta name="format-detection" content="telephone=no, date=no, address=no, email=no" />
            <meta name="x-apple-disable-message-reformatting" />
            <link href="https://fonts.googleapis.com/css?family=Manrope:ital,wght@0,400" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Geologica:ital,wght@0,400;0,500;0,700" rel="stylesheet" />
            <title>Dripcloud</title>
            <!-- Made with Postcards Email Builder by Designmodo -->
            <style>
                html,
                body {
                    margin: 0 !important;
                    padding: 0 !important;
                    min-height: 100% !important;
                    width: 100% !important;
                    -webkit-font-smoothing: antialiased;
                }
                * {
                    -ms-text-size-adjust: 100%;
                }
                #outlook a {
                    padding: 0;
                }
                .ReadMsgBody,
                .ExternalClass {
                    width: 100%;
                }
                .ExternalClass,
                .ExternalClass p,
                .ExternalClass td,
                .ExternalClass div,
                .ExternalClass span,
                .ExternalClass font {
                    line-height: 100%;
                }
                table,
                td,
                th {
                    mso-table-lspace: 0 !important;
                    mso-table-rspace: 0 !important;
                    border-collapse: collapse;
                }
                u + .body table,
                u + .body td,
                u + .body th {
                    will-change: transform;
                }
                body,
                td,
                th,
                p,
                div,
                li,
                a,
                span {
                    -webkit-text-size-adjust: 100%;
                    -ms-text-size-adjust: 100%;
                    mso-line-height-rule: exactly;
                }
                img {
                    border: 0;
                    outline: 0;
                    line-height: 100%;
                    text-decoration: none;
                    -ms-interpolation-mode: bicubic;
                }
                a[x-apple-data-detectors] {
                    color: inherit !important;
                    text-decoration: none !important;
                }
                .body .pc-project-body {
                    background-color: transparent !important;
                }
                @media (min-width: 621px) {
                    .pc-lg-hide {
                        display: none;
                    }
                    .pc-lg-bg-img-hide {
                        background-image: none !important;
                    }
                }
            </style>
            <style>
                @media (max-width: 620px) {
                    .pc-project-body {
                        min-width: 0 !important;
                    }
                    .pc-project-container,
                    .pc-component {
                        width: 100% !important;
                    }
                    .pc-sm-hide {
                        display: none !important;
                    }
                    .pc-sm-bg-img-hide {
                        background-image: none !important;
                    }
                    .pc-w620-padding-0-0-0-0 {
                        padding: 0 !important;
                    }
                    table.pc-w620-spacing-0-0-184-0 {
                        margin: 0 0 184px !important;
                    }
                    td.pc-w620-spacing-0-0-184-0,
                    th.pc-w620-spacing-0-0-184-0 {
                        margin: 0 !important;
                        padding: 0 0 184px !important;
                    }
                    .pc-w620-width-140 {
                        width: 140px !important;
                    }
                    .pc-w620-height-auto {
                        height: auto !important;
                    }
                    .pc-w620-padding-20-20-50-20 {
                        padding: 20px 20px 50px !important;
                    }
                    table.pc-w620-spacing-0-0-0-0 {
                        margin: 0 !important;
                    }
                    td.pc-w620-spacing-0-0-0-0,
                    th.pc-w620-spacing-0-0-0-0 {
                        margin: 0 !important;
                        padding: 0 !important;
                    }
                    .pc-w620-font-size-36px {
                        font-size: 36px !important;
                    }
                    .pc-w620-line-height-40px {
                        line-height: 40px !important;
                    }
                    .pc-w620-font-size-18px {
                        font-size: 18px !important;
                    }
                    .pc-w620-line-height-24px {
                        line-height: 24px !important;
                    }
                    .pc-w620-letter-spacing-0px {
                        letter-spacing: 0 !important;
                    }
                    .pc-w620-padding-20-20-20-20 {
                        padding: 20px !important;
                    }
                    .pc-w620-itemsVSpacings-30 {
                        padding-top: 15px !important;
                        padding-bottom: 15px !important;
                    }
                    .pc-w620-itemsHSpacings-0 {
                        padding-left: 0 !important;
                        padding-right: 0 !important;
                    }
                    .pc-w620-padding-16-16-16-16 {
                        padding: 16px !important;
                    }
                    .pc-w620-padding-14-20-14-20 {
                        padding: 14px 20px !important;
                    }
                    .pc-w620-padding-0-8-8-8 {
                        padding: 0 8px 8px !important;
                    }
                    .pc-w620-padding-20-18-20-18 {
                        padding: 20px 18px !important;
                    }
                    table.pc-w620-spacing-0-0-28-0 {
                        margin: 0 0 28px !important;
                    }
                    td.pc-w620-spacing-0-0-28-0,
                    th.pc-w620-spacing-0-0-28-0 {
                        margin: 0 !important;
                        padding: 0 0 28px !important;
                    }
                    .pc-w620-font-size-28px {
                        font-size: 28px !important;
                    }
                    .pc-w620-itemsVSpacings-20 {
                        padding-top: 10px !important;
                        padding-bottom: 10px !important;
                    }
                    .pc-w620-itemsHSpacings-8 {
                        padding-left: 4px !important;
                        padding-right: 4px !important;
                    }
                    .pc-w620-width-hug {
                        width: auto !important;
                    }
                    .pc-w620-padding-0-8-0-8 {
                        padding: 0 8px !important;
                    }
                    .pc-w620-itemsVSpacings-0 {
                        padding-top: 0 !important;
                        padding-bottom: 0 !important;
                    }
                    .pc-w620-padding-32-20-32-20 {
                        padding: 32px 20px !important;
                    }
                    .pc-w620-width-fill {
                        width: 100% !important;
                    }
                    .pc-w620-width-100pc {
                        width: 100% !important;
                    }
                    .pc-w620-radius-12-12-12-12 {
                        border-radius: 12px 12px 12px 12px !important;
                    }
                    .pc-w620-height-fill {
                        height: 100% !important;
                    }
                    .pc-w620-height-100pc {
                        height: 36px !important;
                    }
                    .pc-w620-valign-top {
                        vertical-align: top !important;
                    }
                    td.pc-w620-halign-center,
                    th.pc-w620-halign-center {
                        text-align: center !important;
                        text-align-last: center !important;
                    }
                    table.pc-w620-halign-center {
                        float: none !important;
                        margin-right: auto !important;
                        margin-left: auto !important;
                    }
                    img.pc-w620-halign-center {
                        margin-right: auto !important;
                        margin-left: auto !important;
                    }
                    div.pc-w620-align-center,
                    th.pc-w620-align-center,
                    a.pc-w620-align-center,
                    td.pc-w620-align-center {
                        text-align: center !important;
                        text-align-last: center !important;
                    }
                    table.pc-w620-align-center {
                        float: none !important;
                        margin-right: auto !important;
                        margin-left: auto !important;
                    }
                    img.pc-w620-align-center {
                        margin-right: auto !important;
                        margin-left: auto !important;
                    }
                    .pc-w620-text-align-center {
                        text-align: center !important;
                        text-align-last: center !important;
                    }
                    table.pc-w620-spacing-0-0-21-0 {
                        margin: 0 0 21px !important;
                    }
                    td.pc-w620-spacing-0-0-21-0,
                    th.pc-w620-spacing-0-0-21-0 {
                        margin: 0 !important;
                        padding: 0 0 21px !important;
                    }
                    div.pc-w620-textAlign-center,
                    th.pc-w620-textAlign-center,
                    a.pc-w620-textAlign-center,
                    td.pc-w620-textAlign-center {
                        text-align: center !important;
                        text-align-last: center !important;
                    }
                    table.pc-w620-textAlign-center {
                        float: none !important;
                        margin-right: auto !important;
                        margin-left: auto !important;
                    }
                    img.pc-w620-textAlign-center {
                        margin-right: auto !important;
                        margin-left: auto !important;
                    }
                    .pc-w620-padding-85-20-85-20 {
                        padding: 85px 20px !important;
                    }
                    .pc-w620-radius-12-12-0-0 {
                        border-radius: 12px 12px 0 0 !important;
                    }
                    .pc-w620-padding-8-8-0-8 {
                        padding: 8px 8px 0 !important;
                    }
                    table.pc-w620-spacing-0-0-32-0 {
                        margin: 0 0 32px !important;
                    }
                    td.pc-w620-spacing-0-0-32-0,
                    th.pc-w620-spacing-0-0-32-0 {
                        margin: 0 !important;
                        padding: 0 0 32px !important;
                    }
                    .pc-w620-width-20 {
                        width: 20px !important;
                    }
                    .pc-w620-itemsHSpacings-16 {
                        padding-left: 8px !important;
                        padding-right: 8px !important;
                    }
                    table.pc-w620-spacing-0-0-20-0 {
                        margin: 0 0 20px !important;
                    }
                    td.pc-w620-spacing-0-0-20-0,
                    th.pc-w620-spacing-0-0-20-0 {
                        margin: 0 !important;
                        padding: 0 0 20px !important;
                    }
                    table.pc-w620-spacing-0-24-32-24 {
                        margin: 0 24px 32px !important;
                    }
                    td.pc-w620-spacing-0-24-32-24,
                    th.pc-w620-spacing-0-24-32-24 {
                        margin: 0 !important;
                        padding: 0 24px 32px !important;
                    }
                    .pc-w620-width-150 {
                        width: 150px !important;
                    }
                    .pc-w620-itemsVSpacings-16 {
                        padding-top: 8px !important;
                        padding-bottom: 8px !important;
                    }
                    table.pc-w620-spacing-20-20-0-20 {
                        margin: 20px 20px 0 !important;
                    }
                    td.pc-w620-spacing-20-20-0-20,
                    th.pc-w620-spacing-20-20-0-20 {
                        margin: 0 !important;
                        padding: 20px 20px 0 !important;
                    }
                    .pc-w620-padding-32-0-20-0 {
                        padding: 32px 0 20px !important;
                    }
                    .pc-g-ib {
                        display: inline-block !important;
                    }
                    .pc-g-b {
                        display: block !important;
                    }
                    .pc-g-rb {
                        display: block !important;
                        width: auto !important;
                    }
                    .pc-g-wf {
                        width: 100% !important;
                    }
                    .pc-g-rpt {
                        padding-top: 0 !important;
                    }
                    .pc-g-rpr {
                        padding-right: 0 !important;
                    }
                    .pc-g-rpb {
                        padding-bottom: 0 !important;
                    }
                    .pc-g-rpl {
                        padding-left: 0 !important;
                    }
                }
            </style>
            <!--[if !mso]><!-- -->
            <style>
                @font-face {
                    font-family: "Manrope";
                    font-style: normal;
                    font-weight: 400;
                    src:
                        url("https://fonts.gstatic.com/s/manrope/v15/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk79FN_M-b8.woff")
                            format("woff"),
                        url("https://fonts.gstatic.com/s/manrope/v15/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk79FN_M-bk.woff2")
                            format("woff2");
                }
                @font-face {
                    font-family: "Geologica";
                    font-style: normal;
                    font-weight: 400;
                    src:
                        url("https://fonts.gstatic.com/s/geologica/v1/oY1o8evIr7j9P3TN9YwNAdyjzUyDKkKdAGOJh1UlCDUIhAIdhCZOn1fLsig7jfvCCPHZckU8H3G11_z-_OZqDx_rc-oSBg.woff")
                            format("woff"),
                        url("https://fonts.gstatic.com/s/geologica/v1/oY1o8evIr7j9P3TN9YwNAdyjzUyDKkKdAGOJh1UlCDUIhAIdhCZOn1fLsig7jfvCCPHZckU8H3G11_z-_OZqDx_rc-oSAA.woff2")
                            format("woff2");
                }
                @font-face {
                    font-family: "Geologica";
                    font-style: normal;
                    font-weight: 500;
                    src:
                        url("https://fonts.gstatic.com/s/geologica/v1/oY1o8evIr7j9P3TN9YwNAdyjzUyDKkKdAGOJh1UlCDUIhAIdhCZOn1fLsig7jfvCCPHZckU8H3G11_z-_OZqDy3rc-oSBg.woff")
                            format("woff"),
                        url("https://fonts.gstatic.com/s/geologica/v1/oY1o8evIr7j9P3TN9YwNAdyjzUyDKkKdAGOJh1UlCDUIhAIdhCZOn1fLsig7jfvCCPHZckU8H3G11_z-_OZqDy3rc-oSAA.woff2")
                            format("woff2");
                }
                @font-face {
                    font-family: "Geologica";
                    font-style: normal;
                    font-weight: 700;
                    src:
                        url("https://fonts.gstatic.com/s/geologica/v1/oY1o8evIr7j9P3TN9YwNAdyjzUyDKkKdAGOJh1UlCDUIhAIdhCZOn1fLsig7jfvCCPHZckU8H3G11_z-_OZqD_jsc-oSBg.woff")
                            format("woff"),
                        url("https://fonts.gstatic.com/s/geologica/v1/oY1o8evIr7j9P3TN9YwNAdyjzUyDKkKdAGOJh1UlCDUIhAIdhCZOn1fLsig7jfvCCPHZckU8H3G11_z-_OZqD_jsc-oSAA.woff2")
                            format("woff2");
                }
            </style>
            <!--<![endif]-->
            <!--[if mso
                ]><style type="text/css">
                    .pc-font-alt {
                        font-family: Arial, Helvetica, sans-serif !important;
                    }
                </style><!
            [endif]-->
            <!--[if gte mso 9
                ]><xml
                    ><o:OfficeDocumentSettings
                        ><o:AllowPNG /><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings
                    ></xml
                ><!
            [endif]-->
        </head>
        <body
            class="body pc-font-alt"
            style="
                width: 100% !important;
                min-height: 100% !important;
                margin: 0 !important;
                padding: 0 !important;
                mso-line-height-rule: exactly;
                -webkit-font-smoothing: antialiased;
                -webkit-text-size-adjust: 100%;
                -ms-text-size-adjust: 100%;
                font-variant-ligatures: normal;
                text-rendering: optimizeLegibility;
                -moz-osx-font-smoothing: grayscale;
                background-color: #e6e6e6;
            "
            bgcolor="#e6e6e6"
        >
            <table
                class="pc-project-body"
                style="table-layout: fixed; width: 100%; min-width: 600px; background-color: #e6e6e6"
                bgcolor="#e6e6e6"
                border="0"
                cellspacing="0"
                cellpadding="0"
                role="presentation"
            >
                <tr>
                    <td align="center" valign="top" style="width: auto">
                        <table
                            class="pc-project-container"
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                        >
                            <tr>
                                <td class="pc-w620-padding-0-0-0-0" style="padding: 20px 0" align="left" valign="top">
                                    <table
                                        class="pc-component"
                                        style="width: 600px; max-width: 600px"
                                        width="600"
                                        align="center"
                                        border="0"
                                        cellspacing="0"
                                        cellpadding="0"
                                        role="presentation"
                                    >
                                        <tr>
                                            <td
                                                class="pc-w620-spacing-0-0-0-0"
                                                width="100%"
                                                border="0"
                                                cellspacing="0"
                                                cellpadding="0"
                                                role="presentation"
                                            >
                                                <table
                                                    width="100%"
                                                    align="center"
                                                    border="0"
                                                    cellspacing="0"
                                                    cellpadding="0"
                                                    role="presentation"
                                                >
                                                    <tr>
                                                        <!--[if !gte mso 9]><!-- -->
                                                        <td
                                                            valign="top"
                                                            class="pc-w620-padding-20-20-50-20"
                                                            style="
                                                                background-image: url(&quot;https://cloudfilesdm.com/postcards/image-174100398048011-56660d9e.png&quot;);
                                                                background-size: cover;
                                                                background-position: center;
                                                                background-repeat: no-repeat;
                                                                padding: 32px 40px 60px 32px;
                                                                height: unset;
                                                                background-color: transparent;
                                                            "
                                                            bgcolor="transparent"
                                                            background="https://cloudfilesdm.com/postcards/image-174100398048011-56660d9e.png"
                                                        >
                                                            <!--<!
                                                            [endif]-->[endif]--><!--[if gte mso 9]><td valign="top" align="center" style="background-image:url('https://cloudfilesdm.com/postcards/image-174100398048011-56660d9e.png');background-size:cover;background-position:center;background-repeat:no-repeat;background-color:transparent;border-radius:0" bgcolor="transparent" background="https://cloudfilesdm.com/postcards/image-174100398048011-56660d9e.png"><!
                                                            [endif]-->[endif]--><!--[if gte mso 9]><v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:600px"><v:fill src="https://cloudfilesdm.com/postcards/image-174100398048011-56660d9e.png" color="transparent" type="frame" size="1,1" aspect="atleast" origin="0,0" position="0,0"/><v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0"><div style="font-size:0;line-height:0"><table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tr><td style="font-size:14px;line-height:1.5" valign="top"><p style="margin:0;mso-hide:all"><o:p xmlns:o="urn:schemas-microsoft-com:office:office">&nbsp;</o:p></p><table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation"><tr><td colspan="3" height="32" style="line-height:1px;font-size:1px">&nbsp;</td></tr><tr><td width="40" valign="top" style="line-height:1px;font-size:1px">&nbsp;</td><td valign="top" align="left"><![endif]-->
                                                            <table
                                                                width="100%"
                                                                border="0"
                                                                cellpadding="0"
                                                                cellspacing="0"
                                                                role="presentation"
                                                            >
                                                                <tr>
                                                                    <td
                                                                        class="pc-w620-spacing-0-0-184-0"
                                                                        align="left"
                                                                        valign="top"
                                                                        style="padding: 0 0 340px; height: auto"
                                                                    >
                                                                        <a
                                                                            class="pc-font-alt"
                                                                            href="https://postcards.email/"
                                                                            target="_blank"
                                                                            style="
                                                                                text-decoration: none;
                                                                                display: inline-block;
                                                                                vertical-align: top;
                                                                            "
                                                                            ><img
                                                                                src="https://cloudfilesdm.com/postcards/0d63d6d7380a34298aadbfbbe61c6646.png"
                                                                                class="pc-w620-width-140 pc-w620-height-auto"
                                                                                style="
                                                                                    display: block;
                                                                                    outline: 0;
                                                                                    line-height: 100%;
                                                                                    -ms-interpolation-mode: bicubic;
                                                                                    object-fit: contain;
                                                                                    width: 164px;
                                                                                    height: auto;
                                                                                    max-width: 100%;
                                                                                    border: 0;
                                                                                "
                                                                                width="164"
                                                                                height="30"
                                                                                alt=""
                                                                        /></a>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            <!--[if gte mso 9]></td><td width="32" style="line-height:1px;font-size:1px" valign="top">&nbsp;</td></tr><tr><td colspan="3" height="60" style="line-height:1px;font-size:1px">&nbsp;</td></tr></table></td></tr></table></div><p style="margin:0;mso-hide:all"><o:p xmlns:o="urn:schemas-microsoft-com:office:office">&nbsp;</o:p></p></v:textbox></v:rect><![endif]-->
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                    <table
                                        class="pc-component"
                                        style="width: 600px; max-width: 600px"
                                        width="600"
                                        align="center"
                                        border="0"
                                        cellspacing="0"
                                        cellpadding="0"
                                        role="presentation"
                                    >
                                        <tr>
                                            <td
                                                class="pc-w620-spacing-0-0-0-0"
                                                width="100%"
                                                border="0"
                                                cellspacing="0"
                                                cellpadding="0"
                                                role="presentation"
                                            >
                                                <table
                                                    style="border-collapse: separate; border-spacing: 0"
                                                    width="100%"
                                                    align="center"
                                                    border="0"
                                                    cellspacing="0"
                                                    cellpadding="0"
                                                    role="presentation"
                                                >
                                                    <tr>
                                                        <td
                                                            valign="top"
                                                            class="pc-w620-padding-20-20-20-20"
                                                            style="
                                                                padding: 32px 48px 48px;
                                                                height: unset;
                                                                background-color: #fff;
                                                            "
                                                            bgcolor="#ffffff"
                                                        >
                                                            <table
                                                                width="100%"
                                                                border="0"
                                                                cellpadding="0"
                                                                cellspacing="0"
                                                                role="presentation"
                                                            >
                                                                <tr>
                                                                    <td
                                                                        align="left"
                                                                        valign="top"
                                                                        style="padding: 0 0 8px; height: auto"
                                                                    >
                                                                        <table
                                                                            border="0"
                                                                            cellpadding="0"
                                                                            cellspacing="0"
                                                                            role="presentation"
                                                                            width="100%"
                                                                        >
                                                                            <tr>
                                                                                <td valign="top" align="left">
                                                                                    <div
                                                                                        class="pc-font-alt"
                                                                                        style="text-decoration: none"
                                                                                    >
                                                                                        <div
                                                                                            class="pc-w620-font-size-36px pc-w620-line-height-40px"
                                                                                            style="
                                                                                                font-size: 44px;
                                                                                                line-height: 54px;
                                                                                                text-align: left;
                                                                                                text-align-last: left;
                                                                                                color: #131312;
                                                                                                font-family: &quot;Manrope&quot;,
                                                                                                    Arial, Helvetica,
                                                                                                    sans-serif;
                                                                                                font-style: normal;
                                                                                                letter-spacing: -1px;
                                                                                            "
                                                                                        >
                                                                                            <div
                                                                                                style="
                                                                                                    font-family: &quot;Manrope&quot;,
                                                                                                        Arial, Helvetica,
                                                                                                        sans-serif;
                                                                                                "
                                                                                            >
                                                                                                <span
                                                                                                    style="
                                                                                                        font-family: &quot;Manrope&quot;,
                                                                                                            Arial, Helvetica,
                                                                                                            sans-serif;
                                                                                                        font-weight: 400;
                                                                                                        font-size: 44px;
                                                                                                        line-height: 54px;
                                                                                                    "
                                                                                                    class="pc-w620-font-size-36px pc-w620-line-height-40px"
                                                                                                    >Your SEO Report is
                                                                                                    here!</span
                                                                                                >
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            <table
                                                                border="0"
                                                                cellpadding="0"
                                                                cellspacing="0"
                                                                role="presentation"
                                                                width="100%"
                                                            >
                                                                <tr>
                                                                    <td valign="top" align="left">
                                                                        <div
                                                                            class="pc-font-alt"
                                                                            style="text-decoration: none"
                                                                        >
                                                                            <div
                                                                                class="pc-w620-font-size-18px pc-w620-line-height-24px"
                                                                                style="
                                                                                    font-size: 20px;
                                                                                    line-height: 30px;
                                                                                    text-align: left;
                                                                                    text-align-last: left;
                                                                                    color: #818388;
                                                                                    font-family: &quot;Manrope&quot;, Arial,
                                                                                        Helvetica, sans-serif;
                                                                                    font-style: normal;
                                                                                    letter-spacing: -0.4px;
                                                                                "
                                                                            >
                                                                                <div
                                                                                    style="
                                                                                        font-family: &quot;Manrope&quot;,
                                                                                            Arial, Helvetica, sans-serif;
                                                                                    "
                                                                                >
                                                                                    <span
                                                                                        style="
                                                                                            font-family: &quot;Manrope&quot;,
                                                                                                Arial, Helvetica, sans-serif;
                                                                                            font-weight: 400;
                                                                                            font-size: 20px;
                                                                                            line-height: 30px;
                                                                                        "
                                                                                        class="pc-w620-font-size-18px pc-w620-line-height-24px pc-w620-letter-spacing-0px"
                                                                                        >Hi </span
                                                                                    ><span
                                                                                        style="
                                                                                            font-family: &quot;Manrope&quot;,
                                                                                                Arial, Helvetica, sans-serif;
                                                                                            color: rgb(19, 19, 18);
                                                                                            font-weight: 400;
                                                                                            font-size: 20px;
                                                                                            line-height: 30px;
                                                                                        "
                                                                                        class="pc-w620-font-size-18px pc-w620-line-height-24px pc-w620-letter-spacing-0px"
                                                                                        >Sarah</span
                                                                                    ><span
                                                                                        style="
                                                                                            font-family: &quot;Manrope&quot;,
                                                                                                Arial, Helvetica, sans-serif;
                                                                                            font-weight: 400;
                                                                                            font-size: 20px;
                                                                                            line-height: 30px;
                                                                                        "
                                                                                        class="pc-w620-font-size-18px pc-w620-line-height-24px pc-w620-letter-spacing-0px"
                                                                                        >, please take a moment to review
                                                                                        your invoice.</span
                                                                                    >
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                    <table
                                        class="pc-component"
                                        style="width: 600px; max-width: 600px"
                                        width="600"
                                        align="center"
                                        border="0"
                                        cellspacing="0"
                                        cellpadding="0"
                                        role="presentation"
                                    >
                                        <tr>
                                            <td
                                                class="pc-w620-spacing-0-0-0-0"
                                                width="100%"
                                                border="0"
                                                cellspacing="0"
                                                cellpadding="0"
                                                role="presentation"
                                            >
                                                <table
                                                    width="100%"
                                                    align="center"
                                                    border="0"
                                                    cellspacing="0"
                                                    cellpadding="0"
                                                    role="presentation"
                                                >
                                                    <tr>
                                                        <td
                                                            valign="top"
                                                            class="pc-w620-padding-0-8-8-8"
                                                            style="
                                                                padding: 0 16px 16px;
                                                                height: unset;
                                                                background-color: #fff;
                                                            "
                                                            bgcolor="#ffffff"
                                                        >
                                                            <table
                                                                class="pc-width-fill pc-g-b"
                                                                width="100%"
                                                                border="0"
                                                                cellpadding="0"
                                                                cellspacing="0"
                                                                role="presentation"
                                                            >
                                                                <tbody class="pc-g-b">
                                                                    <tr class="pc-g-ib pc-g-wf">
                                                                        <td
                                                                            class="pc-g-rb pc-g-rpt pc-g-rpb pc-g-wf pc-w620-itemsVSpacings-30"
                                                                            align="left"
                                                                            valign="top"
                                                                            style="
                                                                                width: 100%;
                                                                                padding-top: 0;
                                                                                padding-bottom: 0;
                                                                            "
                                                                        >
                                                                            <table
                                                                                style="width: 100%"
                                                                                border="0"
                                                                                cellpadding="0"
                                                                                cellspacing="0"
                                                                                role="presentation"
                                                                            >
                                                                                <tr>
                                                                                    <td
                                                                                        class="pc-w620-padding-16-16-16-16"
                                                                                        align="left"
                                                                                        valign="top"
                                                                                        style="
                                                                                            padding: 32px;
                                                                                            height: auto;
                                                                                            background-color: #fafafa;
                                                                                            border-radius: 20px 20px 20px
                                                                                                20px;
                                                                                        "
                                                                                    >
                                                                                        <table
                                                                                            width="100%"
                                                                                            border="0"
                                                                                            cellpadding="0"
                                                                                            cellspacing="0"
                                                                                            role="presentation"
                                                                                            style="min-width: 100%"
                                                                                        >
                                                                                            <tr>
                                                                                                <th
                                                                                                    valign="top"
                                                                                                    align="left"
                                                                                                    style="
                                                                                                        text-align: left;
                                                                                                        font-weight: normal;
                                                                                                    "
                                                                                                >
                                                                                                    <!--[if mso
                                                                                                        ]><table
                                                                                                            border="0"
                                                                                                            cellpadding="0"
                                                                                                            cellspacing="0"
                                                                                                            role="presentation"
                                                                                                            align="left"
                                                                                                            width="100%"
                                                                                                            style="
                                                                                                                border-collapse: separate;
                                                                                                                border-spacing: 0;
                                                                                                            "
                                                                                                        >
                                                                                                            <tr>
                                                                                                                <td
                                                                                                                    valign="middle"
                                                                                                                    align="center"
                                                                                                                    style="
                                                                                                                        width: 100%;
                                                                                                                        border-radius: 100px
                                                                                                                            100px
                                                                                                                            100px
                                                                                                                            100px;
                                                                                                                        background-color: #4f46e5;
                                                                                                                        text-align: center;
                                                                                                                        color: #fff;
                                                                                                                        padding: 20px;
                                                                                                                        mso-padding-left-alt: 0;
                                                                                                                        margin-left: 20px;
                                                                                                                    "
                                                                                                                    bgcolor="#4f46e5"
                                                                                                                >
                                                                                                                    <a
                                                                                                                        class="pc-font-alt"
                                                                                                                        style="
                                                                                                                            display: inline-block;
                                                                                                                            text-decoration: none;
                                                                                                                            text-align: center;
                                                                                                                        "
                                                                                                                        href="https://seo.lumin8.in/"
                                                                                                                        target="_blank"
                                                                                                                        ><span
                                                                                                                            class="pc-w620-font-size-18px"
                                                                                                                            style="
                                                                                                                                font-size: 20px;
                                                                                                                                line-height: 24px;
                                                                                                                                color: #fff;
                                                                                                                                font-family: &quot;Manrope&quot;,
                                                                                                                                    Arial,
                                                                                                                                    Helvetica,
                                                                                                                                    sans-serif;
                                                                                                                                font-style: normal;
                                                                                                                                letter-spacing: 0;
                                                                                                                                display: inline-block;
                                                                                                                                vertical-align: top;
                                                                                                                            "
                                                                                                                            ><span
                                                                                                                                style="
                                                                                                                                    font-family: &quot;Manrope&quot;,
                                                                                                                                        Arial,
                                                                                                                                        Helvetica,
                                                                                                                                        sans-serif;
                                                                                                                                    display: inline-block;
                                                                                                                                "
                                                                                                                                ><span
                                                                                                                                    style="
                                                                                                                                        font-family: &quot;Manrope&quot;,
                                                                                                                                            Arial,
                                                                                                                                            Helvetica,
                                                                                                                                            sans-serif;
                                                                                                                                        font-weight: 400;
                                                                                                                                        font-size: 20px;
                                                                                                                                        line-height: 24px;
                                                                                                                                    "
                                                                                                                                    class="pc-w620-font-size-18px"
                                                                                                                                    >View
                                                                                                                                    Report</span
                                                                                                                                ></span
                                                                                                                            ></span
                                                                                                                        ></a
                                                                                                                    >
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                        </table><!
                                                                                                    [endif]--><!--[if !mso]><!-- --><a
                                                                                                        class="pc-w620-padding-14-20-14-20"
                                                                                                        style="
                                                                                                            display: inline-block;
                                                                                                            box-sizing: border-box;
                                                                                                            border-radius: 100px
                                                                                                                100px 100px
                                                                                                                100px;
                                                                                                            background-color: #4f46e5;
                                                                                                            padding: 20px;
                                                                                                            width: 100%;
                                                                                                            vertical-align: top;
                                                                                                            text-align: center;
                                                                                                            text-align-last: center;
                                                                                                            text-decoration: none;
                                                                                                            -webkit-text-size-adjust: none;
                                                                                                        "
                                                                                                        href="https://seo.lumin8.in/dashboard/report/${id}"
                                                                                                        target="_blank"
                                                                                                        ><span
                                                                                                            class="pc-w620-font-size-18px"
                                                                                                            style="
                                                                                                                font-size: 20px;
                                                                                                                line-height: 24px;
                                                                                                                color: #fff;
                                                                                                                font-family: &quot;Manrope&quot;,
                                                                                                                    Arial,
                                                                                                                    Helvetica,
                                                                                                                    sans-serif;
                                                                                                                font-style: normal;
                                                                                                                letter-spacing: 0;
                                                                                                                display: inline-block;
                                                                                                                vertical-align: top;
                                                                                                            "
                                                                                                            ><span
                                                                                                                style="
                                                                                                                    font-family: &quot;Manrope&quot;,
                                                                                                                        Arial,
                                                                                                                        Helvetica,
                                                                                                                        sans-serif;
                                                                                                                    display: inline-block;
                                                                                                                "
                                                                                                                ><span
                                                                                                                    style="
                                                                                                                        font-family: &quot;Manrope&quot;,
                                                                                                                            Arial,
                                                                                                                            Helvetica,
                                                                                                                            sans-serif;
                                                                                                                        font-weight: 400;
                                                                                                                        font-size: 20px;
                                                                                                                        line-height: 24px;
                                                                                                                    "
                                                                                                                    class="pc-w620-font-size-18px"
                                                                                                                    >View
                                                                                                                    Report</span
                                                                                                                ></span
                                                                                                            ></span
                                                                                                        ></a
                                                                                                    ><!--<![endif]-->
                                                                                                </th>
                                                                                            </tr>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                    <table
                                        class="pc-component"
                                        style="width: 600px; max-width: 600px"
                                        width="600"
                                        align="center"
                                        border="0"
                                        cellspacing="0"
                                        cellpadding="0"
                                        role="presentation"
                                    >
                                        <tr>
                                            <td
                                                class="pc-w620-spacing-0-0-0-0"
                                                width="100%"
                                                border="0"
                                                cellspacing="0"
                                                cellpadding="0"
                                                role="presentation"
                                            >
                                                <table
                                                    width="100%"
                                                    align="center"
                                                    border="0"
                                                    cellspacing="0"
                                                    cellpadding="0"
                                                    role="presentation"
                                                >
                                                    <tr>
                                                        <td
                                                            valign="top"
                                                            class="pc-w620-padding-0-8-0-8"
                                                            style="padding: 0 16px; height: unset; background-color: #fff"
                                                            bgcolor="#ffffff"
                                                        >
                                                            <table
                                                                class="pc-width-fill pc-g-b"
                                                                width="100%"
                                                                border="0"
                                                                cellpadding="0"
                                                                cellspacing="0"
                                                                role="presentation"
                                                            >
                                                                <tbody class="pc-g-b">
                                                                    <tr class="pc-g-ib pc-g-wf">
                                                                        <td
                                                                            class="pc-g-rb pc-g-rpt pc-g-rpb pc-g-wf pc-w620-itemsVSpacings-30"
                                                                            align="left"
                                                                            valign="top"
                                                                            style="
                                                                                width: 100%;
                                                                                padding-top: 0;
                                                                                padding-bottom: 0;
                                                                            "
                                                                        >
                                                                            <table
                                                                                style="width: 100%"
                                                                                border="0"
                                                                                cellpadding="0"
                                                                                cellspacing="0"
                                                                                role="presentation"
                                                                            >
                                                                                <tr>
                                                                                    <td
                                                                                        class="pc-w620-padding-20-18-20-18"
                                                                                        align="left"
                                                                                        valign="top"
                                                                                        style="
                                                                                            padding: 32px;
                                                                                            height: auto;
                                                                                            background-color: #fafafa;
                                                                                            border-radius: 20px 20px 20px
                                                                                                20px;
                                                                                        "
                                                                                    >
                                                                                        <table
                                                                                            width="100%"
                                                                                            border="0"
                                                                                            cellpadding="0"
                                                                                            cellspacing="0"
                                                                                            role="presentation"
                                                                                        >
                                                                                            <tr>
                                                                                                <td
                                                                                                    align="left"
                                                                                                    valign="top"
                                                                                                >
                                                                                                    <table
                                                                                                        align="left"
                                                                                                        border="0"
                                                                                                        cellpadding="0"
                                                                                                        cellspacing="0"
                                                                                                        role="presentation"
                                                                                                    >
                                                                                                        <tr>
                                                                                                            <td
                                                                                                                class="pc-w620-spacing-0-0-28-0"
                                                                                                                valign="top"
                                                                                                                style="
                                                                                                                    padding: 0
                                                                                                                        0
                                                                                                                        24px;
                                                                                                                    height: auto;
                                                                                                                "
                                                                                                            >
                                                                                                                <table
                                                                                                                    border="0"
                                                                                                                    cellpadding="0"
                                                                                                                    cellspacing="0"
                                                                                                                    role="presentation"
                                                                                                                    width="100%"
                                                                                                                >
                                                                                                                    <tr>
                                                                                                                        <td
                                                                                                                            valign="top"
                                                                                                                            align="left"
                                                                                                                        >
                                                                                                                            <div
                                                                                                                                class="pc-font-alt"
                                                                                                                                style="
                                                                                                                                    text-decoration: none;
                                                                                                                                "
                                                                                                                            >
                                                                                                                                <div
                                                                                                                                    class="pc-w620-font-size-28px"
                                                                                                                                    style="
                                                                                                                                        font-size: 30px;
                                                                                                                                        line-height: 100%;
                                                                                                                                        text-align: left;
                                                                                                                                        text-align-last: left;
                                                                                                                                        color: #131312;
                                                                                                                                        font-family: &quot;Manrope&quot;,
                                                                                                                                            Arial,
                                                                                                                                            Helvetica,
                                                                                                                                            sans-serif;
                                                                                                                                        font-style: normal;
                                                                                                                                        letter-spacing: 0;
                                                                                                                                    "
                                                                                                                                >
                                                                                                                                    <div
                                                                                                                                        style="
                                                                                                                                            font-family: &quot;Manrope&quot;,
                                                                                                                                                Arial,
                                                                                                                                                Helvetica,
                                                                                                                                                sans-serif;
                                                                                                                                        "
                                                                                                                                    >
                                                                                                                                        <span
                                                                                                                                            style="
                                                                                                                                                font-family: &quot;Manrope&quot;,
                                                                                                                                                    Arial,
                                                                                                                                                    Helvetica,
                                                                                                                                                    sans-serif;
                                                                                                                                                font-weight: 400;
                                                                                                                                                font-size: 30px;
                                                                                                                                                line-height: 100%;
                                                                                                                                            "
                                                                                                                                            class="pc-w620-font-size-28px"
                                                                                                                                            >Report
                                                                                                                                            information</span
                                                                                                                                        >
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </table>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td
                                                                                                    align="left"
                                                                                                    valign="top"
                                                                                                >
                                                                                                    <table
                                                                                                        class="pc-width-fill pc-g-b"
                                                                                                        width="100%"
                                                                                                        border="0"
                                                                                                        cellpadding="0"
                                                                                                        cellspacing="0"
                                                                                                        role="presentation"
                                                                                                    >
                                                                                                        <tbody
                                                                                                            class="pc-g-b"
                                                                                                        >
                                                                                                            <tr
                                                                                                                class="pc-g-ib pc-g-wf"
                                                                                                            >
                                                                                                                <td
                                                                                                                    class="pc-g-rb pc-g-rpt pc-g-wf pc-w620-itemsVSpacings-20"
                                                                                                                    align="left"
                                                                                                                    valign="top"
                                                                                                                    style="
                                                                                                                        width: 50%;
                                                                                                                        padding-top: 0;
                                                                                                                        padding-bottom: 12px;
                                                                                                                    "
                                                                                                                >
                                                                                                                    <table
                                                                                                                        style="
                                                                                                                            width: 100%;
                                                                                                                        "
                                                                                                                        border="0"
                                                                                                                        cellpadding="0"
                                                                                                                        cellspacing="0"
                                                                                                                        role="presentation"
                                                                                                                    >
                                                                                                                        <tr>
                                                                                                                            <td
                                                                                                                                align="left"
                                                                                                                                valign="top"
                                                                                                                            >
                                                                                                                                <table
                                                                                                                                    width="100%"
                                                                                                                                    border="0"
                                                                                                                                    cellpadding="0"
                                                                                                                                    cellspacing="0"
                                                                                                                                    role="presentation"
                                                                                                                                >
                                                                                                                                    <tr>
                                                                                                                                        <td
                                                                                                                                            align="left"
                                                                                                                                            valign="top"
                                                                                                                                        >
                                                                                                                                            <table
                                                                                                                                                align="left"
                                                                                                                                                border="0"
                                                                                                                                                cellpadding="0"
                                                                                                                                                cellspacing="0"
                                                                                                                                                role="presentation"
                                                                                                                                            >
                                                                                                                                                <tr>
                                                                                                                                                    <td
                                                                                                                                                        valign="top"
                                                                                                                                                        style="
                                                                                                                                                            padding: 0
                                                                                                                                                                0
                                                                                                                                                                8px;
                                                                                                                                                            height: auto;
                                                                                                                                                        "
                                                                                                                                                    >
                                                                                                                                                        <table
                                                                                                                                                            border="0"
                                                                                                                                                            cellpadding="0"
                                                                                                                                                            cellspacing="0"
                                                                                                                                                            role="presentation"
                                                                                                                                                            width="100%"
                                                                                                                                                        >
                                                                                                                                                            <tr>
                                                                                                                                                                <td
                                                                                                                                                                    valign="top"
                                                                                                                                                                    align="left"
                                                                                                                                                                >
                                                                                                                                                                    <div
                                                                                                                                                                        class="pc-font-alt"
                                                                                                                                                                        style="
                                                                                                                                                                            text-decoration: none;
                                                                                                                                                                        "
                                                                                                                                                                    >
                                                                                                                                                                        <div
                                                                                                                                                                            style="
                                                                                                                                                                                font-size: 16px;
                                                                                                                                                                                line-height: 24px;
                                                                                                                                                                                text-align: left;
                                                                                                                                                                                text-align-last: left;
                                                                                                                                                                                color: #9f9f9f;
                                                                                                                                                                                font-family: &quot;Manrope&quot;,
                                                                                                                                                                                    Arial,
                                                                                                                                                                                    Helvetica,
                                                                                                                                                                                    sans-serif;
                                                                                                                                                                                letter-spacing: 0;
                                                                                                                                                                                font-style: normal;
                                                                                                                                                                            "
                                                                                                                                                                        >
                                                                                                                                                                            <div
                                                                                                                                                                                style="
                                                                                                                                                                                    font-family: &quot;Manrope&quot;,
                                                                                                                                                                                        Arial,
                                                                                                                                                                                        Helvetica,
                                                                                                                                                                                        sans-serif;
                                                                                                                                                                                "
                                                                                                                                                                            >
                                                                                                                                                                                <span
                                                                                                                                                                                    style="
                                                                                                                                                                                        font-family: &quot;Manrope&quot;,
                                                                                                                                                                                            Arial,
                                                                                                                                                                                            Helvetica,
                                                                                                                                                                                            sans-serif;
                                                                                                                                                                                        font-size: 16px;
                                                                                                                                                                                        line-height: 24px;
                                                                                                                                                                                        font-weight: 400;
                                                                                                                                                                                    "
                                                                                                                                                                                    >Searched
                                                                                                                                                                                    for</span
                                                                                                                                                                                >
                                                                                                                                                                            </div>
                                                                                                                                                                        </div>
                                                                                                                                                                    </div>
                                                                                                                                                                </td>
                                                                                                                                                            </tr>
                                                                                                                                                        </table>
                                                                                                                                                    </td>
                                                                                                                                                </tr>
                                                                                                                                            </table>
                                                                                                                                        </td>
                                                                                                                                    </tr>
                                                                                                                                    <tr>
                                                                                                                                        <td
                                                                                                                                            align="left"
                                                                                                                                            valign="top"
                                                                                                                                        >
                                                                                                                                            <table
                                                                                                                                                border="0"
                                                                                                                                                cellpadding="0"
                                                                                                                                                cellspacing="0"
                                                                                                                                                role="presentation"
                                                                                                                                                align="left"
                                                                                                                                            >
                                                                                                                                                <tr>
                                                                                                                                                    <td
                                                                                                                                                        valign="top"
                                                                                                                                                        align="left"
                                                                                                                                                    >
                                                                                                                                                        <div
                                                                                                                                                            class="pc-font-alt"
                                                                                                                                                            style="
                                                                                                                                                                text-decoration: none;
                                                                                                                                                            "
                                                                                                                                                        >
                                                                                                                                                            <div
                                                                                                                                                                style="
                                                                                                                                                                    font-size: 18px;
                                                                                                                                                                    line-height: 26px;
                                                                                                                                                                    text-align: left;
                                                                                                                                                                    text-align-last: left;
                                                                                                                                                                    color: #131312;
                                                                                                                                                                    font-family: &quot;Manrope&quot;,
                                                                                                                                                                        Arial,
                                                                                                                                                                        Helvetica,
                                                                                                                                                                        sans-serif;
                                                                                                                                                                    font-style: normal;
                                                                                                                                                                    letter-spacing: 0;
                                                                                                                                                                "
                                                                                                                                                            >
                                                                                                                                                                <div
                                                                                                                                                                    style="
                                                                                                                                                                        font-family: &quot;Manrope&quot;,
                                                                                                                                                                            Arial,
                                                                                                                                                                            Helvetica,
                                                                                                                                                                            sans-serif;
                                                                                                                                                                    "
                                                                                                                                                                >
                                                                                                                                                                    <span
                                                                                                                                                                        style="
                                                                                                                                                                            font-family: &quot;Manrope&quot;,
                                                                                                                                                                                Arial,
                                                                                                                                                                                Helvetica,
                                                                                                                                                                                sans-serif;
                                                                                                                                                                            font-weight: 400;
                                                                                                                                                                            font-size: 18px;
                                                                                                                                                                            line-height: 26px;
                                                                                                                                                                        "
                                                                                                                                                                        >${entity_name}</span
                                                                                                                                                                    >
                                                                                                                                                                </div>
                                                                                                                                                            </div>
                                                                                                                                                        </div>
                                                                                                                                                    </td>
                                                                                                                                                </tr>
                                                                                                                                            </table>
                                                                                                                                        </td>
                                                                                                                                    </tr>
                                                                                                                                </table>
                                                                                                                            </td>
                                                                                                                        </tr>
                                                                                                                    </table>
                                                                                                                </td>
                                                                                                                <td
                                                                                                                    class="pc-w620-itemsHSpacings-0"
                                                                                                                    valign="top"
                                                                                                                    style="
                                                                                                                        padding-right: 12px;
                                                                                                                        padding-left: 12px;
                                                                                                                    "
                                                                                                                ></td>
                                                                                                                <td
                                                                                                                    class="pc-g-rb pc-g-wf pc-w620-itemsVSpacings-20"
                                                                                                                    align="left"
                                                                                                                    valign="top"
                                                                                                                    style="
                                                                                                                        width: 50%;
                                                                                                                        padding-top: 0;
                                                                                                                        padding-bottom: 12px;
                                                                                                                    "
                                                                                                                >
                                                                                                                    <table
                                                                                                                        style="
                                                                                                                            width: 100%;
                                                                                                                        "
                                                                                                                        border="0"
                                                                                                                        cellpadding="0"
                                                                                                                        cellspacing="0"
                                                                                                                        role="presentation"
                                                                                                                    >
                                                                                                                        <tr>
                                                                                                                            <td
                                                                                                                                align="left"
                                                                                                                                valign="top"
                                                                                                                            >
                                                                                                                                <table
                                                                                                                                    width="100%"
                                                                                                                                    border="0"
                                                                                                                                    cellpadding="0"
                                                                                                                                    cellspacing="0"
                                                                                                                                    role="presentation"
                                                                                                                                >
                                                                                                                                    <tr>
                                                                                                                                        <td
                                                                                                                                            align="left"
                                                                                                                                            valign="top"
                                                                                                                                        >
                                                                                                                                            <table
                                                                                                                                                align="left"
                                                                                                                                                border="0"
                                                                                                                                                cellpadding="0"
                                                                                                                                                cellspacing="0"
                                                                                                                                                role="presentation"
                                                                                                                                            >
                                                                                                                                                <tr>
                                                                                                                                                    <td
                                                                                                                                                        valign="top"
                                                                                                                                                        style="
                                                                                                                                                            padding: 0
                                                                                                                                                                0
                                                                                                                                                                8px;
                                                                                                                                                            height: auto;
                                                                                                                                                        "
                                                                                                                                                    >
                                                                                                                                                        <table
                                                                                                                                                            border="0"
                                                                                                                                                            cellpadding="0"
                                                                                                                                                            cellspacing="0"
                                                                                                                                                            role="presentation"
                                                                                                                                                            width="100%"
                                                                                                                                                        >
                                                                                                                                                            <tr>
                                                                                                                                                                <td
                                                                                                                                                                    valign="top"
                                                                                                                                                                    align="left"
                                                                                                                                                                >
                                                                                                                                                                    <div
                                                                                                                                                                        class="pc-font-alt"
                                                                                                                                                                        style="
                                                                                                                                                                            text-decoration: none;
                                                                                                                                                                        "
                                                                                                                                                                    >
                                                                                                                                                                        <div
                                                                                                                                                                            style="
                                                                                                                                                                                font-size: 16px;
                                                                                                                                                                                line-height: 24px;
                                                                                                                                                                                text-align: left;
                                                                                                                                                                                text-align-last: left;
                                                                                                                                                                                color: #9f9f9f;
                                                                                                                                                                                font-family: &quot;Manrope&quot;,
                                                                                                                                                                                    Arial,
                                                                                                                                                                                    Helvetica,
                                                                                                                                                                                    sans-serif;
                                                                                                                                                                                letter-spacing: 0;
                                                                                                                                                                                font-style: normal;
                                                                                                                                                                            "
                                                                                                                                                                        >
                                                                                                                                                                            <div
                                                                                                                                                                                style="
                                                                                                                                                                                    font-family: &quot;Manrope&quot;,
                                                                                                                                                                                        Arial,
                                                                                                                                                                                        Helvetica,
                                                                                                                                                                                        sans-serif;
                                                                                                                                                                                "
                                                                                                                                                                            >
                                                                                                                                                                                <span
                                                                                                                                                                                    style="
                                                                                                                                                                                        font-family: &quot;Manrope&quot;,
                                                                                                                                                                                            Arial,
                                                                                                                                                                                            Helvetica,
                                                                                                                                                                                            sans-serif;
                                                                                                                                                                                        font-size: 16px;
                                                                                                                                                                                        line-height: 24px;
                                                                                                                                                                                        font-weight: 400;
                                                                                                                                                                                    "
                                                                                                                                                                                    >Sources
                                                                                                                                                                                    Analysed</span
                                                                                                                                                                                >
                                                                                                                                                                            </div>
                                                                                                                                                                        </div>
                                                                                                                                                                    </div>
                                                                                                                                                                </td>
                                                                                                                                                            </tr>
                                                                                                                                                        </table>
                                                                                                                                                    </td>
                                                                                                                                                </tr>
                                                                                                                                            </table>
                                                                                                                                        </td>
                                                                                                                                    </tr>
                                                                                                                                    <tr>
                                                                                                                                        <td
                                                                                                                                            align="left"
                                                                                                                                            valign="top"
                                                                                                                                        >
                                                                                                                                            <table
                                                                                                                                                border="0"
                                                                                                                                                cellpadding="0"
                                                                                                                                                cellspacing="0"
                                                                                                                                                role="presentation"
                                                                                                                                                align="left"
                                                                                                                                            >
                                                                                                                                                <tr>
                                                                                                                                                    <td
                                                                                                                                                        valign="top"
                                                                                                                                                        align="left"
                                                                                                                                                    >
                                                                                                                                                        <div
                                                                                                                                                            class="pc-font-alt"
                                                                                                                                                            style="
                                                                                                                                                                text-decoration: none;
                                                                                                                                                            "
                                                                                                                                                        >
                                                                                                                                                            <div
                                                                                                                                                                style="
                                                                                                                                                                    font-size: 18px;
                                                                                                                                                                    line-height: 26px;
                                                                                                                                                                    text-align: left;
                                                                                                                                                                    text-align-last: left;
                                                                                                                                                                    color: #131312;
                                                                                                                                                                    font-family: &quot;Manrope&quot;,
                                                                                                                                                                        Arial,
                                                                                                                                                                        Helvetica,
                                                                                                                                                                        sans-serif;
                                                                                                                                                                    letter-spacing: 0;
                                                                                                                                                                    font-style: normal;
                                                                                                                                                                "
                                                                                                                                                            >
                                                                                                                                                                <div
                                                                                                                                                                    style="
                                                                                                                                                                        font-family: &quot;Manrope&quot;,
                                                                                                                                                                            Arial,
                                                                                                                                                                            Helvetica,
                                                                                                                                                                            sans-serif;
                                                                                                                                                                    "
                                                                                                                                                                >
                                                                                                                                                                    <span
                                                                                                                                                                        style="
                                                                                                                                                                            font-family: &quot;Manrope&quot;,
                                                                                                                                                                                Arial,
                                                                                                                                                                                Helvetica,
                                                                                                                                                                                sans-serif;
                                                                                                                                                                            font-size: 18px;
                                                                                                                                                                            line-height: 26px;
                                                                                                                                                                            font-weight: 400;
                                                                                                                                                                        "
                                                                                                                                                                        >${data_sources_count}</span
                                                                                                                                                                    >
                                                                                                                                                                </div>
                                                                                                                                                            </div>
                                                                                                                                                        </div>
                                                                                                                                                    </td>
                                                                                                                                                </tr>
                                                                                                                                            </table>
                                                                                                                                        </td>
                                                                                                                                    </tr>
                                                                                                                                </table>
                                                                                                                            </td>
                                                                                                                        </tr>
                                                                                                                    </table>
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                            <tr
                                                                                                                class="pc-g-ib pc-g-wf"
                                                                                                            >
                                                                                                                <td
                                                                                                                    class="pc-g-rb pc-g-rpb pc-g-wf pc-w620-itemsVSpacings-20"
                                                                                                                    align="left"
                                                                                                                    valign="top"
                                                                                                                    style="
                                                                                                                        width: 50%;
                                                                                                                        padding-top: 12px;
                                                                                                                        padding-bottom: 0;
                                                                                                                    "
                                                                                                                >
                                                                                                                    <table
                                                                                                                        style="
                                                                                                                            width: 100%;
                                                                                                                        "
                                                                                                                        border="0"
                                                                                                                        cellpadding="0"
                                                                                                                        cellspacing="0"
                                                                                                                        role="presentation"
                                                                                                                    >
                                                                                                                        <tr>
                                                                                                                            <td
                                                                                                                                align="left"
                                                                                                                                valign="top"
                                                                                                                            >
                                                                                                                                <table
                                                                                                                                    width="100%"
                                                                                                                                    border="0"
                                                                                                                                    cellpadding="0"
                                                                                                                                    cellspacing="0"
                                                                                                                                    role="presentation"
                                                                                                                                >
                                                                                                                                    <tr>
                                                                                                                                        <td
                                                                                                                                            align="left"
                                                                                                                                            valign="top"
                                                                                                                                        >
                                                                                                                                            <table
                                                                                                                                                align="left"
                                                                                                                                                border="0"
                                                                                                                                                cellpadding="0"
                                                                                                                                                cellspacing="0"
                                                                                                                                                role="presentation"
                                                                                                                                            >
                                                                                                                                                <tr>
                                                                                                                                                    <td
                                                                                                                                                        valign="top"
                                                                                                                                                        style="
                                                                                                                                                            padding: 0
                                                                                                                                                                0
                                                                                                                                                                8px;
                                                                                                                                                            height: auto;
                                                                                                                                                        "
                                                                                                                                                    >
                                                                                                                                                        <table
                                                                                                                                                            border="0"
                                                                                                                                                            cellpadding="0"
                                                                                                                                                            cellspacing="0"
                                                                                                                                                            role="presentation"
                                                                                                                                                            width="100%"
                                                                                                                                                        >
                                                                                                                                                            <tr>
                                                                                                                                                                <td
                                                                                                                                                                    valign="top"
                                                                                                                                                                    align="left"
                                                                                                                                                                >
                                                                                                                                                                    <div
                                                                                                                                                                        class="pc-font-alt"
                                                                                                                                                                        style="
                                                                                                                                                                            text-decoration: none;
                                                                                                                                                                        "
                                                                                                                                                                    >
                                                                                                                                                                        <div
                                                                                                                                                                            style="
                                                                                                                                                                                font-size: 16px;
                                                                                                                                                                                line-height: 24px;
                                                                                                                                                                                text-align: left;
                                                                                                                                                                                text-align-last: left;
                                                                                                                                                                                color: #9f9f9f;
                                                                                                                                                                                font-family: &quot;Manrope&quot;,
                                                                                                                                                                                    Arial,
                                                                                                                                                                                    Helvetica,
                                                                                                                                                                                    sans-serif;
                                                                                                                                                                                letter-spacing: 0;
                                                                                                                                                                                font-style: normal;
                                                                                                                                                                            "
                                                                                                                                                                        >
                                                                                                                                                                            <div
                                                                                                                                                                                style="
                                                                                                                                                                                    font-family: &quot;Manrope&quot;,
                                                                                                                                                                                        Arial,
                                                                                                                                                                                        Helvetica,
                                                                                                                                                                                        sans-serif;
                                                                                                                                                                                "
                                                                                                                                                                            >
                                                                                                                                                                                <span
                                                                                                                                                                                    style="
                                                                                                                                                                                        font-family: &quot;Manrope&quot;,
                                                                                                                                                                                            Arial,
                                                                                                                                                                                            Helvetica,
                                                                                                                                                                                            sans-serif;
                                                                                                                                                                                        font-size: 16px;
                                                                                                                                                                                        line-height: 24px;
                                                                                                                                                                                        font-weight: 400;
                                                                                                                                                                                    "
                                                                                                                                                                                    >Confidence
                                                                                                                                                                                    Score</span
                                                                                                                                                                                >
                                                                                                                                                                            </div>
                                                                                                                                                                        </div>
                                                                                                                                                                    </div>
                                                                                                                                                                </td>
                                                                                                                                                            </tr>
                                                                                                                                                        </table>
                                                                                                                                                    </td>
                                                                                                                                                </tr>
                                                                                                                                            </table>
                                                                                                                                        </td>
                                                                                                                                    </tr>
                                                                                                                                    <tr>
                                                                                                                                        <td
                                                                                                                                            align="left"
                                                                                                                                            valign="top"
                                                                                                                                        >
                                                                                                                                            <table
                                                                                                                                                align="left"
                                                                                                                                                border="0"
                                                                                                                                                cellpadding="0"
                                                                                                                                                cellspacing="0"
                                                                                                                                                role="presentation"
                                                                                                                                            >
                                                                                                                                                <tr>
                                                                                                                                                    <td
                                                                                                                                                        align="center"
                                                                                                                                                    >
                                                                                                                                                        <table
                                                                                                                                                            class="pc-w620-width-hug"
                                                                                                                                                            align="center"
                                                                                                                                                            border="0"
                                                                                                                                                            cellpadding="0"
                                                                                                                                                            cellspacing="0"
                                                                                                                                                            role="presentation"
                                                                                                                                                        >
                                                                                                                                                            <tr>
                                                                                                                                                                <td
                                                                                                                                                                    style="
                                                                                                                                                                        width: unset;
                                                                                                                                                                    "
                                                                                                                                                                    valign="top"
                                                                                                                                                                >
                                                                                                                                                                    <table
                                                                                                                                                                        class="pc-width-hug pc-w620-width-hug"
                                                                                                                                                                        align="center"
                                                                                                                                                                        border="0"
                                                                                                                                                                        cellpadding="0"
                                                                                                                                                                        cellspacing="0"
                                                                                                                                                                        role="presentation"
                                                                                                                                                                    >
                                                                                                                                                                        <tbody>
                                                                                                                                                                            <tr>
                                                                                                                                                                                <td
                                                                                                                                                                                    class="pc-g-rpt pc-g-rpb pc-w620-itemsVSpacings-30"
                                                                                                                                                                                    valign="middle"
                                                                                                                                                                                    style="
                                                                                                                                                                                        padding-top: 0;
                                                                                                                                                                                        padding-bottom: 0;
                                                                                                                                                                                    "
                                                                                                                                                                                >
                                                                                                                                                                                    <table
                                                                                                                                                                                        style="
                                                                                                                                                                                            width: 100%;
                                                                                                                                                                                        "
                                                                                                                                                                                        border="0"
                                                                                                                                                                                        cellpadding="0"
                                                                                                                                                                                        cellspacing="0"
                                                                                                                                                                                        role="presentation"
                                                                                                                                                                                    >
                                                                                                                                                                                        <tr>
                                                                                                                                                                                            <td
                                                                                                                                                                                                align="center"
                                                                                                                                                                                                valign="middle"
                                                                                                                                                                                            >
                                                                                                                                                                                                <table
                                                                                                                                                                                                    width="100%"
                                                                                                                                                                                                    border="0"
                                                                                                                                                                                                    cellpadding="0"
                                                                                                                                                                                                    cellspacing="0"
                                                                                                                                                                                                    role="presentation"
                                                                                                                                                                                                >
                                                                                                                                                                                                    <tr>
                                                                                                                                                                                                        <td
                                                                                                                                                                                                            align="center"
                                                                                                                                                                                                            valign="top"
                                                                                                                                                                                                        >
                                                                                                                                                                                                            <table
                                                                                                                                                                                                                border="0"
                                                                                                                                                                                                                cellpadding="0"
                                                                                                                                                                                                                cellspacing="0"
                                                                                                                                                                                                                role="presentation"
                                                                                                                                                                                                                align="center"
                                                                                                                                                                                                            >
                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                    <td
                                                                                                                                                                                                                        valign="top"
                                                                                                                                                                                                                        align="center"
                                                                                                                                                                                                                    >
                                                                                                                                                                                                                        <div
                                                                                                                                                                                                                            class="pc-font-alt"
                                                                                                                                                                                                                            style="
                                                                                                                                                                                                                                text-decoration: none;
                                                                                                                                                                                                                            "
                                                                                                                                                                                                                        >
                                                                                                                                                                                                                            <div
                                                                                                                                                                                                                                style="
                                                                                                                                                                                                                                    font-size: 18px;
                                                                                                                                                                                                                                    line-height: 26px;
                                                                                                                                                                                                                                    text-align: center;
                                                                                                                                                                                                                                    text-align-last: center;
                                                                                                                                                                                                                                    color: #131312;
                                                                                                                                                                                                                                    font-family: &quot;Manrope&quot;,
                                                                                                                                                                                                                                        Arial,
                                                                                                                                                                                                                                        Helvetica,
                                                                                                                                                                                                                                        sans-serif;
                                                                                                                                                                                                                                    font-style: normal;
                                                                                                                                                                                                                                    letter-spacing: 0;
                                                                                                                                                                                                                                "
                                                                                                                                                                                                                            >
                                                                                                                                                                                                                                <div
                                                                                                                                                                                                                                    style="
                                                                                                                                                                                                                                        font-family: &quot;Manrope&quot;,
                                                                                                                                                                                                                                            Arial,
                                                                                                                                                                                                                                            Helvetica,
                                                                                                                                                                                                                                            sans-serif;
                                                                                                                                                                                                                                    "
                                                                                                                                                                                                                                >
                                                                                                                                                                                                                                    <span
                                                                                                                                                                                                                                        style="
                                                                                                                                                                                                                                            font-family: &quot;Manrope&quot;,
                                                                                                                                                                                                                                                Arial,
                                                                                                                                                                                                                                                Helvetica,
                                                                                                                                                                                                                                                sans-serif;
                                                                                                                                                                                                                                            font-weight: 400;
                                                                                                                                                                                                                                            font-size: 18px;
                                                                                                                                                                                                                                            line-height: 26px;
                                                                                                                                                                                                                                        "
                                                                                                                                                                                                                                        >${confidence_score * 100}/100</span
                                                                                                                                                                                                                                    >
                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                    </td>
                                                                                                                                                                                                                </tr>
                                                                                                                                                                                                            </table>
                                                                                                                                                                                                        </td>
                                                                                                                                                                                                    </tr>
                                                                                                                                                                                                </table>
                                                                                                                                                                                            </td>
                                                                                                                                                                                        </tr>
                                                                                                                                                                                    </table>
                                                                                                                                                                                </td>
                                                                                                                                                                            </tr>
                                                                                                                                                                        </tbody>
                                                                                                                                                                    </table>
                                                                                                                                                                </td>
                                                                                                                                                            </tr>
                                                                                                                                                        </table>
                                                                                                                                                    </td>
                                                                                                                                                </tr>
                                                                                                                                            </table>
                                                                                                                                        </td>
                                                                                                                                    </tr>
                                                                                                                                </table>
                                                                                                                            </td>
                                                                                                                        </tr>
                                                                                                                    </table>
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                        </tbody>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                    <table
                                        class="pc-component"
                                        style="width: 600px; max-width: 600px"
                                        width="600"
                                        align="center"
                                        border="0"
                                        cellspacing="0"
                                        cellpadding="0"
                                        role="presentation"
                                    >
                                        <tr>
                                            <td
                                                class="pc-w620-spacing-0-0-0-0"
                                                width="100%"
                                                border="0"
                                                cellspacing="0"
                                                cellpadding="0"
                                                role="presentation"
                                            >
                                                <table
                                                    width="100%"
                                                    align="center"
                                                    border="0"
                                                    cellspacing="0"
                                                    cellpadding="0"
                                                    role="presentation"
                                                >
                                                    <tr>
                                                        <td
                                                            valign="top"
                                                            class="pc-w620-padding-8-8-0-8"
                                                            style="
                                                                padding: 16px 16px 0;
                                                                height: unset;
                                                                background-color: #fff;
                                                            "
                                                            bgcolor="#FFFFFF"
                                                        >
                                                            <table
                                                                border="0"
                                                                cellpadding="0"
                                                                cellspacing="0"
                                                                role="presentation"
                                                                width="100%"
                                                            >
                                                                <tr>
                                                                    <td valign="top" style="height: unset">
                                                                        <table
                                                                            width="100%"
                                                                            border="0"
                                                                            cellpadding="0"
                                                                            cellspacing="0"
                                                                            role="presentation"
                                                                        >
                                                                            <tr>
                                                                                <td>
                                                                                    <table
                                                                                        class="pc-width-fill pc-g-b"
                                                                                        style="direction: rtl"
                                                                                        width="100%"
                                                                                        height="100%"
                                                                                        dir="rtl"
                                                                                        border="0"
                                                                                        cellpadding="0"
                                                                                        cellspacing="0"
                                                                                        role="presentation"
                                                                                    >
                                                                                        <tbody class="pc-g-b">
                                                                                            <tr class="pc-g-ib pc-g-wf">
                                                                                                <td
                                                                                                    class="pc-g-rb pc-g-rpt pc-g-wf pc-sm-hide pc-w620-itemsVSpacings-0"
                                                                                                    align="left"
                                                                                                    valign="top"
                                                                                                    style="
                                                                                                        width: 50%;
                                                                                                        padding-top: 0;
                                                                                                        padding-bottom: 0;
                                                                                                        direction: ltr;
                                                                                                    "
                                                                                                    dir="ltr"
                                                                                                >
                                                                                                    <table
                                                                                                        style="
                                                                                                            width: 100%;
                                                                                                            height: 100%;
                                                                                                        "
                                                                                                        border="0"
                                                                                                        cellpadding="0"
                                                                                                        cellspacing="0"
                                                                                                        role="presentation"
                                                                                                    >
                                                                                                        <tr>
                                                                                                            <!--[if !gte mso 9]><!-- -->
                                                                                                            <td
                                                                                                                class="pc-w620-radius-12-12-0-0 pc-w620-padding-85-20-85-20"
                                                                                                                align="center"
                                                                                                                valign="middle"
                                                                                                                background="https://cloudfilesdm.com/postcards/image-17448291739214-a1b19026.png"
                                                                                                                style="
                                                                                                                    background-image: url(&quot;https://cloudfilesdm.com/postcards/image-17448291739214-a1b19026.png&quot;);
                                                                                                                    background-size: cover;
                                                                                                                    background-position: 50%
                                                                                                                        0;
                                                                                                                    background-repeat: no-repeat;
                                                                                                                    background-color: #131312;
                                                                                                                    border-radius: 0
                                                                                                                        12px
                                                                                                                        12px
                                                                                                                        0;
                                                                                                                "
                                                                                                            >
                                                                                                                <!--<!
                                                                                                                [endif]-->[endif]--><!--[if gte mso 9]><td class="pc-w620-radius-12-12-0-0 pc-w620-padding-85-20-85-20" align="center" valign="middle" background="https://cloudfilesdm.com/postcards/image-17448291739214-a1b19026.png" style="background-image:url('https://cloudfilesdm.com/postcards/image-17448291739214-a1b19026.png');background-size:cover;background-position:50% 0;background-repeat:no-repeat;background-color:#131312;border-radius:0 12px 12px 0"><!
                                                                                                                [endif]-->[endif]--><!--[if gte mso 9]><v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:248px"><v:fill src="https://cloudfilesdm.com/postcards/image-17448291739214-a1b19026.png" color="#131312" type="frame" size="1,1" aspect="atleast" origin="-0.5,-0.5" position="-0.5,-0.5"/><v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0"><div style="font-size:0;line-height:0"><table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" align="center"><tr><td style="font-size:14px;line-height:1.5" valign="top"><p style="margin:0;mso-hide:all"><o:p xmlns:o="urn:schemas-microsoft-com:office:office">&nbsp;</o:p></p><table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation"><tr><td colspan="3" height="0" style="line-height:1px;font-size:1px">&nbsp;</td></tr><tr><td width="0" valign="top" style="line-height:1px;font-size:1px">&nbsp;</td><td valign="top" align="left"><![endif]-->
                                                                                                                <table
                                                                                                                    width="100%"
                                                                                                                    border="0"
                                                                                                                    cellpadding="0"
                                                                                                                    cellspacing="0"
                                                                                                                    role="presentation"
                                                                                                                ></table>
                                                                                                                <!--[if gte mso 9]></td><td width="0" style="line-height:1px;font-size:1px" valign="top">&nbsp;</td></tr><tr><td colspan="3" height="0" style="line-height:1px;font-size:1px">&nbsp;</td></tr></table></td></tr></table></div><p style="margin:0;mso-hide:all"><o:p xmlns:o="urn:schemas-microsoft-com:office:office">&nbsp;</o:p></p></v:textbox></v:rect><![endif]-->
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </table>
                                                                                                </td>
                                                                                                <td
                                                                                                    class="pc-g-rb pc-g-rpb pc-g-wf pc-w620-itemsVSpacings-0"
                                                                                                    align="left"
                                                                                                    valign="top"
                                                                                                    style="
                                                                                                        width: 50%;
                                                                                                        padding-top: 0;
                                                                                                        padding-bottom: 0;
                                                                                                        direction: ltr;
                                                                                                    "
                                                                                                    dir="ltr"
                                                                                                >
                                                                                                    <table
                                                                                                        class="pc-w620-width-fill pc-w620-height-fill"
                                                                                                        style="width: 308px"
                                                                                                        border="0"
                                                                                                        cellpadding="0"
                                                                                                        cellspacing="0"
                                                                                                        role="presentation"
                                                                                                    >
                                                                                                        <tr>
                                                                                                            <td
                                                                                                                class="pc-w620-radius-12-12-12-12 pc-w620-padding-32-20-32-20 pc-w620-halign-center pc-w620-valign-top"
                                                                                                                height="230"
                                                                                                                align="left"
                                                                                                                valign="top"
                                                                                                                style="
                                                                                                                    height: 230px;
                                                                                                                    padding: 40px
                                                                                                                        25px
                                                                                                                        40px
                                                                                                                        32px;
                                                                                                                    background-color: #131312;
                                                                                                                    border-radius: 12px
                                                                                                                        0 0
                                                                                                                        12px;
                                                                                                                "
                                                                                                            >
                                                                                                                <table
                                                                                                                    class="pc-w620-halign-center"
                                                                                                                    width="100%"
                                                                                                                    border="0"
                                                                                                                    cellpadding="0"
                                                                                                                    cellspacing="0"
                                                                                                                    role="presentation"
                                                                                                                >
                                                                                                                    <tr>
                                                                                                                        <td
                                                                                                                            class="pc-w620-halign-center"
                                                                                                                            align="left"
                                                                                                                            valign="top"
                                                                                                                        >
                                                                                                                            <table
                                                                                                                                class="pc-w620-halign-center"
                                                                                                                                align="left"
                                                                                                                                border="0"
                                                                                                                                cellpadding="0"
                                                                                                                                cellspacing="0"
                                                                                                                                role="presentation"
                                                                                                                            >
                                                                                                                                <tr>
                                                                                                                                    <td
                                                                                                                                        valign="top"
                                                                                                                                        style="
                                                                                                                                            padding: 0
                                                                                                                                                0
                                                                                                                                                13px;
                                                                                                                                            height: auto;
                                                                                                                                        "
                                                                                                                                    >
                                                                                                                                        <table
                                                                                                                                            border="0"
                                                                                                                                            cellpadding="0"
                                                                                                                                            cellspacing="0"
                                                                                                                                            role="presentation"
                                                                                                                                            width="100%"
                                                                                                                                        >
                                                                                                                                            <tr>
                                                                                                                                                <td
                                                                                                                                                    valign="top"
                                                                                                                                                    class="pc-w620-align-center"
                                                                                                                                                    align="left"
                                                                                                                                                >
                                                                                                                                                    <div
                                                                                                                                                        class="pc-font-alt pc-w620-align-center"
                                                                                                                                                        style="
                                                                                                                                                            text-decoration: none;
                                                                                                                                                        "
                                                                                                                                                    >
                                                                                                                                                        <div
                                                                                                                                                            style="
                                                                                                                                                                font-size: 32px;
                                                                                                                                                                line-height: 40px;
                                                                                                                                                                text-align: left;
                                                                                                                                                                text-align-last: left;
                                                                                                                                                                color: #fff;
                                                                                                                                                                font-family: &quot;Manrope&quot;,
                                                                                                                                                                    Arial,
                                                                                                                                                                    Helvetica,
                                                                                                                                                                    sans-serif;
                                                                                                                                                                font-style: normal;
                                                                                                                                                                letter-spacing: -1px;
                                                                                                                                                            "
                                                                                                                                                        >
                                                                                                                                                            <div
                                                                                                                                                                style="
                                                                                                                                                                    font-family: &quot;Manrope&quot;,
                                                                                                                                                                        Arial,
                                                                                                                                                                        Helvetica,
                                                                                                                                                                        sans-serif;
                                                                                                                                                                "
                                                                                                                                                                class="pc-w620-text-align-center"
                                                                                                                                                            >
                                                                                                                                                                <span
                                                                                                                                                                    style="
                                                                                                                                                                        font-family: &quot;Manrope&quot;,
                                                                                                                                                                            Arial,
                                                                                                                                                                            Helvetica,
                                                                                                                                                                            sans-serif;
                                                                                                                                                                        font-weight: 400;
                                                                                                                                                                        font-size: 32px;
                                                                                                                                                                        line-height: 40px;
                                                                                                                                                                    "
                                                                                                                                                                    >Ready
                                                                                                                                                                    to
                                                                                                                                                                    check
                                                                                                                                                                    your
                                                                                                                                                                    report?</span
                                                                                                                                                                >
                                                                                                                                                            </div>
                                                                                                                                                        </div>
                                                                                                                                                    </div>
                                                                                                                                                </td>
                                                                                                                                            </tr>
                                                                                                                                        </table>
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </table>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                    <tr>
                                                                                                                        <td
                                                                                                                            class="pc-w620-halign-center"
                                                                                                                            align="left"
                                                                                                                            valign="top"
                                                                                                                        >
                                                                                                                            <table
                                                                                                                                class="pc-w620-halign-center"
                                                                                                                                align="left"
                                                                                                                                border="0"
                                                                                                                                cellpadding="0"
                                                                                                                                cellspacing="0"
                                                                                                                                role="presentation"
                                                                                                                            >
                                                                                                                                <tr>
                                                                                                                                    <td
                                                                                                                                        class="pc-w620-spacing-0-0-21-0"
                                                                                                                                        valign="top"
                                                                                                                                        style="
                                                                                                                                            padding: 0
                                                                                                                                                0
                                                                                                                                                32px;
                                                                                                                                            height: auto;
                                                                                                                                        "
                                                                                                                                    >
                                                                                                                                        <table
                                                                                                                                            border="0"
                                                                                                                                            cellpadding="0"
                                                                                                                                            cellspacing="0"
                                                                                                                                            role="presentation"
                                                                                                                                            width="100%"
                                                                                                                                        >
                                                                                                                                            <tr>
                                                                                                                                                <td
                                                                                                                                                    valign="top"
                                                                                                                                                    class="pc-w620-align-center"
                                                                                                                                                    align="left"
                                                                                                                                                >
                                                                                                                                                    <div
                                                                                                                                                        class="pc-font-alt pc-w620-align-center"
                                                                                                                                                        style="
                                                                                                                                                            text-decoration: none;
                                                                                                                                                        "
                                                                                                                                                    >
                                                                                                                                                        <div
                                                                                                                                                            style="
                                                                                                                                                                font-size: 16px;
                                                                                                                                                                line-height: 24px;
                                                                                                                                                                text-align: left;
                                                                                                                                                                text-align-last: left;
                                                                                                                                                                color: #c3c3c3;
                                                                                                                                                                font-family: &quot;Manrope&quot;,
                                                                                                                                                                    Arial,
                                                                                                                                                                    Helvetica,
                                                                                                                                                                    sans-serif;
                                                                                                                                                                font-style: normal;
                                                                                                                                                                letter-spacing: 0;
                                                                                                                                                            "
                                                                                                                                                        >
                                                                                                                                                            <div
                                                                                                                                                                style="
                                                                                                                                                                    font-family: &quot;Manrope&quot;,
                                                                                                                                                                        Arial,
                                                                                                                                                                        Helvetica,
                                                                                                                                                                        sans-serif;
                                                                                                                                                                "
                                                                                                                                                                class="pc-w620-text-align-center"
                                                                                                                                                            >
                                                                                                                                                                <span
                                                                                                                                                                    style="
                                                                                                                                                                        font-family: &quot;Manrope&quot;,
                                                                                                                                                                            Arial,
                                                                                                                                                                            Helvetica,
                                                                                                                                                                            sans-serif;
                                                                                                                                                                        font-weight: 400;
                                                                                                                                                                        font-size: 16px;
                                                                                                                                                                        line-height: 24px;
                                                                                                                                                                    "
                                                                                                                                                                    >You
                                                                                                                                                                    can
                                                                                                                                                                    now
                                                                                                                                                                    chat
                                                                                                                                                                    with
                                                                                                                                                                    your
                                                                                                                                                                    SEO
                                                                                                                                                                    assisstant
                                                                                                                                                                    about
                                                                                                                                                                    the
                                                                                                                                                                    report
                                                                                                                                                                    and
                                                                                                                                                                    get
                                                                                                                                                                    insights
                                                                                                                                                                    on
                                                                                                                                                                    how
                                                                                                                                                                    to
                                                                                                                                                                    improve
                                                                                                                                                                    it.</span
                                                                                                                                                                >
                                                                                                                                                            </div>
                                                                                                                                                        </div>
                                                                                                                                                    </div>
                                                                                                                                                </td>
                                                                                                                                            </tr>
                                                                                                                                        </table>
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </table>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                    <tr>
                                                                                                                        <td
                                                                                                                            class="pc-w620-halign-center"
                                                                                                                            align="left"
                                                                                                                            valign="top"
                                                                                                                        >
                                                                                                                            <table
                                                                                                                                width="100%"
                                                                                                                                border="0"
                                                                                                                                cellpadding="0"
                                                                                                                                cellspacing="0"
                                                                                                                                role="presentation"
                                                                                                                                style="
                                                                                                                                    min-width: 100%;
                                                                                                                                "
                                                                                                                            >
                                                                                                                                <tr>
                                                                                                                                    <th
                                                                                                                                        valign="top"
                                                                                                                                        class="pc-w620-align-center"
                                                                                                                                        align="left"
                                                                                                                                        style="
                                                                                                                                            text-align: left;
                                                                                                                                            font-weight: normal;
                                                                                                                                        "
                                                                                                                                    >
                                                                                                                                        <!--[if mso
                                                                                                                                            ]><table
                                                                                                                                                border="0"
                                                                                                                                                cellpadding="0"
                                                                                                                                                cellspacing="0"
                                                                                                                                                role="presentation"
                                                                                                                                                class="pc-w620-align-center"
                                                                                                                                                align="left"
                                                                                                                                                style="
                                                                                                                                                    border-collapse: separate;
                                                                                                                                                    border-spacing: 0;
                                                                                                                                                "
                                                                                                                                            >
                                                                                                                                                <tr>
                                                                                                                                                    <td
                                                                                                                                                        valign="middle"
                                                                                                                                                        align="center"
                                                                                                                                                        style="
                                                                                                                                                            border-radius: 100px
                                                                                                                                                                100px
                                                                                                                                                                100px
                                                                                                                                                                100px;
                                                                                                                                                            background-color: #f59e0b;
                                                                                                                                                            text-align: center;
                                                                                                                                                            color: #fff;
                                                                                                                                                            padding: 14px
                                                                                                                                                                20px;
                                                                                                                                                            mso-padding-left-alt: 0;
                                                                                                                                                            margin-left: 20px;
                                                                                                                                                        "
                                                                                                                                                        bgcolor="#f59e0b"
                                                                                                                                                    >
                                                                                                                                                        <a
                                                                                                                                                            class="pc-font-alt"
                                                                                                                                                            style="
                                                                                                                                                                display: inline-block;
                                                                                                                                                                text-decoration: none;
                                                                                                                                                                text-align: center;
                                                                                                                                                            "
                                                                                                                                                            href="https://seo.lumin8.in/dashboard/report/${id}/summary"
                                                                                                                                                            target="_blank"
                                                                                                                                                            ><span
                                                                                                                                                                style="
                                                                                                                                                                    font-size: 16px;
                                                                                                                                                                    line-height: 24px;
                                                                                                                                                                    color: #131312;
                                                                                                                                                                    font-family: &quot;Manrope&quot;,
                                                                                                                                                                        Arial,
                                                                                                                                                                        Helvetica,
                                                                                                                                                                        sans-serif;
                                                                                                                                                                    font-style: normal;
                                                                                                                                                                    letter-spacing: 0;
                                                                                                                                                                    display: inline-block;
                                                                                                                                                                    vertical-align: top;
                                                                                                                                                                "
                                                                                                                                                                ><span
                                                                                                                                                                    style="
                                                                                                                                                                        font-family: &quot;Manrope&quot;,
                                                                                                                                                                            Arial,
                                                                                                                                                                            Helvetica,
                                                                                                                                                                            sans-serif;
                                                                                                                                                                        display: inline-block;
                                                                                                                                                                    "
                                                                                                                                                                    ><span
                                                                                                                                                                        style="
                                                                                                                                                                            font-family: &quot;Manrope&quot;,
                                                                                                                                                                                Arial,
                                                                                                                                                                                Helvetica,
                                                                                                                                                                                sans-serif;
                                                                                                                                                                            font-weight: 400;
                                                                                                                                                                            font-size: 16px;
                                                                                                                                                                            line-height: 24px;
                                                                                                                                                                        "
                                                                                                                                                                        >Report Summary</span
                                                                                                                                                                    ></span
                                                                                                                                                                ></span
                                                                                                                                                            ></a
                                                                                                                                                        >
                                                                                                                                                    </td>
                                                                                                                                                </tr>
                                                                                                                                            </table><!
                                                                                                                                        [endif]--><!--[if !mso]><!-- --><a
                                                                                                                                            class="pc-w620-textAlign-center"
                                                                                                                                            style="
                                                                                                                                                display: inline-block;
                                                                                                                                                box-sizing: border-box;
                                                                                                                                                border-radius: 100px
                                                                                                                                                    100px
                                                                                                                                                    100px
                                                                                                                                                    100px;
                                                                                                                                                background-color: #f59e0b;
                                                                                                                                                padding: 14px
                                                                                                                                                    20px;
                                                                                                                                                vertical-align: top;
                                                                                                                                                text-align: center;
                                                                                                                                                text-align-last: center;
                                                                                                                                                text-decoration: none;
                                                                                                                                                -webkit-text-size-adjust: none;
                                                                                                                                            "
                                                                                                                                            href="https://postcards.email/"
                                                                                                                                            target="_blank"
                                                                                                                                            ><span
                                                                                                                                                style="
                                                                                                                                                    font-size: 16px;
                                                                                                                                                    line-height: 24px;
                                                                                                                                                    color: #131312;
                                                                                                                                                    font-family: &quot;Manrope&quot;,
                                                                                                                                                        Arial,
                                                                                                                                                        Helvetica,
                                                                                                                                                        sans-serif;
                                                                                                                                                    font-style: normal;
                                                                                                                                                    letter-spacing: 0;
                                                                                                                                                    display: inline-block;
                                                                                                                                                    vertical-align: top;
                                                                                                                                                "
                                                                                                                                                ><span
                                                                                                                                                    style="
                                                                                                                                                        font-family: &quot;Manrope&quot;,
                                                                                                                                                            Arial,
                                                                                                                                                            Helvetica,
                                                                                                                                                            sans-serif;
                                                                                                                                                        display: inline-block;
                                                                                                                                                    "
                                                                                                                                                    ><span
                                                                                                                                                        style="
                                                                                                                                                            font-family: &quot;Manrope&quot;,
                                                                                                                                                                Arial,
                                                                                                                                                                Helvetica,
                                                                                                                                                                sans-serif;
                                                                                                                                                            font-weight: 400;
                                                                                                                                                            font-size: 16px;
                                                                                                                                                            line-height: 24px;
                                                                                                                                                        "
                                                                                                                                                        >Go
                                                                                                                                                        to
                                                                                                                                                        dashboard</span
                                                                                                                                                    ></span
                                                                                                                                                ></span
                                                                                                                                            ></a
                                                                                                                                        ><!--<![endif]-->
                                                                                                                                    </th>
                                                                                                                                </tr>
                                                                                                                            </table>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </table>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                    <table
                                        class="pc-component"
                                        style="width: 600px; max-width: 600px"
                                        width="600"
                                        align="center"
                                        border="0"
                                        cellspacing="0"
                                        cellpadding="0"
                                        role="presentation"
                                    >
                                        <tr>
                                            <td
                                                class="pc-w620-spacing-0-0-0-0"
                                                width="100%"
                                                border="0"
                                                cellspacing="0"
                                                cellpadding="0"
                                                role="presentation"
                                            >
                                                <table
                                                    width="100%"
                                                    align="center"
                                                    border="0"
                                                    cellspacing="0"
                                                    cellpadding="0"
                                                    role="presentation"
                                                >
                                                    <tr>
                                                        <!--[if !gte mso 9]><!-- -->
                                                        <td
                                                            valign="top"
                                                            class="pc-w620-padding-32-0-20-0"
                                                            style="
                                                                background-image: url(&quot;https://cloudfilesdm.com/postcards/image-174100398048011_3-b2fb697d.png&quot;);
                                                                background-size: cover;
                                                                background-position: center;
                                                                background-repeat: no-repeat;
                                                                padding: 54px 0 32px;
                                                                height: unset;
                                                                background-color: transparent;
                                                            "
                                                            bgcolor="transparent"
                                                            background="https://cloudfilesdm.com/postcards/image-174100398048011_3-b2fb697d.png"
                                                        >
                                                            <!--<!
                                                            [endif]-->[endif]--><!--[if gte mso 9]><td valign="top" align="center" style="background-image:url('https://cloudfilesdm.com/postcards/image-174100398048011_3-b2fb697d.png');background-size:cover;background-position:center;background-repeat:no-repeat;background-color:transparent;border-radius:0" bgcolor="transparent" background="https://cloudfilesdm.com/postcards/image-174100398048011_3-b2fb697d.png"><!
                                                            [endif]-->[endif]--><!--[if gte mso 9]><v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:600px"><v:fill src="https://cloudfilesdm.com/postcards/image-174100398048011_3-b2fb697d.png" color="transparent" type="frame" size="1,1" aspect="atleast" origin="0,0" position="0,0"/><v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0"><div style="font-size:0;line-height:0"><table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tr><td style="font-size:14px;line-height:1.5" valign="top"><p style="margin:0;mso-hide:all"><o:p xmlns:o="urn:schemas-microsoft-com:office:office">&nbsp;</o:p></p><table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation"><tr><td colspan="3" height="54" style="line-height:1px;font-size:1px">&nbsp;</td></tr><tr><td width="0" valign="top" style="line-height:1px;font-size:1px">&nbsp;</td><td valign="top" align="left"><![endif]-->
                                                            <table
                                                                width="100%"
                                                                border="0"
                                                                cellpadding="0"
                                                                cellspacing="0"
                                                                role="presentation"
                                                            >
                                                                <tr>
                                                                    <td
                                                                        class="pc-w620-spacing-0-0-32-0"
                                                                        align="center"
                                                                        style="padding: 0 0 24px"
                                                                    >
                                                                        <table
                                                                            align="center"
                                                                            border="0"
                                                                            cellpadding="0"
                                                                            cellspacing="0"
                                                                            role="presentation"
                                                                        >
                                                                            <tr>
                                                                                <td style="width: unset" valign="top">
                                                                                    <table
                                                                                        class="pc-width-hug"
                                                                                        align="center"
                                                                                        border="0"
                                                                                        cellpadding="0"
                                                                                        cellspacing="0"
                                                                                        role="presentation"
                                                                                    >
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td
                                                                                                    class="pc-g-rpt pc-g-rpb pc-w620-itemsVSpacings-0"
                                                                                                    valign="top"
                                                                                                    style="
                                                                                                        padding-top: 0;
                                                                                                        padding-bottom: 0;
                                                                                                    "
                                                                                                >
                                                                                                    <table
                                                                                                        style="
                                                                                                            border-collapse: separate;
                                                                                                            border-spacing: 0;
                                                                                                        "
                                                                                                        border="0"
                                                                                                        cellpadding="0"
                                                                                                        cellspacing="0"
                                                                                                        role="presentation"
                                                                                                    >
                                                                                                        <tr>
                                                                                                            <td
                                                                                                                class="pc-w620-padding-16-16-16-16"
                                                                                                                align="center"
                                                                                                                valign="top"
                                                                                                                style="
                                                                                                                    padding: 16px;
                                                                                                                    mso-padding-left-alt: 0;
                                                                                                                    margin-left: 16px;
                                                                                                                    height: auto;
                                                                                                                    background-color: #fafafa;
                                                                                                                    border-radius: 100px
                                                                                                                        100px
                                                                                                                        100px
                                                                                                                        100px;
                                                                                                                    border-top: 1px
                                                                                                                        solid
                                                                                                                        #ffffff29;
                                                                                                                    border-right: 1px
                                                                                                                        solid
                                                                                                                        #ffffff29;
                                                                                                                    border-bottom: 1px
                                                                                                                        solid
                                                                                                                        #ffffff29;
                                                                                                                    border-left: 1px
                                                                                                                        solid
                                                                                                                        #ffffff29;
                                                                                                                "
                                                                                                            >
                                                                                                                <table
                                                                                                                    width="100%"
                                                                                                                    border="0"
                                                                                                                    cellpadding="0"
                                                                                                                    cellspacing="0"
                                                                                                                    role="presentation"
                                                                                                                >
                                                                                                                    <tr>
                                                                                                                        <td
                                                                                                                            align="center"
                                                                                                                            valign="top"
                                                                                                                            style="
                                                                                                                                line-height: 1px;
                                                                                                                                font-size: 1px;
                                                                                                                            "
                                                                                                                        >
                                                                                                                            <a
                                                                                                                                class="pc-font-alt"
                                                                                                                                href="https://postcards.email/"
                                                                                                                                target="_blank"
                                                                                                                                style="
                                                                                                                                    text-decoration: none;
                                                                                                                                    display: inline-block;
                                                                                                                                    vertical-align: top;
                                                                                                                                "
                                                                                                                                ><img
                                                                                                                                    src="https://cloudfilesdm.com/postcards/73a8f666906aa60293fee02c11b718e8.png"
                                                                                                                                    class="pc-w620-width-20 pc-w620-height-auto"
                                                                                                                                    style="
                                                                                                                                        display: block;
                                                                                                                                        border: 0;
                                                                                                                                        outline: 0;
                                                                                                                                        line-height: 100%;
                                                                                                                                        -ms-interpolation-mode: bicubic;
                                                                                                                                        width: 24px;
                                                                                                                                        height: 24px;
                                                                                                                                    "
                                                                                                                                    width="24"
                                                                                                                                    height="24"
                                                                                                                                    alt=""
                                                                                                                            /></a>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </table>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </table>
                                                                                                </td>
                                                                                                <td
                                                                                                    class="pc-w620-itemsHSpacings-8"
                                                                                                    valign="top"
                                                                                                    style="
                                                                                                        padding-right: 5px;
                                                                                                        padding-left: 5px;
                                                                                                        mso-padding-left-alt: 0;
                                                                                                        margin-left: 5px;
                                                                                                    "
                                                                                                ></td>
                                                                                                <td
                                                                                                    class="pc-g-rpt pc-g-rpb pc-w620-itemsVSpacings-0"
                                                                                                    valign="top"
                                                                                                    style="
                                                                                                        padding-top: 0;
                                                                                                        padding-bottom: 0;
                                                                                                    "
                                                                                                >
                                                                                                    <table
                                                                                                        style="
                                                                                                            border-collapse: separate;
                                                                                                            border-spacing: 0;
                                                                                                        "
                                                                                                        border="0"
                                                                                                        cellpadding="0"
                                                                                                        cellspacing="0"
                                                                                                        role="presentation"
                                                                                                    >
                                                                                                        <tr>
                                                                                                            <td
                                                                                                                class="pc-w620-padding-16-16-16-16"
                                                                                                                align="center"
                                                                                                                valign="top"
                                                                                                                style="
                                                                                                                    padding: 16px;
                                                                                                                    mso-padding-left-alt: 0;
                                                                                                                    margin-left: 16px;
                                                                                                                    height: auto;
                                                                                                                    background-color: #fafafa;
                                                                                                                    border-radius: 100px
                                                                                                                        100px
                                                                                                                        100px
                                                                                                                        100px;
                                                                                                                    border-top: 1px
                                                                                                                        solid
                                                                                                                        #ffffff29;
                                                                                                                    border-right: 1px
                                                                                                                        solid
                                                                                                                        #ffffff29;
                                                                                                                    border-bottom: 1px
                                                                                                                        solid
                                                                                                                        #ffffff29;
                                                                                                                    border-left: 1px
                                                                                                                        solid
                                                                                                                        #ffffff29;
                                                                                                                "
                                                                                                            >
                                                                                                                <table
                                                                                                                    width="100%"
                                                                                                                    border="0"
                                                                                                                    cellpadding="0"
                                                                                                                    cellspacing="0"
                                                                                                                    role="presentation"
                                                                                                                >
                                                                                                                    <tr>
                                                                                                                        <td
                                                                                                                            align="center"
                                                                                                                            valign="top"
                                                                                                                            style="
                                                                                                                                line-height: 1px;
                                                                                                                                font-size: 1px;
                                                                                                                            "
                                                                                                                        >
                                                                                                                            <a
                                                                                                                                class="pc-font-alt"
                                                                                                                                href="https://postcards.email/"
                                                                                                                                target="_blank"
                                                                                                                                style="
                                                                                                                                    text-decoration: none;
                                                                                                                                    display: inline-block;
                                                                                                                                    vertical-align: top;
                                                                                                                                "
                                                                                                                                ><img
                                                                                                                                    src="https://cloudfilesdm.com/postcards/03283341ec0a9b61d19ae0d120ec3b88.png"
                                                                                                                                    class="pc-w620-width-20 pc-w620-height-auto"
                                                                                                                                    style="
                                                                                                                                        display: block;
                                                                                                                                        border: 0;
                                                                                                                                        outline: 0;
                                                                                                                                        line-height: 100%;
                                                                                                                                        -ms-interpolation-mode: bicubic;
                                                                                                                                        width: 24px;
                                                                                                                                        height: 24px;
                                                                                                                                    "
                                                                                                                                    width="24"
                                                                                                                                    height="24"
                                                                                                                                    alt=""
                                                                                                                            /></a>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </table>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </table>
                                                                                                </td>
                                                                                                <td
                                                                                                    class="pc-w620-itemsHSpacings-8"
                                                                                                    valign="top"
                                                                                                    style="
                                                                                                        padding-right: 5px;
                                                                                                        padding-left: 5px;
                                                                                                        mso-padding-left-alt: 0;
                                                                                                        margin-left: 5px;
                                                                                                    "
                                                                                                ></td>
                                                                                                <td
                                                                                                    class="pc-g-rpt pc-g-rpb pc-w620-itemsVSpacings-0"
                                                                                                    valign="top"
                                                                                                    style="
                                                                                                        padding-top: 0;
                                                                                                        padding-bottom: 0;
                                                                                                    "
                                                                                                >
                                                                                                    <table
                                                                                                        style="
                                                                                                            border-collapse: separate;
                                                                                                            border-spacing: 0;
                                                                                                        "
                                                                                                        border="0"
                                                                                                        cellpadding="0"
                                                                                                        cellspacing="0"
                                                                                                        role="presentation"
                                                                                                    >
                                                                                                        <tr>
                                                                                                            <td
                                                                                                                class="pc-w620-padding-16-16-16-16"
                                                                                                                align="center"
                                                                                                                valign="top"
                                                                                                                style="
                                                                                                                    padding: 16px;
                                                                                                                    mso-padding-left-alt: 0;
                                                                                                                    margin-left: 16px;
                                                                                                                    height: auto;
                                                                                                                    background-color: #fafafa;
                                                                                                                    border-radius: 100px
                                                                                                                        100px
                                                                                                                        100px
                                                                                                                        100px;
                                                                                                                    border-top: 1px
                                                                                                                        solid
                                                                                                                        #ffffff29;
                                                                                                                    border-right: 1px
                                                                                                                        solid
                                                                                                                        #ffffff29;
                                                                                                                    border-bottom: 1px
                                                                                                                        solid
                                                                                                                        #ffffff29;
                                                                                                                    border-left: 1px
                                                                                                                        solid
                                                                                                                        #ffffff29;
                                                                                                                "
                                                                                                            >
                                                                                                                <table
                                                                                                                    width="100%"
                                                                                                                    border="0"
                                                                                                                    cellpadding="0"
                                                                                                                    cellspacing="0"
                                                                                                                    role="presentation"
                                                                                                                >
                                                                                                                    <tr>
                                                                                                                        <td
                                                                                                                            align="center"
                                                                                                                            valign="top"
                                                                                                                            style="
                                                                                                                                line-height: 1px;
                                                                                                                                font-size: 1px;
                                                                                                                            "
                                                                                                                        >
                                                                                                                            <a
                                                                                                                                class="pc-font-alt"
                                                                                                                                href="https://postcards.email/"
                                                                                                                                target="_blank"
                                                                                                                                style="
                                                                                                                                    text-decoration: none;
                                                                                                                                    display: inline-block;
                                                                                                                                    vertical-align: top;
                                                                                                                                "
                                                                                                                                ><img
                                                                                                                                    src="https://cloudfilesdm.com/postcards/a07a0abed3e7788b5863c2be8de01cf6.png"
                                                                                                                                    class="pc-w620-width-20 pc-w620-height-auto"
                                                                                                                                    style="
                                                                                                                                        display: block;
                                                                                                                                        border: 0;
                                                                                                                                        outline: 0;
                                                                                                                                        line-height: 100%;
                                                                                                                                        -ms-interpolation-mode: bicubic;
                                                                                                                                        width: 24px;
                                                                                                                                        height: 24px;
                                                                                                                                    "
                                                                                                                                    width="24"
                                                                                                                                    height="24"
                                                                                                                                    alt=""
                                                                                                                            /></a>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </table>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </table>
                                                                                                </td>
                                                                                                <td
                                                                                                    class="pc-w620-itemsHSpacings-8"
                                                                                                    valign="top"
                                                                                                    style="
                                                                                                        padding-right: 5px;
                                                                                                        padding-left: 5px;
                                                                                                        mso-padding-left-alt: 0;
                                                                                                        margin-left: 5px;
                                                                                                    "
                                                                                                ></td>
                                                                                                <td
                                                                                                    class="pc-g-rpt pc-g-rpb pc-w620-itemsVSpacings-0"
                                                                                                    valign="top"
                                                                                                    style="
                                                                                                        padding-top: 0;
                                                                                                        padding-bottom: 0;
                                                                                                    "
                                                                                                >
                                                                                                    <table
                                                                                                        style="
                                                                                                            border-collapse: separate;
                                                                                                            border-spacing: 0;
                                                                                                        "
                                                                                                        border="0"
                                                                                                        cellpadding="0"
                                                                                                        cellspacing="0"
                                                                                                        role="presentation"
                                                                                                    >
                                                                                                        <tr>
                                                                                                            <td
                                                                                                                class="pc-w620-padding-16-16-16-16"
                                                                                                                align="center"
                                                                                                                valign="top"
                                                                                                                style="
                                                                                                                    padding: 16px;
                                                                                                                    mso-padding-left-alt: 0;
                                                                                                                    margin-left: 16px;
                                                                                                                    height: auto;
                                                                                                                    background-color: #fafafa;
                                                                                                                    border-radius: 100px
                                                                                                                        100px
                                                                                                                        100px
                                                                                                                        100px;
                                                                                                                    border-top: 1px
                                                                                                                        solid
                                                                                                                        #ffffff29;
                                                                                                                    border-right: 1px
                                                                                                                        solid
                                                                                                                        #ffffff29;
                                                                                                                    border-bottom: 1px
                                                                                                                        solid
                                                                                                                        #ffffff29;
                                                                                                                    border-left: 1px
                                                                                                                        solid
                                                                                                                        #ffffff29;
                                                                                                                "
                                                                                                            >
                                                                                                                <table
                                                                                                                    width="100%"
                                                                                                                    border="0"
                                                                                                                    cellpadding="0"
                                                                                                                    cellspacing="0"
                                                                                                                    role="presentation"
                                                                                                                >
                                                                                                                    <tr>
                                                                                                                        <td
                                                                                                                            align="center"
                                                                                                                            valign="top"
                                                                                                                            style="
                                                                                                                                line-height: 1px;
                                                                                                                                font-size: 1px;
                                                                                                                            "
                                                                                                                        >
                                                                                                                            <a
                                                                                                                                class="pc-font-alt"
                                                                                                                                href="https://postcards.email/"
                                                                                                                                target="_blank"
                                                                                                                                style="
                                                                                                                                    text-decoration: none;
                                                                                                                                    display: inline-block;
                                                                                                                                    vertical-align: top;
                                                                                                                                "
                                                                                                                                ><img
                                                                                                                                    src="https://cloudfilesdm.com/postcards/f0df17afb61af46c32b89b63e27f6895.png"
                                                                                                                                    class="pc-w620-width-20 pc-w620-height-auto"
                                                                                                                                    style="
                                                                                                                                        display: block;
                                                                                                                                        border: 0;
                                                                                                                                        outline: 0;
                                                                                                                                        line-height: 100%;
                                                                                                                                        -ms-interpolation-mode: bicubic;
                                                                                                                                        width: 24px;
                                                                                                                                        height: 24px;
                                                                                                                                    "
                                                                                                                                    width="24"
                                                                                                                                    height="24"
                                                                                                                                    alt=""
                                                                                                                            /></a>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </table>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </table>
                                                                                                </td>
                                                                                                <td
                                                                                                    class="pc-w620-itemsHSpacings-8"
                                                                                                    valign="top"
                                                                                                    style="
                                                                                                        padding-right: 5px;
                                                                                                        padding-left: 5px;
                                                                                                        mso-padding-left-alt: 0;
                                                                                                        margin-left: 5px;
                                                                                                    "
                                                                                                ></td>
                                                                                                <td
                                                                                                    class="pc-g-rpt pc-g-rpb pc-w620-itemsVSpacings-0"
                                                                                                    valign="top"
                                                                                                    style="
                                                                                                        padding-top: 0;
                                                                                                        padding-bottom: 0;
                                                                                                    "
                                                                                                >
                                                                                                    <table
                                                                                                        style="
                                                                                                            border-collapse: separate;
                                                                                                            border-spacing: 0;
                                                                                                        "
                                                                                                        border="0"
                                                                                                        cellpadding="0"
                                                                                                        cellspacing="0"
                                                                                                        role="presentation"
                                                                                                    >
                                                                                                        <tr>
                                                                                                            <td
                                                                                                                class="pc-w620-padding-16-16-16-16"
                                                                                                                align="center"
                                                                                                                valign="top"
                                                                                                                style="
                                                                                                                    padding: 16px;
                                                                                                                    mso-padding-left-alt: 0;
                                                                                                                    margin-left: 16px;
                                                                                                                    height: auto;
                                                                                                                    background-color: #fafafa;
                                                                                                                    border-radius: 100px
                                                                                                                        100px
                                                                                                                        100px
                                                                                                                        100px;
                                                                                                                    border-top: 1px
                                                                                                                        solid
                                                                                                                        #ffffff29;
                                                                                                                    border-right: 1px
                                                                                                                        solid
                                                                                                                        #ffffff29;
                                                                                                                    border-bottom: 1px
                                                                                                                        solid
                                                                                                                        #ffffff29;
                                                                                                                    border-left: 1px
                                                                                                                        solid
                                                                                                                        #ffffff29;
                                                                                                                "
                                                                                                            >
                                                                                                                <table
                                                                                                                    width="100%"
                                                                                                                    border="0"
                                                                                                                    cellpadding="0"
                                                                                                                    cellspacing="0"
                                                                                                                    role="presentation"
                                                                                                                >
                                                                                                                    <tr>
                                                                                                                        <td
                                                                                                                            align="center"
                                                                                                                            valign="top"
                                                                                                                            style="
                                                                                                                                line-height: 1px;
                                                                                                                                font-size: 1px;
                                                                                                                            "
                                                                                                                        >
                                                                                                                            <a
                                                                                                                                class="pc-font-alt"
                                                                                                                                href="https://postcards.email/"
                                                                                                                                target="_blank"
                                                                                                                                style="
                                                                                                                                    text-decoration: none;
                                                                                                                                    display: inline-block;
                                                                                                                                    vertical-align: top;
                                                                                                                                "
                                                                                                                                ><img
                                                                                                                                    src="https://cloudfilesdm.com/postcards/2f81dffa596d7f405ae86a95d9394f82.png"
                                                                                                                                    class="pc-w620-width-20 pc-w620-height-auto"
                                                                                                                                    style="
                                                                                                                                        display: block;
                                                                                                                                        border: 0;
                                                                                                                                        outline: 0;
                                                                                                                                        line-height: 100%;
                                                                                                                                        -ms-interpolation-mode: bicubic;
                                                                                                                                        width: 24px;
                                                                                                                                        height: 24px;
                                                                                                                                    "
                                                                                                                                    width="24"
                                                                                                                                    height="24"
                                                                                                                                    alt=""
                                                                                                                            /></a>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </table>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            <table
                                                                width="100%"
                                                                border="0"
                                                                cellpadding="0"
                                                                cellspacing="0"
                                                                role="presentation"
                                                            >
                                                                <tr>
                                                                    <td
                                                                        class="pc-w620-spacing-0-0-20-0"
                                                                        align="center"
                                                                        style="padding: 0 0 24px"
                                                                    >
                                                                        <table
                                                                            align="center"
                                                                            border="0"
                                                                            cellpadding="0"
                                                                            cellspacing="0"
                                                                            role="presentation"
                                                                        >
                                                                            <tr>
                                                                                <td style="width: unset" valign="top">
                                                                                    <table
                                                                                        class="pc-width-hug"
                                                                                        align="center"
                                                                                        border="0"
                                                                                        cellpadding="0"
                                                                                        cellspacing="0"
                                                                                        role="presentation"
                                                                                    >
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td
                                                                                                    class="pc-g-rpt pc-g-rpb pc-w620-itemsVSpacings-30"
                                                                                                    valign="top"
                                                                                                    style="
                                                                                                        padding-top: 0;
                                                                                                        padding-bottom: 0;
                                                                                                    "
                                                                                                >
                                                                                                    <table
                                                                                                        style="width: 100%"
                                                                                                        border="0"
                                                                                                        cellpadding="0"
                                                                                                        cellspacing="0"
                                                                                                        role="presentation"
                                                                                                    >
                                                                                                        <tr>
                                                                                                            <td
                                                                                                                align="center"
                                                                                                                valign="top"
                                                                                                            >
                                                                                                                <table
                                                                                                                    width="100%"
                                                                                                                    border="0"
                                                                                                                    cellpadding="0"
                                                                                                                    cellspacing="0"
                                                                                                                    role="presentation"
                                                                                                                >
                                                                                                                    <tr>
                                                                                                                        <td
                                                                                                                            align="center"
                                                                                                                            valign="top"
                                                                                                                        >
                                                                                                                            <table
                                                                                                                                border="0"
                                                                                                                                cellpadding="0"
                                                                                                                                cellspacing="0"
                                                                                                                                role="presentation"
                                                                                                                                align="center"
                                                                                                                            >
                                                                                                                                <tr>
                                                                                                                                    <td
                                                                                                                                        valign="top"
                                                                                                                                        align="left"
                                                                                                                                    >
                                                                                                                                        <a
                                                                                                                                            class="pc-font-alt"
                                                                                                                                            href="https://postcards.email/"
                                                                                                                                            target="_blank"
                                                                                                                                            style="
                                                                                                                                                text-decoration: none;
                                                                                                                                            "
                                                                                                                                            ><span
                                                                                                                                                style="
                                                                                                                                                    font-size: 16px;
                                                                                                                                                    line-height: 24px;
                                                                                                                                                    text-align: left;
                                                                                                                                                    text-align-last: left;
                                                                                                                                                    color: #000;
                                                                                                                                                    font-family: &quot;Manrope&quot;,
                                                                                                                                                        Arial,
                                                                                                                                                        Helvetica,
                                                                                                                                                        sans-serif;
                                                                                                                                                    font-style: normal;
                                                                                                                                                    letter-spacing: 0;
                                                                                                                                                    display: inline-block;
                                                                                                                                                    vertical-align: top;
                                                                                                                                                "
                                                                                                                                                ><span
                                                                                                                                                    style="
                                                                                                                                                        font-family: &quot;Manrope&quot;,
                                                                                                                                                            Arial,
                                                                                                                                                            Helvetica,
                                                                                                                                                            sans-serif;
                                                                                                                                                        display: inline-block;
                                                                                                                                                    "
                                                                                                                                                    ><span
                                                                                                                                                        style="
                                                                                                                                                            font-family: &quot;Manrope&quot;,
                                                                                                                                                                Arial,
                                                                                                                                                                Helvetica,
                                                                                                                                                                sans-serif;
                                                                                                                                                            font-weight: 400;
                                                                                                                                                            font-size: 16px;
                                                                                                                                                            line-height: 24px;
                                                                                                                                                        "
                                                                                                                                                        >Blog</span
                                                                                                                                                    ></span
                                                                                                                                                ></span
                                                                                                                                            ></a
                                                                                                                                        >
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </table>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </table>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </table>
                                                                                                </td>
                                                                                                <td
                                                                                                    class="pc-w620-itemsHSpacings-16"
                                                                                                    valign="top"
                                                                                                    style="
                                                                                                        padding-right: 16px;
                                                                                                        padding-left: 16px;
                                                                                                        mso-padding-left-alt: 0;
                                                                                                        margin-left: 16px;
                                                                                                    "
                                                                                                ></td>
                                                                                                <td
                                                                                                    class="pc-g-rpt pc-g-rpb pc-w620-itemsVSpacings-30"
                                                                                                    valign="top"
                                                                                                    style="
                                                                                                        padding-top: 0;
                                                                                                        padding-bottom: 0;
                                                                                                    "
                                                                                                >
                                                                                                    <table
                                                                                                        style="width: 100%"
                                                                                                        border="0"
                                                                                                        cellpadding="0"
                                                                                                        cellspacing="0"
                                                                                                        role="presentation"
                                                                                                    >
                                                                                                        <tr>
                                                                                                            <td
                                                                                                                align="center"
                                                                                                                valign="top"
                                                                                                            >
                                                                                                                <table
                                                                                                                    width="100%"
                                                                                                                    border="0"
                                                                                                                    cellpadding="0"
                                                                                                                    cellspacing="0"
                                                                                                                    role="presentation"
                                                                                                                >
                                                                                                                    <tr>
                                                                                                                        <td
                                                                                                                            align="center"
                                                                                                                            valign="top"
                                                                                                                        >
                                                                                                                            <table
                                                                                                                                border="0"
                                                                                                                                cellpadding="0"
                                                                                                                                cellspacing="0"
                                                                                                                                role="presentation"
                                                                                                                                align="center"
                                                                                                                            >
                                                                                                                                <tr>
                                                                                                                                    <td
                                                                                                                                        valign="top"
                                                                                                                                        align="left"
                                                                                                                                    >
                                                                                                                                        <a
                                                                                                                                            class="pc-font-alt"
                                                                                                                                            href="https://postcards.email/"
                                                                                                                                            target="_blank"
                                                                                                                                            style="
                                                                                                                                                text-decoration: none;
                                                                                                                                            "
                                                                                                                                            ><span
                                                                                                                                                style="
                                                                                                                                                    font-size: 16px;
                                                                                                                                                    line-height: 24px;
                                                                                                                                                    text-align: left;
                                                                                                                                                    text-align-last: left;
                                                                                                                                                    color: #000;
                                                                                                                                                    font-family: &quot;Manrope&quot;,
                                                                                                                                                        Arial,
                                                                                                                                                        Helvetica,
                                                                                                                                                        sans-serif;
                                                                                                                                                    font-style: normal;
                                                                                                                                                    letter-spacing: 0;
                                                                                                                                                    display: inline-block;
                                                                                                                                                    vertical-align: top;
                                                                                                                                                "
                                                                                                                                                ><span
                                                                                                                                                    style="
                                                                                                                                                        font-family: &quot;Manrope&quot;,
                                                                                                                                                            Arial,
                                                                                                                                                            Helvetica,
                                                                                                                                                            sans-serif;
                                                                                                                                                        display: inline-block;
                                                                                                                                                    "
                                                                                                                                                    ><span
                                                                                                                                                        style="
                                                                                                                                                            font-family: &quot;Manrope&quot;,
                                                                                                                                                                Arial,
                                                                                                                                                                Helvetica,
                                                                                                                                                                sans-serif;
                                                                                                                                                            font-weight: 400;
                                                                                                                                                            font-size: 16px;
                                                                                                                                                            line-height: 24px;
                                                                                                                                                        "
                                                                                                                                                        >Community</span
                                                                                                                                                    ></span
                                                                                                                                                ></span
                                                                                                                                            ></a
                                                                                                                                        >
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </table>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </table>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </table>
                                                                                                </td>
                                                                                                <td
                                                                                                    class="pc-w620-itemsHSpacings-16"
                                                                                                    valign="top"
                                                                                                    style="
                                                                                                        padding-right: 16px;
                                                                                                        padding-left: 16px;
                                                                                                        mso-padding-left-alt: 0;
                                                                                                        margin-left: 16px;
                                                                                                    "
                                                                                                ></td>
                                                                                                <td
                                                                                                    class="pc-g-rpt pc-g-rpb pc-w620-itemsVSpacings-30"
                                                                                                    valign="top"
                                                                                                    style="
                                                                                                        padding-top: 0;
                                                                                                        padding-bottom: 0;
                                                                                                    "
                                                                                                >
                                                                                                    <table
                                                                                                        style="width: 100%"
                                                                                                        border="0"
                                                                                                        cellpadding="0"
                                                                                                        cellspacing="0"
                                                                                                        role="presentation"
                                                                                                    >
                                                                                                        <tr>
                                                                                                            <td
                                                                                                                align="center"
                                                                                                                valign="top"
                                                                                                            >
                                                                                                                <table
                                                                                                                    width="100%"
                                                                                                                    border="0"
                                                                                                                    cellpadding="0"
                                                                                                                    cellspacing="0"
                                                                                                                    role="presentation"
                                                                                                                >
                                                                                                                    <tr>
                                                                                                                        <td
                                                                                                                            align="center"
                                                                                                                            valign="top"
                                                                                                                        >
                                                                                                                            <table
                                                                                                                                border="0"
                                                                                                                                cellpadding="0"
                                                                                                                                cellspacing="0"
                                                                                                                                role="presentation"
                                                                                                                                align="center"
                                                                                                                            >
                                                                                                                                <tr>
                                                                                                                                    <td
                                                                                                                                        valign="top"
                                                                                                                                        align="left"
                                                                                                                                    >
                                                                                                                                        <a
                                                                                                                                            class="pc-font-alt"
                                                                                                                                            href="https://postcards.email/"
                                                                                                                                            target="_blank"
                                                                                                                                            style="
                                                                                                                                                text-decoration: none;
                                                                                                                                            "
                                                                                                                                            ><span
                                                                                                                                                style="
                                                                                                                                                    font-size: 16px;
                                                                                                                                                    line-height: 24px;
                                                                                                                                                    text-align: left;
                                                                                                                                                    text-align-last: left;
                                                                                                                                                    color: #000;
                                                                                                                                                    font-family: &quot;Manrope&quot;,
                                                                                                                                                        Arial,
                                                                                                                                                        Helvetica,
                                                                                                                                                        sans-serif;
                                                                                                                                                    font-style: normal;
                                                                                                                                                    letter-spacing: 0;
                                                                                                                                                    display: inline-block;
                                                                                                                                                    vertical-align: top;
                                                                                                                                                "
                                                                                                                                                ><span
                                                                                                                                                    style="
                                                                                                                                                        font-family: &quot;Manrope&quot;,
                                                                                                                                                            Arial,
                                                                                                                                                            Helvetica,
                                                                                                                                                            sans-serif;
                                                                                                                                                        display: inline-block;
                                                                                                                                                    "
                                                                                                                                                    ><span
                                                                                                                                                        style="
                                                                                                                                                            font-family: &quot;Manrope&quot;,
                                                                                                                                                                Arial,
                                                                                                                                                                Helvetica,
                                                                                                                                                                sans-serif;
                                                                                                                                                            font-weight: 400;
                                                                                                                                                            font-size: 16px;
                                                                                                                                                            line-height: 24px;
                                                                                                                                                        "
                                                                                                                                                        >About
                                                                                                                                                        us</span
                                                                                                                                                    ></span
                                                                                                                                                ></span
                                                                                                                                            ></a
                                                                                                                                        >
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </table>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </table>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </table>
                                                                                                </td>
                                                                                                <td
                                                                                                    class="pc-w620-itemsHSpacings-16"
                                                                                                    valign="top"
                                                                                                    style="
                                                                                                        padding-right: 16px;
                                                                                                        padding-left: 16px;
                                                                                                        mso-padding-left-alt: 0;
                                                                                                        margin-left: 16px;
                                                                                                    "
                                                                                                ></td>
                                                                                                <td
                                                                                                    class="pc-g-rpt pc-g-rpb pc-w620-itemsVSpacings-30"
                                                                                                    valign="top"
                                                                                                    style="
                                                                                                        padding-top: 0;
                                                                                                        padding-bottom: 0;
                                                                                                    "
                                                                                                >
                                                                                                    <table
                                                                                                        style="width: 100%"
                                                                                                        border="0"
                                                                                                        cellpadding="0"
                                                                                                        cellspacing="0"
                                                                                                        role="presentation"
                                                                                                    >
                                                                                                        <tr>
                                                                                                            <td
                                                                                                                align="center"
                                                                                                                valign="top"
                                                                                                            >
                                                                                                                <table
                                                                                                                    width="100%"
                                                                                                                    border="0"
                                                                                                                    cellpadding="0"
                                                                                                                    cellspacing="0"
                                                                                                                    role="presentation"
                                                                                                                >
                                                                                                                    <tr>
                                                                                                                        <td
                                                                                                                            align="center"
                                                                                                                            valign="top"
                                                                                                                        >
                                                                                                                            <table
                                                                                                                                border="0"
                                                                                                                                cellpadding="0"
                                                                                                                                cellspacing="0"
                                                                                                                                role="presentation"
                                                                                                                                align="center"
                                                                                                                            >
                                                                                                                                <tr>
                                                                                                                                    <td
                                                                                                                                        valign="top"
                                                                                                                                        align="left"
                                                                                                                                    >
                                                                                                                                        <a
                                                                                                                                            class="pc-font-alt"
                                                                                                                                            href="https://postcards.email/"
                                                                                                                                            target="_blank"
                                                                                                                                            style="
                                                                                                                                                text-decoration: none;
                                                                                                                                            "
                                                                                                                                            ><span
                                                                                                                                                style="
                                                                                                                                                    font-size: 16px;
                                                                                                                                                    line-height: 24px;
                                                                                                                                                    text-align: left;
                                                                                                                                                    text-align-last: left;
                                                                                                                                                    color: #000;
                                                                                                                                                    font-family: &quot;Manrope&quot;,
                                                                                                                                                        Arial,
                                                                                                                                                        Helvetica,
                                                                                                                                                        sans-serif;
                                                                                                                                                    font-style: normal;
                                                                                                                                                    letter-spacing: 0;
                                                                                                                                                    display: inline-block;
                                                                                                                                                    vertical-align: top;
                                                                                                                                                "
                                                                                                                                                ><span
                                                                                                                                                    style="
                                                                                                                                                        font-family: &quot;Manrope&quot;,
                                                                                                                                                            Arial,
                                                                                                                                                            Helvetica,
                                                                                                                                                            sans-serif;
                                                                                                                                                        display: inline-block;
                                                                                                                                                    "
                                                                                                                                                    ><span
                                                                                                                                                        style="
                                                                                                                                                            font-family: &quot;Manrope&quot;,
                                                                                                                                                                Arial,
                                                                                                                                                                Helvetica,
                                                                                                                                                                sans-serif;
                                                                                                                                                            font-weight: 400;
                                                                                                                                                            font-size: 16px;
                                                                                                                                                            line-height: 24px;
                                                                                                                                                        "
                                                                                                                                                        >Contact</span
                                                                                                                                                    ></span
                                                                                                                                                ></span
                                                                                                                                            ></a
                                                                                                                                        >
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </table>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </table>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            <table
                                                                width="100%"
                                                                border="0"
                                                                cellpadding="0"
                                                                cellspacing="0"
                                                                role="presentation"
                                                            >
                                                                <tr>
                                                                    <td
                                                                        class="pc-w620-spacing-0-0-32-0"
                                                                        align="center"
                                                                        valign="top"
                                                                        style="padding: 0 0 40px; height: auto"
                                                                    >
                                                                        <img
                                                                            src="https://cloudfilesdm.com/postcards/0d63d6d7380a34298aadbfbbe61c6646.png"
                                                                            class="pc-w620-width-150 pc-w620-height-auto"
                                                                            style="
                                                                                display: block;
                                                                                outline: 0;
                                                                                line-height: 100%;
                                                                                -ms-interpolation-mode: bicubic;
                                                                                object-fit: contain;
                                                                                width: 174px;
                                                                                height: auto;
                                                                                max-width: 100%;
                                                                                border: 0;
                                                                            "
                                                                            width="174"
                                                                            height="32"
                                                                            alt=""
                                                                        />
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            <table
                                                                width="100%"
                                                                border="0"
                                                                cellpadding="0"
                                                                cellspacing="0"
                                                                role="presentation"
                                                            >
                                                                <tr>
                                                                    <td valign="top">
                                                                        <table
                                                                            width="100%"
                                                                            border="0"
                                                                            cellpadding="0"
                                                                            cellspacing="0"
                                                                            role="presentation"
                                                                        >
                                                                            <tr>
                                                                                <td
                                                                                    valign="top"
                                                                                    style="
                                                                                        line-height: 1px;
                                                                                        font-size: 1px;
                                                                                        border-bottom: 1px solid #e0e0e0;
                                                                                    "
                                                                                >
                                                                                    &nbsp;
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            <table
                                                                width="100%"
                                                                border="0"
                                                                cellpadding="0"
                                                                cellspacing="0"
                                                                role="presentation"
                                                            >
                                                                <tr>
                                                                    <td
                                                                        class="pc-w620-spacing-20-20-0-20 pc-w620-valign-top pc-w620-halign-center"
                                                                        align="left"
                                                                        style="
                                                                            padding: 32px 32px 0;
                                                                            mso-padding-left-alt: 0;
                                                                            margin-left: 32px;
                                                                        "
                                                                    >
                                                                        <table
                                                                            class="pc-w620-halign-center"
                                                                            align="left"
                                                                            width="100%"
                                                                            border="0"
                                                                            cellpadding="0"
                                                                            cellspacing="0"
                                                                            role="presentation"
                                                                        >
                                                                            <tr>
                                                                                <td valign="top">
                                                                                    <table
                                                                                        class="pc-width-fill pc-g-b pc-w620-halign-center"
                                                                                        width="100%"
                                                                                        border="0"
                                                                                        cellpadding="0"
                                                                                        cellspacing="0"
                                                                                        role="presentation"
                                                                                    >
                                                                                        <tbody class="pc-g-b">
                                                                                            <tr class="pc-g-ib pc-g-wf">
                                                                                                <td
                                                                                                    class="pc-g-rb pc-g-rpt pc-g-wf pc-w620-itemsVSpacings-16"
                                                                                                    align="left"
                                                                                                    valign="middle"
                                                                                                    style="
                                                                                                        padding-top: 0;
                                                                                                        padding-bottom: 0;
                                                                                                    "
                                                                                                >
                                                                                                    <table
                                                                                                        class="pc-w620-halign-center"
                                                                                                        style="width: 100%"
                                                                                                        border="0"
                                                                                                        cellpadding="0"
                                                                                                        cellspacing="0"
                                                                                                        role="presentation"
                                                                                                    >
                                                                                                        <tr>
                                                                                                            <td
                                                                                                                class="pc-w620-halign-center pc-w620-valign-top"
                                                                                                                align="left"
                                                                                                                valign="top"
                                                                                                            >
                                                                                                                <table
                                                                                                                    class="pc-w620-halign-center"
                                                                                                                    width="100%"
                                                                                                                    border="0"
                                                                                                                    cellpadding="0"
                                                                                                                    cellspacing="0"
                                                                                                                    role="presentation"
                                                                                                                >
                                                                                                                    <tr>
                                                                                                                        <td
                                                                                                                            class="pc-w620-halign-center"
                                                                                                                            align="left"
                                                                                                                            valign="top"
                                                                                                                        >
                                                                                                                            <table
                                                                                                                                border="0"
                                                                                                                                cellpadding="0"
                                                                                                                                cellspacing="0"
                                                                                                                                role="presentation"
                                                                                                                                class="pc-w620-halign-center"
                                                                                                                                align="left"
                                                                                                                            >
                                                                                                                                <tr>
                                                                                                                                    <td
                                                                                                                                        valign="top"
                                                                                                                                        class="pc-w620-align-center"
                                                                                                                                        align="left"
                                                                                                                                    >
                                                                                                                                        <div
                                                                                                                                            class="pc-font-alt pc-w620-align-center"
                                                                                                                                            style="
                                                                                                                                                text-decoration: none;
                                                                                                                                            "
                                                                                                                                        >
                                                                                                                                            <div
                                                                                                                                                style="
                                                                                                                                                    font-size: 16px;
                                                                                                                                                    line-height: 24px;
                                                                                                                                                    text-align: left;
                                                                                                                                                    text-align-last: left;
                                                                                                                                                    color: #6d6e73;
                                                                                                                                                    font-family: &quot;Geologica&quot;,
                                                                                                                                                        Arial,
                                                                                                                                                        Helvetica,
                                                                                                                                                        sans-serif;
                                                                                                                                                    font-style: normal;
                                                                                                                                                    letter-spacing: 0;
                                                                                                                                                "
                                                                                                                                            >
                                                                                                                                                <div
                                                                                                                                                    style="
                                                                                                                                                        font-family: &quot;Geologica&quot;,
                                                                                                                                                            Arial,
                                                                                                                                                            Helvetica,
                                                                                                                                                            sans-serif;
                                                                                                                                                    "
                                                                                                                                                >
                                                                                                                                                    <span
                                                                                                                                                        style="
                                                                                                                                                            font-family: &quot;Geologica&quot;,
                                                                                                                                                                Arial,
                                                                                                                                                                Helvetica,
                                                                                                                                                                sans-serif;
                                                                                                                                                            font-weight: 500;
                                                                                                                                                            font-size: 16px;
                                                                                                                                                            line-height: 24px;
                                                                                                                                                        "
                                                                                                                                                        >©Lumin8.
                                                                                                                                                        All
                                                                                                                                                        right
                                                                                                                                                        reserved</span
                                                                                                                                                    >
                                                                                                                                                </div>
                                                                                                                                            </div>
                                                                                                                                        </div>
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </table>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </table>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </table>
                                                                                                </td>
                                                                                                <td
                                                                                                    class="pc-w620-itemsHSpacings-0"
                                                                                                    valign="middle"
                                                                                                    style="
                                                                                                        padding-right: 20px;
                                                                                                        padding-left: 20px;
                                                                                                        mso-padding-left-alt: 0;
                                                                                                        margin-left: 20px;
                                                                                                    "
                                                                                                ></td>
                                                                                                <td
                                                                                                    class="pc-g-rb pc-g-rpb pc-g-wf pc-w620-itemsVSpacings-16"
                                                                                                    align="left"
                                                                                                    valign="middle"
                                                                                                    style="
                                                                                                        padding-top: 0;
                                                                                                        padding-bottom: 0;
                                                                                                    "
                                                                                                >
                                                                                                    <table
                                                                                                        class="pc-w620-halign-center"
                                                                                                        style="width: 100%"
                                                                                                        border="0"
                                                                                                        cellpadding="0"
                                                                                                        cellspacing="0"
                                                                                                        role="presentation"
                                                                                                    >
                                                                                                        <tr>
                                                                                                            <td
                                                                                                                class="pc-w620-halign-center pc-w620-valign-top"
                                                                                                                align="right"
                                                                                                                valign="middle"
                                                                                                            >
                                                                                                                <table
                                                                                                                    class="pc-w620-halign-center"
                                                                                                                    width="100%"
                                                                                                                    border="0"
                                                                                                                    cellpadding="0"
                                                                                                                    cellspacing="0"
                                                                                                                    role="presentation"
                                                                                                                >
                                                                                                                    <tr>
                                                                                                                        <td
                                                                                                                            class="pc-w620-halign-center"
                                                                                                                            align="right"
                                                                                                                            valign="top"
                                                                                                                        >
                                                                                                                            <table
                                                                                                                                border="0"
                                                                                                                                cellpadding="0"
                                                                                                                                cellspacing="0"
                                                                                                                                role="presentation"
                                                                                                                                class="pc-w620-halign-center"
                                                                                                                                align="right"
                                                                                                                            >
                                                                                                                                <tr>
                                                                                                                                    <td
                                                                                                                                        valign="top"
                                                                                                                                        class="pc-w620-align-center"
                                                                                                                                        align="left"
                                                                                                                                    >
                                                                                                                                        <div
                                                                                                                                            class="pc-font-alt pc-w620-align-center"
                                                                                                                                            style="
                                                                                                                                                text-decoration: none;
                                                                                                                                            "
                                                                                                                                        >
                                                                                                                                            <div
                                                                                                                                                style="
                                                                                                                                                    font-size: 16px;
                                                                                                                                                    line-height: 24px;
                                                                                                                                                    text-align: left;
                                                                                                                                                    text-align-last: left;
                                                                                                                                                    color: #769900;
                                                                                                                                                    font-family: &quot;Manrope&quot;,
                                                                                                                                                        Arial,
                                                                                                                                                        Helvetica,
                                                                                                                                                        sans-serif;
                                                                                                                                                    font-style: normal;
                                                                                                                                                    letter-spacing: 0;
                                                                                                                                                "
                                                                                                                                            >
                                                                                                                                                <div
                                                                                                                                                    style="
                                                                                                                                                        font-family: &quot;Manrope&quot;,
                                                                                                                                                            Arial,
                                                                                                                                                            Helvetica,
                                                                                                                                                            sans-serif;
                                                                                                                                                    "
                                                                                                                                                >
                                                                                                                                                    <a
                                                                                                                                                        href="https://postcards.email/"
                                                                                                                                                        target="_blank"
                                                                                                                                                        rel="noreferrer"
                                                                                                                                                        style="
                                                                                                                                                            text-decoration: none;
                                                                                                                                                            color: inherit;
                                                                                                                                                            color: rgb(
                                                                                                                                                                118,
                                                                                                                                                                153,
                                                                                                                                                                0
                                                                                                                                                            );
                                                                                                                                                            font-family: &quot;Manrope&quot;,
                                                                                                                                                                Arial,
                                                                                                                                                                Helvetica,
                                                                                                                                                                sans-serif;
                                                                                                                                                        "
                                                                                                                                                        ><span
                                                                                                                                                            style="
                                                                                                                                                                font-family: &quot;Manrope&quot;,
                                                                                                                                                                    Arial,
                                                                                                                                                                    Helvetica,
                                                                                                                                                                    sans-serif;
                                                                                                                                                                font-weight: 400;
                                                                                                                                                                font-size: 16px;
                                                                                                                                                                line-height: 24px;
                                                                                                                                                            "
                                                                                                                                                            >Help
                                                                                                                                                            center</span
                                                                                                                                                        ></a
                                                                                                                                                    ><span
                                                                                                                                                        style="
                                                                                                                                                            font-family: &quot;Manrope&quot;,
                                                                                                                                                                Arial,
                                                                                                                                                                Helvetica,
                                                                                                                                                                sans-serif;
                                                                                                                                                            color: rgb(
                                                                                                                                                                109,
                                                                                                                                                                110,
                                                                                                                                                                115
                                                                                                                                                            );
                                                                                                                                                            font-weight: 400;
                                                                                                                                                            font-size: 16px;
                                                                                                                                                            line-height: 24px;
                                                                                                                                                        "
                                                                                                                                                        >&nbsp;&nbsp;•&nbsp;&nbsp;</span
                                                                                                                                                    ><a
                                                                                                                                                        href="https://postcards.email/"
                                                                                                                                                        target="_blank"
                                                                                                                                                        rel="noreferrer"
                                                                                                                                                        style="
                                                                                                                                                            text-decoration: none;
                                                                                                                                                            color: inherit;
                                                                                                                                                            color: rgb(
                                                                                                                                                                118,
                                                                                                                                                                153,
                                                                                                                                                                0
                                                                                                                                                            );
                                                                                                                                                            font-family: &quot;Manrope&quot;,
                                                                                                                                                                Arial,
                                                                                                                                                                Helvetica,
                                                                                                                                                                sans-serif;
                                                                                                                                                        "
                                                                                                                                                        ><span
                                                                                                                                                            style="
                                                                                                                                                                font-family: &quot;Manrope&quot;,
                                                                                                                                                                    Arial,
                                                                                                                                                                    Helvetica,
                                                                                                                                                                    sans-serif;
                                                                                                                                                                font-weight: 400;
                                                                                                                                                                font-size: 16px;
                                                                                                                                                                line-height: 24px;
                                                                                                                                                            "
                                                                                                                                                            >Privacy
                                                                                                                                                            policy</span
                                                                                                                                                        ></a
                                                                                                                                                    >
                                                                                                                                                </div>
                                                                                                                                            </div>
                                                                                                                                        </div>
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </table>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </table>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            <!--[if gte mso 9]></td><td width="0" style="line-height:1px;font-size:1px" valign="top">&nbsp;</td></tr><tr><td colspan="3" height="32" style="line-height:1px;font-size:1px">&nbsp;</td></tr></table></td></tr></table></div><p style="margin:0;mso-hide:all"><o:p xmlns:o="urn:schemas-microsoft-com:office:office">&nbsp;</o:p></p></v:textbox></v:rect><![endif]-->
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </body>
    </html>
`;
};
