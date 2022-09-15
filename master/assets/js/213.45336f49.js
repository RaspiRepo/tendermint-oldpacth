(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{787:function(e,t,a){"use strict";a.r(t);var n=a(1),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"synopsis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#synopsis"}},[e._v("#")]),e._v(" Synopsis")]),e._v(" "),a("p",[e._v("A TLA+ specification of a simplified Tendermint consensus, tuned for\nfork accountability. The simplifications are as follows:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("the procotol runs for one height, that is, one-shot consensus")])]),e._v(" "),a("li",[a("p",[e._v("this specification focuses on safety, so timeouts are modelled with\nwith non-determinism")])]),e._v(" "),a("li",[a("p",[e._v("the proposer function is non-determinstic, no fairness is assumed")])]),e._v(" "),a("li",[a("p",[e._v("the messages by the faulty processes are injected right in the initial states")])]),e._v(" "),a("li",[a("p",[e._v("every process has the voting power of 1")])]),e._v(" "),a("li",[a("p",[e._v("hashes are modelled as identity")])])]),e._v(" "),a("p",[e._v("Having the above assumptions in mind, the specification follows the pseudo-code\nof the Tendermint paper: "),a("a",{attrs:{href:"https://arxiv.org/abs/1807.04938",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://arxiv.org/abs/1807.04938"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Byzantine processes can demonstrate arbitrary behavior, including\nno communication. However, we have to show that under the collective evidence\ncollected by the correct processes, at least "),a("code",[e._v("f+1")]),e._v(" Byzantine processes demonstrate\none of the following behaviors:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Equivocation: a Byzantine process sends two different values\nin the same round.")])]),e._v(" "),a("li",[a("p",[e._v("Amnesia: a Byzantine process locks a value, although it has locked\nanother value in the past.")])])]),e._v(" "),a("h1",{attrs:{id:"tla-modules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tla-modules"}},[e._v("#")]),e._v(" TLA+ modules")]),e._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"TendermintAcc_004_draft.tla"}},[e._v("TendermintAcc_004_draft")]),e._v(" is the protocol\nspecification,")])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"TendermintAccInv_004_draft.tla"}},[e._v("TendermintAccInv_004_draft")]),e._v(" contains an\ninductive invariant for establishing the protocol safety as well as the\nforking cases,")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("MC_n<n>_f<f>")]),e._v(", e.g., "),a("a",{attrs:{href:"MC_n4_f1.tla"}},[e._v("MC_n4_f1")]),e._v(", contains fixed constants for\nmodel checking with the "),a("a",{attrs:{href:"https://github.com/informalsystems/apalache",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apalache model\nchecker"),a("OutboundLink")],1),e._v(",")])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"TendermintAccTrace_004_draft.tla"}},[e._v("TendermintAccTrace_004_draft")]),e._v(" shows how\nto restrict the execution space to a fixed sequence of actions (e.g., to\ninstantiate a counterexample),")])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"TendermintAccDebug_004_draft.tla"}},[e._v("TendermintAccDebug_004_draft")]),e._v(" contains\nthe useful definitions for debugging the protocol specification with TLC and\nApalache.")])])]),e._v(" "),a("h1",{attrs:{id:"reasoning-about-fork-scenarios"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reasoning-about-fork-scenarios"}},[e._v("#")]),e._v(" Reasoning about fork scenarios")]),e._v(" "),a("p",[e._v("The theorem statements can be found in\n"),a("a",{attrs:{href:"TendermintAccInv_004_draft.tla"}},[e._v("TendermintAccInv_004_draft.tla")]),e._v(".")]),e._v(" "),a("p",[e._v("First, we would like to show that "),a("code",[e._v("TypedInv")]),e._v(" is an inductive invariant.\nFormally, the statement looks as follows:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"tla",base64:"VEhFT1JFTSBUeXBlZEludklzSW5kdWN0aXZlID09CiAgICBcLyBGYXVsdHlRdW9ydW0KICAgIFwvL1wgSW5pdCA9Jmd0OyBUeXBlZEludgogICAgICAvXCBUeXBlZEludiAvXCBbTmV4dF1fdmFycyA9Jmd0OyBUeXBlZEludicK"}}),e._v(" "),a("p",[e._v("When over two-thirds of processes are faulty, "),a("code",[e._v("TypedInv")]),e._v(" is not inductive.\nHowever, there is no hope to repair the protocol in this case. We run\n"),a("a",{attrs:{href:"https://github.com/informalsystems/apalache",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apalache"),a("OutboundLink")],1),e._v(" to prove this theorem\nonly for fixed instances of 4 to 5 validators.  Apalache does not parse theorem\nstatements at the moment, so we ran Apalache using a shell script. To find a\nparameterized argument, one has to use a theorem prover, e.g., TLAPS.")]),e._v(" "),a("p",[e._v("Second, we would like to show that the invariant implies "),a("code",[e._v("Agreement")]),e._v(", that is,\nno fork, provided that less than one third of processes is faulty. By combining\nthis theorem with the previous theorem, we conclude that the protocol indeed\nsatisfies Agreement under the condition "),a("code",[e._v("LessThanThirdFaulty")]),e._v(".")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"tla",base64:"VEhFT1JFTSBBZ3JlZW1lbnRXaGVuTGVzc1RoYW5UaGlyZEZhdWx0eSA9PQogICAgTGVzc1RoYW5UaGlyZEZhdWx0eSAvXCBUeXBlZEludiA9Jmd0OyBBZ3JlZW1lbnQK"}}),e._v(" "),a("p",[e._v("Third, in the general case, we either have no fork, or two fork scenarios:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"tla",base64:"VEhFT1JFTSBBZ3JlZW1lbnRPckZvcmsgPT0KICAgIH5GYXVsdHlRdW9ydW0gL1wgVHlwZWRJbnYgPSZndDsgQWNjb3VudGFiaWxpdHkK"}}),e._v(" "),a("h1",{attrs:{id:"model-checking-results"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#model-checking-results"}},[e._v("#")]),e._v(" Model checking results")]),e._v(" "),a("p",[e._v("Check the report on "),a("RouterLink",{attrs:{to:"/spec/light-client/accountability/results/001indinv-apalache-report.html"}},[e._v("model checking with Apalache")]),e._v(".")],1),e._v(" "),a("p",[e._v("To run the model checking experiments, use the script:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"console",base64:"Li9ydW4uc2gK"}}),e._v(" "),a("p",[e._v("This script assumes that the apalache build is available in\n"),a("code",[e._v("~/devl/apalache-unstable")]),e._v(".")])],1)}),[],!1,null,null,null);t.default=s.exports}}]);