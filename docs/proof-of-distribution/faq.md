---
title: Builders FAQ
description: Common questions about registering as a builder under Proof of Distribution.
---

## Eligibility

### Can I register multiple projects from the same wallet?

No. One wallet can hold one builder profile. If you operate multiple
distinct projects, register each from a different builder admin wallet.
They can share a treasury wallet if you want, since treasury is set
independently per profile.

### Do I need RON to register?

You need enough RON in the builder admin wallet to pay gas for the
activation transaction. Off-chain registration (project info, adding
contracts, verifying contracts) does not consume gas.

## Verification

### Why is deployer verification preferred?

A deployer signature is the only verification the portal can register
on-chain for you in the same transaction that activates your profile.
The other three methods produce valid verifications that prove control,
but Sky Mavis adds those contracts manually.

### My deployer key is in a CI secret. Can I still use deployer verification?

Yes. Use the manual signature flow: click `Verify manually` on the
contract card, copy the `cast wallet sign` command, run it on a machine
that can read the secret, paste the signature back, and submit. See
[Verify contract ownership](./verify) for the full walkthrough.

### My deployer key is on a hardware wallet (Ledger / Trezor). What now?

Either connect the hardware wallet through Ronin Wallet or MetaMask
and use the browser flow, or use the manual flow with
`cast wallet sign --ledger` (or `--trezor`).

### My contract was deployed by a factory. How do I verify it?

The deployer recovered on-chain will be the factory contract, not your
EOA. Deployer verification doesn't apply. Fall through to owner,
access-control, or Safe verification depending on your contract's
ownership pattern. If none of those work either, contact Sky Mavis in
the Builders Discord channel (see [Verify contract ownership](./verify)).

### What happens after I verify with owner, access-control, or Safe?

The verification is recorded on your profile after you sign. The
contract is then queued for Sky Mavis to add to your tracking list
on-chain; until that happens, the contract appears under
`Ready to register` with an `Awaiting registration` status. Budget a
few business days. Sky Mavis adds these only after your builder profile
is active.

### Can I re-verify a contract using a different method?

Yes. Verifications stack: a contract verified by `owner` can later be
verified by `deployer` if you regain access to the deployer key, and the
profile will record both. Re-verifying as deployer is the path to
self-registering an alternative-verified contract on-chain without
waiting on Sky Mavis.

## Activation

### Why does activation need a transaction at all?

Rewards only flow once your profile is on-chain. The activation
transaction records the profile, sets your treasury, and adds
deployer-verified contracts to your tracking list in one call.

### Can I activate without any contracts verified?

Yes. Activate with zero or with still-pending contracts and finish
verifying them afterwards. Sky Mavis only adds alternative-method
contracts to your tracking list once your profile is active, so
activating early is normal.

### Can I add more contracts after I've activated?

Yes. The post-activation dashboard supports adding and verifying new
contracts at any time. Deployer-verified contracts can be pushed
on-chain immediately by you with one transaction. Alternative-method
contracts are added by Sky Mavis.

### What happens if the activation transaction fails?

The portal surfaces the revert reason. Common causes are listed under
"Common errors" on the [Activate on-chain](./activate) page. The most
common is a deployer proof failing a pre-flight check, usually because
the on-chain deployer for a contract changed between verification and
activation. Re-verify the affected contract and retry.

## Management

### How do I change my admin wallet?

From the dashboard, open the three-dots menu in the Project panel and
click `Transfer admin…`. Submit the new address and sign in your
current admin wallet.

After the transaction confirms, the previous admin wallet is
permanently retired for this profile **and can never be a builder
admin under PoD again** (not for this profile, not for a new one).
Double-check the new address before signing; this is one-way.

### How do I change my treasury wallet?

From the dashboard, open the three-dots menu in the Project panel and
click `Change treasury…`. Paste the new address and sign. Treasury
changes are reversible (you can change again later) and do not affect
already-paid rewards.

### How are rewards paid?

In RON, to your treasury wallet, on a per-epoch cadence. The Builder
Status panel shows your accumulated claimable balance. Click `Claim`
to submit the claim transaction.

### Can I transfer my builder profile to another project?

Yes. Change the admin and treasury wallets; the profile's on-chain
identity carries over and project info is editable off-chain. Same
retirement rule applies: the previous admin wallet can never be a PoD
builder admin again (see [Manage your profile](./manage)).

## Troubleshooting

### The page says "Could not fetch deployer address" on a contract.

The portal's deployer recovery occasionally fails on contracts that
were deployed with unusual creation patterns or where the indexer
hasn't caught up. Click `Refresh Signers` on the affected card. If it
still fails after a couple of refreshes, post in the Builders Discord
channel with the contract address; Sky Mavis can backfill manually.

### My contract was deployer-verified but the activation dialog shows a red X next to it.

The deployer proof failed a pre-flight check at submission time.
Most common cause: the on-chain deployer for the contract differs from
the one captured during verification. Re-verify the contract using the
deployer it currently shows on-chain, then retry activation.
