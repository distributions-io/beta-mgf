alpha = 7
beta = 2
d = BetaDistribution[ alpha, beta ]

x = N[ { -5, -2.5, 0, 2.5, 5 } ]

y = N[ MomentGeneratingFunction[ d, x ] ]


Print[ "alpha:\n" ]
Print[ alpha ]
Print[ "beta:\n" ]
Print[ beta ]
Print[ "data:\n" ]
Print[ x ]
Print[ "expected:\n" ]
Print[ y ]
