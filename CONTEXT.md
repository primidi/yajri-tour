# Yajri Tour Domain Context

The core domain model and ubiquitous language for Yajri Tour and Travel, a private tour operator in East Java offering curated "relaxed pace" trips.

## Language

**Itinerary**:
A distinct, bookable sequence of travel. Classified broadly into *Adventure Itineraries* (e.g., the 4D3N Bromo-Ijen flagship route done at a relaxed pace) and *Leisure Itineraries* (e.g., Batu/Malang).
_Avoid_: Tour, Route, Package

**Destination**:
A specific location or stop that makes up an Itinerary. Characterized by its `Audience` (Local or Foreign Travelers) and `Vibe` (e.g., Family Leisure, Nature Trekking). 
_Avoid_: Place, Spot

**Booking**:
A reservation or intent to purchase a private tour by a customer.
_Avoid_: Order, Transaction

**Guests**:
The distinct group of people traveling together under a single Booking. Translates cleanly to *Tamu*.
_Avoid_: Party, Pax, Rombongan, Group

**Contextual Handoff**:
The stateless transfer of a prospective guest from the website to WhatsApp. The handoff passes the context of the clicked section (e.g., "Interested in 4D3N") without attempting to capture form state (like Guest count) on-site.
_Avoid_: Checkout, Lead Capture

**Foreign Traveler**:
An international tourist researching destinations. They require geographic context and sensory storytelling before practical logistics.
_Avoid_: Bule, International tourist

**Domestic Traveler**:
A local or national tourist who already knows the geographic context of East Java. They value direct, practical propositions and ease of booking.
_Avoid_: Local tourist, Warga Lokal
