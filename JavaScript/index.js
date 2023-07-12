FREE_WARNING = 'Free shipping only applies to single customer orders'
BANNED_WARNIN = 'Unfortunately we do not ship to your country of residence'
NONE_SELECTED = '0'
let customers = '1'
const area = "RSA"
let currency = null

if (area === "RSA") { 
	shipping = 400 
	currency = 'R' 
} else if (area = "NAM"){
	shipping = 600
	currency = '$'
} else if (area = "NK"){console.log(BANNED_WARNING)}
	else
	shipping = 800


shoes = 300 * 1
toys = 100 * 5
shirts = 150 * 1
batteries = 35 * 2
pens = 5 * 1 

shipping = null

if (shoes + batteries + pens + shirts > 1000) {
	if (area = NAM && customers < 2) {
			if (area = "RSA")
		    shipping = 0 || calcShipping
		}
	}

if ((shipping = 0) && (customers !== 1)) {
	console.log(WARNING)
 }

area == 'NK' ? console.log("WARNING") : console.log("price", currency, shoes + batteries + pens + shirts + shipping)

if (area =='NK')
	{console.log("WARNING")}
else console.log("price", currency, shoes + batteries + pens + shirts + shipping)
