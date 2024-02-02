import json

def get_sum_of_prices(json_file):

    with open(json_file, 'r') as file:
        data = json.load(file)

    
    total_price = 0

    for car in data:
        price_numeric = int(car["price"].replace(" ", "").replace("DT", ""))
        
        total_price += price_numeric

    return total_price

    //This is just a sample change for the purpose of creating a tag
    //Added a comment to demonstrate a change

json_file_path = "path/to/your/json/file.json"
total_prices = get_sum_of_prices(json_file_path)
print(f"Total sum of prices: {total_prices} DT")
