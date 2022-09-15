(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{712:function(e,o,t){"use strict";t.r(o);var s=t(1),r=Object(s.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"pbts-system-model-and-properties"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pbts-system-model-and-properties"}},[e._v("#")]),e._v(" PBTS: System Model and Properties")]),e._v(" "),t("h2",{attrs:{id:"system-model"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#system-model"}},[e._v("#")]),e._v(" System Model")]),e._v(" "),t("h4",{attrs:{id:"pbts-clock-newton-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pbts-clock-newton-0"}},[e._v("#")]),e._v(" "),t("strong",[e._v("[PBTS-CLOCK-NEWTON.0]")])]),e._v(" "),t("p",[e._v("There is a reference Newtonian real-time "),t("code",[e._v("t")]),e._v(" (UTC).")]),e._v(" "),t("p",[e._v("No process has direct access to this reference time, used only for specification purposes.")]),e._v(" "),t("h3",{attrs:{id:"synchronized-clocks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#synchronized-clocks"}},[e._v("#")]),e._v(" Synchronized clocks")]),e._v(" "),t("p",[e._v("Processes are assumed to be equipped with synchronized clocks.")]),e._v(" "),t("p",[e._v("This requires processes to periodically synchronize their local clocks with an\nexternal and trusted source of the time (e.g. NTP servers).\nEach synchronization cycle aligns the process local clock with the external\nsource of time, making it a "),t("em",[e._v("fairly accurate")]),e._v(" source of real time.\nThe periodic (re)synchronization aims to correct the "),t("em",[e._v("drift")]),e._v(" of local clocks,\nwhich tend to pace slightly faster or slower than the real time.")]),e._v(" "),t("p",[e._v("To avoid an excessive level detail in the parameters and guarantees of\nsynchronized clocks, we adopt a single system parameter "),t("code",[e._v("PRECISION")]),e._v(" to\nencapsulate the potential inaccuracy of the synchronization mechanisms,\nand drifts of local clocks from real time.")]),e._v(" "),t("h4",{attrs:{id:"pbts-clock-precision-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pbts-clock-precision-0"}},[e._v("#")]),e._v(" "),t("strong",[e._v("[PBTS-CLOCK-PRECISION.0]")])]),e._v(" "),t("p",[e._v("There exists a system parameter "),t("code",[e._v("PRECISION")]),e._v(", such that\nfor any two processes "),t("code",[e._v("p")]),e._v(" and "),t("code",[e._v("q")]),e._v(", with local clocks "),t("code",[e._v("C_p")]),e._v(" and "),t("code",[e._v("C_q")]),e._v(",\nthat read their local clocks at the same real-time "),t("code",[e._v("t")]),e._v(",  we have:")]),e._v(" "),t("ul",[t("li",[e._v("If "),t("code",[e._v("p")]),e._v(" and "),t("code",[e._v("q")]),e._v(" are equipped with synchronized clocks, then "),t("code",[e._v("|C_p(t) - C_q(t)| < PRECISION")])])]),e._v(" "),t("p",[t("code",[e._v("PRECISION")]),e._v(" thus bounds the difference on the times simultaneously read by processes\nfrom their local clocks, so that their clocks can be considered synchronized.")]),e._v(" "),t("h4",{attrs:{id:"accuracy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#accuracy"}},[e._v("#")]),e._v(" Accuracy")]),e._v(" "),t("p",[e._v("The "),t("RouterLink",{attrs:{to:"/spec/consensus/proposer-based-timestamp/v1/pbts-sysmodel_001_draft.html"}},[e._v("first draft")]),e._v(" of this specification included a second clock-related parameter, "),t("code",[e._v("ACCURACY")]),e._v(",\nthat relates the values read by processes from their synchronized clocks with real time:")],1),e._v(" "),t("ul",[t("li",[e._v("If "),t("code",[e._v("p")]),e._v(" is a process is equipped with a synchronized clock, then at real time\n"),t("code",[e._v("t")]),e._v(" it reads from its clock time "),t("code",[e._v("C_p(t)")]),e._v(" with "),t("code",[e._v("|C_p(t) - t| < ACCURACY")])])]),e._v(" "),t("p",[e._v("The adoption of "),t("code",[e._v("ACCURACY")]),e._v(" as the upper bound on the difference between clock\nreadings and real time, however, renders the "),t("code",[e._v("PRECISION")]),e._v(" parameter redundant.\nIn fact, if we assume that clocks readings are at most "),t("code",[e._v("ACCURACY")]),e._v(" from real\ntime, we would therefore be assuming that they cannot be more than "),t("code",[e._v("2 * ACCURACY")]),e._v("\napart from each other, thus establishing a worst-case upper bound for "),t("code",[e._v("PRECISION")]),e._v(".")]),e._v(" "),t("p",[e._v("The approach we take is to assume that processes clocks are periodically\nsynchronized with an external source of time, thus improving their accuracy.\nThis allows us to adopt a relaxed version of the above "),t("code",[e._v("ACCURACY")]),e._v(" definition:")]),e._v(" "),t("h5",{attrs:{id:"pbts-clock-fair-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pbts-clock-fair-0"}},[e._v("#")]),e._v(" "),t("strong",[e._v("[PBTS-CLOCK-FAIR.0]")])]),e._v(" "),t("ul",[t("li",[e._v("At real time "),t("code",[e._v("t")]),e._v(" there is at least one correct process "),t("code",[e._v("p")]),e._v(" which clock marks\n"),t("code",[e._v("C_p(t)")]),e._v(" with "),t("code",[e._v("|C_p(t) - t| < ACCURACY")])])]),e._v(" "),t("p",[e._v("Then, through [PBTS-CLOCK-PRECISION] we can extend this relation of clock times\nwith real time to every correct process, which will have a clock with accuracy\nbound by "),t("code",[e._v("ACCURACY + PRECISION")]),e._v(".\nBut, for the sake of simpler specification we can assume that the "),t("code",[e._v("PRECISION")]),e._v(",\nwhich is a worst-case parameter that applies to all correct processes,\nincludes the best "),t("code",[e._v("ACCURACY")]),e._v(" achieved by any of them.")]),e._v(" "),t("h3",{attrs:{id:"message-delays"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#message-delays"}},[e._v("#")]),e._v(" Message Delays")]),e._v(" "),t("p",[e._v("The assumption that processes have access to synchronized clocks ensures that proposal times\nassigned by "),t("em",[e._v("correct processes")]),e._v(" have a bounded relation with the real time.\nIt is not enough, however, to identify (and reject) proposal times proposed by Byzantine processes.")]),e._v(" "),t("p",[e._v("To properly evaluate whether the time assigned to a proposal is consistent with the real time,\nwe need some information regarding the time it takes for a message carrying a proposal\nto reach all its (correct) destinations.\nMore precisely, the "),t("em",[e._v("maximum delay")]),e._v(" for delivering a proposal to its destinations allows\ndefining a lower bound, a "),t("em",[e._v("minimum time")]),e._v(" that a correct process assigns to proposal.\nWhile "),t("em",[e._v("minimum delay")]),e._v(" for delivering a proposal to a destination allows defining\nan upper bound, the "),t("em",[e._v("maximum time")]),e._v(" assigned to a proposal.")]),e._v(" "),t("h4",{attrs:{id:"pbts-msg-d-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pbts-msg-d-0"}},[e._v("#")]),e._v(" "),t("strong",[e._v("[PBTS-MSG-D.0]")])]),e._v(" "),t("p",[e._v("There exists a system parameter "),t("code",[e._v("MSGDELAY")]),e._v(" for end-to-end delays of messages carrying proposals,\nsuch for any two correct processes "),t("code",[e._v("p")]),e._v(" and "),t("code",[e._v("q")]),e._v(", and any real time "),t("code",[e._v("t")]),e._v(":")]),e._v(" "),t("ul",[t("li",[e._v("If "),t("code",[e._v("p")]),e._v(" sends a message "),t("code",[e._v("m")]),e._v(" carrying a proposal at time "),t("code",[e._v("ts")]),e._v(",\nthen if "),t("code",[e._v("q")]),e._v(" receives the message and learns the proposal,\n"),t("code",[e._v("q")]),e._v(" does that at time "),t("code",[e._v("t")]),e._v(" such that "),t("code",[e._v("ts <= t <= ts + MSGDELAY")]),e._v(".")])]),e._v(" "),t("p",[e._v("While we don't want to impose particular restrictions regarding the format of "),t("code",[e._v("m")]),e._v(",\nwe need to assume that their size is upper bounded.\nIn practice, using messages with a fixed-size to carry proposals allows\nfor a more accurate estimation of "),t("code",[e._v("MSGDELAY")]),e._v(", and therefore is advised.")]),e._v(" "),t("h2",{attrs:{id:"problem-statement"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#problem-statement"}},[e._v("#")]),e._v(" Problem Statement")]),e._v(" "),t("p",[e._v("In this section we define the properties of Tendermint consensus\n(cf. the "),t("a",{attrs:{href:"https://arxiv.org/pdf/1807.04938.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("arXiv paper"),t("OutboundLink")],1),e._v(") in this new system model.")]),e._v(" "),t("h4",{attrs:{id:"pbts-propose-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pbts-propose-0"}},[e._v("#")]),e._v(" "),t("strong",[e._v("[PBTS-PROPOSE.0]")])]),e._v(" "),t("p",[e._v("A proposer proposes a consensus value "),t("code",[e._v("v")]),e._v(" with an associated proposal time "),t("code",[e._v("v.time")]),e._v(".")]),e._v(" "),t("h4",{attrs:{id:"pbts-inv-agreement-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pbts-inv-agreement-0"}},[e._v("#")]),e._v(" "),t("strong",[e._v("[PBTS-INV-AGREEMENT.0]")])]),e._v(" "),t("p",[e._v("[Agreement] No two correct processes decide on different values "),t("code",[e._v("v")]),e._v(". (This implies that no two correct processes decide on different proposal times "),t("code",[e._v("v.time")]),e._v(".)")]),e._v(" "),t("h4",{attrs:{id:"pbts-inv-valid-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pbts-inv-valid-0"}},[e._v("#")]),e._v(" "),t("strong",[e._v("[PBTS-INV-VALID.0]")])]),e._v(" "),t("p",[e._v("[Validity] If a correct process decides on value "),t("code",[e._v("v")]),e._v(",\nthen "),t("code",[e._v("v")]),e._v(" satisfies a predefined "),t("code",[e._v("valid")]),e._v(" predicate.")]),e._v(" "),t("h4",{attrs:{id:"pbts-inv-timely-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pbts-inv-timely-0"}},[e._v("#")]),e._v(" "),t("strong",[e._v("[PBTS-INV-TIMELY.0]")])]),e._v(" "),t("p",[e._v("[Time-Validity] If a correct process decides on value "),t("code",[e._v("v")]),e._v(",\nthen the associated proposal time "),t("code",[e._v("v.time")]),e._v(" satisfies a predefined "),t("code",[e._v("timely")]),e._v(" predicate.")]),e._v(" "),t("blockquote",[t("p",[e._v("Both [Validity] and [Time-Validity] must be observed even if up to "),t("code",[e._v("2f")]),e._v(" validators are faulty.")])]),e._v(" "),t("h3",{attrs:{id:"timely-proposals"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#timely-proposals"}},[e._v("#")]),e._v(" Timely proposals")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("timely")]),e._v(" predicate is evaluated when a process receives a proposal.\nLet "),t("code",[e._v("now_p")]),e._v(" be time a process "),t("code",[e._v("p")]),e._v(" reads from its local clock when "),t("code",[e._v("p")]),e._v(" receives a proposal.\nLet "),t("code",[e._v("v")]),e._v(" be the proposed value and "),t("code",[e._v("v.time")]),e._v(" the proposal time.\nThe proposal is considered "),t("code",[e._v("timely")]),e._v(" by "),t("code",[e._v("p")]),e._v(" if:")]),e._v(" "),t("h4",{attrs:{id:"pbts-reception-step-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pbts-reception-step-1"}},[e._v("#")]),e._v(" "),t("strong",[e._v("[PBTS-RECEPTION-STEP.1]")])]),e._v(" "),t("ol",[t("li",[t("code",[e._v("now_p >= v.time - PRECISION")]),e._v(" and")]),e._v(" "),t("li",[t("code",[e._v("now_p <= v.time + MSGDELAY + PRECISION")])])]),e._v(" "),t("h3",{attrs:{id:"timely-proof-of-locks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#timely-proof-of-locks"}},[e._v("#")]),e._v(" Timely Proof-of-Locks")]),e._v(" "),t("p",[e._v("We denote by "),t("code",[e._v("POL(v,r)")]),e._v(" a "),t("em",[e._v("Proof-of-Lock")]),e._v(" of value "),t("code",[e._v("v")]),e._v(" at the round "),t("code",[e._v("r")]),e._v(" of consensus.\n"),t("code",[e._v("POL(v,r)")]),e._v(" consists of a set of "),t("code",[e._v("PREVOTE")]),e._v(" messages of round "),t("code",[e._v("r")]),e._v(" for the value "),t("code",[e._v("v")]),e._v("\nfrom processes whose cumulative voting power is at least "),t("code",[e._v("2f + 1")]),e._v(".")]),e._v(" "),t("h4",{attrs:{id:"pbts-timely-pol-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pbts-timely-pol-1"}},[e._v("#")]),e._v(" "),t("strong",[e._v("[PBTS-TIMELY-POL.1]")])]),e._v(" "),t("p",[e._v("If")]),e._v(" "),t("ul",[t("li",[e._v("there is a valid "),t("code",[e._v("POL(v,r*)")]),e._v(" for height "),t("code",[e._v("h")]),e._v(", and")]),e._v(" "),t("li",[t("code",[e._v("r*")]),e._v(" is the lowest-numbered round "),t("code",[e._v("r")]),e._v(" of height "),t("code",[e._v("h")]),e._v(" for which there is a valid "),t("code",[e._v("POL(v,r)")]),e._v(", and")]),e._v(" "),t("li",[t("code",[e._v("POL(v,r*)")]),e._v(" contains a "),t("code",[e._v("PREVOTE")]),e._v(" message from at least one correct process,")])]),e._v(" "),t("p",[e._v("Then, where "),t("code",[e._v("p")]),e._v(" is a such correct process:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("p")]),e._v(" received a "),t("code",[e._v("PROPOSE")]),e._v(" message of round "),t("code",[e._v("r*")]),e._v(" and height "),t("code",[e._v("h")]),e._v(", and")]),e._v(" "),t("li",[e._v("the "),t("code",[e._v("PROPOSE")]),e._v(" message contained a proposal for value "),t("code",[e._v("v")]),e._v(" with proposal time "),t("code",[e._v("v.time")]),e._v(", and")]),e._v(" "),t("li",[e._v("a correct process "),t("code",[e._v("p")]),e._v(" considered the proposal "),t("code",[e._v("timely")]),e._v(".")])]),e._v(" "),t("p",[e._v("The round "),t("code",[e._v("r*")]),e._v(" above defined will be, in most cases,\nthe round in which "),t("code",[e._v("v")]),e._v(" was originally proposed, and when "),t("code",[e._v("v.time")]),e._v(" was assigned,\nusing a "),t("code",[e._v("PROPOSE")]),e._v(" message with "),t("code",[e._v("POLRound = -1")]),e._v(".\nIn any case, at least one correct process must consider the proposal "),t("code",[e._v("timely")]),e._v(" at round "),t("code",[e._v("r*")]),e._v("\nto enable a valid "),t("code",[e._v("POL(v,r*)")]),e._v(" to be observed.")]),e._v(" "),t("h3",{attrs:{id:"derived-proof-of-locks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#derived-proof-of-locks"}},[e._v("#")]),e._v(" Derived Proof-of-Locks")]),e._v(" "),t("h4",{attrs:{id:"pbts-derived-pol-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pbts-derived-pol-1"}},[e._v("#")]),e._v(" "),t("strong",[e._v("[PBTS-DERIVED-POL.1]")])]),e._v(" "),t("p",[e._v("If")]),e._v(" "),t("ul",[t("li",[e._v("there is a valid "),t("code",[e._v("POL(v,r)")]),e._v(" for height "),t("code",[e._v("h")]),e._v(", and")]),e._v(" "),t("li",[t("code",[e._v("POL(v,r)")]),e._v(" contains a "),t("code",[e._v("PREVOTE")]),e._v(" message from at least one correct process,")])]),e._v(" "),t("p",[e._v("Then")]),e._v(" "),t("ul",[t("li",[e._v("there is a valid "),t("code",[e._v("POL(v,r*)")]),e._v(" for height "),t("code",[e._v("h")]),e._v(", with "),t("code",[e._v("r* <= r")]),e._v(", and")]),e._v(" "),t("li",[t("code",[e._v("POL(v,r*)")]),e._v(" contains a "),t("code",[e._v("PREVOTE")]),e._v(" message from at least one correct process, and")]),e._v(" "),t("li",[e._v("a correct process considered the proposal for "),t("code",[e._v("v")]),e._v(" "),t("code",[e._v("timely")]),e._v(" at round "),t("code",[e._v("r*")]),e._v(".")])]),e._v(" "),t("p",[e._v("The above relation derives from a recursion on the round number "),t("code",[e._v("r")]),e._v(".\nIt is trivially observed when "),t("code",[e._v("r = r*")]),e._v(", the base of the recursion,\nwhen a timely "),t("code",[e._v("POL(v,r*)")]),e._v(" is obtained.\nWe need to ensure that, once a timely "),t("code",[e._v("POL(v,r*)")]),e._v(" is obtained,\nit is possible to obtain a valid "),t("code",[e._v("POL(v,r)")]),e._v(" with "),t("code",[e._v("r > r*")]),e._v(",\nwithout the need of satisfying the "),t("code",[e._v("timely")]),e._v(" predicate (again) in round "),t("code",[e._v("r")]),e._v(".\nIn fact, since rounds are started in order, it is not likely that\na proposal time "),t("code",[e._v("v.time")]),e._v(", assigned at round "),t("code",[e._v("r*")]),e._v(",\nwill still be considered "),t("code",[e._v("timely")]),e._v(" when the round "),t("code",[e._v("r > r*")]),e._v(" is in progress.")]),e._v(" "),t("p",[e._v("In other words, the algorithm should ensure that once a "),t("code",[e._v("POL(v,r*)")]),e._v(" attests\nthat the proposal for "),t("code",[e._v("v")]),e._v(" is "),t("code",[e._v("timely")]),e._v(",\nfurther valid "),t("code",[e._v("POL(v,r)")]),e._v(" with "),t("code",[e._v("r > r*")]),e._v(" can be obtained,\neven though processes do not consider the proposal for "),t("code",[e._v("v")]),e._v(" "),t("code",[e._v("timely")]),e._v(" any longer.")]),e._v(" "),t("blockquote",[t("p",[e._v("This can be achieved if the proposer of round "),t("code",[e._v("r' > r*")]),e._v(" proposes "),t("code",[e._v("v")]),e._v(" in a "),t("code",[e._v("PROPOSE")]),e._v(" message\nwith "),t("code",[e._v("POLRound = r*")]),e._v(", and at least one correct processes is aware of a "),t("code",[e._v("POL(v,r*)")]),e._v(".\nFrom this point, if a valid "),t("code",[e._v("POL(v,r')")]),e._v(" is achieved, it can replace the adopted "),t("code",[e._v("POL(v,r*)")]),e._v(".")])]),e._v(" "),t("h3",{attrs:{id:"safety"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#safety"}},[e._v("#")]),e._v(" SAFETY")]),e._v(" "),t("p",[e._v("The safety of the algorithm requires a "),t("em",[e._v("timely")]),e._v(" proof-of-lock for a decided value,\neither directly evaluated by a correct process,\nor indirectly received through a derived proof-of-lock.")]),e._v(" "),t("h4",{attrs:{id:"pbts-consensus-time-valid-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pbts-consensus-time-valid-0"}},[e._v("#")]),e._v(" "),t("strong",[e._v("[PBTS-CONSENSUS-TIME-VALID.0]")])]),e._v(" "),t("p",[e._v("If")]),e._v(" "),t("ul",[t("li",[e._v("there is a valid commit "),t("code",[e._v("C")]),e._v(" for height "),t("code",[e._v("k")]),e._v(" and round "),t("code",[e._v("r")]),e._v(", and")]),e._v(" "),t("li",[t("code",[e._v("C")]),e._v(" contains a "),t("code",[e._v("PRECOMMIT")]),e._v(" message from at least one correct process")])]),e._v(" "),t("p",[e._v("Then, where "),t("code",[e._v("p")]),e._v(" is one such correct process:")]),e._v(" "),t("ul",[t("li",[e._v("since "),t("code",[e._v("p")]),e._v(" is correct, "),t("code",[e._v("p")]),e._v(" received a valid "),t("code",[e._v("POL(v,r)")]),e._v(", and")]),e._v(" "),t("li",[t("code",[e._v("POL(v,r)")]),e._v(" contains a "),t("code",[e._v("PREVOTE")]),e._v(" message from at least one correct process, and")]),e._v(" "),t("li",[t("code",[e._v("POL(v,r)")]),e._v(" is derived from a timely "),t("code",[e._v("POL(v,r*)")]),e._v(" with "),t("code",[e._v("r* <= r")]),e._v(", and")]),e._v(" "),t("li",[t("code",[e._v("POL(v,r*)")]),e._v(" contains a "),t("code",[e._v("PREVOTE")]),e._v(" message from at least one correct process, and")]),e._v(" "),t("li",[e._v("a correct process considered a proposal for "),t("code",[e._v("v")]),e._v(" "),t("code",[e._v("timely")]),e._v(" at round "),t("code",[e._v("r*")]),e._v(".")])]),e._v(" "),t("h3",{attrs:{id:"liveness"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#liveness"}},[e._v("#")]),e._v(" LIVENESS")]),e._v(" "),t("p",[e._v("In terms of liveness, we need to ensure that a proposal broadcast by a correct process\nwill be considered "),t("code",[e._v("timely")]),e._v(" by any correct process that is ready to accept that proposal.\nSo, if:")]),e._v(" "),t("ul",[t("li",[e._v("the proposer "),t("code",[e._v("p")]),e._v(" of a round "),t("code",[e._v("r")]),e._v(" is correct,")]),e._v(" "),t("li",[e._v("there is no "),t("code",[e._v("POL(v',r')")]),e._v(" for any value "),t("code",[e._v("v'")]),e._v(" and any round "),t("code",[e._v("r' < r")]),e._v(",")]),e._v(" "),t("li",[t("code",[e._v("p")]),e._v(" proposes a valid value "),t("code",[e._v("v")]),e._v(" and sets "),t("code",[e._v("v.time")]),e._v(" to the time it reads from its local clock,")])]),e._v(" "),t("p",[e._v("Then let "),t("code",[e._v("q")]),e._v(" be a correct process that receives "),t("code",[e._v("p")]),e._v("'s proposal, we have:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("q")]),e._v(" receives "),t("code",[e._v("p")]),e._v("'s proposal after its clock reads "),t("code",[e._v("v.time - PRECISION")]),e._v(", and")]),e._v(" "),t("li",[e._v("if "),t("code",[e._v("q")]),e._v(" is at or joins round "),t("code",[e._v("r")]),e._v(" while "),t("code",[e._v("p")]),e._v("'s proposal is being transmitted,\nthen "),t("code",[e._v("q")]),e._v(" receives "),t("code",[e._v("p")]),e._v("'s proposal before its clock reads "),t("code",[e._v("v.time + MSGDELAY + PRECISION")])])]),e._v(" "),t("blockquote",[t("p",[e._v("Note that, before "),t("code",[e._v("GST")]),e._v(", we cannot ensure that every correct process receives "),t("code",[e._v("p")]),e._v("'s proposals, nor that it does it while ready to accept a round "),t("code",[e._v("r")]),e._v(" proposal.")])]),e._v(" "),t("p",[e._v("A correct process "),t("code",[e._v("q")]),e._v(" as above defined must then consider "),t("code",[e._v("p")]),e._v("'s proposal "),t("code",[e._v("timely")]),e._v(".\nIt will then broadcast a "),t("code",[e._v("PREVOTE")]),e._v(" message for "),t("code",[e._v("v")]),e._v(" at round "),t("code",[e._v("r")]),e._v(",\nthus enabling, from the Time-Validity point of view, "),t("code",[e._v("v")]),e._v(" to be eventually decided.")]),e._v(" "),t("h4",{attrs:{id:"under-estimated-msgdelays"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#under-estimated-msgdelays"}},[e._v("#")]),e._v(" Under-estimated "),t("code",[e._v("MSGDELAY")]),e._v("s")]),e._v(" "),t("p",[e._v("The liveness assumptions of PBTS are conditioned by a conservative and clever\nchoice of the timing parameters, specially of "),t("code",[e._v("MSGDELAY")]),e._v(".\nIn fact, if the transmission delay for a message carrying a proposal is wrongly\nestimated, correct processes may never consider a valid proposal as "),t("code",[e._v("timely")]),e._v(".")]),e._v(" "),t("p",[e._v("To circumvent this liveness issue, which could result from a misconfiguration,\nwe assume that the "),t("code",[e._v("MSGDELAY")]),e._v(" parameter can be increased as rounds do not\nsucceed on deciding a value, possibly because no proposal is considered\n"),t("code",[e._v("timely")]),e._v(" by enough processes.\nThe precise behavior for this workaround is under "),t("a",{attrs:{href:"https://github.com/tendermint/spec/issues/371",target:"_blank",rel:"noopener noreferrer"}},[e._v("discussion"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("Back to "),t("RouterLink",{attrs:{to:"/spec/consensus/proposer-based-timestamp/"}},[e._v("main document")]),e._v(".")],1)])}),[],!1,null,null,null);o.default=r.exports}}]);