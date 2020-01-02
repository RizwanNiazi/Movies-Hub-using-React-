import Perf from 'react-addons-perf'; // ES6
var Perf = require('react-addons-perf'); // ES5 with npm

Perf.start()
// ...
Perf.stop()

Perf.getLastMeasurements()

Perf.printExclusive(measurements)

Perf.printInclusive(measurements)

Perf.printWasted(measurements)