# Models

## Species
 - common_name (String)
 - scientific_name (String)

## Plant
 - owner (-> Person)
 - display_name (String)
 - species (-> Species)

## ActionType
 - name (check, water)

## Event
 - action (-> ActionType)
 - date (DateTime)