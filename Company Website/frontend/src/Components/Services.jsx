import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Free Version Control Services.",
    description:
      "We provide a hassle-free and simple version control system along with its management so you can focus on what really matters - the client!",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Private and Secure.",
    description: "Your Privacy and Security? Our Guarantee!",
    icon: LockClosedIcon,
  },
  {
    name: "Storage Plans.",
    description:
      "Store your data in one of our cloud servers according to your need and let us worry about its management.",
    icon: ServerIcon,
  },
];

export default function Services() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Get Your Own Website in Two Weeks.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                It's a fast-paced world and we know time is money. So let's get
                your business online ASAP!
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
