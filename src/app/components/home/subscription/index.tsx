"use client";

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface StartupPlan {
  plan_bg_color: string
  text_color: string
  descp_color: string
  border_color: string
  plan_name: string
  plan_descp: string
  plan_price: string
  icon_img: string
  plan_feature: string[]
}

interface ApiResponse {
  startupPlanList: StartupPlan[]
}

function Subscription() {
  const [startupPlanList, setStartupPlanList] = useState<StartupPlan[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        setError(null)
        
        const res = await fetch('/api/page-data')
        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`)
        }

        const data: ApiResponse = await res.json()
        setStartupPlanList(data.startupPlanList || [])
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Failed to fetch data'
        console.error('Error fetching startup plans:', errorMessage)
        setError(errorMessage)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  if (isLoading) {
    return (
      <section id="pricing">
        <div className="2xl:py-20 py-11">
          <div className="container">
            <div className="text-center">
              <p>Loading pricing plans...</p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="pricing">
        <div className="2xl:py-20 py-11">
          <div className="container">
            <div className="text-center">
              <p className="text-red-500">Error: {error}</p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="pricing">
      <div className="2xl:py-20 py-11">
        <div className="container">
          <div className="flex flex-col gap-10 md:gap-20">
            <div className="max-w-25 text-center mx-auto">
              <h2>
                Pick the plan that fits your{' '}
                <span className="instrument-font italic font-normal dark:text-white/70">
                  start-up
                </span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 xxl:grid-cols-2 gap-6">
              {startupPlanList.map((plan, index) => (
                <div
                  className={`${plan.plan_bg_color} p-6 md:p-10 rounded-2xl`}
                  key={`${plan.plan_name}-${index}`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Plan Info */}
                    <div className="flex flex-col gap-12 md:pr-6">
                      <div className="flex flex-col gap-3">
                        <p className="py-2 px-4 bg-dark_black w-fit text-white rounded-full">
                          {plan.plan_name}
                        </p>
                        <p className={`text-${plan.descp_color}`}>
                          {plan.plan_descp}
                        </p>
                      </div>
                      
                      <div className="flex flex-col gap-3 md:gap-5">
                        <h2 className={`${plan.text_color} dark:${plan.text_color}`}>
                          {plan.plan_price}
                          <span className={`text-base text-${plan.descp_color} ml-1`}>
                            /project
                          </span>
                        </h2>
                        
                        <Link
                          href="/contact"
                          className="group text-dark_black font-medium bg-white rounded-full flex items-center gap-4 py-2 pl-5 pr-2 w-fit hover:shadow-lg transition-shadow duration-200"
                          aria-label={`Get started with ${plan.plan_name} plan`}
                        >
                          <span className="group-hover:translate-x-9 transform transition-transform duration-200 ease-in-out">
                           Let's Collaborate
                          </span>
                          <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="group-hover:-translate-x-36 transition-all duration-200 ease-in-out"
                            aria-hidden="true"
                          >
                            <rect width="32" height="32" rx="16" fill="#1B1D1E" />
                            <path
                              d="M11.832 11.3335H20.1654M20.1654 11.3335V19.6668M20.1654 11.3335L11.832 19.6668"
                              stroke="white"
                              strokeWidth="1.42857"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div className={`flex flex-col gap-4 md:pl-6 md:border-l ${plan.border_color}`}>
                      <p className={`${plan.text_color}`}>Features</p>
                      <ul className="flex flex-col gap-4">
                        {plan.plan_feature.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-3">
                            <Image
                              src={plan.icon_img}
                              alt=""
                              width={20}
                              height={20}
                              className="flex-shrink-0"
                            />
                            <p className={`${plan.text_color}`}>{feature}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Subscription