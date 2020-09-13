<style lang="scss" scoped>
@import "@assets/styles/_vars.scss";
@import "@assets/styles/_mixins.scss";

.main-box {
  @include pd(16px);
}
// 提取内联样式
.f-style-1 {
  font-family: 微软雅黑;
  @include f-sc(16px, map-get($colors, "black"));
}
.f-style-2 {
  line-height: 21px;
  @include my(0);
  text-indent: 0in;
  text-align: left;
}
.f-style-3 {
  font-family: 微软雅黑;
  @include f-sc(24px, map-get($colors, "black"));
}
.f-style-4 {
  font-family: 微软雅黑;
  font-weight: bold;
  @include f-sc(16px, map-get($colors, "black"));
}
.f-style-5 {
  line-height: 23px;
  @include my(0);
  text-indent: 0in;
  text-align: left;
}
.f-style-6 {
  @include position(absolute, $t: 19px, $l: 0);
  @include wh(120px, 12px);
  background: linear-gradient(to right, #12c9e8, map-get($colors, "white"));
  border-radius: 12px;
}
.f-style-7 {
  @include my(0);
  text-indent: 0in;
  text-align: left;
}
.f-style-8 {
  @include my(0, 20px);
  text-indent: 0in;
  text-align: left;
  position: relative;
}
.f-style-9 {
  line-height: 21px;
  @include my(0, 20px);
  text-indent: 0in;
  text-align: left;
  position: relative;
}
.f-style-10 {
  @include my(0);
  @include f-sc(16px, map-get($colors, "black"));
  text-indent: 0in;
  text-align: left;
  font-family: 微软雅黑;
}
.f-style-11 {
  font-family: 微软雅黑;
  @include f-sc(16px, map-get($colors, "black"));
  font-weight: bold;
}
.f-style-12 {
  @include my(0);
  @include f-sc(16px, map-get($colors, "black"));
  text-indent: 0in;
  text-align: left;
  font-family: 微软雅黑;
  text-indent: 2em;
}
.f-style-13 {
  @include my(0);
  @include f-sc(16px, map-get($colors, "black"));
  padding-left: 30px;
  text-align: left;
  font-family: 微软雅黑;
  line-height: 25px;
}
.f-style-14 {
  line-height: 23px;
  @include my(0);
  text-indent: 0in;
  text-align: left;
  margin-bottom: 20px;
  position: relative;
}
</style>

<template>
  <div class="main-box"
       style="height:600px;overflow:auto;">
    <div v-show="language === 'en' ? true : false"
         class="user-text">
      <p style=";margin-top:0;margin-bottom:20px;text-indent:0in;text-align:left">
        <span class="f-style-3">FS BOX</span>
        <span class="f-style-3">TERMS OF USE</span>
      </p>
      <p class="f-style-10">
        Welcome to the FS BOX website (hereinafter “<span style="font-weight:bold">Website</span>”). FS.Com, Inc. and its affiliates (“<span style="font-weight:bold">FS</span>”, “<span style="font-weight:bold">us</span>”, “<span style="font-weight:bold">our</span>”, or “<span style="font-weight:bold">we</span>”) own and maintain the
        Website and related software and configuration services (collectively,
        the “<span style="font-weight:bold">Services</span>”) provided to
        registered users. These Terms of Use (“<span style="font-weight:bold">Terms</span>”) govern your use of the Website and supersede any prior agreement
        between you and us.
      </p>
      <p class="f-style-7"><br /></p>
      <p class="f-style-8">
        <span class="f-style-11">Binding Agreement</span>
        <i class="f-style-6"></i>
      </p>
      <p class="f-style-10">
        This is a binding contract between you and FS. By registering and using
        the Services, you accept and agree to be bound by these Terms and the
        Privacy Policy located at
        <a target="_blank"
           href="http://fsbox.com">fsbox.com.</a> Before
        completing the registration process or using the Services in any way,
        read and fully understand these Terms. You are not authorized to use the
        Website or the Services or any of the features available through the
        Services unless you agree to these Terms. You may not proceed with
        registration and/or use of the Services until you have read these Terms
        and signified your acceptance of them. Your registration on the Website
        constitutes acceptance of these Terms.
      </p>
      <p class="f-style-7"><br /></p>
      <p class="f-style-10">
        FS reserves the right to terminate your use of the Services and its
        contract with you if you do not comply with these Terms.
      </p>
      <p class="f-style-7"><br /></p>
      <p class="f-style-10">
        DO NOT ACCESS OR USE THE WEBSITE OR THE SERVICES IF YOU DO NOT AGREE TO
        THESE TERMS.
      </p>
      <p class="f-style-7"><br /></p>
      <p class="f-style-8">
        <span style="font-size:16px;font-family:微软雅黑;color:black;font-weight:bold">Website Content; Intellectual Property</span>
        <i class="f-style-6"></i>
      </p>
      <p class="f-style-10">
        The Website, Services, and all content provided to registered users
        through the Website, including trademarks and copyright-protected works,
        are owned by or licensed to FS. They are provided to you for your
        personal, non-commercial use only, and your access and use of them are
        subject to these Terms. You may not upload, post, modify, transmit or
        reproduce any proprietary information protected by intellectual property
        rights in any way without the prior written consent of the relevant
        rights holder. The Services and content available through the Website
        are subject to change, and, in some cases, may be subject to additional
        terms of use.
      </p>
      <p class="f-style-7"><br /></p>
      <p class="f-style-8">
        <span class="f-style-11">Products and Services </span>
        <i class="f-style-6"></i>
      </p>
      <p class="f-style-10">
        We provide registered users of the Website coding and configuration
        services through the Website, to be used in conjunction with our FS Box
        tool kit, for updating and configuring compatible FS fiber optic
        transceivers. The tool kits are available for purchase on our affiliate
        <a target="_blank"
           href="http://www.fs.com">www.fs.com</a> website.
      </p>
      <p class="f-style-7"><br /></p>
      <p class="f-style-8">
        <span class="f-style-11">Account Registration, Use and Security </span>
        <i class="f-style-6"></i>
      </p>
      <p class="f-style-7"><br /></p>
      <p class="f-style-12">
        Registration qualification
      </p>
      <p class="f-style-10">
        You must register a user account in order to access the Services. By
        registering a user account, you represent that you have legal capacity,
        as an individual or legal entity, to be bound by these Terms. If you are
        an individual, you may not register an account unless you have attained
        the age of 18 or above, and by registering an account, you represent you
        have attained such age. Further, you represent that you are not subject
        to any trade restrictions, sanctions, or other applicable laws or
        regulations, imposed by any country, that may prohibit or limit your use
        of the Website and/or Services. FS disclaims any liability arising from
        your lack of legal capacity or authority to register and/or use the
        Services.
      </p>
      <p class="f-style-7"><br /></p>
      <p class="f-style-12">
        Account Registration
      </p>
      <p class="f-style-10">
        In order to register your account and use the Website and the Services,
        you will need to provide certain information, including your name,
        contact address, contact number, email address, among others. You agree
        to provide accurate and complete information, and you are solely
        responsible for the legal liability and consequences arising from any
        incomplete or inaccurate information you provide to us. Any personal
        information you provide to us will be handled in accordance with our
        Privacy Policy available at [www.fs.com].
      </p>
      <p class="f-style-7"><br /></p>
      <p class="f-style-12">
        Account Usage and Security
      </p>
      <p class="f-style-10">
        Once you successfully complete the registration process, you will be
        given an account number and password to sign-in to the Website and use
        the Services. You must keep your account and password (“Credentials”)
        secure, and you agree not to share your Credentials with any third
        party. You are responsible for the custody of the Credentials, and will
        be liable for any losses or liabilities arising from the use of your
        Credentials by third parties to the extent that such parties retrieved
        the Credentials from you.
      </p>
      <p class="f-style-7"><br /></p>
      <p class="f-style-10">
        If you discover that a third party has possession of your Credentials,
        you will notify us immediately. We may suspend your account, change your
        password, or take other actions as we consider appropriate under the
        circumstances.
      </p>
      <p class="f-style-7"><br /></p>
      <p class="f-style-12">
        Services Activation
      </p>
      <p class="f-style-10">
        Before using the Services on the Website, you will need to download and
        install the applicable coding driver using the appropriate web browser,
        including Google Chrome (ver. 68 and above). Please follow instructions
        provided in the user instruction/manual to install the driver and use
        the Services.
      </p>
      <p class="f-style-7"><br /></p>
      <p class="f-style-8">
        <span class="f-style-11">Limited License </span>
        <i class="f-style-6"></i>
      </p>
      <p class="f-style-10">
        All trademarks or service marks, including FS and FS.COM trademarks and
        logos, trade names, trade dress, and other indicia identifying the
        Website and our Services, (collectively, the “Marks”) are owned by FS
        and/or the brand owners. You do not obtain any rights in the Marks, or
        in any of the Services available on the Website by your use of the
        Website or otherwise. However, so long as you comply with these Terms,
        you do receive a limited license to use the Website and Services as
        provided below. All rights in the Website and its content are reserved
        to the respective owner(s).
      </p>
      <p class="f-style-7"><br /></p>
      <p class="f-style-10">
        Subject to these Terms, FS grants you a personal, non-transferable,
        non-exclusive, and revocable limited license to access and use the
        Services for your own personal, non-commercial use. This license
        includes the right to use the Services for their intended purposes,
        provided you do not delete or modify any included proprietary notices.
        FS reserves the right to revoke this license at its sole discretion upon
        notice to you, in which case you shall cease all use of the licensed
        materials.
      </p>
      <p class="f-style-7"><br /></p>
      <p class="f-style-8">
        <span class="f-style-11">Restrictions </span>
        <i class="f-style-6"></i>
      </p>
      <p class="f-style-10">
        The above license is granted to you subject to certain restrictions. You
        may not re-distribute any portion of the Services, including software
        drivers, make derivatives of or publicly display the Services, or use
        the Marks in connection with any services or products, without our
        express written consent.
      </p>
      <p class="f-style-7"><br /></p>
      <p class="f-style-10">
        You will not use the Services to store, publish, or disseminate
        information containing the following content or engage in related
        activities:
      </p>
      <ul class="f-style-13">
        <li>
          Any content (information) that violates these Terms or the rights of a
          third party, including that party’s intellectual property rights, or
          that violates applicable laws or regulations;
        </li>
        <li>
          Political propaganda and/or news information in violation of
          applicable laws and regulations;
        </li>
        <li>Information concerning state secrets and/or security;</li>
        <li>
          Information that hinders the security of any computer network; or
        </li>
        <li>
          Information that inhibits any other user from using the Website or
          Services.
        </li>
      </ul>
      <p class="f-style-7"><br /></p>
      <p class="f-style-10">
        In addition, you may not:
      </p>
      <ul class="f-style-13">
        <li>
          Use the Website or the Services, or content available on the Website,
          other than for their intended purpose; or
        </li>
        <li>
          Take any action that imposes, or may impose, in our sole discretion,
          an unreasonable or disproportionately large load on our
          infrastructure.
        </li>
      </ul>
      <p class="f-style-7"><br /></p>
      <p class="f-style-10">
        You may not engage in any behavior that disrupts or attempts to disrupt
        the security of a computer network, including the use or provision of
        computer viruses, spoofing damage programs, timed program bombs or other
        destructive programs that contain damage, interference,
        misappropriation, access to the system, data or your information.
      </p>
      <p class="f-style-7"><br /></p>
      <p class="f-style-10">
        If you violate the intellectual property or proprietary right(s) of FS
        or of any third party, or violate these Terms, you will be liable for
        damages caused thereby.
      </p>
      <p class="f-style-7"><br /></p>
      <p class="f-style-10">
        FS reserves the right to remove any problematic information you provide
        or upload, suspend your account, cancel some or all of your account
        features, or terminate your account, if you violate any of these Terms.
      </p>
      <p class="f-style-7"><br /></p>
      <p class="f-style-8">
        <span class="f-style-11">Access to the Website </span>
        <i class="f-style-6"></i>
      </p>
      <p class="f-style-10">
        The Website will be available for access to registered users only. We do
        not guarantee that the Website or the Services will be accessible at all
        times, without interruption, or at any given time. Your access to the
        Website and/or use of our Services may be temporarily suspended due to
        system errors, maintenance windows or for any reason beyond our control.
        Further, we may suspend or terminate your access to or use of the
        Website or the Services, at our sole discretion and without prior notice
        to you, as provided under these Terms. You acknowledge that we are not
        liable for any losses or damages, including loss of your content, if
        any, resulting from the suspension or termination of your access to or
        use of the Website or our services.
      </p>
      <p class="f-style-7"><br /></p>
      <p class="f-style-8">
        <span class="f-style-11">Submitted Content </span>
        <i class="f-style-6"></i>
      </p>
      <p class="f-style-10">
        As a registered user, you may post content on the Website. You agree
        that any content you post on the Website, except for your personal
        information, (“Your Content”) will be treated as non-confidential and
        nonproprietary, and we will not assume any responsibility, obligation,
        or liability for Your Content. FS may delete or destroy Your Content at
        any time.
      </p>
      <p class="f-style-7"><br /></p>
      <p class="f-style-10">
        By submitting or sending Your Content to FS, you grant us a
        non-exclusive, royalty-free, worldwide, perpetual, irrevocable, and
        fully transferable, assignable and sub-licensable right and license to
        copy, reproduce, distribute, publish, transmit, modify, adapt,
        translate, display, distribute, sell, license, publicly perform, prepare
        derivative works based upon, and otherwise use or exploit Your Content
        throughout the world in any and all media. You represent and warrant
        that: (a) you have the right and authorization to make the foregoing
        grant without the consent of any third party, and (b) Your Content is
        accurate and, as permitted to be used by FS under these Terms, do not
        and will not infringe any right of any third party.
      </p>
      <p class="f-style-7"><br /></p>
      <p class="f-style-8">
        <span class="f-style-11">Services Updates and Maintenance </span>
        <i class="f-style-6"></i>
      </p>
      <p class="f-style-10">
        We may update the Services by developing new services and updating
        existing Services components (including but not limited to software
        replacement, modification, feature enhancement, version upgrade, among
        others) on a regular basis. We reserve the right to update the Services
        or to change or limit some of the functionality of the Services at any
        time. We may note the new version of the Services on the Website,
        however, we are under no obligation to do so. You may need to download a
        new version of the coding driver for the new version, if any.
      </p>
      <p class="f-style-7"><br /></p>
      <p class="f-style-10">
        When you use “Matching Mode” module within the Services, you acknowledge
        and agree that the firmware information of your transceiver will be read
        and saved by this Website, including vendor name, part number, serial
        number, and other applicable coding information. You may not access or
        use the “Matching Mode” module if you do not want such information to be
        collected and saved.
      </p>
      <p class="f-style-7"><br /></p>
      <p class="f-style-10">
        When you use the “Coding service”, you acknowledge and agree that the
        firmware information of your transceiver will be modified based on your
        input or selection on the Website. You may also configure custom
        settings if appropriate under circumstances and under certain
        restrictions. If you do not agree, you may not use the Coding Service
        module within the Services.
      </p>
      <p class="f-style-7"><br /></p>
      <p class="f-style-10">
        You acknowledge and agree that you are responsible for backing up the
        data stored on the Services and/or the Website. If we suspend or
        terminate the Services, FS has the right to temporarily or permanently
        delete your data from our server(s), and FS will not be obligated to
        provide or return such deleted data.
      </p>
      <p class="f-style-7"><br /></p>
      <p class="f-style-8">
        <span class="f-style-11">Commercial Communications </span>
        <i class="f-style-6"></i>
      </p>
      <p class="f-style-10">
        By registering an account or sending emails to FS, you consent to
        receiving email communications from us. Furthermore, you agree that all
        agreements, notices, disclosures, and other communications that we
        provide to you electronically, via the Website or otherwise, satisfy any
        applicable legal requirement that such communications be in writing.
        You may opt out of receiving communications from us by following the
        applicable opt-out procedure provided in the email correspondence or by
        contacting us below.
      </p>
      <p class="f-style-7"><br /></p>
      <p class="f-style-8">
        <span class="f-style-11">Third Party Websites </span>
        <i class="f-style-6"></i>
      </p>
      <p class="f-style-10">
        The Website may provide links and information, content, and services
        offered by or maintained by third parties. In some cases these may be
        accessible directly through the Website. We have no control over the
        content of these websites and we do not assume any obligation to review
        any of them. Further, we do not endorse, approve or sponsor any
        third-party websites or any content, information, materials, products,
        services or other items on or available on or from them. If you visit
        any third party sites, your use of them is subject to each website’s
        terms and/or policies.
      </p>
      <p class="f-style-7"><br /></p>
      <p class="f-style-8">
        <span class="f-style-11">Disclaimer and Release </span>
        <i class="f-style-6"></i>
      </p>
      <p class="f-style-10">
        YOU EXPRESSLY UNDERSTAND, ACKNOWLEDGE, AND AGREE THAT: (A) YOUR ACCESS
        AND USE OF THE WEBSITE OR THE SERVICES IS AT YOUR SOLE RISK. THE
        WEBSITE, THE SERVICES, AND ALL CONTENT ON THE WEBSITE ARE PROVIDED ON AN
        “AS IS” AND “AS AVAILABLE” BASIS. FS AND ITS OFFICERS, EMPLOYEES, AND
        AGENTS EXPRESSLY DISCLAIM ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR
        IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
        MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT;
        (B) FS AND ITS OFFICERS, EMPLOYEES, AND AGENTS MAKE NO WARRANTY THAT (i)
        THE WEBSITE WILL MEET YOUR REQUIREMENTS OR BE UNINTERRUPTED, TIMELY,
        SECURE OR ERROR-FREE, (ii) THE SERVICES OR WEBSITE WILL BE RELIABLE OR
        ACCURATE, (iii) THE QUALITY OF THE SERVICES, CONTENT, INFORMATION OR
        OTHER MATERIAL OBTAINED BY YOU THROUGH THE WEBSITE WILL MEET YOUR
        EXPECTATIONS, AND (iv) ANY ERRORS IN THE WEBSITE, THE SERVICES, OR
        CONTENT ON THE WEBSITE WILL BE CORRECTED; (C) ANY MATERIAL DOWNLOADED OR
        OTHERWISE OBTAINED THROUGH THE USE OF THE WEBSITE IS ACCESSED AT YOUR
        OWN DISCRETION AND RISK, AND YOU WILL BE SOLELY RESPONSIBLE FOR ANY
        DAMAGE THAT RESULTS FROM YOUR USE OF ANY SUCH MATERIAL; (D) NO ADVICE OR
        INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM FS OR THROUGH
        OR FROM THE WEBSITE CREATES ANY WARRANTY NOT EXPRESSLY STATED IN THESE
        TERMS.
      </p>
      <p class="f-style-7"><br /></p>
      <p class="f-style-8">
        <span class="f-style-11">Limitation of Liability </span>
        <i class="f-style-6"></i>
      </p>
      <p class="f-style-10">
        YOU EXPRESSLY UNDERSTAND AND AGREE THAT FS AND ITS OFFICERS, EMPLOYEES,
        AND AGENTS ARE NOT LIABLE TO YOU FOR ANY DIRECT, INDIRECT, INCIDENTAL,
        SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES, INCLUDING, BUT NOT LIMITED
        TO, DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, CONTENT OR OTHER
        INTANGIBLE LOSSES (EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF
        SUCH DAMAGES OR THEY ARE OTHERWISE FORESEEABLE), RESULTING FROM: (A) THE
        USE OR THE INABILITY TO USE THE WEBSITE AND/OR THE SERVICES OR RESULTS
        OF THE USE OF THE WEBSITE AND/OR THE SERVICES OR ANY MATERIALS POSTED ON
        WEBSITE, HOWEVER ARISING AND WHETHER CAUSED BY TORT (INCLUDING
        NEGLIGENCE), BREACH OF CONTRACT, SERVER OR NETWORK FAILURE, SERVICES
        UPDATES, HACKING, VIRUS ATTACKS, OR OTHERWISE; (B) THE COST OF
        PROCUREMENT OF SUBSTITUTE GOODS AND SERVICES RESULTING FROM ANY GOODS,
        DATA, INFORMATION OR SERVICES OBTAINED OR MESSAGES RECEIVED OR
        TRANSACTIONS ENTERED INTO THROUGH, FROM OR AS A RESULT OF THE WEBSITE OR
        THE SERVICES; (C) UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR
        TRANSMISSIONS OR CONTENT; (D) STATEMENTS OR CONDUCT OF ANY THIRD PARTY
        ON THE SERVICES OR WEBSITE; OR (E) ANY OTHER MATTER RELATING TO THE
        SERVICE OR WEBSITE.
      </p>
      <p class="f-style-7"><br /></p>
      <p class="f-style-8">
        <span class="f-style-11">Applicable Law </span>
        <i class="f-style-6"></i>
      </p>
      <p class="f-style-10">
        These Terms, together with the Privacy Policy, constitute the entire
        agreement between you and FS concerning your use of the Website,
        superseding any prior agreements between you and FS regarding the
        Website. These Terms shall be subject to the laws of the State of
        Delaware, without giving effect to its principles on conflict of laws.
      </p>
      <p class="f-style-7"><br /></p>
      <p class="f-style-8">
        <span class="f-style-11">Survival; Severability </span>
        <i class="f-style-6"></i>
      </p>
      <p class="f-style-10">
        The Terms shall survive termination of your agreement with FS. If any
        provision of these Terms shall be unlawful, void, or for any reason
        unenforceable, then that provision shall be deemed severable from these
        Terms and shall not affect the validity and enforceability of any
        remaining provisions.
      </p>
      <p class="f-style-7"><br /></p>
      <p class="f-style-8">
        <span class="f-style-11">Dispute Resolution </span>
        <i class="f-style-6"></i>
      </p>
      <p class="f-style-10">
        Except for matters relating to the enforcement of FS’s intellectual
        property rights, all disputes, controversies, or claims arising out of
        or relating in any way to the Website, your participation in any of the
        features available through them and/or your purchase of any Products on
        the Websites shall be finally resolved as provided below. YOU ARE GIVING
        UP THE RIGHT TO LITIGATE A DISPUTE WITH FS BEFORE A JUDGE OR JURY. The
        arbitral tribunal shall have the power to rule on any challenge to its
        own jurisdiction or to the validity or enforceability of any portion of
        this agreement to arbitrate. You and FS agree to arbitrate solely on an
        individual basis and expressly waive the ability to participate in a
        class or representative proceeding, including any class arbitration or
        representative arbitration proceedings. The arbitral tribunal may not
        consolidate more than one person’s claims and may not otherwise preside
        over any form of a representative or class proceeding. In the event the
        prohibition on class arbitration is deemed invalid or unenforceable,
        then the remaining portions of the agreement to arbitrate will remain in
        force. To the extent that you or FS opts out of arbitration following
        the procedure set forth below, or if this arbitration agreement is found
        inapplicable to a dispute between us, you and FS expressly waive the
        ability to participate in any class or representative litigation.
      </p>
      <p class="f-style-7"><br /></p>
      <p class="f-style-10">
        If a dispute arises that is subject to arbitration, you must give FS
        written notice and an opportunity to resolve it. Your notice must
        include your name, your address, a written description of the dispute,
        and a specific description of the relief you are seeking. If FS does not
        resolve our dispute within forty-five (45) days after receiving your
        notice, you may pursue arbitration as below by sending a written demand
        for arbitration to FS at the address set forth above in "Copyright
        Complaints."
      </p>
      <p class="f-style-7"><br /></p>
      <p class="f-style-10">
        Any dispute or claim that is subject to arbitration but is not resolved
        by the pre-arbitration dispute process, shall be submitted to binding
        arbitration. The disputes and claims subject to arbitration will be
        resolved by a single arbitrator mutually agreed upon by you and FS. If
        we cannot agree on an arbitrator, then an arbitrator shall be selected
        pursuant to Rule 12 of the JAMS Streamlined Arbitration Rules and
        Procedures. The arbitrator shall be bound by and shall strictly enforce
        these Terms and any other applicable agreement between us, and may not
        limit, expand, or otherwise modify any such terms. The arbitrator may
        award any relief that a court of law could, applying the limitations of
        liability contained in these Terms. The arbitrator may award injunctive
        relief if permitted by law – but the injunctive relief awarded by the
        arbitrator may not extend beyond our dealings with one another. Any
        arbitration will be held in Wilmington, Delaware, unless otherwise
        agreed upon by you and FS in writing. You and FS will each bear its own
        expenses in the arbitration and will share equally the costs of the
        arbitration; provided, however, that the arbitrator shall award costs
        and fees to the prevailing party if it is determined that the other
        party submitted a claim with no reasonable basis or filed any claim in
        bad faith.
      </p>
      <p class="f-style-7"><br /></p>
      <p class="f-style-10">
        <span style="font-weight:bold">You may opt out of the agreement to arbitrate by providing written
          notice of your intention to do so to FS at the address above no later
          than 60 days after initial acceptance of these Terms.</span>
        The procedure spelled out herein is the only way to opt out of
        arbitration, and any attempts to opt out after the deadline set forth
        herein will be ineffective. Notwithstanding your decision to opt out of
        arbitration, you still waive the ability to participate in any class or
        representative litigation.
      </p>
      <p class="f-style-7"><br /></p>
      <p class="f-style-10">
        Because the Website and these Terms concern interstate commerce, the
        Federal Arbitration Act governs the interpretation and enforcement of
        the arbitration rules only. You agree the arbitration and other
        provisions of this section "Binding Arbitration; Class Action Waiver"
        survives any termination of these Terms.
      </p>
      <p class="f-style-7"><br /></p>
      <p class="f-style-8">
        <span class="f-style-11">Personal Information </span>
        <i class="f-style-6"></i>
      </p>
      <p class="f-style-10">
        We may collect certain information from you in order to properly operate
        the Website and provide the Services. Please review our Privacy Policy,
        available at
        <a target="_blank"
           href="http://www.fsbox.com">fsbox.com</a>, regarding
        our collection and use of your information.
      </p>
      <p class="f-style-7"><br /></p>
      <p class="f-style-8">
        <span class="f-style-11">International Visitors </span>
        <i class="f-style-6"></i>
      </p>
      <p class="f-style-10">
        The Website and the servers that make them available are located in the
        United States of America. If you reside in a European Union member
        country, these Terms may conflict with the laws of your country. In the
        event of such a conflict, these Terms will govern to the extent that
        they are valid and enforceable under applicable United States laws.
      </p>
      <p class="f-style-7"><br /></p>
      <p class="f-style-10">
        FS makes no representation that the Website is appropriate or available
        for use beyond the United States of America. If you use the Website from
        other locations, you are responsible for compliance with applicable
        local laws.
      </p>
      <p class="f-style-7"><br /></p>
      <p class="f-style-8">
        <span class="f-style-11">Contact Us </span>
        <i class="f-style-6"></i>
      </p>
      <p class="f-style-10">
        If you have any questions about these Terms, you may contact us at
        <a target="_blank"
           href="mailto:sales@fs.com">sales@fs.com.</a>
      </p>
      <p class="f-style-7"><br /></p>
      <p class="f-style-10">
        Last updated: June 27, 2019
      </p>
      <p class="f-style-7"><br /></p>
      <p class="f-style-10">
        4843-8662-6715v.2
      </p>
    </div>
    <div v-show="language !== 'en' ? true : false">
      <p style=";line-height:32px;margin-top:0;margin-bottom:0;text-indent:0in;text-align: left">
        <span class="f-style-3">FS.COM</span>
        <span class="f-style-3">使用条款</span>
      </p>
      <p class="f-style-2"><br /></p>
      <p class="f-style-9">
        <span class="f-style-4">对使用条款的同意</span>
        <i class="f-style-6"></i>
      </p>
      <p class="f-style-2">
        <span class="f-style-1">本使用条款和条件 (“使用条款”) 适用于位于 fsbox.com
          的FS.COM网站。FS.COM有权随时自行决定更改、修改、添加或删除本使用条款的部分内容。使用本网站</span>
        <span class="f-style-1">及软件</span>
        <span class="f-style-1">，即表示你同意本使用条款</span>
        <span class="f-style-1">。</span>
      </p>
      <p class="f-style-2"><br /></p>
      <p class="f-style-9">
        <span class="f-style-4">帐户、密码和安全</span>
        <i class="f-style-6"></i>
      </p>
      <p class="f-style-2">
        <span class="f-style-1">本网站上或通过本网站提供的功能或服务</span>
        <span class="f-style-1">需要你使用账户</span>
        <span class="f-style-1">。对于维护你所持有的帐户信息(包括密码)
          的保密性，以及由于你未能确保此类信息安全和保密而在你的帐户中发生的任何及所有活动，你将承担全部责任。如果由于你未能确保帐户信息的安全和保密，得以让他人使用你的
        </span>
        <span class="f-style-1">账号</span>
        <span class="f-style-1">密码，则你可能需为FS.COM以及本网站的任何其他用户或访客由此而遭受的损失承担责任。</span>
      </p>
      <p class="f-style-2"><br /></p>
      <p class="f-style-2">
        <span class="f-style-1">在任何时候，你都不得在未经帐户持有人事先许可和同意的情况下使用任何其他人的</span>
        <span class="f-style-1">账户</span>
        <span class="f-style-1">。对于因你未履行相关义务而导致的任何损失或损害，FS.COM不能也不会承担任何责任。</span>
      </p>
      <p class="f-style-2"><br /></p>
      <p class="f-style-9">
        <span class="f-style-4">软件安全</span>
        <i class="f-style-6"></i>
      </p>
      <p class="f-style-2">
        <span class="f-style-1">在使用网站功能或者服务前，需按照网站指示下载并安装相关的本地驱动。此驱动已进行相关的签名认证，如在安装过程中，被个别软件进行拦截，信任同意安装即可。本</span>
        <span class="f-style-1">网站服务</span>
        <span class="f-style-1">仅支持W</span>
        <span class="f-style-1">in</span>
        <span class="f-style-1">8及以上版本使用。</span>
      </p>
      <p class="f-style-2"><br /></p>
      <p class="f-style-9">
        <span class="f-style-4">软件升级</span>
        <i class="f-style-6"></i>
      </p>

      <p class="f-style-2">
        <span class="f-style-1">为了改善用户体验、完善服务内容，</span>
        <span class="f-style-1">FS.COM</span>
        <span class="f-style-1">将不断努力开发新的服务，并为你不时提供软件更新（这些更新可能会采取软件替换、修改、功能强化、版本升级等形式）。为了保证本软件及服务的安全性和功能的一致性，</span>
        <span class="f-style-1">FS.COM</span>
        <span class="f-style-1">有权不经向你特别通知而对软件进行更新，或者对软件的部分功能效果进行改变或限制。</span>
      </p>
      <p class="f-style-5"><br /></p>
      <p class="f-style-2">
        <span class="f-style-1">本软件新版本发布后，旧版本的软件可能无法使用。</span>
        <span class="f-style-1">FS.COM</span>
        <span class="f-style-1">不保证旧版本软件继续可用及相应的客户服务，请你随时核对并下载最新版本。</span>
      </p>
      <p class="f-style-5"><br /></p>
      <p class="f-style-14">
        <span class="f-style-4">信息隐私</span>
        <i class="f-style-6"></i>
      </p>

      <p class="f-style-2">
        <span class="f-style-1">您确认并同意，在使用Matching
          Mode过程中，fsbox.com需要读取并存取您模块内部的一些信息</span>
        <span class="f-style-1">，包括</span>
        <span class="f-style-1">厂商名，型号名，序列号和其他码类信息。如果你选择不提供，我们将无法为你提供我们</span>
        <span class="f-style-1">的</span>
        <span class="f-style-1">服务，也无法回应你遇到的任何问题。</span>
      </p>
      <p class="f-style-5"><br /></p>
      <p class="f-style-5">
        <span class="f-style-1">当用户选择写码服务时，即同意模块内部的信息被更改，本应用可提供序列号自定义服务，在限制规则内均可满足用户的要求，厂商名和型号名默认为FS标准的厂商名和型号名。</span>
      </p>
      <p class="f-style-2"><br /></p>
      <p class="f-style-14">
        <span class="f-style-4">责任限制</span>
        <i class="f-style-6"></i>
      </p>
      <p class="f-style-2">
        <span class="f-style-1">除法律禁止的情形外，FS.COM概不因任何间接、衍生、惩戒、附带或惩罚性损害
          (包括利益损失) 而向你承担责任，即使</span>
        <span class="f-style-1">FS.COM</span>
        <span class="f-style-1">已被告知可能发生此类损害时也是如此。</span>
      </p>
      <p class="f-style-5"><br /></p>
      <p class="f-style-9">
        <span class="f-style-4">知识产权声明</span>
        <i class="f-style-6"></i>
      </p>
      <p class="f-style-5">
        <span class="f-style-1">FS.COM</span>
        <span class="f-style-1">是本软件的知识产权权利人。本软件的一切著作权、商标权、专利权、商业秘密等知识产权，以及与本软件相关的所有信息内容（包括但不限于文字、图片、音频、视频、图表、界面设计、版面框架、有关数据或电子文档等）均受中华人民共和国法律法规和相应的国际条约保护，</span>
        <span class="f-style-1">FS.COM</span>
        <span class="f-style-1">享有上述知识产权，但相关权利人依照法律规定应享有的权利除外。</span>
      </p>
      <p class="f-style-2"><br /></p>
      <p style="line-height: 21px; margin-top: 0px; margin-bottom: 0px; text-indent: 0in; text-align: left;">
        <span class="f-style-1">点击“同意”，即表示您已阅读并同意上述FS.COM</span>
        <span class="f-style-1">使用条款</span>
        <span class="f-style-1">。</span>
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["language"])
  },
  data () {
    return {};
  }
};
</script>
