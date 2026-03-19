import { JetstreamSubscription } from "@atcute/jetstream"

// Only show records from known geo-metadata providers
const GEO_METADATA_PREFIXES = ["https://earth-search.aws.element84.com"]

export const startStream = (startTime) => {
  const subscription = new JetstreamSubscription({
    url: "wss://jetstream2.us-east.bsky.network",
    wantedCollections: ["cx.vmx.matadisco"],
    cursor: startTime,
  })
  console.log(`current stream cursor is at ${subscription.cursor}`)

  return subscription
}

export const consumeStream = async function* (subscription) {
  for await (const event of subscription) {
    // Record was created, updated, or deleted.
    if (event.kind === "commit") {
      const { operation } = event.commit

      if (operation === "create" || operation === "update") {
        const record = event.commit.record
        // Filter to records from known geo-metadata providers
        const isGeo =
          record.metadata &&
          GEO_METADATA_PREFIXES.some((prefix) =>
            record.metadata.startsWith(prefix),
          )
        if (isGeo) {
          yield record
        }
      }
    }
  }
}
