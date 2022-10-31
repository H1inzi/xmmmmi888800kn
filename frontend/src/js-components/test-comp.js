function SPCGen(arr) {
  let SPCArray = [];
  for (let i = 0; i < arr.length; i += 5) {
      SPCArray.push(
      <div className="spc-items__row">
          {arr.slice(i, i + 5)}
      </div>
      )
  }
  console.log(SPCArray[0])
  return SPCArray
}