function MotorHonda (merk, cc, livery, ecu){
    this.merk = merk;
    this.cc = cc;
    this.livery = livery;
    this.ecu = ecu;
}

const Cb = new MotorHonda ("Cb", 180, "BlackBull", "BRT Forged Fiber");
console.log(Cb);
//b
const Zx25 = new MotorHonda ("Zx25", 249, "purple", "Kawasaki Genuine Parts");
console.log(Zx25);