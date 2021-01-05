import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import DefaultPageLayout from "../components/DefaultPageLayout"
import Main from "../components/main-content"
import Container from "../components/Container"
import Hero from "../components/Hero"
import { Link } from "gatsby"

import "../styles/baa.scss"
import PageStyles from "./baa.module.scss"
import RowStyles from "../components/Row.module.scss"

const heroConfig = {
  strapline: "BAA",
  title: [<span>Standard Business </span>, " Associate Agreement"],
  content: ["Effective Date:", <br />, " October 26, 2018"]
}

const Baa = data => {
  return (
    <div className={PageStyles.baaPage + " " + RowStyles.rowStyling}>
      <DefaultPageLayout location="baa">
        <Helmet>
          <title>Standard Business Associate Agreement | Doctor Genius</title>
        </Helmet>
        <div className={PageStyles.baa + " baa"}>
          <BackgroundImage fluid={data.data.heroBg.childImageSharp.fluid} className={PageStyles.gbiBaa + " gbi-baa"}>
            <Hero pageType="baa" strapline={heroConfig.strapline} 
            title={heroConfig.title} content={heroConfig.content} />
          </BackgroundImage>
          <Main>
            <Container>
            <div className={RowStyles.row + " " + RowStyles.padded + " " + RowStyles.tallTop + " " + RowStyles.shortBottom}>
              <div className="col-sm-12 col-md-8">
                <p>
                  This Standard Business Associate Agreement (or “BAA”) is entered
                  into between Company (referred to herein as “Business Associate”
                  or “BA”) and Customer (referred to herein as “Covered Entity” or
                  “CE”) and incorporated into the Agreement (as defined in the
                  Terms of Service accessible at
                  <Link to="termsofservice" className="disable-link">
                    {" "}
                    https://www.doctorgenius.com/termsofservice
                  </Link>{" "}
                  if, and only if, Customer is a is a Covered Entity (as defined
                  under the Health Insurance Portability and Accountability Act of
                  1996 (“HIPAA”)) that has Protected Health Information accessible
                  via the Website the confidentiality and privacy and security of
                  which is governed by HIPAA. (Capitalized terms used but not
                  defined in this BAA shall have the meaning given them in the
                  Terms of Service posted at posted at{" "}
                  <Link to="termsofservice" className="disable-link">
                    https://www.doctorgenius.com/termsofservice
                  </Link>
                  .)
                </p>
                <p>
                  If the above condition is met, BA and CE enter into this BAA and
                  agree as follows for the purposes of protecting the privacy and
                  providing for the security of PHI disclosed to BA pursuant to
                  this BAA in compliance with HIPAA, the Health Information
                  Technology for Economic and Clinical Health Act of 2009 (“the
                  HITECH Act”), and 45 CFR Parts 160 and 164, Subparts A and C
                  (the “Security Rule”), Subpart D (the Data Breach Notification
                  Rule”), and Subparts A and E (the “Privacy Rule”), and
                  regulations promulgated thereunder by the U.S. Department of
                  Health and Human Services (the “HIPAA Regulations”) and other
                  applicable laws.
                </p>
              </div>
            </div>
            <div className={RowStyles.row + " " + RowStyles.padding + " " + RowStyles.shortTop + " " + RowStyles.shortBottom}>
              <div className="col-sm-11 col-md-8">
                <div className="content-block">
                  <ol>
                    <li>
                      <h4>Definitions</h4>
                      <ol className={PageStyles.alphaList + " alpha-list"}>
                        <li>
                          <p>
                            "<b className={PageStyles.underlined + " underlined"}>Breach</b>" shall have the
                            meaning given to such term under the HITECH Act [42
                            U.S.C. Section 17921].
                          </p>
                        </li>
                        <li>
                          <p>
                            "<b className={PageStyles.underlined + " underlined"}>Business Associate</b>" shall
                            have the meaning given to such term under the Data
                            Breach Notification Rule, the Privacy Rule, the
                            Security Rule, and the HITECH Act, including but not
                            limited to, 42 U.S.C. Section 17938 and 45 C.F.R.
                            Section 160.103.
                          </p>
                        </li>
                        <li>
                          <p>
                            "<b className={PageStyles.underlined + " underlined"}>Covered Entity</b>" shall have
                            the meaning given to such term under the Privacy Rule
                            and the Security Rule, including, but not limited to,
                            45 C.F.R. Section 160.103.
                          </p>
                        </li>
                        <li>
                          <p>
                            "<b className={PageStyles.underlined + " underlined"}>Data Aggregation</b>" shall
                            have the meaning given to such term under the Privacy
                            Rule, including, but not limited to, 45 C.F.R. Section
                            164.501.
                          </p>
                        </li>
                        <li>
                          <p>
                            "<b className={PageStyles.underlined + " underlined"}>Designated Record Set</b>"
                            shall have the meaning given to such term under the
                            Privacy Rule, including, but not limited to, 45 C.F.R.
                            Section 164.501.
                          </p>
                        </li>
                        <li>
                          <p>
                            "
                            <b className={PageStyles.underlined + " underlined"}>
                              Electronic Protected Health Information
                            </b>
                            " means Protected Health Information that is
                            maintained in or transmitted by electronic media.
                          </p>
                        </li>
                        <li>
                          <p>
                            "<b className={PageStyles.underlined + " underlined"}>Electronic Health Record</b>"
                            shall have the meaning given to such term in the
                            HITECH Act, including, but not limited to, 42 U.S.C.
                            Section 17921.
                          </p>
                        </li>
                        <li>
                          <p>
                            "<b className={PageStyles.underlined + " underlined"}>Health Care Operations</b>"
                            shall have the meaning given to such term under the
                            Privacy Rule, including, but not limited to, 45 C.F.R.
                            Section 164.501.
                          </p>
                        </li>
                        <li>
                          <p>
                            "
                            <b className={PageStyles.underlined + " underlined"}>Protected Health Information</b>
                            " or "<b className={PageStyles.underlined + " underlined"}>PHI</b>" means any
                            information, whether oral or recorded in any form or
                            medium: (i) that relates to the past, present or
                            future physical or mental condition of an individual;
                            the provision of health care to an individual; or the
                            past, present or future payment for the provision of
                            health care to an individual; and (ii) that identifies
                            the individual or with respect to which there is a
                            reasonable basis to believe the information can be
                            used to identify the individual, and shall have the
                            meaning given to such term under the Privacy Rule,
                            including, but not limited to, 45 C.F.R. Section
                            164.501. Protected Health Information includes
                            Electronic Protected Health Information [45 C.F.R.
                            Sections 160.103, 164.501].
                          </p>
                        </li>
                        <li>
                          <p>
                            "<b className={PageStyles.underlined + " underlined"}>Protected Information</b>"
                            shall mean PHI provided by CE to BA or created or
                            received by BA on CE’s behalf.
                          </p>
                        </li>
                        <li>
                          <p>
                            "<b className={PageStyles.underlined + " underlined"}>Subcontractor</b>" means a
                            person to whom a business associate delegates a
                            function, activity, or service, other than in the
                            capacity of a member of the workforce of such business
                            associate, pursuant to 45 C.F.R. Section 160.103.
                          </p>
                        </li>
                        <li>
                          <p>
                            "<b className={PageStyles.underlined + " underlined"}>Unsecured PHI</b>" shall have
                            the meaning given to such term under the HITECH Act
                            and any guidance issued pursuant to such Act
                            including, but not limited to, 42 U.S.C. Section
                            17932(h).
                          </p>
                        </li>
                      </ol>
                    </li>
                    <li>
                      <h4>Obligations of Business Associate</h4>
                      <ol className={PageStyles.alphaList + " alpha-list"}>
                        <li>
                          <p>
                            "<b className={PageStyles.underlined + " underlined"}>Permitted Uses</b>" – BA shall
                            not use Protected Information except for the purpose
                            of performing BA’s obligations of CE as a healthcare
                            provider and as permitted under this BAA. Further, BA
                            shall not use Protected Information in any manner that
                            would constitute a violation of the Privacy Rule or
                            the HITECH Act if so used by CE. However, BA may use
                            Protected Information (i) for the proper management
                            and administration of BA, (ii) to carry out the legal
                            responsibilities of BA, or (iii) for Data Aggregation
                            purposes for the Health Care Operations of CE [45
                            C.F.R. Sections 164.504(e)(2)(ii)(A) and
                            164.504(e)(4)(i)].
                          </p>
                        </li>
                        <li>
                          <p>
                            "<b className={PageStyles.underlined + " underlined"}>Permitted Disclosures</b>" – BA
                            shall not disclose Protected Information except for
                            the purpose of performing BA’s obligations as a
                            healthcare provider and as permitted under this BAA.
                            BA shall not disclose Protected Information in any
                            manner that would constitute a violation of the
                            Privacy Rule or the HITECH Act if so disclosed by CE.
                            However, BA may disclose Protected Information (i) for
                            the proper management and administration of BA; (ii)
                            to carry out the legal responsibilities of BA; (iii)
                            as required by law; or (iv) for Data Aggregation
                            purposes for the Health Care Operations of CE. If BA
                            discloses Protected Information to a third party, BA
                            must obtain, prior to making any such disclosure, (i)
                            reasonable written assurances from such third party
                            that such Protected Information will be held
                            confidential as provided pursuant to this BAA and only
                            disclosed as required by law or for the purposes for
                            which it was disclosed to such third party, and (ii) a
                            written agreement from such third party to immediately
                            notify BA of any breaches of confidentiality of the
                            Protected Information, to the extent it has obtained
                            knowledge of such breach [42 U.S.C. Section 17932; 45
                            C.F.R. Sections 164.504(e)(2)(i), 164.504(e)(2)(i)(B),
                            164.504(e)(2)(ii)(A) and 164.504(e)(4)(ii)].
                          </p>
                        </li>
                        <li>
                          <p>
                            "
                            <b className={PageStyles.underlined + " underlined"}>
                              Prohibited Uses and Disclosures
                            </b>
                            " – BA shall not use or disclose Protected Information
                            for fundraising or marketing purposes [as defined in
                            and subject to 45 CFR 164.501, 45 CFR 164.508(a)(3)].
                            BA shall not disclose Protected Information to a
                            health plan for payment or health care operations
                            purposes if the patient has requested this special
                            restriction, and has paid out of pocket in full for
                            the health care item or service to which the PHI
                            solely relates [42 U.S.C. Section 17935(a)]. BA shall
                            not directly or indirectly receive remuneration in
                            exchange for Protected Information, except with the
                            prior written consent of CE and as permitted by the
                            HITECH Act, 42 U.S.C. section 17935(d)(2); however,
                            this prohibition shall not affect payment by CE to BA
                            for services provided.
                          </p>
                        </li>
                        <li>
                          <p>
                            "
                            <b className={PageStyles.underlined + " underlined"}>Compliance with Privacy Rule</b>
                            " – To the extent that BA carries out CE’s obligations
                            under the Privacy Rule, BA shall comply with the
                            requirements of the Privacy Rule that apply to CE in
                            the performance of such obligations [45 C.F.R. §
                            164.504(e)(2)(ii)(H)].
                          </p>
                        </li>
                        <li>
                          <p>
                            "<b className={PageStyles.underlined + " underlined"}>Appropriate Safeguards</b>" –
                            BA Shall implement appropriate safeguards as are
                            necessary to prevent the use or disclosure of
                            Protected Information otherwise than as permitted by
                            this BAA that reasonably and appropriately protect the
                            confidentiality, integrity and availability of the
                            Protected Information, in accordance with 45 C.F.R.
                            Sections 164.308, 164.310, and 164.312. [45 C.F.R.
                            Section 164.504(e)(2)(ii)(B); 45 C.F.R. Section
                            164.308(b)]. BA shall comply with the policies and
                            procedures and documentation requirements of the HIPAA
                            Security Rule with respect to electronic protected
                            health information, including, but not limited to, 45
                            C.F.R. Section 164.316 [42 U.S.C. Section 17931].
                          </p>
                        </li>
                        <li>
                          <p>
                            "
                            <b className={PageStyles.underlined + " underlined"}>
                              Reporting of Improper Access, Use or Disclosure
                            </b>
                            " – BA shall report to CE in writing of any access,
                            use or disclosure of Protected Information not
                            permitted by the BAA, and any Breach of Unsecured PHI
                            as required by the Data Breach Notification Rule (45
                            CFR § 164.410) of which it becomes aware without
                            unreasonable delay after discovery [42 U.S.C. Section
                            17921; 45 C.F.R. Section 164.504(e)(2)(ii)(C); 45
                            C.F.R. Section 164.308(b)].
                          </p>
                        </li>
                        <li>
                          <p>
                            "<b className={PageStyles.underlined + " underlined"}>Business Associate’s Agents</b>
                            " – BA shall ensure that any agents, including
                            Subcontractors, that create, receive, maintain, or
                            transmit Protected Health Information on behalf of the
                            Business Associate, agree in writing to the same
                            restrictions and conditions that apply to BA with
                            respect to such PHI and implement the safeguards
                            required by paragraph c above with respect to
                            Electronic PHI [45 C.F.R. Section
                            164.504(e)(2)(ii)(D); 45 C.F.R. Section 164.308(b)].
                            BA shall implement and maintain sanctions against
                            agents and Subcontractors that violate such
                            restrictions and conditions and shall mitigate the
                            effects of any such violation (see 45 C.F.R. Sections
                            164.530(f) and 164.530(e)(1)).
                          </p>
                        </li>
                        <li>
                          <p>
                            "
                            <b className={PageStyles.underlined + " underlined"}>
                              Access to Protected Information
                            </b>
                            " – [This applies only if the BA maintains a
                            designated record set on behalf of the CE]: BA shall
                            make Protected Information maintained by BA or its
                            agents or Subcontractors in Designated Record Sets
                            available to CE for inspection and copying within ten
                            (10) days of a request by CE to enable CE to fulfill
                            its obligations under the Privacy Rule, including, but
                            not limited to, 45 C.F.R. Section 164.524 [45 CF.R.
                            Section 164.504(e)(2)(ii)(E)]. If BA maintains an
                            Electronic Health Record, BA shall provide such
                            information in electronic format to enable CE to
                            fulfill its obligations under the HITECH Act,
                            including, but not limited to, 42 U.S.C. Section
                            17935(e).
                          </p>
                        </li>
                        <li>
                          <p>
                            "<b className={PageStyles.underlined + " underlined"}>Amendment of PHI</b>" – [This
                            applies only of if the BA maintains a designated
                            record set on behalf of the CE]: Within ten (10) days
                            of receipt of a request from CE for an amendment of
                            Protected Information or a record about an individual
                            contained in a Designated Record Set, BA or its agents
                            or Subcontractors shall make such Protected
                            Information available to CE for amendment and
                            incorporate any such amendment to enable CE to fulfill
                            its obligations under the Privacy Rule, including, but
                            not limited to, 45 C.F.R. Section 164.526. If any
                            individual requests an amendment of Protected
                            Information directly from BA or its agents or
                            Subcontractors, BA must notify CE in writing within
                            five (5) days of the request. Any approval or denial
                            of amendment of Protected Information maintained by BA
                            or its agents or Subcontractors shall be the
                            responsibility of CE [45 C.F.R. Section
                            164.504(e)(2)(ii)(F)].
                          </p>
                        </li>
                        <li>
                          <p>
                            "<b className={PageStyles.underlined + " underlined"}>Accounting Rights</b>" –
                            Promptly after notice by CE of a request for an
                            accounting of disclosures of Protected Information, BA
                            and its agents or Subcontractors shall make available
                            to CE the information required to provide an
                            accounting of disclosures to enable CE to fulfill its
                            obligations under the Privacy Rule, including, but not
                            limited to, 45 C.F.R. Section 164.528, and the HITECH
                            Act, including but not limited to 42 U.S.C. Section
                            17935(c), as determined by CE. BA agrees to implement
                            a process that allows for an accounting to be
                            collected and maintained by BA and its agents or
                            Subcontractors for at least six (6) years prior to the
                            request. However, accounting of disclosures from an
                            Electronic Health Record for treatment, payment or
                            health care operations purposes are required to be
                            collected and maintained for only three (3) years
                            prior to the request, and only to the extent that BA
                            maintains an electronic health record and is subject
                            to this requirement. At a minimum, the information
                            collected and maintained shall include: (i) the date
                            of disclosure; (ii) the name of the entity or person
                            who received Protected Information and, if known, the
                            address of the entity or person; (iii) a brief
                            description of Protected Information disclosed and
                            (iv) a brief statement of purpose of the disclosure
                            that reasonably informs the individual of the basis
                            for the disclosure, or a copy of the individual’s
                            authorization, or a copy of the written request for
                            disclosure. In the event that the request for an
                            accounting is delivered directly to BA or its agents
                            or Subcontractors, BA shall within five (5) days of a
                            request forward it to CE in writing. It shall be CE’s
                            responsibility to prepare and deliver any such
                            accounting requested. BA shall not disclose any
                            Protected Information except as set forth in Sections
                            2.b. of this BAA [45 C.F.R. Sections
                            164.504(e)(2)(ii)(G) and 165.528].
                          </p>
                        </li>
                        <li>
                          <p>
                            "
                            <b className={PageStyles.underlined + " underlined"}>
                              Governmental Access to Records
                            </b>
                            " – BA shall make its internal practices, books and
                            records relating to the use and disclosure of
                            Protected Information available to CE and to the
                            Secretary of the U.S. Department of Health and Human
                            Services (the “Secretary”) for purposes of determining
                            BA’s compliance with the Privacy Rule [45 C.F.R.
                            Section 164.504(e)(2)(ii)(H)]. BA shall provide to CE
                            a copy of any Protected Information that BA provides
                            to the Secretary concurrently with providing such
                            Protected Information to the Secretary.
                          </p>
                        </li>
                        <li>
                          <p>
                            "<b className={PageStyles.underlined + " underlined"}>Minimum Necessary</b>" – BA
                            (and its agents or Subcontractors) shall request, use
                            and disclose only the minimum amount of Protected
                            Information necessary to accomplish the purpose of the
                            request, use, or disclosure [42 U.S.C. Section
                            17935(b); 45 C.F.R. Section 164.514(d)(3)]. BA
                            understands and agrees that the definition of “minimum
                            necessary” is in flux and shall keep itself informed
                            of guidance issued by the Secretary with respect to
                            what constitutes “minimum necessary.” BA agrees to
                            make uses and disclosures and requests for Protected
                            Information consistent with CE’s minimum necessary
                            policies and procedures, to the extent such policies
                            and procedures are provided.
                          </p>
                        </li>
                        <li>
                          <p>
                            "<b className={PageStyles.underlined + " underlined"}>Data Ownership</b>" – BA
                            acknowledges that BA has no ownership rights with
                            respect to the Protected Information.
                          </p>
                        </li>
                        <li>
                          <p>
                            "
                            <b className={PageStyles.underlined + " underlined"}>
                              Business Associate’s Insurance
                            </b>
                            " – CE shall obtain and maintain and during the term
                            of the BAA liability insurance covering claims based
                            on a violation of the Privacy Standards or any
                            applicable California law or regulation concerning the
                            privacy of patient information and claims based on its
                            obligations pursuant to this Section. Such insurance
                            shall be in the form of occurrence-based coverage and
                            shall name the Covered Entity as an additional named
                            insured. A copy of such policy or a certificate
                            evidencing the policy shall be provided to the Covered
                            Provider upon written request.
                          </p>
                        </li>
                        <li>
                          <p>
                            "<b className={PageStyles.underlined + " underlined"}>Notification of Breach</b>" –
                            During the term of the business relationship, BA shall
                            notify CE of any suspected or actual breach of
                            security, intrusion or unauthorized use or disclosure
                            of PHI of which BA becomes aware and/or any actual or
                            suspected use or disclosure of data in violation of
                            any applicable federal or state laws or regulations.
                            BA shall take (i) prompt corrective action to cure any
                            such deficiencies and (ii) any action pertaining to
                            such unauthorized disclosure required by applicable
                            federal and state laws and regulations.
                          </p>
                        </li>
                        <li>
                          <p>
                            "
                            <b className={PageStyles.underlined + " underlined"}>
                              Breach Pattern or Practice by Covered Entity
                            </b>
                            " – Pursuant to 42 U.S.C. Section 17934(b), if the BA
                            knows of a pattern of activity or practice of the CE
                            that constitutes a material breach or violation of the
                            CE’s obligations under HIPAA, the BA, at CE’s expense,
                            must take reasonable steps to cure the breach or end
                            the violation. If the steps are unsuccessful, the BA
                            must terminate the business relationship if feasible,
                            or if termination is not feasible, report the problem
                            to the Secretary of DHHS. BA shall provide written
                            notice to CE of any pattern of activity or practice of
                            the CE that BA believes constitutes a material breach
                            or violation of the CE’s obligations under the BAA
                            promptly upon discovery and shall meet with CE to
                            discuss and attempt to resolve the problem as one of
                            the reasonable steps to cure the breach or end the
                            violation.
                          </p>
                        </li>
                        <li>
                          <p>
                            "
                            <b className={PageStyles.underlined + " underlined"}>
                              Audits, Inspection and Enforcement
                            </b>
                            " – Within a reasonable time after a written request
                            by CE, BA and its agents or Subcontractors shall allow
                            CE to conduct a reasonable inspection of the
                            facilities, systems, books, records, agreements,
                            policies and procedures relating to the use or
                            disclosure of Protected Information pursuant to this
                            BAA for the purpose of determining whether BA has
                            complied with this BAA; provided, however, that (i) BA
                            and CE shall mutually agree in advance upon the scope,
                            timing and location of such an inspection, (ii) CE
                            shall protect the confidentiality of all confidential
                            and proprietary information of BA to which CE has
                            access during the course of such inspection; and (iii)
                            CE shall execute a nondisclosure agreement, upon terms
                            mutually agreed upon by the parties, if requested by
                            BA. The fact that CE inspects, or fails to inspect, or
                            has the right to inspect, BA’s facilities, systems,
                            books, records, agreements, policies and procedures
                            does not relieve BA of its responsibility to comply
                            with this BAA , nor does CE’s (i) failure to detect or
                            (ii) detection, but failure to notify BA or require
                            BA’s remediation of any unsatisfactory practices,
                            constitute acceptance of such practice or a waiver of
                            CE’s enforcement rights under the BAA, BA shall notify
                            CE that BA has become the subject of an audit,
                            compliance review, or complaint investigation by the
                            Office for Civil Rights (This provision should be
                            negotiated.)
                          </p>
                        </li>
                      </ol>
                    </li>
                    <li>
                      <h4>Termination</h4>
                      <ol className={PageStyles.alphaList + " alpha-list"}>
                        <li>
                          <p>
                            "<b className={PageStyles.underlined + " underlined"}>Material Breach</b>" – A breach
                            by BA of any provision of this BAA, as determined by
                            CE, shall constitute a material breach and shall
                            provide grounds for immediate termination of the
                            business relationship [45 C.F.R. Section
                            164.504(e)(2)(iii)]; except if CE has knowledge of a
                            material breach of this BAA by the BA, and cure is
                            possible, CE shall provide BA with an opportunity to
                            cure. Where said breach is not cured within thirty
                            (30) calendar days of the BA’s receipt of notice from
                            the CE of said breach, CE may terminate this BAA. If
                            CE has knowledge of a material breach of this BAA by
                            the BA, and cure is not possible, CE may terminate
                            this BAA and the portion of the Agreement that is
                            affected by the breach.
                          </p>
                        </li>
                        <li>
                          <p>
                            "
                            <b className={PageStyles.underlined + " underlined"}>
                              Judicial or Administrative Proceedings
                            </b>
                            " – CE may terminate the Contract, effective
                            immediately, if (i) BA is named as a defendant in a
                            criminal proceeding for a violation of HIPAA, the
                            HITECH Act, the HIPAA Regulations or other security or
                            privacy laws or (ii) a finding or stipulation that the
                            BA has violated any standard or requirement of HIPAA,
                            the HITECH Act, the HIPAA Regulations or other
                            security or privacy laws is made in any administrative
                            or civil proceeding in which the party has been
                            joined.
                          </p>
                        </li>
                        <li>
                          <p>
                            "<b className={PageStyles.underlined + " underlined"}>Effect of Termination</b>" –
                            Upon termination of the business relationship for any
                            reason, BA shall, at the option of CE, return or
                            destroy all Protected Information that BA or its
                            agents or Subcontractors still maintain in any form,
                            and shall retain no copies of such Protected
                            Information. If return or destruction is not feasible,
                            as determined by CE, BA shall continue to extend the
                            protections of Section 2 of this BAA to such
                            information, and limit further use of such PHI to
                            those purposes that make the return or destruction of
                            such PHI infeasible. [45 C.F.R. Section
                            164.504(e)(ii)(2(I)]. If CE elects destruction of the
                            PHI, BA shall certify in writing to CE that such PHI
                            has been destroyed.
                          </p>
                        </li>
                      </ol>
                    </li>
                    <li>
                      <h4>Miscellaneous</h4>
                      <ol className={PageStyles.alphaList + " alpha-list"}>
                        <li>
                          <p>
                            "<b className={PageStyles.underlined + " underlined"}>Amendment</b>" – The parties
                            agree to take such action to amend this BAA from time
                            to time as is necessary to comply with the
                            requirements of HIPAA.
                          </p>
                        </li>
                        <li>
                          <p>
                            "<b className={PageStyles.underlined + " underlined"}>Disclaimer</b>" – BA makes no
                            warranty or representation that compliance by BA with
                            this BAA, HIPAA, the HITECH Act, or the HIPAA
                            Regulations will be adequate or satisfactory for CE’s
                            own purposes. CE is solely responsible for all
                            decisions made by CE regarding the safeguarding of
                            PHI.
                          </p>
                        </li>
                        <li>
                          <p>
                            "<b className={PageStyles.underlined + " underlined"}>Conflicting Terms</b>" – In the
                            event any terms of this BAA directly conflict with any
                            terms of the Agreement, the terms of this BAA shall
                            govern and control.
                          </p>
                        </li>
                        <li>
                          <p>
                            "
                            <b className={PageStyles.underlined + " underlined"}>
                              Assistance in Litigation of Administrative
                              Proceedings
                            </b>
                            " – BA shall make itself and its employees, and
                            endeavor to make any Subcontractors assisting BA in
                            the performance of its obligations under the BAA,
                            available to CE at reasonable times, at CE’s expense,
                            to testify as witnesses, or otherwise, in the event of
                            litigation or administrative proceedings being
                            commenced against CE, its directors, officers or
                            employees based upon a claimed violation of HIPAA, the
                            HITECH Act, the Data Breach Notification Rule, the
                            Privacy Rule, the Security Rule, or other laws
                            relating to security and privacy, except where BA or
                            its Subcontractor, employee or agent is named adverse
                            party.
                          </p>
                        </li>
                        <li>
                          <p>
                            "
                            <b className={PageStyles.underlined + " underlined"}>No Third-Party Beneficiaries</b>
                            " – Nothing express or implied in the BAA is intended
                            to confer, nor shall anything herein confer, upon any
                            person other than CE, BA and their respective
                            successors or assigns, any rights, remedies,
                            obligations or liabilities whatsoever.
                          </p>
                        </li>
                        <li>
                          <p>
                            "<b className={PageStyles.underlined + " underlined"}>Interpretation</b>" – This BAA
                            shall be interpreted as broadly as necessary to
                            implement and comply with HIPAA, the HITECH Act, the
                            Data Breach Notification Rule, the Privacy Rule and
                            the Security Rule.
                          </p>
                        </li>
                      </ol>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </Container>
          </Main>
        </div>
      </DefaultPageLayout>
    </div>
  )
}

export default Baa

export const pagesQuery = graphql`
  query {
    heroBg: file(relativePath: { eq: "privacy-policy-hero.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`