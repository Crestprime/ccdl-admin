 
  
  export const transformTextToNumbers = (data: any) => {
    // Define keys that should be numeric
    const numericKeys = [
      "bedrooms",
      "livingSpace",
      "kitchen",
      "bathroom",
      "squareFoot",
      "lotSize",
      "floors",
      "adminId",
      "yearOfConstruction",
      "condition",
      "shellFinishedPrice",
      "finishedPrice",
      "initalPaymentPercentage",
      "level1",
      "level2",
      "level3"
    ];
  
    // Create a copy of the data to avoid mutating the original
    const transformedData = { ...data };
  
    // Iterate over numeric keys and transform text to numbers
    numericKeys.forEach((key) => {
      const value = transformedData[key];
  
      // Check if value exists in the map or is a numeric string
      if (!isNaN(Number(value))) {
        transformedData[key] = Number(value);
      }
    });
  
    return transformedData;
  };
  
  export const transformPlotPricesToNumbers = (data: any) => {
    // Create a copy of the data to avoid mutating the original
    const transformedData = { ...data };
  
    if (Array.isArray(transformedData.plots)) {
      // Iterate over the plots array and update the price field
      transformedData.plots = transformedData.plots.map((plot: any) => {
        if (plot && typeof plot.price === "string" && !isNaN(Number(plot.price))) {
          return {
            ...plot,
            price: Number(plot.price), // Convert price to a number
          };
        }
        return plot; // Return unchanged if price is not a valid number
      });
    }
  
    return transformedData;
  };
  