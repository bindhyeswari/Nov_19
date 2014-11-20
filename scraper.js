
// an array to hold the company information
var companies = [];

// loop over all the tr elements:

// Access all the tr elements as a nodelist - an array like object
var trs = document.getElementsByTagName('tr');

// loop over all the tr elements, starting with the second element and skipping
// every alternate row
for (var i = 1, len = trs.length; i < len; i+=2) {
    // create a company object to hold the company information
    var company = {};
    var tr = trs[i];

    // access the name of the company
    company.name = tr.firstElementChild.textContent;
    company.symbol = tr.getElementsByTagName('h3')[0].textContent.trim();

    // push the company into the list of companies (array)
    companies.push(company);

    //todo: finish the code to list all companies
}

console.log(companies);