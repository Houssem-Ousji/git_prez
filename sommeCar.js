import json

def get_sum_of_prices(json_file):
    # Read the JSON file
    with open(json_file, 'r') as file:
        data = json.load(file)

    # Initialize the sum
    total_price = 0

    # Loop through each item in the JSON data and add the price to the sum
    for car in data:
        # Extract the numeric part of the price and convert it to an integer
        price_numeric = int(car["price"].replace(" ", "").replace("DT", ""))
        
        # Add the price to the total
        total_price += price_numeric

    return total_price

# Example usage:
json_file_path = "path/to/your/json/file.json"
total_prices = get_sum_of_prices(json_file_path)
print(f"Total sum of prices: {total_prices} DT")
