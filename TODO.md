- [x] Inspect /api/admin/bookings implementation
- [x] Remove any dependency on Package.findById or populate('packageId') in admin bookings
- [x] Ensure admin bookings response is built from denormalized booking fields (packageName, packageImage, customer details, bookingStatus, etc.)
- [x] Add defensive error handling so legacy bookings with invalid packageId (slug/non-ObjectId) never crash the endpoint
- [ ] Ensure endpoint always returns HTTP 200 with valid bookings array even when some docs have bad packageId formats
- [ ] Keep auth/filters/sorting/pagination/response format unchanged
- [ ] Verify endpoint behavior by starting server and hitting /api/admin/bookings



