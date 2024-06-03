import PriceCard from "@/components/landing-components/price-card"
import PriceButton from "@/components/landing-components/price-button"
import { getPlanDataData } from "@/actions/get-plan-data"

const Price = async ({ user }) => {
  const data = await getPlanDataData()
  const formattedData = data?.data?.map((item) => ({
    id: item.id,
    planName: item.attributes?.planName,
    price: item.attributes?.price,
    plan_features: item.attributes?.plan_features?.data.map((nestedItem) => ({
      id: nestedItem.id,
      featureName: nestedItem.attributes?.featureName,
    })),
  }))

  return (
    <section id="pricing" className="bg-color-primary-light">
      <div className="container py-20">
        <div className="text-center m-auto mb-20 md:w-1/2">
          <h4 className="font-bold text-color-secondary mb-4">Pricing</h4>
          <h1 className="title">Get In Reasonable Price</h1>

          {/* <!-- Rounded switch  --> */}
          <div className="mt-5 flex items-center justify-center gap-4">
            <p>Bill Monthly</p>
            <PriceButton />
            <p>Bill Anually</p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {formattedData.map((item) => (
            <PriceCard
              key={item.id}
              planId={item.id}
              planName={item.planName}
              price={item.price}
              planFeature={item.plan_features}
              user={user}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Price
