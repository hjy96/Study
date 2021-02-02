class Cs:
	@staticmethod
	def static_method ( ):
		print( "Static method" )
	@classmethod
	def class_method ( cls ):
		return print( "Class method" )
	def intance_method ( self ):
		return print( "Instance method" )

i = Cs()
Cs.static_method()
Cs.class_method()
i.intance_method()
