alpha = 9
beta = 12
d = BetaDistribution[ alpha, beta ]

x = N[ Array[# &, 100, {-2, 2}] ]

y = N[ MomentGeneratingFunction[ d, x ] ]


Print[ "alpha:\n" ]
Print[ alpha ]
Print[ "beta:\n" ]
Print[ beta ]
Print[ "data:\n" ]
Print[ x ]
Print[ "expected:\n" ]
Print[ y ]
