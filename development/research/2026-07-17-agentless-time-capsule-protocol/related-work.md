# Related Work

| System | Useful property | Why it is not the primary design |
|---|---|---|
| drand tlock | Future threshold signature supplies public decryption capability. | Selected primitive; network continuity and 5–10-year boundary remain. |
| Arweave | One-time-funded replicated storage. | Selected storage candidate; permanence remains an economic/protocol assumption. |
| Ethereum contract | Public state and time conditions. | Needs an external transaction and gas for state change. |
| Chainlink Automation | Decentralized scheduled transaction execution. | Requires registered, funded upkeep and is unnecessary for client-side tlock opening. |
| Filecoin | Verifiable storage deals. | Renewal and repair are ongoing activities. |
| Lit Protocol | Threshold encryption with programmable access control. | More policy/capacity complexity than a fixed public time horizon. |
| IPFS | Content-addressed distribution. | Availability still depends on pinning; useful only as an additional mirror. |
| Human threshold custody | Social recovery and migration judgment. | Requires the future agents the user wants to remove. |
| Time-lock puzzles | No external future beacon. | Decade-scale hardware progress makes wall-clock timing hard to calibrate; not selected. |

## Potential hybrid

A 3-of-5 steward package can remain as an emergency migration path while drand and
Arweave provide the normal opening path. This is more resilient but is not strictly
agentless. It should be named a hybrid rather than quietly presented as the same
architecture.

