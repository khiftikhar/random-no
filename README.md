# random-no
Random values for developers working with Norwegian projects. 

### Warning
There is no assurance that values generated does not belong to any one

#### Run it as command line tool.
It's probably sometimes a good idea to run this app as a command-line utility. Just install it with -g switch

````bash
sudo npm install -g
````
 
The utility provides currently following random values, 

- ssn
- kontonummer
- orgnr
- kid
- kort 

##### 1. ssn - Social Security Number
You can generate random ssn with this utility.  You have to choice to provide the date of birth in 
format *DDMMYYY* e.g. 11121980 and utility will keep the first 6 digits which represent the dob you provided.

For example

```bash
$ random-no ssn 11011981
11018147167
```

If you don't provide any *dob*, it will generate a completely random ssn.
 
#### 2. kontonummer - Bank Account Number
You can generate random bank account numbers as well just use

```bash
$ random-no kontonummer
```

#### 3. orgnr - Organization Number
You can generate an organization number by simply running

```bash
$ random-no orgnr
```

#### 4. kid - kundeidentifikasjon (Customer Identification)
You can generate a kid number by simply running

```bash
$ random-no kid
```

You can also specify the length of the number simply type

```bash
$ random-no kid 20
```

and you will get a kid number 20 digit long

##### 5. kort - Credit Card Numbers
You can generate credit card number by simply running 

```bash
$ random-no kort "cardType"
```

where **cardType** can be any of the following available choices 
- visa 
- mc (Master Card)
- amex (American Express)
