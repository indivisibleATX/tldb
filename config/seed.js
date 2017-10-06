
module.exports.seed = function () {
  console.info("Seeding database...");

  const COUNTIES = [
    {name: "Travis", seatCity: "Austin"},
    {name: "Denton", seatCity: "Denton"}
  ];

  console.info(":county...");
  COUNTIES.forEach((county) => {
    let c = County.create(county).exec((err, newRecord) => {
      if (err) {
        console.error("ERROR!", err);
        return;
      }
      county.id = newRecord.id;
      COUNTIES[county.name] = county;
      console.info(" - inserted: ", county.id, county.name);
    });
  });

  const LEGISLATORS = [
    {name: "Celia Israel", party: "Democrat", chamber: "House", district: "50", countyName: "Travis"},
    {name: "Dawnna Dukes", party: "Democrat", chamber: "House", district: "46", countyName: "Travis"},
    {name: "Tan Parker", party: "Republican", chamber: "House", district: "63", countyName: "Denton"}
  ];

  console.info(":legislator...");
  LEGISLATORS.forEach((legislator) => {
      let l = Legislator.create(legislator).exec((err, newLegislator) => {
        if (err) {
          console.error("ERROR!", err);
          return;
        }

        console.log(" - inserted: ", newLegislator.id, newLegislator.name);

        newLegislator.counties.add(COUNTIES[legislator.countyName]);
        let x = newLegislator.save();
      });
    }
  );
};
