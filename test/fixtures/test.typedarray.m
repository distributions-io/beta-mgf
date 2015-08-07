alpha = 4
beta = 9
d = BetaDistribution[ alpha, beta ]

x = N[ Array[# &, 100, {-10, 10}] ]

y = N[ MomentGeneratingFunction[ d, x ] ]


Print[ "alpha:\n" ]
Print[ alpha ]
Print[ "beta:\n" ]
Print[ beta ]
Print[ "data:\n" ]
Print[ x ]
Print[ "expected:\n" ]
Print[ y ]
