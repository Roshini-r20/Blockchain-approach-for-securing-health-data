'use strict';

class Insurance {
  /**
   *
   * Insurance
   *
   * Constructor for a Insurance object.    
   *  
   * @param args.licenseId - the license number of the Insurance
   * @param args.name - name of Insurance
   * @param args.age - age of Insurance
   * @param args.phNo - phone number of Insurance
   * @returns - insurance object
   */
  constructor(insuranceId, licenseId, name, age, phNo) {

      this.insuranceId =  insuranceId;
      this.licenseId = licenseId;
      this.name = name;
      this.age = age;
      this.phNo = phNo;
      this.type = 'insurance';

      return this;

    } 

  }



module.exports = Insurance;